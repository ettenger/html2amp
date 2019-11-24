import * as cheerio from 'cheerio';

export class Page {
  title: string;
  author: string;
  date_published: string;
  date_published_formatted: string;
  lead_image_url: string;
  lead_image_caption: string;
  content: string;
  $: CheerioStatic;
  url: string;
  domain: string;
  excerpt: string;

  constructor(parsedPage) {
    this.title = parsedPage.title;
    this.author = parsedPage.author;
    this.date_published = parsedPage.date_published;
    this.lead_image_url = parsedPage.lead_image_url;
    this.content = parsedPage.content;
    this.url = parsedPage.url;
    this.domain = parsedPage.domain;
    this.excerpt = parsedPage.excerpt;

    this.formatPublicationDate();

    // Parse the content with Cheerio
    try {
      this.$ = cheerio.load(this.content);
      const leadImage = this.findLeadImage();
      if (leadImage) {
        this.setLeadImageCaption(leadImage);
      }
    } catch (e) {
      console.log(e);
    }
  }

  private formatPublicationDate() {
    try {
      const pubDate = new Date(this.date_published);
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      this.date_published_formatted = pubDate.toLocaleDateString('en-US', dateOptions);
    } catch (e) {
      console.log(e);
    }
  }

  private setLeadImageCaption(leadImage: Cheerio) {
    // console.log(leadImage.attr('src'))
    let parentElem = leadImage.parent();
    // If parent of the image is a link, move one level up
    if (parentElem.is('a')) {
      parentElem = parentElem.parent();
    }

    this.lead_image_caption = parentElem.children().last().html();
  }

  private findLeadImage(): Cheerio {
    let leadImage;
    const images = this.$('img');
    const firstImage = images.first();
    if (this.doesImageMatchLead(firstImage)) {
      leadImage = firstImage;
    } else {
      const secondImage = images.eq(1);
      if (secondImage && this.doesImageMatchLead(secondImage)) {
        leadImage = secondImage;
      }
    }
    return leadImage;
  }

  private doesImageMatchLead(elem: Cheerio): boolean {
    const elemSrc = elem.attr('src');
    const elemSrcset = elem.attr('srcset') || '';
    const url = this.lead_image_url;
    
    if (elemSrc === url || elemSrcset.indexOf(url) > -1) {
      return true;
    } else {
      const fuzzyUrl = this.getFuzzyUrl(url);
      return elemSrc === fuzzyUrl || elemSrcset.indexOf(fuzzyUrl) > -1;
    }
  }

  private getFuzzyUrl(url: string) {
    // For some reason WP is adding an extra digit to the lead image url.
    // Let's remove it
    const urlArr = url.split('.');
    const i = urlArr.length - 2;
    const fileName = urlArr[i];
    urlArr[i] = fileName.slice(0, -1);
    return urlArr.join('.');
  }

}
