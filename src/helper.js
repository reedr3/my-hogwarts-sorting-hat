var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var houses = skillVariables["houses"];
var poems = skillVariables["poems"];
var questions = skillVariables["questions"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];
var houseAnswers = skillVariables["houseAnswers"];

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

  addHousePoint: function (context, answer) {
    for (i = 0; i < 5; i++) {
      if (houseAnswers["Gryffindor"][i] == answer) {
        context.attributes.Gryffindor += 1;
      }
      else if (houseAnswers["Ravenclaw"][i] == answer) {
        context.attributes.Ravenclaw += 1;
      }
      else if (houseAnswers["Hufflepuff"][i] == answer) {
        context.attributes.Hufflepuff += 1;
      }
      else if (houseAnswers["Slytherin"][i] == answer) {
        context.attributes.Slytherin += 1;
      }
    }
  },

  winningHouse: function (context) {

    var housePoints = [
      context.attributes.Gryffindor,
      context.attributes.Ravenclaw,
      context.attributes.Hufflepuff,
      context.attributes.Slytherin
    ];

    var highestPoints = Math.max.apply(Math, housePoints);
    context.attributes.highestPoints = highestPoints;

    var winners = [];

    for (i = 0; i < 4; i++) {
      if (housePoints[i] == highestPoints) {
        winners.push(i);
      }
    }

    context.attributes.winners = winners;

    if (winners.length == 1) {
      return winners[0];
    }
    else {
      var randomWinnerIndex = this.getRandomIntInclusive(0, winners.length - 1);
      return winners[randomWinnerIndex];
    }

  },

  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
