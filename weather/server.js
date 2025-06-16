const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const API_KEY = "789f797f6d3c4979bf2155556250706";

app.get("/current", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: API_KEY,
          q: city,
          aqi: "yes",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather:", error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Proxy server listening on http://localhost:3000");
});
