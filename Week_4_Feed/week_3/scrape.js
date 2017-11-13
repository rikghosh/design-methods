var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
var events = fs.readFileSync('assets/events.htm');
var friends = fs.readFileSync('assets/friends.htm');
var photos = fs.readFileSync('assets/photos.htm');

var counts = [];

var $ = cheerio.load(events);
var eventcount = $('ul').find('li').length;

$ = cheerio.load(photos);
var photocount = $('.block').length;

$ = cheerio.load(friends);
var friendcount = $('.contents').find('ul').eq(0).find('li').length
var sentcount = $('.contents'). find('ul').eq(1).find('li').length
var deletedcount = $('.contents'). find('ul').eq(4).find('li').length

var totalred = deletedcount + sentcount;

counts.push('friends: ' + friendcount, 'deletedsent: ' + totalred, 'profilephotos: ' + photocount, 'events: ' + eventcount)

console.log(friendcount);
console.log(totalred);
console.log(photocount);
console.log(eventcount);

console.log(counts);
fs.writeFileSync('counts.txt', counts);