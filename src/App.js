import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

function App() {
  const todoItems = todosData.map((item) => (
    <TodoItem key={item.id} data={item} />
  ));

  return <div className="todo-list">{todoItems}</div>;
}

export default App;
