import {mongoConnect} from '../util/database';


export const databaseConnectionTest = (req, res) => {
  mongoConnect((client) => {
    console.log(client)
  })
};