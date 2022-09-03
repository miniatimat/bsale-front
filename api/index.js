const server = require("./src/app.js");
const { conn } = require("./src/db.js");


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log("Listening on port 3001"); // eslint-disable-line no-console
  });
});