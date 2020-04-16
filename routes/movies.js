import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", (req, res) => {
  axios
    .get(
      `${process.env.MOVIE_API_BASE_URL}/movie/popular?api_key=${process.env.MOVIE_API_KEY}`
    )
    .then((response) => {
      return res.status(200).json({
        message: "Ok",
        movies: response.data.results,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Error",
        error: err,
      });
    });
});

router.get("/search", (req, res) => {
  const { search } = req.query;
  axios
    .get(
      `${process.env.MOVIE_API_BASE_URL}/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${search}`
    )
    .then((response) => {
      return res.status(200).json({
        message: "Ok",
        movies: response.data.results,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Error",
        error: err,
      });
    });
});

router.get("/movie", async (req, res) => {
  const { movieId } = req.query;
  try {
    const movie = await axios.get(
      `${process.env.MOVIE_API_BASE_URL}/movie/${movieId}?api_key=${process.env.MOVIE_API_KEY}`
    );
    const movieCredits = await axios.get(
      `${process.env.MOVIE_API_BASE_URL}/movie/${movieId}/credits?api_key=${process.env.MOVIE_API_KEY}`
    );
    return res.status(200).json({
      message: "Ok",
      movie: movie.data,
      movieCredits: movieCredits.data.cast,
    });
  } catch (e) {
    return res.status(400).json({
      message: "Error",
      error: e,
    });
  }
});

export default router;
