import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text">{note.tag}</p>

                    <i className="fa-solid fa-pen-to-square" style={{"fontSize": "20px"}} onClick={() => {updateNote(note)}}></i>
                    <i className="fa-solid fa-trash mx-2" style={{"fontSize": "20px"}} onClick={() => {deleteNote(note._id)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
