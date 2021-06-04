import React, { useState } from "react";

export default function TaskForm({ cancelForm, addTask, cancel }) {
  let [nameCounter, setNameCounter] = useState(40);
  let [commentCounter, setCommentCounter] = useState(200);
  let formName;
  let formComment;
  let formDueDate;
  let formPriority = "";
  const check = (e) => (formPriority = e.target.value);

  const nameCounterHandler = (e) => {
    let counter = 40 - e.target.value.length;
    setNameCounter(counter);
  };
  const commentCounterHandler = (e) => {
    let counter = 200 - e.target.value.length;
    setCommentCounter(counter);
  };

  return (
    <div className="middle">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let input = {
            taskName: formName.value,
            comment: formComment.value,
            dueDate: formDueDate.value,
            priority: formPriority,
          };
          addTask(input);
          formName.value = "";
          formComment.value = "";
          formDueDate.value = "";
          cancel();
        }}
      >
        <div className="form-cont">
          <div className="form-header">New Task</div>
          <div className="label-cont">
            <div
              className={"word-count " + (nameCounter <= 10 ? "warning" : "")}
            >
              {nameCounter}
            </div>
            <label for="taskName">Task Name</label>
          </div>
          <input
            required
            ref={(taskName) => {
              formName = taskName;
            }}
            className="input"
            type="text"
            id="taskName"
            name="TaskName"
            placeholder="Enter a task name"
            maxLength="40"
            onChange={(event) => nameCounterHandler(event)}
          />
          <br />
          <div className="label-cont">
            <div
              className={
                "word-count " + (commentCounter <= 10 ? "warning" : "")
              }
            >
              {commentCounter}
            </div>
            <label for="comment">Comment</label>
          </div>

          <input
            required
            ref={(taskComment) => {
              formComment = taskComment;
            }}
            className="input"
            type="text"
            id="comment"
            name="comment"
            placeholder="Make a comment"
            maxLength="200"
            onChange={(event) => commentCounterHandler(event)}
          />

          <br />
          <label for="dueDate">Due date</label>
          <br />
          <input
            required
            ref={(dueDate) => {
              formDueDate = dueDate;
            }}
            className="input"
            type="date"
            id="dueDate"
            name="dueDate"
          />
          <br />
          <label className="priority-label">Priority</label>
          <br />
          <div className="radio-cont">
            <div>
              <input
                required
                onClick={check}
                type="radio"
                id="High"
                name="priority"
                value="High"
              />
              <label className="radio-label" for="High">
                High
              </label>
            </div>
            <div>
              <input
                required
                onClick={check}
                type="radio"
                id="Medium"
                name="priority"
                value="Medium"
              />
              <label className="radio-label" for="Medium">
                Medium
              </label>
            </div>
            <div>
              <input
                required
                onClick={check}
                type="radio"
                id="Low"
                name="priority"
                value="Low"
              />
              <label className="radio-label" for="Low">
                Low
              </label>
            </div>
          </div>
          <div className="btn-cont form-btn-cont">
            <button type="submit" className="button button1">
              Add
            </button>
            <button onClick={cancelForm} className="button button2">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
