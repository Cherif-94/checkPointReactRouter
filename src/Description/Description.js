import { Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import "./Description.css";
import ReactPlayer from "react-player";

const Description = ({ location: { state } }) => {
  return (
    <div>
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src={state.movie.image} />
            <h1>{state.movie.name}</h1>
            <h4>{state.movie.date}</h4>

            <p class="type"> {state.movie.type} </p>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography
                style={{ color: "white", fontSize: "20px" }}
                component="legend"
              >
                Rating
              </Typography>

              <Rating name="read-only" value={state.movie.rating} readOnly />
            </Box>
          </div>
          <div class="movie_desc">
            <p class="text">{state.movie.description}</p>
          </div>
        </div>
        <div class="blur_back ">
          <img src={state.movie.image} alt="imageMovie" />{" "}
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Watch a trailer
      </h1>
      <ReactPlayer style={{ margin: "auto" }} url={state.movie.trailer} />
    </div>
  );
};

export default Description;
