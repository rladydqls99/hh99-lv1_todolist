import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

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
    if (!title.trim() || !contents.trim()) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    const newInputs = {
      id: inputs.length + 1,
      title: title,
      contents: contents,
      isDone: false,
    };
    setTitle("");
    setContents("");
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
      <Input
        title={title}
        contents={contents}
        titleChangeHandler={titleChangeHandler}
        contentsChangeHandler={contentsChangeHandler}
        clickAddButtonHandler={clickAddButtonHandler}
      />
      <main className="Main">
        <List
          title="Working"
          inputs={inputs.filter((item) => !item.isDone)}
          clickRemoveButtonHandler={clickRemoveButtonHandler}
          clickChangeStateButtonHandler={clickChangeStateButtonHandler}
        />
        <List
          title="Done"
          inputs={inputs.filter((item) => item.isDone)}
          clickRemoveButtonHandler={clickRemoveButtonHandler}
          clickChangeStateButtonHandler={clickChangeStateButtonHandler}
        />
      </main>
    </div>
  );
}

export default App;
