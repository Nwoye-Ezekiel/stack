import React from "react";
import Navbar from "../components/Navbar";

function Stats() {
  window.scrollTo(0, 0);
  if (
    localStorage.getItem("totalObj") == null ||
    localStorage.getItem("completedObj") == null ||
    localStorage.getItem("uncompletedObj") == null
  ) {
    let setTotal = { completedTasks: 0, totalTasks: 0, uncompletedTasks: 0 };
    let setCompleted = {
      completedHigh: 0,
      completedLow: 0,
      completedMedium: 0,
    };
    let setUncompleted = {
      uncompletedHigh: 0,
      uncompletedLow: 0,
      uncompletedMedium: 0,
    };
    localStorage.setItem("totalObj", JSON.stringify(setTotal));
    localStorage.setItem("completedObj", JSON.stringify(setCompleted));
    localStorage.setItem("uncompletedObj", JSON.stringify(setUncompleted));
  }

  let totalObj = localStorage.getItem("totalObj");
  totalObj = JSON.parse(totalObj);
  console.log(totalObj);

  let completedObj = localStorage.getItem("completedObj");
  completedObj = JSON.parse(completedObj);

  let uncompletedObj = localStorage.getItem("uncompletedObj");
  uncompletedObj = JSON.parse(uncompletedObj);

  var cal1;
  var cal2;
  var total;
  var first;
  var second;
  if (totalObj.totalTasks > 0) {
    first = totalObj.completedTasks;
    second = totalObj.uncompletedTasks;
    total = totalObj.totalTasks;
    cal1 = parseFloat((first / total) * 100).toFixed(2);
    cal2 = parseFloat((second / total) * 100).toFixed(2);
  } else {
    cal1 = 0;
    cal2 = 0;
  }

  function Bar(props) {
    return (
      <div
        style={{ height: props.height + "%", backgroundColor: props.color }}
        className="status"
      >
        <p>{props.children}</p>
      </div>
    );
  }

  function Information(props) {
    return (
      <div className="information-card">
        <div className="information-percentage">{props.percentage}%</div>
        <div className="information-header">{props.children}</div>
        <div className="info-box">
          <div className="info-name">High Priority</div>
          <div className="info-detail">{props.high}</div>
        </div>
        <div className="info-box">
          <div className="info-name">Medium Priority</div>
          <div className="info-detail">{props.medium}</div>
        </div>
        <div className="info-box">
          <div className="info-name">Low Priority</div>
          <div className="info-detail">{props.low}</div>
        </div>
        <div className="info-box">
          <div
            style={{ color: "#f58434", fontFamily: "font-s" }}
            className="info-name"
          >
            Total
          </div>
          <div className="info-detail">
            {props.high + props.medium + props.low}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="stats-cont">
      <Navbar statsColor="#f58434" />
      <div className="chart-cont">
        <div className="page-name">Bar Chart</div>
        <div className="cont">
          <Bar height={cal1} color="#008000">
            Completed
          </Bar>
          <Bar height={cal2} color="#f58634">
            Uncompleted
          </Bar>
          <div className="labels">
            <div className="label">100</div>
            <div className="label">80</div>
            <div className="label">60</div>
            <div className="label">40</div>
            <div className="label">20</div>
            <div className="label">0</div>
          </div>
          <div className="text-cont">
            <div className="text">Percentage</div>
          </div>
        </div>
      </div>
      <div className="information-main-cont">
        <div className="page-name">Statistics</div>
        <div className="information-wrapper">
          <Information
            high={completedObj.completedHigh}
            medium={completedObj.completedMedium}
            low={completedObj.completedLow}
            percentage={cal1}
          >
            Completed
          </Information>
          <Information
            high={uncompletedObj.uncompletedHigh}
            medium={uncompletedObj.uncompletedMedium}
            low={uncompletedObj.uncompletedLow}
            percentage={cal2}
          >
            Uncompleted
          </Information>
        </div>
        <div className="total-tasks">Total tasks: {totalObj.totalTasks}</div>
      </div>
    </div>
  );
}

export default Stats;
