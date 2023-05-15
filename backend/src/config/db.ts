import * as dotenv from 'dotenv';
dotenv.config();
import * as dynamoose from 'dynamoose';
import colors from 'colors';
import Book from '../models/book';

const awsAccessKeyId: string = process.env.AWS_ACCESS_KEY_ID ?? '';
const awsSecretAccessKey: string = process.env.AWS_SECRET_ACCESS_KEY ?? '';
const awsRegion: string = process.env.AWS_REGION ?? '';
const sessionToken: string = process.env.AWS_SESSION_TOKEN ?? '';
const bookStoreTableName: string = process.env.BOOK_STORE_TABLE_NAME ?? '';

const connectDB = async () => {
  const ddb = new dynamoose.aws.ddb.DynamoDB({
    credentials: {
      accessKeyId: awsAccessKeyId,
      secretAccessKey: awsSecretAccessKey,
      sessionToken: sessionToken,
    },
    region: awsRegion,
  });
  dynamoose.aws.ddb.set(ddb);

  const Table = new dynamoose.Table(bookStoreTableName, [Book], {
    create: false,
    initialize: false,
  });

  return await Table.initialize().then(
    async () => {
      console.log(colors.yellow('Successfully initialized DynamoDB table'));
      return await Promise.resolve();
    },
    async (error) => {
      return await Promise.reject(error);
    }
  );
};
export default connectDB;
