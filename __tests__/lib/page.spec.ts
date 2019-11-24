import { Page } from '../../src/lib';
import { parsedBlogPost } from '../../__testData__';

it('formats the published date nicely', () => {
  const page = new Page(parsedBlogPost);
  expect(page.date_published_formatted).toBe('April 22, 2013');
});

it('can get the caption from the lead image', () => {
  const page = new Page(parsedBlogPost);
  expect(page.lead_image_caption).toBe('A lineup of Clowns waiting to drive their kids a few blocks home from school, on a beautiful Hawaiian afternoon during my vacation (January 2013).');
});