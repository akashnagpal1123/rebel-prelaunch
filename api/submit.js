import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { name, email, mobile, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email are required' });
  }

  try {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(process.env.DB_NAME);
    const subscribers = db.collection('subscribers');

    await subscribers.insertOne({
      name,
      email,
      mobile: mobile || null,
      message: message || null,
      subscribedAt: new Date()
    });

    await client.close();

    res.status(201).json({ message: '✅ Thank you for subscribing!' });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ message: 'Error subscribing. Please try again later.' });
  }
} 