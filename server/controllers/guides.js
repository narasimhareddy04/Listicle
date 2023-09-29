import { pool } from "../config/database.js";

const getGuides = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM guides ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// const getGuide = async (req, res) => {
//   const guideId = req.params.guideId;
//   try {
//     const result = await pool.query("SELECT * FROM guides WHERE id = $1", [
//       guideId,
//     ]);

//     res.status(200).json(result.rows[0]);
//   } catch (error) {
//     res.status(409).json({ error: error.message });
//   }
// };

export default {
  getGuides,
};
