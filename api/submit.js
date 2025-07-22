import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, mobile, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and Email are required' });
    }

    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    await client.connect();
    
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
    console.error('❌ API Error:', error);
    res.status(500).json({ message: 'Error subscribing. Please try again later.' });
  }
} 