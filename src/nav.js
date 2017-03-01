var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];

module.exports = {

    'SongIntent': function () {
      // plays one of the three possible sorting songs
      var songIndex = helper.getRandomIntInclusive(0, 2);
      var songToPlay = sortingSongs[songIndex];
      this.emit(':ask', songToPlay + messages["afterSongMessage"], messages["afterSongMessage"]);
    },

    'SortIntent': function () {
      // this all sets up the node traversal. the first node is where all the sorting happens.
      // TODO later need an actual trivia game embedded in here. that will determine which node we go to next, based on which house wins
      // for now, just randomly choose between the four houses
      var houseChoice = helper.getRandomIntInclusive(0, 3);
      this.attributes.houseChoice = houseChoice;
      // set state to asking questions
      this.handler.state = states.ANNOUNCEMODE;
      // ask first question, the response will be handled in the askQuestionHandler
      var house = helper.getHouseSpeech(houseChoice);
      // ask the first question
      this.emit(':ask', messages["preSortingMessage"] + "Sort sort sort. So much sorting. Sort all the students! " + messages["postSortingMessage"] + house + messages["postAnnounceMessage"], messages["postAnnounceMessage"]);
    },

    'AskQuestionIntent': function () {
        this.handler.state = states.QUESTIONSMODE;
        this.emit(':ask', messages["chooseQuestionMessage"], messages["chooseQuestionMessage"]);
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
        this.emit(':ask', messages["navMessage"], messages["navMessage"]);
    }
};
