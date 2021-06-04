import React from "react";

export default function CreateTask({ popForm }) {
  return (
    <div className="middle center-cont">
      <button className="btn cta-btn btn-primary btn-medium" onClick={popForm}>
        Create Task
      </button>
    </div>
  );
}
