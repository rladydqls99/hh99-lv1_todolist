import React from "react";

function Input({
  title,
  contents,
  titleChangeHandler,
  contentsChangeHandler,
  clickAddButtonHandler,
}) {
  return (
    <div className="inputBox">
      제목 <input value={title} onChange={titleChangeHandler} />
      내용 <input value={contents} onChange={contentsChangeHandler} />
      <button onClick={clickAddButtonHandler}>추가하기</button>
    </div>
  );
}

export default Input;
