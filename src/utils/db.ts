import AWS from 'aws-sdk';
import { REGION } from '../constants';

export const docClient = new AWS.DynamoDB.DocumentClient({
  region: REGION,
  apiVersion: 'latest',
});

type DatabaseArgs = {
  tableName: string;
  item: Record<string, string | number | boolean>;
};

export const put = async ({ tableName, item }: DatabaseArgs) => {
  try {
    const data = await docClient
      .put({
        TableName: tableName,
        Item: item,
      })
      .promise();
    return data;
  } catch (err) {
    throw new Error(err as string);
  }
};
