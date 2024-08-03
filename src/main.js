import { Client, Databases,Query } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  const appwriteConfig={
  endpoint:process.env.endpoint, 
  platform:process.env.platform,
  projectId:process.env.projectId,
  databaseId:process.env.databaseId,
  billsCollectionId:process.env.billsCollectionId,
  productsCollectionId:process.env.productsCollectionId,
  quantityCollectionId:process.env.quantityCollectionId,
  reportsCollectionId:process.env.reportsCollectionId,
  storageId:process.env.storageId
}

const {endpoint,platform,projectId,databaseId,billsCollectionId,productsCollectionId,quantityCollectionId,storageId}=appwriteConfig
  //
  // const client = new Client()
  //    .setEndpoint('https://cloud.appwrite.io/v1')
  //    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  //    .setKey(process.env.APPWRITE_API_KEY);

  const client = new Client();

  const databases=new Databases(client)

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID

  // You can log messages to the console
  log('Hello, Logs!');

  // If something goes wrong, log an error
  error('Hello, Errors!');

  // The `req` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    // return res.send('Hello, World!');
    // return res.json(appwriteConfig)
    const allProducts=await databases.listDocuments(databaseId,productsCollectionId,[
      Query.orderDesc('$createdAt')
  ])
  return res.json(allProducts.documents)
  }

  if (req.method === 'POST') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    // return res.send('Hello, World!');
    // return res.json(appwriteConfig)
    const allProducts=await databases.listDocuments(databaseId,productsCollectionId,[
      Query.orderDesc('$createdAt')
  ])
  return res.json(allProducts.documents)
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
