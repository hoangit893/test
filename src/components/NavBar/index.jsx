import React from "react";
import "./style.css";

function NavBar({ onClick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "var(--blue-blue-50)",
        position: "relative",
        width: "40vw",
        marginBottom: 20,
        borderBottom: "3px solid #c7c7c7",
        paddingBottom: 0,
      }}
      className="navbar">
      <button value="all" onClick={onClick}>
        All
      </button>
      <button value="active" onClick={onClick}>
        Active
      </button>
      <button className="button-active" value="completed" onClick={onClick}>
        Completed
      </button>
    </div>
  );
}

export default NavBar;
