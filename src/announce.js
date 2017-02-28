var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];

module.exports = {
  'PoemIntent': function () {
      // Handle Poem intent.
      helper.playPoem(this,'poem');
  },
  'ContinueIntent': function () {
      // Handle Continue intent.
      // set to nav mode
      this.handler.state = states.DESCRIPTIONMODE;
      this.emit(':ask', "nav options", "nav options");
  },
  'AMAZON.YesIntent': function () {
      // Handle Yes intent.
      helper.yesOrNo(this,'yes');
  },
  'AMAZON.NoIntent': function () {
      // Handle No intent.
       helper.yesOrNo(this, 'no');
  },
  'AMAZON.HelpIntent': function () {
      this.emit(':ask', "question helper", promptToSayYesNo);
  },
  'AMAZON.StopIntent': function () {
      this.emit(':tell', goodbyeMessage);
  },
  'AMAZON.CancelIntent': function () {
      this.emit(':tell', goodbyeMessage);
  },
  'AMAZON.StartOverIntent': function () {
      // reset the game state to start mode
      this.handler.state = states.STARTMODE;
      this.emit(':ask', "question start over", repeatWelcomeMessage);
  },
  'Unhandled': function () {
      this.emit(':ask', "announce unhandle", "announce unhandle");
  }
};
