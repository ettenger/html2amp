import { APIGatewayProxyHandler } from 'aws-lambda';
import Mercury from '@postlight/mercury-parser';
import 'source-map-support/register';
import { generateAmp, Page, validateAmpPage, formatValidationResultsAsHtml } from './lib';

export const amp: APIGatewayProxyHandler = async (event) => {
  const params = event.queryStringParameters;
  if (!params || !params.url) {
    return {
      statusCode: 400,
      body: 'Missing url'
    };
  }

  try {
    const parsedPage = await Mercury.parse(params.url);
    const page = new Page(parsedPage);
    const ampPage = generateAmp(page);

    return {
      statusCode: 200,
      body: ampPage,
      headers: {
        'Content-Type': 'text/html'
      }
    };

  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      body: 'Error'
    };
  }
};

export const parse: APIGatewayProxyHandler = async (event) => {
  const params = event.queryStringParameters;
  if (!params || !params.url) {
    return {
      statusCode: 400,
      body: 'Missing url'
    };
  }

  try {
    const parsedPage = await Mercury.parse(params.url);

    return {
      statusCode: 200,
      body: JSON.stringify(parsedPage)
    };

  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      body: 'Error parsing page'
    };
  }
};

export const validate: APIGatewayProxyHandler = async (event) => {
  const params = event.queryStringParameters;
  if (!params || !params.url) {
    return {
      statusCode: 400,
      body: 'Missing url'
    };
  }

  let responseType = 'application/json';
  const accept = event.headers && (event.headers.accept || event.headers.Accept);
  if (accept && accept.indexOf('text/html') > -1) {
    responseType = 'text/html';
  }

  try {
    const results = await validateAmpPage(params.url);
    let body: string;
    if (responseType === 'text/html') {
      body = formatValidationResultsAsHtml(results);
    } else {
      body = JSON.stringify(results);
    }

    return {
      statusCode: 200,
      body,
      headers: {
        'Content-Type': responseType
      }
    };

  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      body: 'Error'
    };
  }
};
