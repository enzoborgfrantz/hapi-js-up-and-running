import { connect, connection } from 'mongoose';

const LOCAL_DB_URL = 'mongodb://localhost/local';

const connectToDatabase = () => {
  connect(LOCAL_DB_URL);
  connection.on('error', () => console.log('connection error'));
  connection.once('open', () => console.log('connected to db'));
}

export { connectToDatabase };
