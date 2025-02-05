import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
  const members = await client.sql`SELECT * FROM members;`;
  return response.status(200).json({ members: members.rows });
}