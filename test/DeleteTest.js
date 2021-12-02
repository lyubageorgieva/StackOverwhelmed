
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin123:admin123@stackoverwhelmed.bi9pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });
var assert = require('assert');

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

describe('/DELETE  POST', function() {
    it('DELETE a Post', function(done) {
      MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var mongoose = require('mongoose');
      var objectId = mongoose.Types.ObjectId('61707d64da02db6e1d189622') 
      // Direct Reference to Database
      var dbo = db.db("myFirstDatabase");
      // Create Post
      var myobj = { 
                    user: objectId,
                    text :"How doese contents of one api object array to another?",
                    name:"For Rea",
                    avatar:"//www.gravatar.com/avatar/07f2c1a43e916213a87dc15253b162fe?s=200&d=mm",
                    totalvotes:[],
                    upvote:[],
                    downvote:[],
                    answer:[],
                    comment:[]};
      // Insert Post
        dbo.collection("feeds").deleteOne(myobj, function(err, res) {
        // Will test if object can be removed
          if (err) throw err;
          console.log("1 document removed");
        });
      
        dbo.collection("feeds").find({}).toArray(function(err, docs) {
        // Will not go through if object is not retrievable
        if (err) throw err;
        done()
        });
    });
  });});