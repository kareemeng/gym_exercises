import { useState } from "react";
import { Box } from "@mui/material";
import { IExercise } from "../types/exerciseResponseTypes";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import exercisesContext from "../contexts/exercisesContext";
import bodyPartContext from "../contexts/bodyPartContext";

const Home = () => {
  const bodyPart = useState("all");
  const exercises = useState([] as IExercise[]);

  return (
    <exercisesContext.Provider value={exercises}>
      <bodyPartContext.Provider value={bodyPart}>
        <Box>
          <HeroBanner />
          <SearchExercises />
          <Exercises />
        </Box>
      </bodyPartContext.Provider>
    </exercisesContext.Provider>
  );
};

export default Home;
