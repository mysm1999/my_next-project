import { openDB } from "../../app/lib/db";

export default async function handler(req, res) {
  const db = await openDB();
  const result = await db.get("SELECT 1 AS result");
  res.status(200).json({ message: "Database is connected", result });
}
