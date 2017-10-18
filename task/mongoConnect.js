const MongoClient = require('mongodb').MongoClient;
// , assert = require('assert');

// Connection URL

const url = 'mongodb://localhost:27017/test';

let data;

// const findDocuments = function(db, callback) {
//     const query=db.collection('movie').aggregate([{$project:{_id:0,"name" :1}}]);
//     query.toArray(function(err, docs) {
//         console.log("Found the following records");
//         console.log(docs);
//         callback(docs);
//     });
// };

(async function(){
    await MongoClient.connect(url, function (err, db) {
        console.log("Connected correctly to server");
        db.collection('movie').aggregate([{$project: {_id: 0, "name": 1}}]).toArray(function (err, docs) {
            console.log("Found the following records");
            console.log(docs);
        });
        db.close();
    });
})().catch((e)=>console.log("Error ", e));


// console.log(data);

