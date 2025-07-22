import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    app.post('/api/submit', async (req, res) => {
      const { name, email, mobile, message } = req.body;

      if (!name || !email) {
        return res.status(400).send({ message: 'Name and Email are required' });
      }

      try {
        const database = client.db(process.env.DB_NAME);
        const collection = database.collection('subscribers');
        await collection.insertOne({ 
          name, 
          email, 
          mobile, 
          message, 
          subscribedAt: new Date() 
        });
        res.status(201).send({ message: 'Thank you for subscribing!' });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error subscribing. Please try again later.' });
      }
    });

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });

  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

run().catch(console.dir);