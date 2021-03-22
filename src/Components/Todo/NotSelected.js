import React from "react";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  font-size: 20px;
  cursor: pointer;
`;

const NotSelected = ({ toggleEditing }) => {
  return (
    <>
      <Button type="submit">확인</Button>
      <Button
        type="submit"
        onClick={() => toggleEditing()}
        style={{ marginLeft: 20 }}
      >
        취소
      </Button>
    </>
  );
};

export default NotSelected;
