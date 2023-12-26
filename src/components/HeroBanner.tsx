import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { xs: "70px", lg: "212px" },
        ml: { sm: "50px" },
      }}
      position={"relative"}
      p={"20px"}
    >
      <Typography color="error" fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{
          fontSize: { xs: "40px", sm: "44px" },
          lineHeight: { xs: "40px", sm: "60px" },
          mt: "30px",
          mb: "23px",
        }}
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize={"20.5px"} lineHeight={"35px"} mb={4}>
        Check Out The Most Effective Exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{ mt: 3, mb: 3, padding: "10px" }}
        color={"error"}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color={"error"}
        sx={{ opacity: 0.1, display: { lg: "Block", xs: "none" } }}
        fontSize={"200px"}
      >
        Exercises
      </Typography>
      <img
        src={HeroBannerImage}
        alt="HeroBannerImage"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
