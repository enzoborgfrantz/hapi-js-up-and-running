import mongoose, { Schema, model } from 'mongoose';

const userSchema = Schema({
  username: String,
  password: String,
});

const User = model('User', userSchema, 'users'); // model name, schema, collection

export { User };
