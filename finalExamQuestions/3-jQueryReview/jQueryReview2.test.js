'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
/* ------------------------------------------------------------------------------------------------

Without altering the html, write a function named generateSubmitButton that uses jQuery to create a submit button with the text "submit" and append it to the DOM.
------------------------------------------------------------------------------------------------ */
let $ = createSnippetWithJQuery(`
<section>
  <form>
    <label> Frist Name:
      <input type="text" name="first" />
    </label>

    <label> Last Name:
      <input type="text" name="last" />
    </label>
  </form>
</section>
`);

const generateSubmitButton = () => {
  $('form').append('<button>submit</button>');
}

describe('Testing challenge', () => {
  test('It should add a submit button to the DOM', () => {
    generateSubmitButton();
    expect($('button').text()).toStrictEqual('submit');
  })
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
};