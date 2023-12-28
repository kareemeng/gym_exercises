import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BodyPart from "./BodyPart";
import { useRef } from "react";

const HorizontalScrollbar = ({ data }: { data: string[] }) => {
  // use ref instead of getElementById As it is not a good practice to use getElementById in react
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (scrollOffset: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          scrollbarWidth: "none", //firefox
          msOverflowStyle: "none", //IE
          "&::-webkit-scrollbar": {
            display: "none", //chrome safari opera edge
          },
        }}
        ref={sliderRef}
      >
        {data.map((item, index) => (
          <Box key={index} m="0 40px">
            <BodyPart item={item} />
          </Box>
        ))}
      </Box>
      <IconButton
        size="large"
        onClick={() => scroll(-330)}
        sx={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        size="large"
        onClick={() => scroll(330)}
        sx={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HorizontalScrollbar;
