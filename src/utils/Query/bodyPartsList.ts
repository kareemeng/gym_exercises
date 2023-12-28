import { QueryFunction } from "@tanstack/react-query";
import { exercisesOptions, fetchData } from "../fetchData";
export const bodyPartsList: QueryFunction<
  string[],
  ["bodyPartsList"]
> = async () => {
  const url = `${import.meta.env.VITE_EXERCISE_API_URL}/bodyPartList`;
  try {
    const response = (await fetchData(url, exercisesOptions)) as string[];
    const bodyPartList = ["all", ...response];

    return bodyPartList;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};
