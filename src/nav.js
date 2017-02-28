var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];

module.exports = {
  'SongIntent': function () {
      // plays sorting song
      // TODO add function that chooses one of the three songs
      this.emit(':ask', "i am a sorting song of much sorting. would you like to begin the sorting now? say begin sorting");
  },
  'SortIntent': function () {
      // this all sets up the node traversal. the first node is where all the sorting happens.
      // TODO later need an actual trivia game embedded in here. that will determine which node we go to next, based on which house wins
      // for now, just randomly choose between the four houses
      houseChoiceNode = helper.getRandomIntInclusive(4, 7);

      // set state to asking questions
      this.handler.state = states.ASKMODE;
      // ask first question, the response will be handled in the askQuestionHandler
      var message = helper.getSpeechForNode(houseChoiceNode);
      // record the node we are on
      this.attributes.currentNode = houseChoiceNode;
      // ask the first question
      this.emit(':ask', "Put me on so I can sort you! Sort sort sort. So much sorting. Sort all the students! Take me off so I can announce your house! " + message, message);
  },
  'AskQuestionIntent': function () {

      // set state to asking questions
      //this.handler.state = states.QUESTIONMODE;
      // ask first question, the response will be handled in the askQuestionHandler
      //var message = helper.getSpeechForNode(houseChoiceNode);
      // record the node we are on
      //this.attributes.currentNode = houseChoiceNode;
      // ask the first question
      this.emit(':ask', "which question do you wanna ask?", message);
  },

 'AMAZON.YesIntent': function () {
        // Handle Yes intent.
        // reset the game state to start mode
        this.handler.state = states.STARTMODE;
        this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
    },
    'AMAZON.NoIntent': function () {
        // Handle No intent.
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', "description helper", promptToSayYesNo);
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
        this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
    },
    'DescriptionIntent': function () {
        //var reply = this.event.request.intent.slots.Description.value;
        //console.log('HEARD: ' + reply);
        helper.giveDescription(this);
      },

    'Unhandled': function () {
        this.emit(':ask', "description unhandle", promptToSayYesNo);
    }
};
