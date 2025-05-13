import { MongoClient, ObjectId } from 'mongodb';
import { mongoUri } from '../config.js';

let client;
let db;

const connectToMongo = async () => {
    if (!client) {
        client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db('vc_database');
    }
    return db;
};

const storeVC = async (vc) => {
    try {
        const db = await connectToMongo();
        const collection = db.collection('verifiable_credentials');
        const result = await collection.insertOne({
            vc,
            createdAt: new Date()
        });
        console.log('VC stored in MongoDB:', result.insertedId);
        return result.insertedId.toString(); // Return _id as string
    } catch (error) {
        console.error('MongoDB store error:', error);
        throw new Error(`Failed to store VC in MongoDB: ${error.message}`);
    }
};

const retrieveVC = async (id) => {
    try {
        const db = await connectToMongo();
        const collection = db.collection('verifiable_credentials');
        const result = await collection.findOne({ _id: new ObjectId(id) });
        if (!result) {
            throw new Error('VC not found in MongoDB');
        }
        console.log('VC retrieved from MongoDB:', result.vc);
        return result.vc; // Return the VC (JWT string)
    } catch (error) {
        console.error('MongoDB retrieve error:', error);
        throw new Error(`Failed to retrieve VC from MongoDB: ${error.message}`);
    }
};

export { storeVC, retrieveVC };