import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

export const mongoConnect = (callback) => {
   MongoClient.connect(
    'mongodb+srv://mixfix-app-server:SzGbioWx41PcxtTE@mixfix-kidex.mongodb.net/test?retryWrites=true&w=majority'
  )
   .then(client => {
     console.log('Connected!');
     callback(client);
  })
     .catch(error => {
       console.log('There was an error: ', error);
     })
};


