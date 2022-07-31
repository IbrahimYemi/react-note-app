import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';

export default function NoteCard({ item }) {
  const colors = [
    {
      primary: '#deda1c',
      secondary: '#dadec1',
    },
    {
      primary: '#4d27f3',
      secondary: '#030258',
    },
    {
      primary: '#2a0236',
      secondary: '#b636f1',
    },
  ];

  const handleDelete=()=>{
    
  }
  // colors[index%5].primary
  // colors[index%5].secondary
  return (
    <div className="card">
      <h2>{item.Name}</h2>
      <div className="note">
        <p>{item.Desc}</p>
        <div className="button">
          <FaTrashAlt onClick={handleDelete} />
          <BiEdit onClick={handleEdit} />
        </div>
      </div>
    </div>
  );
}
