'use strict';
var user = prompt('Welcome earthling! What is your name?');
console.log('User:', user);
alert('Hi there ' + user + ', I\'m going to ask you some questions so that you can get to know me. After you answer the questions, please read my Bio!');
//First Question
var moonBeams = prompt('how many moon beams has tama caught when on pluto?');
console.log('number of moonbeams:', moonBeams);
if (moonBeams === 14 || moonBeams === 10){
  alert ('correct Stargazer!');
}
//Second Question
var saturnBurns = prompt('how many saturn burns did tama get when going to highschool?');
console.log('number of saturn burns:', saturnBurns);
if (saturnBurns === 2 || saturnBurns === 3) {
  alert ('OUCH! but thats correct!');
}
//Third Question
var venus = prompt('is tama part venician?\n(Please answer "y" for Yes and "n" for No)');
console.log('tama part venician:', venus);
//Forth Question
var mars = prompt('Did Tama work on Mars?\n(Please answer "y" for Yes and "n" for No');
console.log('work on mars:', mars);
//Fifth Question
var blackHole = prompt('Did Tama go to highschool in a black hole in the middle of the universe?\n(Please answer "y" for Yes and "n" for No)');
