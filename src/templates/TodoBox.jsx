const TodoBox = ({
  item,
  clickRemoveButtonHandler,
  clickChangeStateButtonHandler,
}) => {
  return (
    <div className="TodoBox" key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.contents}</p>
      <div className="button-group">
        <button onClick={() => clickRemoveButtonHandler(item.id)}>
          삭제하기
        </button>
        <button onClick={() => clickChangeStateButtonHandler(item.id)}>
          {item.isDone === false ? "완료" : "취소"}
        </button>
      </div>
    </div>
  );
};

export default TodoBox;
