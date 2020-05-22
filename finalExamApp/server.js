'use strict';

const superagent = require('superagent');
const express = require('express');
const pg = require('pg');
const app = express();
require('dotenv').config();

const url = 'https://pokeapi.co/api/v2/pokemon/';

app.get('/', (req, res) => {
  console.log('Getting pokemon data!');
  superagent(url)
    .then(request => {
      console.log('Alphabetizing pokemon data!');
      const allPokemon = alphabetizePokemon(request.body.results);
      console.log('Rendering data to screen!');
      res.render('/pages/pokemon/show.ejs', { 'pokemonNames' : allPokemon });
    })
    .catch(console.log);
})

function alphabetizePokemon(arr) {
  const pokeNames = [];
  for(let i = 0; i < arr.length; i++) {
    let thisPokemon = arr[i];
    for(let j = i + 1; j < arr.length; i++) {
      let nextPokemon = arr[j];
      if(thisPokemon.name.charAt(0) > nextPokemon.name.charAt(0)) {
        let pokemonToSwitch = nextPokemon;
        arr[j] = thisPokemon;
        arr[i] = pokemonToSwitch;
      }
    }
    pokeNames.push(arr[i]);
  }
  console.log(pokeNames);
  return pokeNames;
}

app.listen(3002, (req, res) => console.log('Listening on port 3002!'));