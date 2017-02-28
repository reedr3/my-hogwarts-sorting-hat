var Alexa = require('alexa-sdk');

var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var nodes = skillVariables["nodes"];
var START_NODE = skillVariables[START_NODE];

var helper = require("./helper");

//---------------------------------------------------------------------------------------
//TODO move all these messages to a hash in skillVariables and assign them to a var above

// These are messages that Alexa says to the user during conversation

// This is the intial welcome message
var welcomeMessage = "Welcome to hogworts! Before you begin your studies you must be sorted into your houses. While here, your house will be like your family. Lets begin! Do you want to hear the sorting song or skip to the sorting ceremony? Say begin song or say begin sorting";

// This is the message that is repeated if the response to the initial welcome message is not heard
var repeatWelcomeMessage = "Say yes to begin or say no to exit.";

// this is the message that is repeated if Alexa does not hear/understand the reponse to the welcome message
var promptToStartMessage = "Say yes to begin or say no to exit.";

// This is the prompt during the game when Alexa doesnt hear or understand a yes / no reply
var promptToSayYesNo = "Say yes or no to answer the question.";

// This is the response to the user after the final question when Alex decides on what group choice the user should be given
var decisionMessage = "Better be ";

// This is the prompt to ask the user if they would like to hear a short description of thier chosen profession or to play again
var playAgainMessage = "Say 'describe house' to hear a short description for this house, or do you want to play again?";

// this is the help message during the setup at the beginning of the game
var helpMessage = "I will ask you some questions that will identify which house you belong in. Want to start now?";

// This is the goodbye message when the user has asked to quit the game
var goodbyeMessage = "Ok, see you next year!";

var speechNotFoundMessage = "Could not find speech for node";

var nodeNotFoundMessage = "In nodes array could not find node";

var descriptionNotFoundMessage = "Could not find description for node";

var loopsDetectedMessage = "A repeated path was detected on the node tree, please fix before continuing";

var utteranceTellMeMore = "describe house";

var utterancePlayAgain = "play again";
//-----------------------------------------------------------------------------------------


// --------------- Handlers -----------------------

// Called when the session starts.
exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(newSessionHandler, startGameHandlers, askQuestionHandlers, descriptionHandlers);
    alexa.execute();
};

// set state to start up and  welcome the user
var newSessionHandler = {
  'LaunchRequest': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
  },'AMAZON.HelpIntent': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', helpMessage, helpMessage);
  },
  'Unhandled': function () {
    this.handler.state = states.STARTMODE;
    this.emit(':ask', promptToStartMessage, promptToStartMessage);
  }
};

// --------------- Functions that control the skill's behavior -----------------------

var startGameHandlers = Alexa.CreateStateHandler(states.STARTMODE, require("./start"));

var askQuestionHandlers = Alexa.CreateStateHandler(states.ASKMODE, require("./announce"));

var descriptionHandlers = Alexa.CreateStateHandler(states.DESCRIPTIONMODE, require("./nav"));
