import todos from "../modules/todos";

const { combineReducers, createStore } = require("redux");

const rootReducer = combineReducers({
  // 리듀서들 담기
  todos: todos,
});

const store = createStore(rootReducer);

export default store;
