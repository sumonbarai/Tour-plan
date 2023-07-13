import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import FilterList from "./components/FilterList";

const App = () => {
  const [todo, setTodo] = useState([]);

  // delete todo
  const deleteTodo = (text) => {
    const remaining = todo.filter((item) => item.text !== text);
    setTodo(remaining);
  };
  // change status
  const changeStatus = (text) => {
    const modifyTodo = todo.map((item) => {
      if (item.text === text) {
        return {
          ...item,
          status: !item.status,
        };
      } else {
        return item;
      }
    });
    console.log(modifyTodo);
    setTodo(modifyTodo);
  };
  // clear todo
  const clearTodo = () => {
    setTodo([]);
  };

  // sort function
  const sortedFn = (value) => {
    if (value === "atoz") {
      const sorted = todo.sort((a, b) => {
        const first = a.text.toUpperCase();
        const second = b.text.toUpperCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });
      setTodo([...sorted]);
    }

    if (value === "ztoa") {
      const sorted = todo.sort((a, b) => {
        const first = a.text.toUpperCase();
        const second = b.text.toUpperCase();
        if (first < second) {
          return 1;
        }
        if (first > second) {
          return -1;
        }
        return 0;
      });
      setTodo([...sorted]);
    }
  };

  return (
    <div>
      <Header />
      <Form todo={todo} setTodo={setTodo} />
      <Content
        todo={todo}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
      />
      <FilterList clearTodo={clearTodo} sortedFn={sortedFn} />
      <Footer todo={todo} />
    </div>
  );
};

export default App;
