import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import ExerciseDetails from "./pages/ExerciseDetails";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
const theme = createTheme({
  palette: {
    error: {
      main: "#FF2625",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
