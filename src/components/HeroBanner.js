import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/cbum.jpg";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "140px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    // p="20px"
  >
    <Typography color=" #990011FF" fontWeight="700" fontSize="29px">
      Lion Fitness
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Be stronger than <br />your Excuses.
      
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
      
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: " #990011FF",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#990011FF"
      sx={{
        ml:"-72px",
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{ borderRadius: "15px",top:"75px" }}
    />
  </Box>
);

export default HeroBanner;
