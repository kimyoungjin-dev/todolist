import React from "react";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { BsTrash2 } from "react-icons/bs";

const SelectedIcon = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Selected = ({ value, selected, deleteTodos, updateTodos }) => {
  return (
    <SelectedIcon>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={() => updateTodos(selected.id, value)}
      >
        <FiEdit size={25} style={{ marginBottom: 10 }} />
        <span>수정하기</span>
      </div>
      <div
        onClick={() => deleteTodos(selected.id)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BsTrash2 size={25} style={{ marginBottom: 10 }} />
        <span>삭제하기</span>
      </div>
    </SelectedIcon>
  );
};

export default Selected;
