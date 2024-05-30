// database.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
  return open({
    filename: './mydatabase.sqlite', // specifica il nome del file del tuo database
    driver: sqlite3.Database
  });
}
