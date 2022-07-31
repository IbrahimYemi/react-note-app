import React, { useState } from 'react';
import EditTask from './EditNote';
import { FaTrashAlt } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import { FiEyeOff, FiEye } from 'react-icons/fi';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: '#5D93E1',
      secondaryColor: '#ECF3FC',
    },
    {
      primaryColor: '#5DC250',
      secondaryColor: '#F2FAF1',
    },
    {
      primaryColor: '#B964F7',
      secondaryColor: '#F3F0FD',
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const [show, setShow] = useState(false);

  return (
    <div
      className="card-wrapper mr-5"
      style={{ border: '3px solid' + colors[index % 3].primaryColor }}
    >
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 3].primaryColor }}
      ></div>
      <div className="task-holder">
        <span className="card-headers">
          <span
            style={{
              backgroundColor: colors[index % 3].secondaryColor,
              borderRadius: '5px',
              padding: '3px 7px',
            }}
          >
            {taskObj.Name}
          </span>
          {!show ? (
            <FiEyeOff
              style={{
                color: colors[index % 3].primaryColor,
              }}
              onClick={() => setShow(true)}
              className="eye"
            />
          ) : (
            <FiEye
              style={{
                color: colors[index % 3].primaryColor,
              }}
              onClick={() => setShow(false)}
              className="eye"
            />
          )}
        </span>
        {show && (
          <div>
            <p className="mt-3 mb-5">{taskObj.Description}</p>

            <div
              style={{ position: 'absolute', right: '20px', bottom: '10px' }}
            >
              <BiEdit
                className="far fa-edit mr-3"
                style={{
                  color: colors[index % 3].primaryColor,
                  cursor: 'pointer',
                  fontSize: '30px',
                }}
                onClick={() => setModal(true)}
              />
              <FaTrashAlt
                className="fas fa-trash-alt"
                style={{
                  color: colors[index % 3].primaryColor,
                  cursor: 'pointer',
                  fontSize: '20px',
                  marginLeft: '5px',
                }}
                onClick={handleDelete}
              />
            </div>
          </div>
        )}
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
