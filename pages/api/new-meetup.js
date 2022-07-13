import { MongoClient } from "mongodb";

// /api/new-meetup
// / POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // npm install mongodb

    const client = await MongoClient.connect(
      "mongodb+srv://sherry:pGcgURptQED85NJE@cluster0.dufywdu.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
