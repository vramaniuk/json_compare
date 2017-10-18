
const MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL

const url = 'mongodb://localhost:27017/test';

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('movie');
    // Find some documents
    collection.find({},{_id:0,"name" :1}).toArray(function(err, docs) {
        assert.equal(err, null);
        assert.equal(2, docs.length);
        console.log("Found the following records");
        console.dir(docs);
        callback(docs);
    });
}


// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    findDocuments(db, function() {
        db.close();
    });
});
console.log();

