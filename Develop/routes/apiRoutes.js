// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on note-data.
// ===============================================================================

const db = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a note section... this data is then sent to the server...
  // Then the server saves the data to the db.json)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (db.length < 5) {
      db.push(req.body);
      res.json(true);
    }
    else {
         }
  });

  // ---------------------------------------------------------------------------
  // Used to clear the noteData array. Possibly unnecessary.

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    db.length = 0;
    res.json({ ok: true });
  });
};
