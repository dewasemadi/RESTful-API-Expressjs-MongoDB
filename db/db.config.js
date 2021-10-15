import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const BASE_URL = `${process.env.DB_HOST}/${process.env.DB_NAME}`;

const dbConnection = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return await mongoose
    .connect(BASE_URL, options)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
      throw new error();
    });
};

export default dbConnection;
