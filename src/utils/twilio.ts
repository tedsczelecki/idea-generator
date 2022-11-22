import humps from 'humps';
import { Message } from '../types/Messages';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

export const client = require('twilio')(accountSid, authToken);

export const getMessageMedia = async (messageId: string) => {
  const messageData = await client.messages(messageId).fetch();
  const { subresourceUris } = humps.camelizeKeys(messageData) as Message
  console.log(JSON.stringify(messageData, null, 2));
  console.log(subresourceUris );
}
