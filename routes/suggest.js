import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title } = req.body;
  const apiKey = process.env.TASTEDIVE_API_KEY;

  if (!title) return res.status(400).json({ error: "Missing title" });

  try {
    const url = `https://tastedive.com/api/similar?q=${encodeURIComponent(title)}&type=movie&limit=5&info=1&k=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data?.similar?.results) {
      console.dir(data, { depth: null });
      return res.status(500).json({ error: "Invalid API response" });
    }

    const simplified = data.similar.results.map(movie => ({
      name: movie.name,
      description: movie.description,
      youtube: movie.yUrl,
      wiki: movie.wUrl,
    }));

    res.json(simplified);
  } catch (err) {
    console.error("TasteDive Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export const suggestRouter = router;