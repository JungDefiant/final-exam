'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
const Mustache = require('mustache');

/* ------------------------------------------------------------------------------------------------

CHALLENGE 1 - Review

Use the characters data below for all of the challenges except challenge 2.

Write a function named templatingWithMustache that uses mustache to create the markup templates for each of the characters. Use the snippet as your guide for creating your templates. Return an array of template strings. Note: this function does not need to actually append the markup to the DOM. 

------------------------------------------------------------------------------------------------ */
let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

let $ = createSnippetWithJQuery(`
<h2> {{ name }} </h2>
<h3> {{ spouse }} </h3>
{{#children}}
* {{.}}
{{/children}}
<p> {{ house }} </p>
`)

const templatingWithMustache = () => {
  // Solution code here...
}

describe('Testing challenge', () => {
  test('It should return html markup with the character', () => {
    const filledTemplates = templatingWithMustache();
    expect(filledTemplates).toStrictEqual([`
    <h2> Eddard </h2>
    <h3> Catelyn </h3>
    * Robb
    * Sansa
    * Arya
    * Bran
    * Rickon
    <p> Stark </p>
  `,
    `
    <h2> Jon A. </h2>
    <h3> Lysa </h3>
    * Robin
    <p> Arryn </p>
  `,
    `
    <h2> Cersei </h2>
    <h3> Robert </h3>
    * Joffrey
    * Myrcella
    * Tommen
    <p> Lannister </p>
  `,
    `
    <h2> Daenarys </h2>
    <h3> Khal Drogo </h3>
    * Drogon
    * Rhaegal
    * Viserion
    <p> Targaryen </p>
  `,
    `
    <h2> Mace </h2>
    <h3> Alerie </h3>
    * Margaery
    * Loras
    <p> Tyrell </p>
  `,
    `
    <h2> Euron </h2>
    <h3>  </h3>
    <p> Greyjoy </p>
  `,
    `
    <h2> Jon S. </h2>
    <h3>  </h3>
    <p> Snow </p>
  `])
  })
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
};