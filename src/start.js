var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];
var sortingQuestions = skillVariables["sortingQuestions"];

module.exports = {

    'SongIntent': function () {
      // plays one of the three possible sorting songs
      var songIndex = helper.getRandomIntInclusive(0, 2);
      var songToPlay = sortingSongs[songIndex];
      this.emit(':ask', songToPlay + messages["afterSongMessage"], messages["afterSongMessage"]);
    },

    'SortIntent': function () {

        var firstQuestion = sortingQuestions[0][0];

        this.attributes.Gryffindor = 0;
        this.attributes.Ravenclaw = 0;
        this.attributes.Hufflepuff = 0;
        this.attributes.Slytherin = 0;

        this.attributes.currentSortingQuestion = 0;
        this.attributes.mostPoints = 0;
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
         this.emit(':ask', messages["startOverMessage"], messages["startOverMessage"]);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', messages["helpMessage"], messages["helpMessage"]);
    },
    'Unhandled': function () {
        this.emit(':ask', messages["repeatWelcomeMessage"], messages["repeatWelcomeMessage"]);
    }
};
