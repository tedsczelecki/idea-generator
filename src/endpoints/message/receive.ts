import { APIGatewayProxyEvent } from 'aws-lambda';
import { IncomingMessage, Message } from '../../types/Messages';
import humps from 'humps';
import { put } from '../../utils/db';
import { TEXT_MESSAGE_TRANSCRIPTS } from '../../constants';
import { v4 as uuid } from 'uuid';

export const handler = async (event: APIGatewayProxyEvent) => {
  console.log(JSON.stringify(event, null, 2));
  /*
    Get Query params from url
    event: APIGatewayProxyEvent
    ===========

  */

  const {
    body: message,
    from,
    messageSid,
    numMedia,
  } = humps.camelizeKeys(event.queryStringParameters) as IncomingMessage;

  const data = await put({
    tableName: TEXT_MESSAGE_TRANSCRIPTS,
    item: {
      id: uuid(),
      timestamp: new Date().getTime(),
      from,
      message,
      messageSid,
      numMedia,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
