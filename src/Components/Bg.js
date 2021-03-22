import React from "react";
import BgImage from "./images/backgroundCover.webp";
import styled from "styled-components";

const Image = styled.img`
  position: fixed;
  z-index: -1;
  height: 100%;
  width: 100%;
`;

const Bg = () => {
  return <Image src={BgImage} />;
};

export default Bg;
