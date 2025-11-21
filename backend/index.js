import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "TopCal Roofing Portal backend running!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server live on port ${PORT}`));
