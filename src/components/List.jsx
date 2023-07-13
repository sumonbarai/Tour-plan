const List = ({ item, index, deleteTodo, changeStatus }) => {
  const handleDelete = () => {
    deleteTodo(item.text);
  };
  const handleStatus = () => {
    changeStatus(item.text);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleStatus} checked={item.status} />
      <p className={item.status ? "lineThrough" : ""}>
        {" "}
        {index + 1}. {item.text}{" "}
      </p>
      <span onClick={handleDelete}>X</span>
    </li>
  );
};

export default List;
