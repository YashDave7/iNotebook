import { useState } from "react";
import NoteContext from "./noteContext";
import { toast } from 'react-toastify';

const NoteState = (props) => {

    const host = 'http://localhost:4000'
    const notesInitially = []
    const [notes, setNotes] = useState(notesInitially);

    // Get all Notes.
    const getNotes = async () => {
        // API call.'
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();

        setNotes(json);
    }

    // Add a Note.
    const addNote = async (title, description, tag) => {
        // API call.'
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note = await response.json();
        // console.log(note);
        setNotes(notes.concat(note));
        toast.success("Note Added Successfully");
    }

    // Delete a Note.
    const deleteNote = async (id) => {
        // API call.'
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = response.json();
        console.log(json);


        // Logic to delete note at frontend.
        const newNotes = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNotes);
        toast.success("Note Deleted Successfully");
    }

    // Edit a Node. 
    const editNote = async (id, title, description, tag) => {
        // API call.'
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json);

        // Logic to edit the note ar frontend.
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
            setNotes(newNotes);
        }
        toast.success("Note updated Successfully");
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;