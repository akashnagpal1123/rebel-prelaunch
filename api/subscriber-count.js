import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    
    await client.connect();
    console.log('✅ Connected to MongoDB for count');

    const db = client.db(process.env.DB_NAME);
    const subscribers = db.collection('subscribers');

    const count = await subscribers.countDocuments();

    await client.close();

    res.status(200).json({ count });

  } catch (error) {
    console.error('❌ Error getting count:', error);
    res.status(500).json({ message: 'Error getting subscriber count.' });
  }
} 