import React, { useEffect, useState } from "react";
import "./style.css";

function NavBar({ onClick }) {
  const [menuList, setMenuList] = useState([
    { label: "All", isSelected: true },
    { label: "Active", isSelected: false },
    { label: "Completed", isSelected: false },
  ]);

  const handleClick = ({ target }) => {
    let clicked = target.value;
    setMenuList((prev) => {
      prev.map((menu) => {
        if (menu.label === clicked) {
          menu.isSelected = true;
        } else menu.isSelected = false;
        return menu;
      });
      return prev;
    });
  };

  useEffect(() => {
    let buttons = document.getElementsByClassName("button");
  }, [menuList]);

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
      {menuList.map((menu) => (
        <button
          className={menu.isSelected ? "button button-active" : "button"}
          value={menu.label}
          onClick={handleClick}>
          {menu.label}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
