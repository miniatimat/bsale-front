const server = require("./src/app.js");
const { conn } = require("./src/db.js");


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    console.log("Listening on port 3001"); // eslint-disable-line no-console
  });
});