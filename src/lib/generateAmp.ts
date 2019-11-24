import { Page } from './page';

export function generateAmp(page: Page) {
  return `
  <!doctype html>
  <html ⚡>
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>${page.title}</title>
    <link rel="canonical" href="${page.url}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <link
      href="https://fonts.googleapis.com/css?family=Merriweather:400,400italic,700,700italic|Roboto:400,700|Roboto+Slab:700"
      rel="stylesheet" type="text/css">
    <style amp-custom>
      body {
        background-color: #f0f0f0;
        color: #3f3a2d;
        direction: ltr
      }

      a {
        color: #2191f4;
        text-decoration: none;
        border-bottom: 1px solid #d0dae4
      }

      p {
        margin: .75em 0
      }

      .nowrap {
        white-space: nowrap
      }

      .hg-article-container {
        font-family: Merriweather, sans-serif;
        line-height: 1.1667;
        margin: 0 auto;
        overflow-x: hidden
      }

      .hg-article-body {
        font-size: 15px;
        line-height: 1.9
      }

      .hg-brand-header {
        background: #ebebeb;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-align: left;
        padding-left: 15px
      }

      .hg-brand-header a {
        text-decoration: none;
        border: none;
        display: flex;
        align-items: center;
        height: 40px;
        font-family: Roboto, Helvetica, sans-serif;
        font-weight: 600;
        color: #3f3a2d;
        font-size: 14px
      }

      .hg-brand-header amp-img {
        border: none;
        height: 20px;
        width: 200px;
        margin-right: 10px
      }

      .hg-brand-header-name {
        height: 40px;
        margin-top: 2px
      }

      .hg-content-container {
        padding: 15px;
        background-color: #f8f8f8
      }

      .hg-title {
        font-family: 'Roboto Slab', Georgia, serif;
        font-size: 24px;
        margin-top: 10px;
        margin-bottom: 16px;
        line-height: 28px
      }

      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: Roboto, Helvetica, sans-serif;
        color: #555;
        margin-top: 20px;
        font-size: 18px;
        line-height: 24px
      }

      .hg-article-body amp-img,
      header amp-img {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee
      }

      .hg-lead-image {
        margin: -15px -15px 0 -15px;
        border: none
      }

      .hg-byline,
      .hg-pubdate {
        display: block;
        font-size: 12px;
        font-weight: 700;
        color: #999;
        margin-bottom: 5px
      }

      .hg-social-logo-block {
        margin-top: 15px
      }

      .hg-social-logo-item {
        display: inline-block;
        width: 45px;
        height: 25px;
        vertical-align: middle;
        margin-right: 6px;
        border-radius: 4px
      }

      .hg-twitter-logo-wrapper {
        background-color: #55acee
      }

      .hg-twitter-logo-img {
        margin: 0 10px
      }

      .hg-facebook-logo-wrapper {
        background-color: #3b5998
      }

      .hg-facebook-logo-img {
        margin: 4px 14px 0 14px
      }

      .hg-pinterest-logo-wrapper {
        background-color: #cb2027
      }

      .hg-pinterest-logo-img {
        margin: 5px 0 0 14px
      }

      .hg-email-logo-wrapper {
        background-color: #7a7a7a
      }

      .hg-email-logo-img {
        margin: 5px 16px 0 16px
      }

      hr.hg-body-text-divider {
        border: 0;
        height: 0;
        border-top: 1px solid rgba(0, 0, 0, .2);
        border-bottom: 1px solid rgba(255, 255, 255, .5)
      }

      figure {
        margin: 0
      }

      figcaption {
        font-family: Roboto, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 11px;
        line-height: 16px;
        margin-top: 4px;
        color: #999
      }

      blockquote {
        border-left: 2px solid #ccc;
        color: #777;
        font-size: 90%;
        margin: 10px 5px 10px 10px;
        padding-left: 20px
      }

      .powered-by {
        border-top: 1px solid #ddd;
        margin: 15px -15px -15px -15px;
        padding: 10px 15px;
        font-family: Roboto, Helvetica, sans-serif;
        font-size: 12px
      }

      .powered-by a {
        display: table;
        border: none;
        color: #ababab
      }

      .powered-by-logo,
      .powered-by-text {
        display: table-cell;
        vertical-align: middle
      }

      .powered-by-text {
        padding: 0 10px
      }
    </style>
    <style amp-boilerplate>
      body {
        -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        animation: -amp-start 8s steps(1, end) 0s 1 normal both
      }

      @-webkit-keyframes -amp-start {
        from {
          visibility: hidden
        }

        to {
          visibility: visible
        }
      }

      @-moz-keyframes -amp-start {
        from {
          visibility: hidden
        }

        to {
          visibility: visible
        }
      }

      @-ms-keyframes -amp-start {
        from {
          visibility: hidden
        }

        to {
          visibility: visible
        }
      }

      @-o-keyframes -amp-start {
        from {
          visibility: hidden
        }

        to {
          visibility: visible
        }
      }

      @keyframes -amp-start {
        from {
          visibility: hidden
        }

        to {
          visibility: visible
        }
      }
    </style><noscript>
      <style amp-boilerplate>
        body {
          -webkit-animation: none;
          -moz-animation: none;
          -ms-animation: none;
          animation: none
        }
      </style>
    </noscript>
    <script
      type="application/ld+json">{
        "@context":"http://schema.org",
        "@type":"NewsArticle",
        "mainEntityOfPage":
          {
            "@type":"WebPage",
            "@id":"${page.url}"
          },
          "headline":"${page.title}",
          "datePublished":"${page.date_published}",
          "dateModified":"${page.date_published}",
          "author":{"@type":"Person","name":"${null}"},
          "publisher":{
            "@type":"Organization",
            "name":"${null}",
            "logo":{"@type":"ImageObject","url":"${null}","width":600,"height":60}
          },
          "image":{"@type":"ImageObject","url":"${page.lead_image_url}","width":696,"height":462}
        }
      </script>
  </head>

  <body>
    <main class="hg-article-container" role="main">
      <!-- <header>
        <div class="hg-brand-header"><a href="${page.domain}">
            <amp-img alt="${page.domain}
              src="${page.domain}/favicon.ico"
              class="hg-brand-header-logo" width="26" height="26" layout="fixed"></amp-img>
            <div class="hg-brand-header-name">${null}</div>
          </a></div>
      </header> -->
      <article class="hg-content-container">
        <div>
          <header>
            <amp-img alt="${page.lead_image_caption}" src="${page.lead_image_url}"
              width="1600" height="1064" layout="responsive" class="hg-lead-image"></amp-img>
            <h1 class="hg-title">${page.title}</h1><time class="hg-pubdate"
              datetime="${page.date_published}">${page.date_published_formatted}</time>
          </header>
          <div class="hg-article-body">
            ${page.content_without_lead_image}
          </div>
        </div>
      </article>
    </main>
  </body>
  </html>
`;
}
