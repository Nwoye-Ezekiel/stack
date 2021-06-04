import React from "react";
import Button from "./Button";

export default function CreateTask(props) {
  return (
    <div className="middle center-cont">
      <Button
        onClick={props.popForm}
        classSize="btn-long"
        children="Create Task"
      />
    </div>
  );
}
