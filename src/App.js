import React, { useState } from "react";
import "./App.css";
import TodoBox from "./templates/TodoBox";

function App() {
  const [inputs, setInputs] = useState([
    { id: 0, title: "과제", contents: "마무리하기", isDone: false },
  ]);

  // 제목과 내용 input 박스에 넣기 ----------------
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleChangeHandler = (event) => {
    return setTitle(event.target.value);
  };
  const contentsChangeHandler = (event) => {
    return setContents(event.target.value);
  };
  // ----------------------------------------

  // working에 추가하기 ------------------------
  const clickAddButtonHandler = () => {
    const newInputs = {
      id: inputs.length + 1,
      title: title,
      contents: contents,
      isDone: false,
    };
    return setInputs([...inputs, newInputs]);
  };
  // ----------------------------------------

  // working에서 완전히 삭제하기 -----------------
  const clickRemoveButtonHandler = (id) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    return setInputs(newInputs);
  };
  // ----------------------------------------

  // 완료버튼 누르면 버튼이 취소로 바뀌면서 done으로 내려가기
  const clickChangeStateButtonHandler = (id) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, isDone: !input.isDone };
      }
      return input;
    });

    return setInputs(newInputs);
  };
  // ----------------------------------------

  return (
    <div className="App">
      <div className="header">
        <h2>My Todo List</h2>
        <span>React</span>
      </div>
      <div className="inputBox">
        제목 <input value={title} onChange={titleChangeHandler} />
        내용 <input value={contents} onChange={contentsChangeHandler} />
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <main className="Main">
        <h3 className="Working">Working..🔥</h3>
        <div className="Todo">
          {inputs
            .filter((item) => {
              return item.isDone === false;
            })
            .map((item) => {
              return (
                <TodoBox
                  item={item}
                  clickRemoveButtonHandler={clickRemoveButtonHandler}
                  clickChangeStateButtonHandler={clickChangeStateButtonHandler}
                />
              );
            })}
        </div>
        <h3 className="Done">Done..🎉</h3>
        <div className="Todo">
          {inputs
            .filter((item) => {
              return item.isDone === true;
            })
            .map((item) => {
              return (
                <TodoBox
                  item={item}
                  clickRemoveButtonHandler={clickRemoveButtonHandler}
                  clickChangeStateButtonHandler={clickChangeStateButtonHandler}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
