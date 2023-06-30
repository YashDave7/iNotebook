const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tag: {
        type: String,
        default: "Other"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('note',NoteSchema);