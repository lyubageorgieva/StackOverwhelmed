
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
      var myobj = {name : "Friendly Reminde", email : "STTT@hotmail.com", password : "12345678"}
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

       describe('/POST Create POST', function() {
        it('Creating a Post', function() {
      
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var mongoose = require('mongoose');
               var objectId = mongoose.Types.ObjectId('61707d64da02db6e1d189622') 
                // Create a variable that directly is linked to the database
                var dbo = db.db("myFirstDatabase");
                // Create the type of object you would like to create e.g. 'Profile', 'User', 'Comment' ...
                var myobj = { 
                  user: objectId,
                  text :"How doese contents of one api object array to another?",
                  name:"For Rea",
                  avatar:"//www.gravatar.com/avatar/07f2c1a43e916213a87dc15253b162fe?s=200&d=mm",
                  totalvotes:[],
                  upvote:[],
                  downvote:[],
                  answer:[],
                  comment:[]}
                    // Set the string for the collection (Only for count)
      
                // Collect an object that is already an existing collection in database & inserts previously created obj inside that collection
                dbo.collection("feeds").insertOne(myobj, function(err, res) {
                    if (err) throw err;
                    //If object was inserted will return this message
                    console.log("1 document inserted");
                });
            })
      
        });
      });