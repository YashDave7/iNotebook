const express = require('express');
const Note = require('../models/Note');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// ROUTE 1: Get all the notes using : GET "api/notes/fetchallnotes". Login required.
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})

// ROUTE 2: Add a new note using : POST "api/notes/addnote". Login required.
router.post('/addnote', fetchUser, [
    body('title', 'Enter a Valid title').isLength({ min: 3 }),
    body('description', 'Enter a value Description').isLength({ min: 5 }),
], async (req, res) => {
    try {

        const { title, description, tag } = req.body;
        // If there are errors, return the bad request and the errors.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save();

        res.json(saveNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})

// ROUTE 3: Update a existing note using : PUT "api/notes/updatenote". Login required.
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // Create a newNote object. 
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it.
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }

        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})

// ROUTE 4: Delete an existing note using : DELETE "api/notes/updatenote". Login required.
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        // Find the note to be deleted and delete it.
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }

        // checking if note belongs to the user.
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})

module.exports = router;