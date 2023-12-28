import { createContext } from "react";
import { IExercise } from "../types/exerciseResponseTypes";
//we can use this context to share the state of the adopted pets
const exercises = createContext<
  [IExercise[], (exercises: IExercise[]) => void]
>([[], () => {}]);

export default exercises;
