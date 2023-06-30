import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes()
    }
    else {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)


  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>

      {/* EDIT NOTE MODAL BOX */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button disabled={note.etitle.length < 5} onClick={handleClick} type="button" style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}} className="btn btn-primary">Update Note</button>
              <button ref={refClose} type="button" className="btn btn-secondary" style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}} data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


      {/* YOUR NOTES SECTION */}
      <div className="row my-3">
        <div className="notesHeading d-flex align-items-center justify-content-between" style={{ "marginBottom": "40px" }}>
          <h2 className='my-3' style={{ "marginRight": "60px", "color": "#F4EEE0" }}> <i class="fa-regular fa-clipboard"></i> Your Notes</h2>
          <div className="d-flex" style={{ "borderColor": "#F4EEE0", "marginRight": "21px" }}>
            {/* SEARCH BAR. */}
            <div className="form-outline d-flex mx-3" >
              <input type="search" id="form1" className="form-control" style={{ "color": "#393646", "borderColor": "#F4EEE0", "borderTopRightRadius": "0px", "borderBottomRightRadius": "0px" }} placeholder='Search Notes' />
              <button type="button" className="btn" style={{ "backgroundColor": "#393646", "borderColor": "#F4EEE0", "borderTopLeftRadius": "0px", "borderBottomLeftRadius": "0px" }}>
                <i className="fas fa-search" style={{ "color": "#F4EEE0" }}></i>
              </button>
            </div>
            <AddNote />
          </div>
        </div>
        <div className="container mx-2">
          {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes