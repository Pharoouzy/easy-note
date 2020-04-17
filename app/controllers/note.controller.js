const Note = require("../models/note.model.js");

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate incoming request
    if(!req.body.content){
        return res.status(400).send({
            message: "Note content cannot be blank"
        });
    }


    // create new note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // save note in database
    note.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.getAll = (req, res) => {

};


// Find a single note with a noteId
exports.get = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};