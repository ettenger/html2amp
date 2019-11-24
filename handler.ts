import { APIGatewayProxyHandler } from 'aws-lambda';
import Mercury from '@postlight/mercury-parser';
import 'source-map-support/register';

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
