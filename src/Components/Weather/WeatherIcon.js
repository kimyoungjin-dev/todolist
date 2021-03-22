import React from "react";
import { AiOutlineAntCloud } from "react-icons/ai";
import { IoThunderstorm } from "react-icons/io5";
import { RiDrizzleFill } from "react-icons/ri";
import { BiCloudRain } from "react-icons/bi";
import { FaSnowflake, FaRegSun, FaSmog } from "react-icons/fa";
import { RiHazeLine } from "react-icons/ri";
import { TiWeatherWindy } from "react-icons/ti";

export const weathers = {
  Clouds: <AiOutlineAntCloud />,
  Drizzle: <RiDrizzleFill />,
  Thunderstorm: <IoThunderstorm />,
  Rain: <BiCloudRain />,
  Snow: <FaSnowflake />,
  Clear: <FaRegSun />,
  Haze: <RiHazeLine />,
  Mist: <FaSmog />,
  Dust: <TiWeatherWindy />,
};
