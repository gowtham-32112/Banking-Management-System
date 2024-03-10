const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const client = new MongoClient('mongodb+srv://admin1:admin1@cluster0.15mlbnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('counselling');
    const col = db.collection('register');

    app.post('/register', async (req, res) => {
      try {
        await col.insertOne(req.body); // Wait for insertion to complete
        res.send('Data inserted successfully');
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    });

    app.get('/retrieve', async (req, res) => {
      try {
        const result = await col.find().toArray(); // Wait for data retrieval to complete
        console.log(result);
        res.send(result);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    });

    app.put('/users/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const { name, role, email, password } = req.body;
        const result = await col.updateOne(
          { _id: new ObjectId(id) },
          { $set: { name, role, email, password } }
        );
        res.send('Data updated successfully');
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    });

    app.delete('/users/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const result = await col.deleteOne({ _id: new ObjectId(id) });
        res.json({ message: "Data deleted successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    });

    app.get('/', (req, res) => {
      res.send('Hello World');
    });

    app.get('/about', (req, res) => {
      res.send('<h1>About Us</h1>');
    });

    app.listen('8080', () => {
      console.log('Server is running on port 8080');
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();
