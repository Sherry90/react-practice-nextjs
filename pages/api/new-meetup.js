import { MongoClient } from "mongodb";

// /api/new-meetup
// / POST /api/new-meetup

const handelr = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // npm install mongodb

    const connnectionString =
      "mongodb+srv://sherry:WsDxwzN7O9xQEklX@cluster0.dufywdu.mongodb.net/meetups?retryWrites=true&w=majority";

    const client = await MongoClient.connect(connnectionString);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.this.state(201).json({ message: "Meetup inserted!" });
  }
};

export default handelr;
