import * as request from 'request-promise';
import * as amphtmlValidator from 'amphtml-validator';

export const validateAmpPage = async (ampUrl: string) => {
  const ampHtml = await request(ampUrl);
  const validator = await amphtmlValidator.getInstance();

  var result = validator.validateString(ampHtml);
  
  return result;
};

export const formatValidationResultsAsHtml = (validationResults: any): string => {
  return `
  <!DOCTYPE html>
  <html>
    <body>
      <h1 style="color: ${validationResults.status === 'FAIL' ? 'red' : 'green'};">
        ${validationResults.status}
      </h1>
      <ul>
      ${validationResults.errors.map(err => `
        <li style="color: ${err.severity === 'ERROR' ? 'red' : 'orange'};">
          ${err.message}<br>
          <span style="text-decoration: underline;">${err.line}:${err.col}</span> (${err.specUrl})
        </li>`)}
      </ul>
    </body>
  </html>
  `;
};
