import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import trash from "../../assets/trash.svg";
function ToDo({ task, deleteToDo, onCompleted }) {
  const [isComplete, setIsComplete] = useState(task.isComplelted);

  const handleDelete = ({ id }) => {
    deleteToDo(id);
  };

  const handleCheckBox = () => {
    let id = task.id;
    onCompleted(id);
    setIsComplete(!isComplete);
  };

  return (
    <div
      style={{
        display: task.isHidden ? "none" : "flex",
        alignItems: "center",
        width: "40vh",
      }}
      className="todo">
      <Checkbox
        checked={isComplete}
        onClick={() => handleCheckBox()}></Checkbox>
      <span
        style={{
          textDecoration: isComplete ? "line-through" : null,
        }}>
        {task.value}
      </span>
      {isComplete ? (
        <img
          style={{
            marginLeft: "10px",
            width: "20px",
            transform: "translateY(1.5px)",
          }}
          src={trash}
          onClick={() => handleDelete(task)}
          alt=""
        />
      ) : null}
    </div>
  );
}

export default ToDo;
