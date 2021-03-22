import React, { useEffect, useState } from "react";
import { weatherApi } from "api";
import styled from "styled-components";
import { weathers } from "Components/Weather/WeatherIcon";

const Container = styled.div`
  position: fixed;
  top: 200px;
  left: 100px;
`;

const Contents = styled.div`
  height: 250px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Item = styled.span``;

const Weather = () => {
  const [results, setResults] = useState({
    response: [],
    responseError: null,
  });

  const getData = async (lat, lon) => {
    const [response, responseError] = await weatherApi(lat, lon);
    setResults({
      response,
      responseError,
    });
  };

  useEffect(() => {
    const handleSuccess = (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      getData(lat, long);
    };

    const handleError = () => {
      console.log("현재 위치정보를 찾을수 없음");
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);
  const { response } = results;

  return (
    <Container>
      <Contents>
        <span style={{ fontSize: 90 }}>
          <Item>{weathers[response.weather[0].main]}</Item>
        </span>
        <span>
          현재구름 : <Item>{response.clouds}</Item>
        </span>
        <span style={{ marginTop: 20, marginBottom: 20 }}>
          현재온도 : <Item>{response.temp}℃</Item>
        </span>
        <span>
          현재습도 :<Item>{response.humidity}%</Item>
        </span>
      </Contents>
    </Container>
  );
};

export default Weather;
