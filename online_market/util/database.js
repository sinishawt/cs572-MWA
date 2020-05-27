const MongoClient =  require('mongodb').MongoClient;

const mongoConnect = function(callback) {
    MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then( client => {
        callback(client);
    })
    .catch(error => {
        console.log(err);
        throw new Error('Connection Failed');
    });
}

module.exports = mongoConnect;