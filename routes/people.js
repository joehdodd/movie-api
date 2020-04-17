import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/person", (req, res) => {
  const { personId } = req.query;
  axios
    .get(
      `${process.env.MOVIE_API_BASE_URL}/person/${personId}?api_key=${process.env.MOVIE_API_KEY}`
    )
    .then((response) => {
      return res.status(200).json({
        message: "Ok",
        person: response.data,
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
