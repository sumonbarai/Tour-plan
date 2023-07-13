const Form = ({ todo, setTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target.todo.value;
    if (!text) {
      return alert(`your input is empty`);
    }

    // find task already exist or not
    const isExist = todo.find((item) => item?.text === text);

    if (isExist) {
      return alert(`${text} task is already exist`);
    }
    const task = {
      text: text,
      status: false,
    };

    setTodo([...todo, task]);
    e.target.todo.value = "";
  };

  return (
    <form className="form-area" onSubmit={handleSubmit}>
      <label> What do You need to Your Tour?</label>
      <input type="text" name="todo" placeholder="Write Your plan..." />
      <button>add</button>
    </form>
  );
};

export default Form;
