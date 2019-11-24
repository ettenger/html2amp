import { APIGatewayProxyHandler } from 'aws-lambda';
import Mercury from '@postlight/mercury-parser';
import 'source-map-support/register';
import { generateAmp, Page } from './lib';

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
}

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
}