import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{ "backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0", "minHeight": "200px" }}>
                <div className="card-body">
                    {/* <div className='d-flex justify-content-between align-items-center'> */}
                    <h5 className="card-title">{note.title}</h5>
                    {/* </div> */}
                    <div className='d-flex justify-content-between mb-0'>
                        <span class="badge text-bg-secondary" style={{ "color": "#F4EEE0" }}>{note.tag}</span>
                        <div>
                            <i className="fa-solid fa-pen-to-square" style={{ "fontSize": "20px" }} onClick={() => { updateNote(note) }}></i>
                            <i className="fa-solid fa-trash mx-2" style={{ "fontSize": "20px" }} onClick={() => { deleteNote(note._id) }}></i>
                        </div>
                    </div>
                <p className="my-2 font-weight-light" style={{ "fontWeight": "lighter", "fontStyle": "italic", "fontSize": "14px" }}>Added on: {new Date(note.date).toGMTString().slice(5, 16)}</p>
                </div>
                <p className="mx-3 mb-3 font-weight-light" style={{ "fontWeight": "lighter", "fontStyle": "italic" }}>{note.description}</p>


            </div>
        </div>
    )
}

export default NoteItem
