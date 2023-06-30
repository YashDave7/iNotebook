import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ "title": "", "description": "", "tag": "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNoteModal" style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}}>
                New Note <i class="fa-solid fa-plus"></i>   
            </button>


            <div className="modal fade" id="addNoteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Note</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    {/* <label htmlFor="title" className="form-label">Title</label> */}
                                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength="5" required placeholder='Title (min. 5 characters)' />
                                </div>
                                <div className="mb-3">
                                    {/* <label htmlFor="description" className="form-label">Description</label> */}
                                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} placeholder='Description' />
                                </div>
                                <div className="mb-3">
                                    {/* <label htmlFor="tag" className="form-label">Tag</label> */}
                                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} placeholder='Tag' />
                                </div>
                                <div style={{"float": "right"}}>
                                    <button type="submit" disabled={note.title.length < 5 } className="btn mx-3" style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}}  onClick={handleClick}>Add Note</button>
                                    <button type="button" className="btn" style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}} data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container my-3">
                <h2>Add a New Note</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength="5" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div> */}
        </div>
    )
}

export default AddNote
