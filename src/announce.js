var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];

module.exports = {

  'PoemIntent': function () {
      // Handle Poem intent.
      var poem = helper.getPoemSpeech(this);
      this.emit(':ask', poem + messages["continueMessage"], messages["continueMessage"]);
  },

  'ContinueIntent': function () {
      // Handle Continue intent.
      // set to nav mode
      this.handler.state = states.NAVMODE;
      this.emit(':ask', messages["navMessage"], messages["navMessage"]);
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
      this.emit(':ask', messages["postAnnounceMessage"], messages["postAnnounceMessage"]);
  }
};
