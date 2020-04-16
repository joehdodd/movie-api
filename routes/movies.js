import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", (res) => {
  axios
    .get(
      `${process.env.MOVIE_API_BASE_URL}/movie/popular?api_key=${process.env.MOVIE_API_KEY}`
    )
    .then((response) => {
      return res.status(200).json({
        message: "Ok",
        data: response.data.results,
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
        data: response.data.results,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Error",
        error: err,
      });
    });
});

export default router;
