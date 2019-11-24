import { generateAmp, Page } from '../../src/lib';
import { parsedBlogPost } from '../../__testData__';

it('generates an HTML file', () => {
  const amp = generateAmp(new Page(parsedBlogPost));
  expect(amp).toContain(`<!doctype html>`);
});
