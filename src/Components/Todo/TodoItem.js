import React from "react";
import styled from "styled-components";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

const Container = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  cursor: pointer;
`;

const Checked = styled.span`
  margin-right: 25px;
  font-size: 30px;
`;

const Title = styled.span`
  font-size: 20px;
`;

const TodoItem = ({ todo, toggleEditing, changeChecked, ChooseTodos }) => {
  const { id, checked, text } = todo;
  return (
    <Container>
      <List>
        <Checked onClick={() => changeChecked(id)}>
          {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </Checked>
        <Title
          onClick={() => {
            ChooseTodos(todo);
            toggleEditing();
          }}
        >
          {text}
        </Title>
      </List>
    </Container>
  );
};

export default TodoItem;
