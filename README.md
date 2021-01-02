## How to run this project

Create `dev.js` file in `server/config/dev.js` with content of:

```javascript
module.exports = {
  DB_URI: "your_mongo_connection_string", //Get it here: https://www.mongodb.com/cloud/atlas,
  JWT_SECRET: "some_unique value", //e.g 'hdgbcdnhmdn'
};
```

In base folder of project run `npm install` and then `npm run start-dev` to startup dev server
And run `npm start` to start up the api/backend server

## How to populate DB with default data

In case `dev.js` file is created you can run in `server` folder `node fakeDB/cleanDB.js` command to populate database with default data
