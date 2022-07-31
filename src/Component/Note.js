import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteCard from './NoteCard';

export default function Note() {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let arr = localStorage.getItem('notes');
    let onj = JSON.parse(arr);
    if (arr) {
      let onj = JSON.parse(arr);
      setNotes(onj);
    }
  }, []);

  const saveNote = (noteObj) => {
    let tempNote = notes;
    localStorage.setItem('notes', JSON.stringify(tempNote));
    tempNote.push(noteObj);
    setNotes(tempNote);
    setModal(false);
  };
  return (
    <div>
      <div>
        <h1>NOTE APP</h1>
        <button onClick={() => setModal(true)}>Add Note</button>
      </div>
      <div>
        {!notes ? (
          <p>START CREATING YOUR NOTE</p>
        ) : (
          notes.map((item, index) => <NoteCard key={index} item={item} />)
        )}
        <NoteForm modal={modal} toggle={toggle} save={saveNote} />
      </div>
    </div>
  );
}
