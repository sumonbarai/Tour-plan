import List from "./List";

const Content = ({ todo, deleteTodo, changeStatus }) => {
  return (
    <div className="content-area">
      <h2>{todo.length ? "list Items" : "No List Item Found"}</h2>
      <div className="content">
        <ul>
          {todo.map((item, index) => (
            <List
              key={index}
              item={item}
              index={index}
              deleteTodo={deleteTodo}
              changeStatus={changeStatus}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
