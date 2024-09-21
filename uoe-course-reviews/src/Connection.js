const { MongoClient} = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

//Maybe the database just stores user reviews, and does not store the classes themselves?
async function main() {
  const uri = "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
  
    await listCourses(client);
  
  } catch (e) {
    console.error(e);
  }
  
  finally {
    await client.close();
  }
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function listCourses(client){
  db = client.db("UoECoursesData")
  coursesCollection = db.collection("CoursesCollection")
  cursor = await coursesCollection.find({})
  
  await cursor.forEach(console.log); //I used the await method wrongly
};

main().catch(console.error);