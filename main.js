var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
$(el).html('<ul></ul>')

planets.forEach( function(val) {
  $('#planets ul').append(`<li>${val}</li>`)
})

// Use the map method to create a new array where the first letter of each planet is capitalized
var capPlanets = planets.map( function(str) {
  return str[0].toUpperCase() + str.slice(1)
})

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter( function(str) {
  if(str.indexOf('e') > -1) return true
  return false
})

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce( function(a, b, i, arr) {
  if(i === arr.length - 1) return a + " " + b + "."
  return a + " " + b
})












