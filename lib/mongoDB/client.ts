/* eslint-disable no-var */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const connectionURL = serverRuntimeConfig.MONGODB_URL;

if (!serverRuntimeConfig.MONGODB_URL) {
    throw new Error(
        'Must define env variable for MONGODB_URL'
    );
}

let clientPromise: any;
let serverInstance: MongoMemoryServer | undefined;
declare global {
    // eslint-disable-next-line no-unused-vars
    var _mongoClientPromise: any;
}
if (process.env.NODE_ENV === 'test') {
    clientPromise = MongoMemoryServer.create()
        .then((server) => {
            serverInstance = server;
            return server.getUri();
        })
        .then((uri) => mongoose.connect(uri));
} else if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (hot module replacement).
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = mongoose.connect(connectionURL).then((connection) => connection);
    }

    // eslint-disable-next-line no-underscore-dangle
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    clientPromise = mongoose.connect(connectionURL).then((connection) => connection);
}

export default clientPromise as Promise<any>;

export const closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await serverInstance?.stop();
};

/**
 * Remove all the data for all db collections.
 */
export const clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
};