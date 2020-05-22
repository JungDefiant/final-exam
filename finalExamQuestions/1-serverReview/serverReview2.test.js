'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

First, write a function called mapCurrentEvents that maps over the current events object, runs it through a constructor function and returns the resulting array.

The constructor function should be a stand alone function named Events and should have the following keys: 
* author
* categories
* summary
* img_url
* date
* title

Then, write an `/events` route with a callback function called getCurrentEvents.

Next, write a function named getCurrentEvents that takes in the request and response as parameters. This function should call the mapCurrentEvents function and send the result to the front-end.

------------------------------------------------------------------------------------------------ */


// Express sever here
const createServer = () => {
  const express=require('express');
  const app=express();

  // Routes go here
  // Solution code here...

  var server = app.listen(3301, function () {
    var port = server.address().port;
    console.log('Example app listening at port', port);
  });
  return server;
};

const currentEvents = {
news: [
  {
    author: "go",
    category: [
      "world"
    ],
    description: "Israel is bracing for more political turmoil with a midnight deadline looming on coalition talks between the country's two most powerful political parties...",
      id: "1eff5f00-ce1e-4de0-922f-1b70299e9fe2",
      image: "https://s.abcnews.com/images/International/WireAP_1a3a822a09ae4b7a98550a530cf88780_16x9_992.jpg",
      language: "en",
      published: "2020-04-13 18:00:33 +0000",
      title: "Israel's coalition talks falter ahead of midnight deadline",
      url: "https://abcnews.go.com/International/wireStory/israels-coalition-talks-falter-ahead-midnight-deadline-70122257"
    },
    {
      author: "@allahpundit",
      category: [
          "politics"
      ],
      description: "Federalism....",
      id: "2bede54d-9df8-4eda-8ea4-5fe166c6b13c",
      image: "https://hotair.com/wp/wp-content/uploads/2020/04/n-6.jpg",
      language: "en",
      published: "2020-04-13 18:00:14 +0000",
      title: "Cuomo: Some northeastern and mid-Atlantic states will be announcing a regional re-opening plan this afternoon",
      url: "https://hotair.com/archives/allahpundit/2020/04/13/cuomo-northeastern-mid-atlantic-states-will-announcing-regional-re-opening-plan-afternoon/"
    },
    {
      author: "Authored by:\n          \n            Daniel Iglesias",
      category: [
          "technology",
          "gadgets"
      ],
      description: "We're back this week with more applications and games out this week. It's up to you to now take advantage and check them out....",
      id: "8572f23a-06e4-4e55-afa0-33f0b43d00d3",
      image: "https://fscl01.fonpit.de/userfiles/6727621/image/2nd_YEAR/Random/Play_store_ANDROIDPIT.jpg",
      language: "en",
      published: "2020-04-13 18:00:13 +0000",
      title: "The best new apps and games launched for Easter | AndroidPIT",
      url: "https://www.androidpit.com/apps-of-the-week-11-04-2020"
    },
    {
      author: "AndroidPIT",
      category: [
          "technology",
          "gadgets"
      ],
      description: "Our winners and losers of the week provide joy and disappointment. Disney+, Microsoft and many more have polarized this week in tech.(This is a preview - click here to read the entire entry.)...",
      id: "671b1ea0-91a4-4f6b-aca3-0b81bec60bc3",
      image: "None",
      language: "en",
      published: "2020-04-13 18:00:13 +0000",
      title: "Winner and loser of the week: spring fever at Disney, long faces at Microsoft",
      url: "https://www.androidpit.com/winner-loser-disney-microsoft"
    },
    {
      author: "wtae",
      category: [
          "general"
      ],
      description: "Amazon plans to hire 75,000 more workers to meet increased demand for household essentials and other goods spurred by the coronavirus....",
      id: "d341119d-2689-422e-ad43-9a5647dad69e",
      image: "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/lead-s098194910-300-1536076653960312366.jpg?crop=1.00xw:0.753xh;0,0.154xh&resize=640:*",
      language: "en",
      published: "2020-04-13 18:00:12 +0000",
      title: "Amazon hiring 75,000 more workers to keep up with demand during coronavirus outbreak",
      url: "https://www.wtae.com/article/amazon-hiring-75000-more-workers-to-keep-up-with-demand-during-coronavirus-outbreak/32129871"
    },
    {
      author: "wtae",
      category: [
          "general"
      ],
      description: "If I can help out those who need it the most, I want to go ahead and do that....",
      id: "7beda240-ce3a-458a-ad83-8ffca0f2512b",
      image: "https://kubrick.htvapps.com/vidthumb/images/stitch-200413-grocery-delivery0-1586797913.jpg?crop=1xw:1xh;center,top&resize=640:*",
      language: "en",
      published: "2020-04-13 18:00:12 +0000",
      title: "Teen starts website to deliver groceries to seniors during coronavirus outbreak",
      url: "https://www.wtae.com/article/teen-starts-website-to-deliver-groceries-to-seniors-during-coronavirus-outbreak/32130620"
    },
    {
      author: "espn",
      category: [
          "sports"
      ],
      description: "Kamara is heading into the final year of his contract, so he could push for a long-term deal. The question is: With his unique role, what is he worth?...",
      id: "b3c211ff-30c8-45a0-9c0a-3895dd2b84a3",
      image: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1223%2Fr645131_1296x729_16%2D9.jpg",
      language: "en",
      published: "2020-04-13 18:00:10 +0000",
      title: "Alvin Kamara looms as Saints' next big contract decision",
      url: "https://www.espn.com/blog/new-orleans-saints/post/_/id/33054/alvin-kamara-looms-as-saints-next-big-contract-decision"
    },
    {
      author: "Mike Wehner",
      category: [
          "science"
      ],
      description: "Air pollution on the East Coast of the United States has dropped by as much as 30% according to data from NASA satellites.\nA side-by-side comparison of air pollution levels from 2015-2019 and 2020 rev...",
      id: "eb423ae0-a9c3-4d6e-af7d-c110953d4d63",
      image: "None",
      language: "en",
      published: "2020-04-13 17:59:52 +0000",
      title: "The coronavirus pandemic has cleaned up the air on the East Coast",
      url: "https://bgr.com/2020/04/12/coronavirus-updates-air-pollution-quality-nasa/"
    },
    {
      author: "Mike Wehner",
      category: [
          "science"
      ],
      description: "Science can't decide how effective surgical masks and homemade alternatives are at preventing the spread of coronavirus. \nThe CDC suggests making your own masks at home, but researchers can't say if t...",
      id: "dfc77c05-7446-4a32-85ca-0b2cccd4c779",
      image: "None",
      language: "en",
      published: "2020-04-13 17:59:52 +0000",
      title: "Scientists still can't decide if face masks actually do anything",
      url: "https://bgr.com/2020/04/13/coronavirus-mask-effectiveness-surgical-how-to/"
    }
  ]
}

function getCurrentEvents(request, response){
  // Solution code here...
}

const mapCurrentEvents = () => {
  // Solution code here...
}

function Event(obj){
  // Solution code here...
}

describe('Testing challenge', () => {
  test('It should return an array of object instances with a key of author', () => {
    expect(mapCurrentEvents()[0].author).toStrictEqual("go");
  });

  test('It should return an array of object instances with a key of categories', () => {
    expect(mapCurrentEvents()[0].categories).toStrictEqual(["world"]);
  });

  const request = require('supertest');

  let server;

  beforeEach(function () {
    server = createServer();
  });

  afterEach(function () {
    server.close();
  });

  test('responds to /events', function testSlash(done) {
    request(server)
      .get('/events')
      .expect(200, done);
  });

  test('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
