
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin123:admin123@stackoverwhelmed.bi9pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });
var assert = require('assert');

describe('/POST Create User',function() {
it('Should return a user', function(done) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // Create a variable that directly is linked to the database
  var dbo = db.db("myFirstDatabase");
  // Create the type of object you would like to create e.g. 'Profile', 'User', 'Comment' ...
  var myobj = {name : "Friendly Reminde", email : "SSTTT@hotmail.com", password : "12345678"}
  // Set the string for the collection (Only for count)
  var obj = 'users';
  // Collect an object that is already an existing collection in database & inserts previously created obj inside that collection
   dbo.collection("users").insertOne(myobj, function(err, res) {
     if (err) throw err;
    //If object was inserted will return this message
     console.log("1 document inserted");
  });
    var dbo = db.db("myFirstDatabase");
    //Retrieves Last User Created on Database
    dbo.collection("users").find({}).sort({_id:-1}).limit(1).toArray(function(err, docs) {
    if (err) throw err;
    // This will determined if needed or not console.log(docs);
    done()
    });});
  }) 
})

describe('/POST Create Profile',function() {
  it('It should have the same bio, the same Github name, the same university, the same field', function(done) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // Create a variable that directly is linked to the database
  var dbo = db.db("myFirstDatabase");
  // Create profile
  var myobj = { bio : "Hello Dallas!", githubname : "Thank you", University : "FrenchbutNot", Field : "Espion"};
  
  // Collect an object that is already an existing collection in database & inserts previously created obj inside that collection
   dbo.collection("profiles").insertOne(myobj, function(err, res) {
     if (err) throw err;
  //If object was inserted will return this message
     console.log("1 document inserted");
    });
    var dbo = db.db("myFirstDatabase");
    // Retrieves Last Profile Created on Database
    dbo.collection("profiles").find({bio : "Hello Dallas!"}).toArray(function(err, docs) {
      if (err) throw err;
      // This will determined if needed or not console.log(docs);
      done()
    });});
 }) });
 

  


describe('/DELETE Delete Profile',function() {
it('It should remove the same bio, the same Github name, the same university, the same field', function(done) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // Create a variable that directly is linked to the database
  var dbo = db.db("myFirstDatabase");
  // Create profile
  var myobj = {bio : "Hello Dallas!", githubname :  "Thank you", University : "FrenchbutNot", Field : "Espion"};
  // Prints out Database of Profiles (Before Removal)
  // dbo.collection("profiles").find({}).toArray(function(err, docs) {
  //   if (err) throw err;
  //   console.log(docs);
  // });
  //Delete the profile from the database
    dbo.collection("profiles").deleteOne(myobj, function(err, res) {
      if (err) throw err;
     //If object was inserted will return this message
      console.log("1 document removed");
    });
  // Prints out Database of Profiles (After Removal)
    dbo.collection("profiles").find({}).toArray(function(err, docs) {
    if (err) throw err;
    // This will determined if needed or not console.log(docs);
    done()
    });
});
}); });

// describe('/DELETE Delete Profile',function() {
//   it('It should remove the same bio, the same Github name, the same university, the same field', function(done) {
//     MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       // Create a variable that directly is linked to the database
//       var dbo = db.db("myFirstDatabase");
//       // Create a post
//       var obj = {user : '61a69888bc84155c28e8a9ed', text : 'How does one copy the contents of one api object array to another?', name:"Red",
//     }