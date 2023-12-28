import { useContext } from "react";
import bodyPartContext from "../contexts/bodyPartContext";
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";
const BodyPart = ({ item }: { item: string }) => {
  const [bodyPart, setBodyPart] = useContext(bodyPartContext);
  return (
    <Stack
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" }); //to scroll to the exercises
      }}
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "5px solid #ff2625" : "", //active body part
        backgroundColor: "#FFF",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={icon}
        alt="gym Icon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#3A1212",
          textTransform: "capitalize",
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
