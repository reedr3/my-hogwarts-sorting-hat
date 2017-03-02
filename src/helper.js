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
    var gryffindorPoints = context.attributes.Gryffindor;
    var ravenclawPoints = context.attributes.Ravenclaw;
    var hufflepuffPoints = context.attributes.Hufflepuff;
    var slytherinPoints = context.attributes.Slytherin;

    var mostPoints = Math.max(gryffindorPoints, ravenclawPoints, hufflepuffPoints, slytherinPoints);
    context.attributes.mostPoints = mostPoints;

    var winners = [];

    if (gryffindorPoints == mostPoints) {
      winners = winners + [0];
    }
    if (ravenclawPoints == mostPoints) {
      winners = winners + [1];
    }
    if (hufflepuffPoints == mostPoints) {
      winners = winners + [2];
    }
    if (slytherinPoints == mostPoints) {
      winners = winners + [3];
    }

    context.attributes.winners = winners;

    if (winners.length == 1) {
      return winners[0];
    }
    else {
      var winnerIndex = this.getRandomIntInclusive(0, winners.length - 1);
      return winners[winnerIndex];
    }

  },

  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
