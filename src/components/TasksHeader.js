import React from "react";

export default function TasksHeader({popForm}) {
  return (
    <div className="tasks-header">
      <div className="tasks-title">Tasks</div>
      <div onClick={popForm} className="add-button">
        <i
          className="fas fa-plus-circle"
          style={{ color: "#000", fontSize: "30px", cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
}
