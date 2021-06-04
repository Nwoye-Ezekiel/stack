import React from "react";

export default function TaskItem({ taskList, popDelete, checkbox }) {
  function isDue(val) {
    let now = new Date().toLocaleDateString();
    let due = new Date(val).toLocaleDateString();
    function format(val) {
      let date = val;

      let month = date.indexOf("/");
      let afterMonth = date.slice(month + 1);
      month = date.slice(0, month);

      let day = afterMonth.indexOf("/");
      let afterDay = afterMonth.slice(day + 1);
      day = afterMonth.slice(0, day);

      let year = afterDay.slice(0);
      return {
        day: day,
        month: month,
        year: year,
      };
    }
    now = format(now);
    due = format(due);
    if (parseInt(due.year) < parseInt(now.year)) {
      return true;
    } else if (parseInt(due.year) === parseInt(now.year)) {
      if (parseInt(due.month) == parseInt(now.month)) {
        if (parseInt(due.day) == parseInt(now.day)) {
          return true;
        } else if (parseInt(due.day) < parseInt(now.day)) {
          return true;
        } else {
          return false;
        }
      } else if (parseInt(due.month) < parseInt(now.month)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return taskList.map((task) => (
    <div className="item-cont">
      <div className="priority-card">{task.priority}</div>
      {isDue(task.date) ? <div className="due-card">Due</div> : null}
      <div className="item-top">
        {task.checked ? (
          <div className="task-name">
            <del>{task.taskName}</del>
          </div>
        ) : (
          <div className="task-name">{task.taskName}</div>
        )}
        <div className="task-icons">
          <div className="task-icon">
            <input
              defaultChecked={task.checkBoxState}
              onClick={(event) => checkbox(event, task.id)}
              className="checkbox"
              type="checkbox"
            />
          </div>
          <div onClick={() => popDelete(task)} className="task-icon">
            <i
              className="fas fa-trash-alt"
              style={{ color: "#000", fontSize: "18px", cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>
      <div className="divide"></div>
      <div className="item-bottom">
        {task.checked ? (
          <div className="task-comment">
            <del>{task.comment}</del>
          </div>
        ) : (
          <div className="task-comment">{task.comment}</div>
        )}
        <div className="date">
          <div className="due-date-label">Due date:</div>
          {task.checked ? (
            <div className="due-date">
              <span className={"due-date-value"}>
                <del>{new Date(task.date).toDateString()}</del>
              </span>
            </div>
          ) : (
            <div className="due-date">
              <span className={"due-date-value"}>
                {new Date(task.date).toDateString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  ));
}
