const MongoClient = require('mongodb').MongoClient;
// , assert = require('assert');
const ourQuery = require('./ourQuery');

const url = 'mongodb://localhost:27017/truvoice_test';

function query(db) {
    setTimeout(() => db.close(), 8000);
    return db.collection('opportunities').aggregate(ourQuery);
}

module.exports =
    MongoClient.connect(url)
        .then(function (db) {
            return db;
        })
        .then(function (db) {
            return query(db).toArray();
        }).catch(function (e) {
        console.log(e);
    });


// var MongoClient = require('mongodb').MongoClient,
//     test = require('assert');
// MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
//
//     // Create a collection to hold our documents
//     var collection = db.collection('movie');
//
//     // Insert a test document
//     collection.aggregate([{$project: {_id: 0, "name": 1}}]).then(function (ids) {
//
//         // Retrieve all the documents in the collection
//         collection.find().toArray().then(function (documents) {
//             test.deepEqual([{name: 'tutorials point'}, {name: 'Iron man'}], documents[0].b);
//             console.log(documents);
//             db.close();
//         });
//     });
// });



