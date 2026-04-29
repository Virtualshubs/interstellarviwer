import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/star", async (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ error: "Missing star name" });
  }

  const query = `
    SELECT main_id, ra, dec, sp_type
    FROM basic
    WHERE main_id='${name}'
  `;

  const url =
    "https://simbad.cds.unistra.fr/simbad/sim-tap/sync?query=" +
    encodeURIComponent(query) +
    "&format=json";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const row = data.data?.[0];

    if (!row) {
      return res.json({ error: "Star not found" });
    }

    res.json({
      name: row[0],
      ra: row[1],
      dec: row[2],
      type: row[3]
    });

  } catch (err) {
    res.status(500).json({ error: "SIMBAD request failed" });
  }
});

app.listen(3000, () => {
  console.log("Star API running on http://localhost:3000");
});
