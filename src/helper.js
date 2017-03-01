var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var houses = skillVariables["houses"];
var poems = skillVariables["poems"];
var questions = skillVariables["questions"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];

module.exports = {

  // gets the speech output for the chosen house
  getHouseSpeech: function (houseId) {
      return houses[houseId];
  },

  // gets the poem output for the chosen house
  getPoemSpeech: function (context) {
      var houseId = context.attributes.houseChoice;
      return poems[houseId];
  },

  // gets the poem output for the chosen house
  getQuestionSpeech: function (questionId) {
      return questions[questionId];
  },

  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
