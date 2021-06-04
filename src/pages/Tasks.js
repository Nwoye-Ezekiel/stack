import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import DeleteItem from "../components/DeleteItem";
import CreateTask from "../components/CreateTask";
import TasksHeader from "../components/TasksHeader";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

window.scrollTo(0, 0);

function Tasks() {
  if (localStorage.getItem("tasksObj") == null) {
    localStorage.setItem("tasksObj", "[]");
  }
  let localTasks = JSON.parse(localStorage.getItem("tasksObj"));
  const [popDelete, setPopDelete] = useState(false);
  const [popForm, setPopForm] = useState(false);
  const [removeHeader, setRemoveHeader] = useState(false);
  const [updateList, setUpdateList] = useState(true);
  const [removeList, setRemoveList] = useState(false);
  const [taskList, setTaskList] = useState(localTasks);
  const [temp, setTemp] = useState([]);
  let [width, setWidth] = useState(false);

  function reportWindowSize() {
    window.innerWidth >= 800 ? setWidth(true) : setWidth(false);
  }
  window.addEventListener("resize", reportWindowSize);

  function popDeleteHandler(obj) {
    setTemp(obj);
    setRemoveList(true);
    setPopDelete(true);
    setRemoveHeader(true);
  }
  function popFormHandler() {
    setPopForm(true);
  }
  function cancelDeleteHandler() {
    setRemoveHeader(false);
    setRemoveList(false);
    setPopDelete(false);
  }
  function updateState() {
    setUpdateList(!updateList);
  }
  function cancel() {
    setPopForm(false);
    setRemoveHeader(false);
    setRemoveList(false);
  }
  function headerHandler() {
    setRemoveList(true);
    setRemoveHeader(true);
    setPopForm(!popForm);
  }

  function countAndStore(list) {
    updateState();
    const completedTasks = list.filter((task) => task.checked).length;
    const uncompletedTasks = list.filter((task) => !task.checked).length;
    const totalTasks = list.length;
    const completed = list.filter((task) => task.checked);
    const completedHigh = [...completed].filter(
      (task) => task.priority === "High"
    ).length;
    const completedMedium = [...completed].filter(
      (task) => task.priority === "Medium"
    ).length;
    const completedLow = [...completed].filter(
      (task) => task.priority === "Low"
    ).length;

    const uncompleted = [...list].filter((task) => !task.checked);
    const uncompletedHigh = [...uncompleted].filter(
      (task) => task.priority === "High"
    ).length;
    const uncompletedMedium = [...uncompleted].filter(
      (task) => task.priority === "Medium"
    ).length;
    const uncompletedLow = [...uncompleted].filter(
      (task) => task.priority === "Low"
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
    cancelDeleteHandler();
    countAndStore(newArray);
  };

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
        {taskList.length < 1 ? (
          <CreateTask popForm={popFormHandler} />
        ) : (
          <>{removeHeader ? null : <TasksHeader popForm={headerHandler} />}</>
        )}

        {removeList ? null : (
          <TaskItem
            taskList={taskList}
            popDelete={popDeleteHandler}
            checkbox={checkbox}
          />
        )}
        {popDelete ? (
          <DeleteItem
            confirmDelete={confirmDelete}
            cancelDelete={cancelDeleteHandler}
            id={temp.id}
            name={temp.taskName}
          />
        ) : null}
        {popForm ? (
          <TaskForm cancelForm={cancel} addTask={addTask} cancel={cancel} />
        ) : null}
      </div>
    </div>
  );
}
export default Tasks;
