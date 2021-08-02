function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.data.completed} />
      <label htmlFor="task1">{props.data.text}</label>
    </div>
  );
}

export default TodoItem;
