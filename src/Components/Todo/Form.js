import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Selected from "./Selected";
import NotSelected from "./NotSelected";

const FormContainer = styled.form`
  position: fixed;
  z-index: 1;
  left: 45%;
  flex-direction: column;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  margin-bottom: 20px;
  height: 60px;
  text-align: center;
  ::placeholder {
    color: white;
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div``;

const Form = ({
  selected,
  updateTodos,
  deleteTodos,
  toggleEditing,
  addTodos,
}) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(value);
    setValue("");
  };

  useEffect(() => {
    if (selected) {
      setValue(selected.text);
    }
  }, [selected]);

  return (
    <div>
      <FormContainer
        type="submit"
        onSubmit={selected ? () => updateTodos(selected.id, value) : onSubmit}
      >
        <Input
          onChange={onChange}
          type="text"
          placeholder="투두를 작성해주세요"
          value={value}
        />
        <ButtonContainer>
          {selected ? (
            <Selected
              value={value}
              selected={selected}
              deleteTodos={deleteTodos}
              updateTodos={updateTodos}
            />
          ) : (
            <NotSelected toggleEditing={toggleEditing} />
          )}
        </ButtonContainer>
      </FormContainer>
    </div>
  );
};

export default Form;
