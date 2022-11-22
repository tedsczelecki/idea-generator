export type IncomingMessage = {
  accountsSid: string;
  apiVersion: string;
  body: string;
  from: string;
  fromCity: string;
  fromCountry: string;
  fromState: string;
  fromZip: string;
  messageSid: string;
  messagingServiceSid: string;
  numMedia: string;
  numSegments: string;
  referralNumMedia: string;
  smsMessageSid: string;
  smsSid: string;
  smsStatus: string;
  to: string;
  toCity: string;
  toCountry: string;
  toState: string;
  toZip: string;
}

export type Message = {
  accountId: string;
  apiVersion: string;
  body: string;
  dateCreated: string;
  dateSent: string;
  dateUpdated: string;
  direction: string;
  errorCode: number;
  errorMessage: string;
  from: string;
  messagingServiceSid: string;
  numMedia: string;
  numSegments: string;
  price: string;
  priceUnit: string;
  sid: string;
  status: string;
  subresourceUris: MessageSubresourceUris;
  to: string;
  uri: string;
}

export type MessageSubresourceUris = {
  media: string;
  feedback: string;
}