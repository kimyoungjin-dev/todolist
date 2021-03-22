import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { BiCalendarHeart } from "react-icons/bi";
import Form from "./Form";

const Container = styled.div`
  position: fixed;
`;

const IconContainer = styled.div`
  margin-bottom: 20px;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  opacity: 0.6;
  background-color: black;
  z-index: -1;
`;

const TodoList = ({
  todos,
  toggleEditing,
  editing,
  changeChecked,
  addTodos,
  ChooseTodos,
  selected,
  deleteTodos,
  updateTodos,
}) => {
  return (
    <>
      {editing && (
        <Container>
          <Background onClick={() => toggleEditing()}></Background>
          <Form
            addTodos={addTodos}
            selected={selected}
            updateTodos={updateTodos}
            deleteTodos={deleteTodos}
            toggleEditing={toggleEditing}
          />
        </Container>
      )}

      <IconContainer onClick={() => toggleEditing()}>
        <BiCalendarHeart size={40} style={{ marginBottom: 5 }} />
        <span>TodoList 추가하기</span>
      </IconContainer>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleEditing={toggleEditing}
          changeChecked={changeChecked}
          ChooseTodos={ChooseTodos}
          selected={selected}
        />
      ))}
    </>
  );
};

export default TodoList;
