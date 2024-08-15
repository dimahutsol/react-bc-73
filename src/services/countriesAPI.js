import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountries = async () => {
  const { data } = await instance.get("/region/europe");
  return data;
};
