import axios, { AxiosRequestConfig } from "axios";
import { IExercise } from "../types/exerciseResponseTypes";

export const exercisesOptions = {
  method: "GET",
  params: { limit: 2000 }, // get all exercises despite the default limit of 10
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const fetchData = async (
  url: string,
  options: AxiosRequestConfig,
): Promise<IExercise[] | string[]> => {
  try {
    const response = await axios.get(url, options);
    const data = response.data as string[];
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};
