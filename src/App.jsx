import React, { useState } from "react";
import "./App.css";
import TodoBox from "./templates/TodoBox";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, addTodo } from "./redux/modules/todos";

function App() {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();
  // const [inputs, setInputs] = useState([
  //   { id: 0, title: "과제", contents: "마무리하기", isDone: false },
  // ]);

  // // 제목과 내용 input 박스에 넣기 ----------------
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");

  // const titleChangeHandler = (event) => {
  //   return setTitle(event.target.value);
  // };
  // const contentsChangeHandler = (event) => {
  //   return setContents(event.target.value);
  // };
  // // ----------------------------------------

  // // working에 추가하기 ------------------------
  // const clickAddButtonHandler = () => {
  //   const newInputs = {
  //     id: inputs.length + 1,
  //     title: title,
  //     contents: contents,
  //     isDone: false,
  //   };
  //   setTitle("");
  //   setContents("");
  //   return setInputs([...inputs, newInputs]);
  // };
  // // ----------------------------------------

  // // working에서 완전히 삭제하기 -----------------
  // const clickRemoveButtonHandler = (id) => {
  //   const newInputs = inputs.filter((input) => input.id !== id);
  //   return setInputs(newInputs);
  // };
  // // ----------------------------------------

  // // 완료버튼 누르면 버튼이 취소로 바뀌면서 done으로 내려가기
  // const clickChangeStateButtonHandler = (id) => {
  //   const newInputs = inputs.map((input) => {
  //     if (input.id === id) {
  //       return { ...input, isDone: !input.isDone };
  //     }
  //     return input;
  //   });

  //   return setInputs(newInputs);
  // };
  // // ----------------------------------------

  return (
    <div className="App">
      <div className="header">
        <h2>My Todo List</h2>
        <span>React</span>
      </div>
      <div className="inputBox">
        제목{" "}
        <input
          type="text"
          value={title}
          onChange={(event) => {
            const { value } = event.target;
            setTitle(value);
          }}
        />
        내용{" "}
        <input
          type="text"
          value={contents}
          onChange={(event) => {
            const { value } = event.target;
            setContents(value);
          }}
        />
        <button
          onClick={() => {
            dispatch(addTodo(title, contents));
          }}
        >
          추가하기
        </button>
      </div>
      <main className="Main">
        <h3 className="Working">Working..🔥</h3>
        <div className="Todo">
          <div className="TodoBox" key={todos.id}>
            <h2>{todos.title}</h2>
            <p>{todos.contents}</p>
            <div className="button-group">
              <button>삭제하기</button>
              <button></button>
            </div>
          </div>
        </div>
        <h3 className="Done">Done..🎉</h3>
        <div className="Todo"></div>
      </main>
    </div>
  );
}

export default App;
