// 초기값 설정
const initialState = {
  id: 0,
  title: "과제",
  contents: "빨리하기",
  isDone: false,
};
// action value
export const ADD_TODO = "todos/ADD_TODO";

// action creater
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: 2,
        title: action.payload,
        contents: action.payload,
        isDone: false,
      };
      return {
        initialState: [...(initialState + newTodo)],
      };
    default:
      return state;
  }
};

export default todos;
