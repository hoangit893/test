import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import InputBar from "./components/InputBar";
import NavBar from "./components/NavBar";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  const setIsCompleted = (id) => {
    setTaskList((prev) => {
      prev.map((task) => {
        if (task.id === id) {
          if (task.isComplelted === true) {
            task.isComplelted = false;
          } else task.isComplelted = true;
        }
        return task;
      });
      return prev;
    });
    console.log(taskList[id]);
  };

  const addToDo = (value) => {
    value &&
      setTaskList((prev) => [
        { id: prev.length, value: value, isComplelted: false, isHidden: false },
        ...prev,
      ]);
  };

  const deleteToDo = (id) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  const handleDispayList = (filter) => {
    if (filter === "Active") {
      setTaskList((prev) => {
        return prev.map((task) => {
          task.isHidden = task.isComplelted ? true : false;
          return task;
        });
      });
    }
    if (filter === "Completed") {
      setTaskList((prev) => {
        return prev.map((task) => {
          task.isHidden = task.isComplelted ? false : true;
          return task;
        });
      });
    }
    if (filter === "All") {
      setTaskList((prev) => {
        return prev.map((task) => {
          task.isHidden = false;
          return task;
        });
      });
    }
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
    console.log(target.value);
  };

  useEffect(() => {
    handleDispayList(filter);
  }, [filter]);

  return (
    <div className="App">
      <div
        id="logo"
        style={{
          fontSize: 60,
          fontWeight: "bold",
        }}>
        #TODO
      </div>
      <NavBar onClick={handleFilter}></NavBar>
      <InputBar addToDo={addToDo}></InputBar>

      {taskList.map((task) => (
        <ToDo
          key={task.id}
          task={task}
          onCompleted={setIsCompleted}
          deleteToDo={deleteToDo}></ToDo>
      ))}
    </div>
  );
}

export default App;
