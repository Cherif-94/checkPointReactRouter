import React from "react";
import "./MovieCard.css";

import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { name, image, date, type, rating, description, id, trailer },
  handleMovie,
}) => {
  return (
    <div class="container">
      <div class="cellphone-container">
        <div class="movie">
          <img class="movie-img" src={image} alt="movieImage" />
          <div class="text-movie-cont">
            <div class="mr-grid">
              <div class="col1">
                <h1>{name}</h1>
                <ul class="movie-gen">
                  <li> Date {date} /</li>
                  <li>Type: {type} /</li>
                </ul>
              </div>
            </div>
            <div class="mr-grid summary-row">
              <div class="col2">
                <h5>Description</h5>
              </div>
              <div class="col2"></div>
            </div>
            <div class="mr-grid">
              <div class="col1">
                <p class="movie-description">{description}. </p> <br />
              </div>
            </div>
            <div class="mr-grid actors-row">
              <div class="col1">
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography
                    style={{ color: "white", fontSize: "20px" }}
                    component="legend"
                  >
                    Rating
                  </Typography>

                  <Rating name="read-only" value={rating} readOnly />
                </Box>
                <div style={{ display: "flex" }}>
                  <a class="card_right__button" target="_blank">
                    <Link
                      to={{
                        pathname: `/Description/${id}`,
                        state: {
                          movie: {
                            name,
                            image,
                            date,
                            type,
                            rating,
                            description,
                            id,
                            trailer,
                          },
                        },
                      }}
                    >
                      WATCH TRAILER
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
MovieCard.defaultProps = {
  el: {
    id: "undefined",
    image:
      "https://mcleansmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
    rating: "without rating",
    name: "Anonymous",
    date: "****",
    type: "this movie without type",
    description: "this movie without description",
    details: "this movie without details",
  },
};
