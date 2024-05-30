import { openDb } from '../../database';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'GET') {
    const users = await db.all('SELECT * FROM users');
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const statement = await db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
    const result = await statement.run(name, email);
    await statement.finalize();
    res.status(201).json({ id: result.lastID, name, email });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
