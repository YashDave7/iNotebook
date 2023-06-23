import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitially = [
        {
            "_id": "64930452d9f125fd1a6046fe",
            "user": "6491e9c74f22647951e00e77",
            "title": "My Title2",
            "description": "My Description2",
            "tag": "Personal",
            "date": "2023-06-21T14:08:18.556Z",
            "__v": 0
        },
        {
            "_id": "64930452d9f125fd1a6046fe",
            "user": "6491e9c74f22647951e00e77",
            "title": "My Title2",
            "description": "My Description2",
            "tag": "Personal",
            "date": "2023-06-21T14:08:18.556Z",
            "__v": 0
        },
        {
            "_id": "64930452d9f125fd1a6046fe",
            "user": "6491e9c74f22647951e00e77",
            "title": "My Title2",
            "description": "My Description2",
            "tag": "Personal",
            "date": "2023-06-21T14:08:18.556Z",
            "__v": 0
        },
        {
            "_id": "64930452d9f125fd1a6046fe",
            "user": "6491e9c74f22647951e00e77",
            "title": "My Title2",
            "description": "My Description2",
            "tag": "Personal",
            "date": "2023-06-21T14:08:18.556Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitially);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;