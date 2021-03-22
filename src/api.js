import axios from "axios";

const makeRequest = (path, params) => {
  return axios.get(`https://api.openweathermap.org/data/2.5${path}`, {
    params: {
      ...params,
      appid: "1cce20274897538f27f72a370b9bb045",
      exclude: "hourly",
    },
  });
};

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { current },
    } = await makeRequest(path, params);
    return [current, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const weatherApi = (lat, lon) => getAnything("/onecall?", { lat, lon });
