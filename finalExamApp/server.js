'use strict';

const superagent = require('superagent');
const express = require('express');
const pg = require('pg');

require('dotenv').config();
const PORT = process.env.PORT || 3002;
const app = express();

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', console.error);
client.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

const url = 'https://pokeapi.co/api/v2/pokemon/';
const sqlDatabaseName = 'favorite_pokemon';

app.get('/', (req, res) => {
  console.log('Getting pokemon data!');
  superagent(url)
    .then(request => {
      const allPokemon = alphabetizePokemon(request.body.results);
      res.render('pages/pokemon/show.ejs', { 'pokemonNames' : allPokemon });
    })
    .catch(console.log);
})

app.get('/favorites', (req, res) => {
  //loads favorite pokemon database from sql
  //renders pokemon from sql to favorites page
  client.query(`SELECT * FROM ${sqlDatabaseName}`)
    .then(result => {
      console.log(result.rows);
      res.render('pages/favorites/show.ejs', { 'favoritePokemon' : result.rows });
    })
    .catch(console.log);
  
})

app.post('/add', (req, res) => {
  //get req.body.favorite and add it to favorite pokemon database in sql
  //INSERT INTO table_name VALUES (value_1, value_2,....)
  console.log(req.body.favorite);
  client.query(`INSERT INTO ${sqlDatabaseName}(name) VALUES($1);`, [req.body.favorite])
    .then(result => {
      console.log(req.body.favorite + " added!");
      res.redirect('/');
    })
    .catch(console.log);
})

function alphabetizePokemon(arr) {
  const pokeNames = [];
  for(let i = 0; i < 20; i++) {
    if(arr[i]) {
      pokeNames.push(arr[i].name);
    }
  }
  pokeNames.sort();
  return pokeNames;
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));