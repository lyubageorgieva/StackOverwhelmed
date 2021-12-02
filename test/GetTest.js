

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin123:admin123@stackoverwhelmed.bi9pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });


    //   describe('/GET Return Post By Name', function() {
    //     it('It should have the same name', function(done) {
    
    //         MongoClient.connect(url, function(err, db) {
    //             if (err) throw err;
    //             // Create a variable that directly is linked to the database
    //             var dbo = db.db("myFirstDatabase");
    //             // Collect an object that is already an existing collection in database & inserts previously created obj inside that collection
    //             dbo.collection("feeds").find({name : "For Real"}).toArray(function(err, docs) {
    //                 //If object was inserted will return this message
    //                 //Can be omitted or not when testing
    //                 console.log("1 document retrieved");
    //                 done()
    //             });
    //         })
    
    //     });
    // });