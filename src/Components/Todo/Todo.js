import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일1",
      checked: false,
    },

    {
      id: 2,
      text: "할일2",
      checked: true,
    },

    {
      id: 3,
      text: "할일3",
      checked: false,
    },
  ]);

  const toggleEditing = () => setEditing((prev) => !prev);

  const changeChecked = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const addTodos = (text) => {
    if (text === "") {
      alert("할일을 입력해주세요");
    } else {
      const todo = {
        id: Date.now(),
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      toggleEditing();
    }
  };

  const ChooseTodos = (todo) => {
    setSelected(todo);
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((v) => v.id !== id));
    toggleEditing();
  };

  const updateTodos = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    toggleEditing();
  };

  return (
    <>
      <TodoList
        todos={todos}
        toggleEditing={toggleEditing}
        editing={editing}
        changeChecked={changeChecked}
        addTodos={addTodos}
        selected={selected}
        ChooseTodos={ChooseTodos}
        deleteTodos={deleteTodos}
        updateTodos={updateTodos}
      />
    </>
  );
};

export default Todo;
