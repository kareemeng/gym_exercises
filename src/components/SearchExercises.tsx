import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { searchQuery } from "../utils/Query/searchQuery";
import { bodyPartsList } from "../utils/Query/bodyPartsList";
import { IExercise } from "../types/exerciseResponseTypes";
import HorizontalScrollbar from "./HorizontalScrollbar";

// import { fetchData, exercisesOptions } from "../utils/fetchData";
const SearchExercises = () => {
  const [search, setSearch] = useState(""); //search is the query key
  const [exerciseName, setExerciseName] = useState(""); // keeps track of the input value
  const bodyParts = useQuery({
    queryKey: ["bodyPartsList"],
    queryFn: bodyPartsList,
  });
  const exercises = useQuery({
    queryKey: ["search", search],
    queryFn: searchQuery,
    enabled: !!search,
    //*(!!search) is a shorthand for Boolean(search) which is a shorthand for search !== ""
  });

  const handleSearch = (exerciseName: string) => {
    setSearch(exerciseName);
  };

  const exercisesList = exercises.data as IExercise[];
  console.log(exercisesList);

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          textAlign: "center",
          fontSize: { lg: "40px", xs: "30px" },
          mb: "50px",
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="70px ">
        <TextField
          value={exerciseName}
          placeholder="Search for exercises"
          type="text"
          onChange={(e) => setExerciseName(e.target.value)}
          sx={{
            height: "56px",
            input: {
              fontWeight: 700,
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "900px", xs: "350px" },
            backgroundColor: "#FFF",
          }}
        />
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            handleSearch(exerciseName);
          }}
          sx={{
            textTransform: "none",
            width: {
              xs: "80px",
              lg: "175px",
            },
            fontSize: { lg: "20px", xs: "15px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar data={bodyParts.data ?? []} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
