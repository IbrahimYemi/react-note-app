import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function NoteForrm({ modal, toggle, save }) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    if (name === 'title') {
      setTitle(e.target.value);
    } else {
      setNote(e.target.value);
    }
  };

  const handleSave = (e) => {
    let noteObj = {};
    noteObj['Name'] = title;
    noteObj['Desc'] = note;

    if (note === '') {
      alert('Please enter a note');
    } else {
      save(noteObj);
    }
    setTitle('');
    setNote('');
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Note</ModalHeader>
      <ModalBody>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="title">
            <label htmlFor="title">Title...</label>
            <input
              type="text"
              value={title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="description">
            <label htmlFor="desc">Note...</label>
            <textarea
              name="desc"
              cols="30"
              rows="6"
              value={note}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
