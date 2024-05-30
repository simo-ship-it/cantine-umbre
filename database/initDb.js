import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function setup() {
  const db = await open({
    filename: './mydatabase.sqlite',
    driver: sqlite3.Database
  });

  await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)');
}

setup();
