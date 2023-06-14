import { Client, Databases, ID } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("647b27f3b82b79140fdc");

const promise = databases.getDocument(
  "6488bfa57fc94ff96dd2",
  "6488c1a4e08dab9f249e",
  "64892af20a7d661f1d69"
);

promise.then(
  function (response) {
    console.log(response.id); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);
