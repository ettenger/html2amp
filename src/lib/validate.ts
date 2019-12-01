import * as request from 'request-promise';
import * as amphtmlValidator from 'amphtml-validator';

export const validateAmpPage = async (ampUrl: string) => {
  const ampHtml = await request(ampUrl);
  const validator = await amphtmlValidator.getInstance();

  var result = validator.validateString(ampHtml);
  
  return result;
};
