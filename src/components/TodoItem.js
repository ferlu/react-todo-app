function TodoItem(props) {
  const completedItem = {
    backgroundColor: "aliceblue",
    color: "gray",
    fontStyle: "italic",
    textDecoration: "line-through",
  };

  const labelStyle = props.item.completed ? completedItem : null;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <label htmlFor="task1" style={labelStyle}>
        {props.item.text}
      </label>
    </div>
  );
}

export default TodoItem;
