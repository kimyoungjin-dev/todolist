import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const Time = styled.span`
  font-size: 100px;
`;

let timer = null;

const Clock = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Time>{time.format("HH시 mm분 ss")}</Time>
    </Container>
  );
};

export default Clock;
