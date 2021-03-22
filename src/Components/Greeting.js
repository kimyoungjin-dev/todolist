import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;
`;

const Greeting = () => {
  const [editing, setEditing] = useState(true);
  const [value, setValue] = useState("");

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = (event) => {
    event.preventDefault();
    toggleEditing();
    setValue("");
    localStorage.setItem("currentUser", JSON.stringify(value));
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setEditing(false);
    }
  }, []);

  return (
    <Container>
      {editing ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="당신의 이름을 입력하세요"
            onChange={onChange}
          />
          <input type="submit" value="확인" />
        </form>
      ) : (
        <div>
          <h1 style={{ fontSize: 50 }}>
            안녕하세요
            <span style={{ fontWeight: "bold", marginLeft: 20 }}>
              {localStorage.getItem("currentUser")}
            </span>
            님
          </h1>
        </div>
      )}
    </Container>
  );
};

export default Greeting;
