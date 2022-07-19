const URL = 'https://fantasy.premierleague.com/api/bootstrap-static/'
const  fetch =require('node-fetch');
const db = require("./app/models");
require('dotenv').config();

db.mongoose
  .connect(process.env.mongoAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    fetch(URL).then(
        res=> res.json()
        ).then(res => {
            db.element_types.remove();
            db.elements.remove();
            db.teams.remove();
           db.elements.insertMany(res.elements); 
           db.element_types.insertMany(res.element_types);
           db.teams.insertMany(res.teams);

        });
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  db.mongoose
  .connect(process.env.mongoAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");


    db.element_types.findOne({plural_name: {$eq: 'Defenders'}}, {id: 1, _id: 0}, (err, result) => {
      db.elements.find({$or: [{
        element_type: {$eq: result.id},
        now_cose: {$lt: 60},
        total_points: {$gt: 90}
        },
        {
          element_type: {$eq: result.id},
          now_cose: {$gt: 60},
          total_points: {$gt: 120}
        }
    ]},{first_name: 1, now_cost: 1, total_points: 1}, (error, data) => {
    console.log(Array.from({length: 300}).fill('*').join(''), 'solution 1', Array.from({length: 300}).fill('*').join(''));

        console.log(data);
      })
    })


    db.element_types.findOne({plural_name: {$eq: 'Midfielders'}}, {id: 1, _id: 0}, (err, result) => {
      db.elements.find({$or: [{
        element_type: {$eq: result.id},
        now_cose: {$lt: 85},
        total_points: {$gt: 100}
        },
        {
          element_type: {$eq: result.id},
          now_cose: {$gt: 85},
          total_points: {$gt: 120}
        }
    ]},{first_name: 1, now_cost: 1, total_points: 1}, (error, data) => {

    console.log(Array.from({length: 300}).fill('*').join(''), 'solution 2', Array.from({length: 300}).fill('*').join(''));

        console.log(data);
      })
    })




    db.element_types.findOne({plural_name: {$eq: 'Forwards'}}, {id: 1, _id: 0}, (err, result) => {
      db.elements.find({$or: [{
        element_type: {$eq: result.id},
        now_cose: {$lt: 75},
        total_points: {$gt: 100}
        },
        {
          element_type: {$eq: result.id},
          now_cose: {$gt: 75},
          total_points: {$gt: 120}
        }
    ]},{first_name: 1, now_cost: 1, total_points: 1}, (error, data) => {
        console.log(Array.from({length: 300}).fill('*').join(''), 'solution 3', Array.from({length: 300}).fill('*').join(''));
        console.log(data);
      })
    })

  })