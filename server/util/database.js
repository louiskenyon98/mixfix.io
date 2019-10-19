import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

let _db;

export const mongoConnect = (callback) => {
   MongoClient.connect(
    'mongodb+srv://mixfix-app-server:SzGbioWx41PcxtTE@mixfix-kidex.mongodb.net/test?retryWrites=true&w=majority'
  )
   .then(client => {
     console.log('Connected!');
     _db = client.db();
     callback();
  })
     .catch(error => {
       console.log('There was an error: ', error);
       throw error;
     })
};

export const getDb = () => {
  if(_db) {
    return _db
  }
  throw 'No database found'
};