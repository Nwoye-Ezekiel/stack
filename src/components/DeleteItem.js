import React from "react";

export default function DeleteItem({ confirmDelete, cancelDelete, id, name }) {
  return (
    <div className="delete-main-cont middle">
      <div className="delete-wrapper">
        <div className="delete-task">{name}</div>
        <div className="divide"></div>
        <div className="delete-cont">
          <div className="question">
            Are you sure you want to delete this task?
          </div>
          <div className="delete-buttons btn-cont">
            <button
              onClick={() => confirmDelete(id)}
              className="button button1"
            >
              Delete
            </button>
            <button onClick={cancelDelete} className="button button2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
