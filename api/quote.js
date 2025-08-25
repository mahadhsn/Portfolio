import path from "path";
import { promises as fs } from "fs";

// Reads from /public/quotes.json at build/runtime
const quotesFilePath = path.join(process.cwd(), "public", "quotes.json");

export default async function handler(req, res) {
  try {
    // Only allow GET
    if (req.method !== "GET") {
      res.setHeader("Allow", ["GET"]);
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const fileContents = await fs.readFile(quotesFilePath, "utf-8");
    const quotes = JSON.parse(fileContents);

    if (!Array.isArray(quotes) || quotes.length === 0) {
      return res
        .status(500)
        .json({ message: "No quotes available in the JSON file" });
    }

    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Prevent caching so you get a new quote more often
    res.setHeader("Cache-Control", "no-store");

    return res.status(200).json(selectedQuote);
  } catch (error) {
    console.error("Error fetching quote:", error);
    return res.status(500).json({ message: "Error fetching quote" });
  }
}
