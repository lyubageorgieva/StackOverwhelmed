
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin123:admin123@stackoverwhelmed.bi9pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });
var assert = require('assert');

describe('/POST Create User',function() {
  it('It should have the same name', function() {
  assert.equal("Hi" ,"Lorenzo") }); });

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // Create a variable that directly is linked to the database
  var dbo = db.db("myFirstDatabase");
  // Create the type of object you would like to create e.g. 'Profile', 'User', 'Comment' ...
  var myobj = {name : "Lorenzo", email : "add@hotmail.com", password : "128"}
  // Set the string for the collection (Only for count)
  var obj = 'users';
  // Collect an object that is already an existing collection in database & inserts previously created obj inside that collection
   dbo.collection("users").insertOne(myobj, function(err, res) {
     if (err) throw err;
    //If object was inserted will return this message
     console.log("1 document inserted");
  });
})

// Function used to return the number of a specific collection // Not important!!!
async function Count(client,obj) {
  await client.connect();
  const cursor = client
    .db('myFirstDatabase')
    .collection(obj)
    .find()
  const results = await cursor.toArray();
  if(results.length > 0)
  console.log(`Found : ${results.length} `);
}