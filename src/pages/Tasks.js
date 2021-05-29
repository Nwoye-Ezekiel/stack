import React, { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Side from "../components/Side";

function Tasks() {
  if (localStorage.getItem("tasksObj") == null) {
    localStorage.setItem("tasksObj", "[]");
  }
  let localTasks = JSON.parse(localStorage.getItem("tasksObj"));
  const [popDelete, setPopDelete] = useState(false);
  const [popForm, setPopForm] = useState(false);
  const [updateList, setUpdateList] = useState(true);
  const [removeList, setRemoveList] = useState(true);
  const [taskList, setTaskList] = useState(localTasks);
  const [temp, setTemp] = useState([]);
  let [width, setWidth] = useState(false);

  function reportWindowSize() {
    if (window.innerWidth >= 800) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  }

  window.addEventListener("resize", reportWindowSize);

  function countAndStore(list) {
    updateState();
    const completedTasks = list.filter((task) => task.checked).length;
    const uncompletedTasks = list.filter((task) => !task.checked).length;
    const totalTasks = list.length;
    const completed = list.filter((task) => task.checked);
    const completedHigh = [...completed].filter(
      (task) => task.priority === "high"
    ).length;
    const completedMedium = [...completed].filter(
      (task) => task.priority === "medium"
    ).length;
    const completedLow = [...completed].filter(
      (task) => task.priority === "low"
    ).length;

    const uncompleted = [...list].filter((task) => !task.checked);
    const uncompletedHigh = [...uncompleted].filter(
      (task) => task.priority === "high"
    ).length;
    const uncompletedMedium = [...uncompleted].filter(
      (task) => task.priority === "medium"
    ).length;
    const uncompletedLow = [...uncompleted].filter(
      (task) => task.priority === "low"
    ).length;

    let completedObj = {
      completedHigh: completedHigh,
      completedMedium: completedMedium,
      completedLow: completedLow,
    };
    let uncompletedObj = {
      uncompletedHigh: uncompletedHigh,
      uncompletedMedium: uncompletedMedium,
      uncompletedLow: uncompletedLow,
    };
    let totalObj = {
      completedTasks: completedTasks,
      uncompletedTasks: uncompletedTasks,
      totalTasks: totalTasks,
    };
    localStorage.setItem("completedObj", JSON.stringify(completedObj));
    localStorage.setItem("uncompletedObj", JSON.stringify(uncompletedObj));
    localStorage.setItem("totalObj", JSON.stringify(totalObj));
    updateState();
  }

  function popDeleteHandler(obj) {
    setTemp(obj);
    setRemoveList(!removeList);
    setPopDelete(!popDelete);
  }
  function popFormHandler() {
    setRemoveList(!removeList);
    setPopForm(!popForm);
  }
  function cancelDeleteHandler() {
    setRemoveList(!removeList);
    setPopDelete(!popDelete);
  }
  function updateState() {
    setUpdateList(!updateList);
  }
  function cancel() {
    setRemoveList(!removeList);
    setPopForm(!popForm);
  }
  function checkbox(event, id) {
    let position;
    [...taskList].map((task, index) => {
      if (task.id === id) {
        let storageTasks = JSON.parse(localStorage.getItem("tasksObj"));
        position = index;
        task.checkBoxState = event.target.checked;
        task.checked = !task.checked;
        storageTasks[position].checkBoxState = task.checkBoxState;
        storageTasks[position].checked = task.checked;
        localStorage.setItem("tasksObj", JSON.stringify(storageTasks));
      }
    });
    countAndStore([...taskList]);
    updateState();
  }

  function addTask(val) {
    const task = {
      taskName: val.taskName,
      comment: val.comment,
      date: val.dueDate,
      priority: val.priority,
      checkBoxState: false,
      checked: false,
      id: Math.floor(Math.random() * 10000),
    };

    let tasksObj = task;
    let storageTasks = JSON.parse(localStorage.getItem("tasksObj"));
    storageTasks.push(tasksObj);
    localStorage.setItem("tasksObj", JSON.stringify(storageTasks));

    let newTaskList = [...taskList, task];
    countAndStore([...taskList, task]);
    setTaskList(newTaskList);
  }
  function Center(props) {
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

  function DeleteItem(prop) {
    return (
      <div className="delete-main-cont middle">
        <div className="delete-wrapper">
          <div className="delete-task">{prop.children}</div>
          <div className="divide"></div>
          <div className="delete-cont">
            <div className="question">
              Are you sure you want to delete this task?
            </div>
            <div className="delete-buttons btn-cont">
              <button
                onClick={() => confirmDelete(prop.id)}
                className="button button1"
              >
                Delete
              </button>
              <button onClick={prop.cancelDelete} className="button button2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const confirmDelete = (id) => {
    let position;
    const index = [...taskList].filter((task, index) => {
      if (task.id === id) {
        position = index;
      }
    });
    const newArray = [...taskList].filter((task) => task.id !== id);

    let storageTasks = JSON.parse(localStorage.getItem("tasksObj"));
    storageTasks.splice(position, 1);
    localStorage.setItem("tasksObj", JSON.stringify(storageTasks));

    setTaskList(newArray);
    setRemoveList(!removeList);
    setPopDelete(!popDelete);
    countAndStore(newArray);
  };

  function Header(props) {
    return (
      <div className="tasks-header">
        <div className="tasks-title">Tasks</div>
        <div onClick={props.popForm} className="add-button">
          <i
            className="fas fa-plus-circle"
            style={{ color: "#000", fontSize: "30px", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    );
  }

  function Item({ taskList, popDelete }) {
    return taskList.map((task, index) => (
      <div className="item-cont">
        <div className="priority-card">{task.priority}</div>
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
                style={{ color: "#000", fontSize: "17.5px", cursor: "pointer" }}
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
                <del>{task.date}</del>
              </div>
            ) : (
              <div className="due-date">{task.date}</div>
            )}
          </div>
        </div>
      </div>
    ));
  }

  function TaskForm(props) {
    let formName;
    let formComment;
    let formDueDate;
    let formPriority = "";
    const check = (e) => (formPriority = e.target.value);

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
            <label for="taskName">Task Name</label>
            <br />
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
            />
            <br />
            <label for="comment">Comment</label>
            <br />
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
                  id="high"
                  name="priority"
                  value="high"
                />
                <label className="radio-label" for="high">
                  High
                </label>
              </div>
              <div>
                <input
                  required
                  onClick={check}
                  type="radio"
                  id="medium"
                  name="priority"
                  value="medium"
                />
                <label className="radio-label" for="medium">
                  Medium
                </label>
              </div>
              <div>
                <input
                  required
                  onClick={check}
                  type="radio"
                  id="low"
                  name="priority"
                  value="low"
                />
                <label className="radio-label" for="low">
                  Low
                </label>
              </div>
            </div>
            <div className="btn-cont form-btn-cont">
              <button type="submit" className="button button1">
                Add
              </button>
              <button onClick={props.cancelForm} className="button button2">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div tasks-cont>
      {window.innerWidth >= 800 ? (
        <Side style="side-left-open" />
      ) : (
        <>
          <Navbar tasksColor="#f58434" />
          <Side style="side-left-close" />
        </>
      )}

      <div className="main">
        <Header popForm={popFormHandler} />

        {removeList ? (
          <Item
            taskList={taskList}
            popDelete={popDeleteHandler}
            DeleteItem={DeleteItem}
            confirmDelete={confirmDelete}
            cancelDelete={cancelDeleteHandler}
          />
        ) : null}
        {taskList.length < 1 ? <Center popForm={popFormHandler} /> : null}
        {popDelete ? (
          <DeleteItem cancelDelete={cancelDeleteHandler} id={temp.id}>
            {temp.taskName}
          </DeleteItem>
        ) : null}
        {popForm ? <TaskForm cancelForm={popFormHandler} /> : null}
      </div>
    </div>
  );
}
export default Tasks;
