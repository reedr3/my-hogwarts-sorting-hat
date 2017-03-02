var Alexa = require('alexa-sdk');

var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var messages = skillVariables["messages"];

var helper = require("./helper");


// --------------- Handlers -----------------------

// Called when the session starts.
exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(newSessionHandler, startHandlers, sortingHandlers, announceHandlers, navHandlers, questionsHandlers);
    alexa.execute();
};

// set state to start up and  welcome the user
var newSessionHandler = {
  'LaunchRequest': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', messages["welcomeMessage"], messages["repeatWelcomeMessage"]);
  },'AMAZON.HelpIntent': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', messages["helpMessage"], messages["helpMessage"]);
  },
  'Unhandled': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', messages["repeatWelcomeMessage"], messages["repeatWelcomeMessage"]);
  }
};

// --------------- Functions that control the skill's behavior -----------------------

var startHandlers = Alexa.CreateStateHandler(states.STARTMODE, require("./start"));

var sortingHandlers = Alexa.CreateStateHandler(states.SORTINGMODE, require("./sorting"));

var announceHandlers = Alexa.CreateStateHandler(states.ANNOUNCEMODE, require("./announce"));

var navHandlers = Alexa.CreateStateHandler(states.NAVMODE, require("./nav"));

var questionsHandlers = Alexa.CreateStateHandler(states.QUESTIONSMODE, require("./questions"));
