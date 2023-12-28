import { QueryFunction } from "@tanstack/react-query";
import { exercisesOptions, fetchData } from "../fetchData";
import { IExercise } from "../../types/exerciseResponseTypes";
export const searchQuery: QueryFunction<
  IExercise[],
  ["search", string]
> = async ({ queryKey }) => {
  const url = `${import.meta.env.VITE_EXERCISE_API_URL}`;
  const query = queryKey[1];
  try {
    const response = (await fetchData(url, exercisesOptions)) as IExercise[];
    const filteredResponse = response.filter((exercise) => {
      return (
        exercise.name.toLowerCase().includes(query.toLowerCase()) ||
        exercise.bodyPart.toLowerCase().includes(query.toLowerCase()) ||
        exercise.target.toLowerCase().includes(query.toLowerCase()) ||
        exercise.equipment.toLowerCase().includes(query.toLowerCase())
      );
    });
    console.log("filteredResponse", filteredResponse);
    return filteredResponse;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};
