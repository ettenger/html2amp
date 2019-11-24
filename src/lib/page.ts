export class Page {
  title: string;
  author: string;
  date_published: string;
  lead_image_url: string;
  content: string;
  url: string;
  domain: string;
  excerpt: string;
  date_published_formatted: string;

  constructor(parsedPage) {
    this.title = parsedPage.title;
    this.author = parsedPage.author;
    this.date_published = parsedPage.date_published;
    this.lead_image_url = parsedPage.lead_image_url;
    this.content = parsedPage.content;
    this.url = parsedPage.url;
    this.domain = parsedPage.domain;
    this.excerpt = parsedPage.excerpt;

    try {
      const pubDate = new Date(this.date_published);
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      this.date_published_formatted = pubDate.toLocaleDateString('en-US', dateOptions);
    } catch (e) {
      console.log(e);
    }
  }

}
