import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputList, setInput] = useState("");
  const [items, setItems] = useState([]);
  const changeEvent = (e) => {
    if (e.target.value === " ") {
      setInput("No Task Written");
    } else {
      setInput(e.target.value);
    }
  };
  const addItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInput("");
  };
  const deleteItems = (id) => {
    console.log("item deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, ind) => {
        return ind !== id;
      });
    });
  };
  return (
    <div className="maindiv">
      <div className="heading">
        <div className="upperPart">
          <h1>ToDo List🖊️</h1>
          <br />
          <div className="inp">
            <input
              type="text"
              placeholder="Add a item"
              onChange={changeEvent}
              value={inputList}
            />
            <button className="btn" onClick={addItems}>
              +
            </button>
          </div>
        </div>
        <div className="list">
          <ul>
            {items.map((itemval, index) => {
              return (
                <li>
                  <button
                    className="btns"
                    onClick={() => {
                      deleteItems(index);
                    }}
                  >
                    X
                  </button>
                  {itemval}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
