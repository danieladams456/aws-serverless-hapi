export const handler: AWSLambda.Handler<AWSLambda.APIGatewayProxyEvent, AWSLambda.APIGatewayProxyResult> =
  async (event, context, callback) => {
    const res: AWSLambda.APIGatewayProxyResult = {
      body: 'hi',
      statusCode: 200,
      headers: {}
    };
    return res;
  }
