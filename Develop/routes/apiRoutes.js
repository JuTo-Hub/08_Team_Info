// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on note-data.
// ===============================================================================
const path = require("path");
const fs = require("fs");
const dbPath = path.join(__dirname, "../db/db.json");
const uuid = require('uuid');

function loadData(){
  let rawdata = fs.readFileSync(dbPath);
  return JSON.parse(rawdata);
}

function saveData(data){
  fs.writeFileSync(dbPath, JSON.stringify(data));
}
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
    res.json(loadData());
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a note section... this data is then sent to the server...
  // Then the server saves the data to the db.json)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    let data = loadData();
        let newNote = {title:req.body.title, text:req.body.text, id:uuid.v4()};
    data.push(newNote);
    saveData(data);
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
      res.json(true); 
    });

  // ---------------------------------------------------------------------------
  // Used to clear the noteData array. Possibly unnecessary.

  app.delete("api/notes/:id", function(req,res){
    let data = loadData();
    if (index !== -1) api/notes.id.splice(index, 1);

  })}