import { Account, Client } from "appwrite";
import env from "react-dotenv";

const client = new Client();

client.setEndpoint(env.APPWRITE_ENDPOINT).setProject(env.APPWRITE_PROJECT_ID);

export const account = new Account(client);
