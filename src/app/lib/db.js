import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDB() {
  return open({
    filename: "./src/app/lib/database.sqlite", // مسیر صحیح به فایل دیتابیس
    driver: sqlite3.Database,
  });
}
