import app from './app';
import mongoose from 'mongoose';
import config from './config';
require('colors');

async function main() {
  try {
    await mongoose.connect(config.dataBase_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`.red.bold);
    });
  } catch (error) {
    console.log('Main server down', error);
  }
}

main();
