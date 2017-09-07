var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];
var sortingQuestions = skillVariables["sortingQuestions"];

module.exports = {

    'SongIntent': function () {
      // plays one of the three possible sorting songs (very much skewed in favor of first and shortest song)
      if (this.attributes.songIndex) {
        var songIndex = this.attributes.songIndex;
      }
      else {
        var songIndex = helper.getRandomIntInclusive(0, 19);
      }
      var songToPlay = sortingSongs[songIndex];
      this.emit(':ask', songToPlay + messages["afterSongMessage"], messages["afterSongMessage"]);
    },

    'SortIntent': function () {

      this.attributes.Gryffindor = 0;
      this.attributes.Ravenclaw = 0;
      this.attributes.Hufflepuff = 0;
      this.attributes.Slytherin = 0;

      this.attributes.currentSortingQuestion = 0;
      this.attributes.nonsenseAnswer = false;
      this.attributes.currentSortingQuestionVersion = helper.getRandomIntInclusive(0, 2);

      var firstQuestion = sortingQuestions[0][this.attributes.currentSortingQuestionVersion];

      this.attributes.highestPoints = 0;
      this.attributes.winners = [];

      this.handler.state = states.SORTINGMODE;

      this.emit(':ask', messages["preSortingMessage"] + firstQuestion, firstQuestion);
    },



    'AMAZON.StopIntent': function () {
        this.emit(':tell', messages["goodbyeMessage"]);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', messages["goodbyeMessage"]);
    },
    'AMAZON.StartOverIntent': function () {
        this.handler.state = states.STARTMODE;
        this.emit(':ask', messages["startOverMessage"] + messages["welcomeMessage"], messages["repeatWelcomeMessage"]);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', messages["helpMessage"], messages["shortNavMessage"]);
    },
    'Unhandled': function () {
        this.emit(':ask', messages["unhandleMessage"] + messages["shortNavMessage"], messages["shortNavMessage"]);
    }
};
