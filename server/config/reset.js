import { pool } from "./database.js";

import "./dotenv.js";

import guideData from "../data/guides.js";

// Define the asynchronous function to create the gifts table
const createGuidesTable = async () => {
  // Define the SQL query to create the gifts table
  const createTableQuery = `
  DROP TABLE IF EXISTS gifts;
      CREATE TABLE IF NOT EXISTS guides (
        id serial PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        image TEXT NOT NULL,
        category VARCHAR(255) NOT NULL,
        submittedBy VARCHAR(255) NOT NULL
      );
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 guides table created successfully");
  } catch (error) {
    console.error("Error creating guides table:", error);
  }
};

const seedGuidesTable = async () => {
  await createGuidesTable();
  guideData.forEach((guide) => {
    const insertQuery = {
      text: "INSERT INTO guides (title, text, image, category, submittedBy) VALUES ($1, $2, $3, $4, $5)",
    };
    const values = [
      guide.title,
      guide.text,
      guide.image,
      guide.category,
      guide.submittedBy,
    ];
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting guide", err);
        return;
      }

      console.log(`✅ ${guide.title} added successfully`);
    });
  });
};
seedGuidesTable();
