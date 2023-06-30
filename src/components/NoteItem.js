import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{ "backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0" }}>
                <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                    <div className='d-flex justify-content-between'>
                    <span class="badge text-bg-secondary" style={{"color": "#F4EEE0"}}>{note.tag}</span>
                        <div>
                            <i className="fa-solid fa-pen-to-square" style={{ "fontSize": "20px" }} onClick={() => { updateNote(note) }}></i>
                            <i className="fa-solid fa-trash mx-2" style={{ "fontSize": "20px" }} onClick={() => { deleteNote(note._id) }}></i>
                        </div>
                    </div>
                </div>
                <p className="mx-3 my-3 font-weight-light" style={{"fontWeight": "lighter", "fontStyle": "italic"}}>{note.description}</p>

            </div>
        </div>
    )
}

export default NoteItem
