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
    note.save().then(notes => {
        res.status(201).send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.getAll = (req, res) => {
    Note.find().then((notes) => {
        res.send(notes);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


// Find a single note with a noteId
exports.get = (req, res) => {
    Note.findById(req.params.noteId).then(note => {
        if(!note) {
            return res.status(404).send({
                message: `Note not found with id ${req.params.noteId}`
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: `Note not found with id ${req.params.noteId}`
            });
        }
        res.status(500).send({
            message: `Error retrieving note with id ${req.params.noteId}`
        })
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate incoming request
    if(!req.body.content){
        return res.status(400).send({
            message: "Note content cannot be blank"
        });
    }


    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true}).then(note => {
        if (!note) {
            return res.status(404).send({
                message: `Note not found with id ${req.params.noteId}`
            });
        }

        res.send(note);
    }).catch(err => {
        if (err.kind === "ObjectId"){
            return res.status(404).send({
                message: `Note not found with id ${req.params.noteId}`
            });
        }
        res.status(500).send({
            message: `Error updating note with id ${req.params.noteId}`
        })
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId).then(note => {
        if (!note) {
            return res.status(404).send({
                message: `Note not found with id ${req.params.noteId}`
            });
        }

        res.send({message: "Note Deleted successfully!"});
    }).catch(err => {
        if (err.kind === "ObjectId" || err.name === 'NotFound'){
            return res.status(404).send({
                message: `Note not found with id ${req.params.noteId}`
            });
        }
        res.status(500).send({
            message: `Couldn't delete note with id ${req.params.noteId}`
        })
    });
};