const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


//instruction to DB get ALL genres from the genres table
// router.get('/', (req, res) => {
//   // Add query to get all genres
//   const query = `SELECT * FROM genres;`;
//   pool.query(query)
//     .then( result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all genres', err);
//       res.sendStatus(500)
//     })
//   res.sendStatus(500)
// });


//instruction DB to get ALL genres for selected movie
router.get('/details/:id', (req, res) => {

  const genresId = req.params.id;
  console.log('genre server is:', genresId)

  const queryText = `select array_to_string(array_agg("genres"."name"),', ') as "genre" from "genres"
  join "movies_genres" on "genres"."id" = "movies_genres"."genre_id"
  join "movies" on "movies_genres"."movie_id" = "movies"."id"
  where "movies_genres"."movie_id" = $1;`;
  
  // const queryText = `select "genres"."name" from "genres"
  // join "movies_genres" on "genres"."id" = "movies_genres"."genre_id"
  // join "movies" on "movies_genres"."movie_id" = "movies"."id"
  // where "movies"."id" = $1;`;
  
  pool
  .query (queryText, [genresId])
  .then((result) => {
    res.send(result.rows);
    console.log('get genre router:', result.rows);
  })
  .catch(err => {
      console.log ('error getting,', err);
      res.sendStatus(500);
  });
  });

  module.exports = router;


