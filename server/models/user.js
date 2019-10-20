import mongodb from 'mongodb';
import {getDb} from '../util/database';

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }
  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }
  static findById(userId) {
    const db = getDb();
    return db.collection('users').findOne({_id: new ObjectId(userId)});
  }
}

export default User;