import React from "react";
import Clock from "Components/Clock";
import Greeting from "Components/Greeting";
import GlobalStyle from "Components/GlobalStyle";
import Todo from "Components/Todo/Todo";
import Bg from "Components/Bg";
import Weather from "Components/Weather/Weather";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Bg />
      <Weather />
      <Clock />
      <Greeting />
      <Todo />
    </>
  );
};

export default App;
