import path from "path";
import fs from "fs";

const quotesFilePath = path.join(process.cwd(), "public", "quotes.json");

export const handler = async () => {
  try {
    const fileContents = fs.readFileSync(quotesFilePath, "utf-8");
    const quotes = JSON.parse(fileContents);

    if (quotes.length === 0) {
      throw new Error("No quotes available in the JSON file");
    }

    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    return {
      statusCode: 200,
      body: JSON.stringify(selectedQuote),
    };
  } catch (error) {
    console.error("Error fetching quote:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching quote" }),
    };
  }
};