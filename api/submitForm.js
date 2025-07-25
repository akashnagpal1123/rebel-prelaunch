// import express from 'express';
// import { MongoClient } from 'mongodb';
// import cors from 'cors';
// import 'dotenv/config';

// const app = express();
// const port = process.env.PORT || 3000;

// // CORS configuration
// app.use(cors({
//   origin: [
//     'http://localhost:5173',
//     'http://localhost:5174',
//     'https://community.therebel.co.in',
//     'https://rebel-prelaunch.vercel.app',
//     'https://the-rebel-prelaunch.vercel.app'
//   ],
//   methods: ['POST', 'GET', 'OPTIONS'],
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(express.json());

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected successfully to MongoDB");

//     app.post('/api/submit', async (req, res) => {
//       const { name, email, mobile, message } = req.body;

//       if (!name || !email) {
//         return res.status(400).send({ message: 'Name and Email are required' });
//       }

//       try {
//         const database = client.db(process.env.DB_NAME);
//         const collection = database.collection('subscribers');
//         await collection.insertOne({ 
//           name, 
//           email, 
//           mobile, 
//           message, 
//           subscribedAt: new Date() 
//         });
//         res.status(201).send({ message: 'Thank you for subscribing!' });
//       } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: 'Error subscribing. Please try again later.' });
//       }
//     });

//     app.listen(port, () => {
//       console.log(`Server listening at http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error("Failed to connect to MongoDB", err);
//     process.exit(1);
//   }
// }

// run().catch(console.dir);


import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

// ✅ CORS setup to allow only specific trusted domains
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://community.therebel.co.in',
  'https://rebel-prelaunch.vercel.app',
  'https://the-rebel-prelaunch.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    app.post('/api/submit', async (req, res) => {
      const { name, email, mobile, message } = req.body;

      if (!name || !email) {
        return res.status(400).json({ message: 'Name and Email are required' });
      }

      try {
        const db = client.db(process.env.DB_NAME);
        const subscribers = db.collection('subscribers');

        await subscribers.insertOne({
          name,
          email,
          mobile: mobile || null,
          message: message || null,
          subscribedAt: new Date()
        });

        res.status(201).json({ message: '✅ Thank you for subscribing!' });

      } catch (err) {
        console.error('❌ MongoDB insert error:', err);
        res.status(500).json({ message: 'Error subscribing. Please try again later.' });
      }
    });

    // GET endpoint to fetch subscriber count
    app.get('/api/subscriber-count', async (req, res) => {
      try {
        const db = client.db(process.env.DB_NAME);
        const subscribers = db.collection('subscribers');

        const count = await subscribers.countDocuments();

        res.status(200).json({ count });

      } catch (err) {
        console.error('❌ MongoDB count error:', err);
        res.status(500).json({ message: 'Error getting subscriber count.' });
      }
    });

    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });

  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

run().catch(console.error);
