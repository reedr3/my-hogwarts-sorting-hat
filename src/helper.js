var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var houses = skillVariables["houses"];
var poems = skillVariables["poems"];
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

  addHousePoint: function (context, answer) {

    if (answer == "not griffin door") {
      context.attributes.Gryffindor -= 3;
      context.attributes.nonsenseAnswer = false;
    }
    else if (answer == "not raven claw") {
      context.attributes.Ravenclaw -= 3;
      context.attributes.nonsenseAnswer = false;
    }
    else if (answer == "not huffle puff") {
      context.attributes.Hufflepuff -= 3;
      context.attributes.nonsenseAnswer = false;
    }
    else if (answer == "not slither in") {
      context.attributes.Slytherin -= 3;
      context.attributes.nonsenseAnswer = false;
    }
    else if (answer == "any" || answer == "any is fine") {
      context.attributes.nonsenseAnswer = false;
    }
    else {
      var notInGryffindor = true;
      var notInRavenclaw = true;
      var notInHufflepuff = true;
      var notInSlytherin = true;

      for (i = 0; i < 42; i++) {
        if (houseAnswers["Gryffindor"][i] == answer) {
          context.attributes.Gryffindor += 1;
          notInGryffindor = false;
        }
        if (houseAnswers["Ravenclaw"][i] == answer) {
          context.attributes.Ravenclaw += 1;
          notInRavenclaw = false;
        }
        if (houseAnswers["Hufflepuff"][i] == answer) {
          context.attributes.Hufflepuff += 1;
          notInHufflepuff = false;
        }
        if (houseAnswers["Slytherin"][i] == answer) {
          context.attributes.Slytherin += 1;
          notInSlytherin = false;
        }
      }
      if (notInGryffindor && notInRavenclaw && notInHufflepuff && notInSlytherin) {
        context.attributes.nonsenseAnswer = true;
      }
      else {
        context.attributes.nonsenseAnswer = false;
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
