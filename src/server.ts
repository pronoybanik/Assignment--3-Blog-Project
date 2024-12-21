import app from './app';
import mongoose from 'mongoose';
require('colors');

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`.red.bold);
    });
  } catch (error) {
    console.log('Main server down', error);
  }
}

main();
