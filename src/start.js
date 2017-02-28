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
        houseChoiceNode = helper.getRandomIntInclusive(1, 4);

        // set state to asking questions
        this.handler.state = states.ASKMODE;
        // ask first question, the response will be handled in the askQuestionHandler
        var message = helper.getSpeechForNode(houseChoiceNode);
        // record the node we are on
        this.attributes.currentNode = houseChoiceNode;
        // ask the first question
        this.emit(':ask', "Put me on so I can sort you! Sort sort sort. So much sorting. Sort all the students! Take me off so I can announce your house! " + message, message);
    },

    'AMAZON.StopIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.StartOverIntent': function () {
         this.emit(':ask', "start start over message", promptToStartMessage);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', "start help message", helpMessage);
    },
    'Unhandled': function () {
        this.emit(':ask', "start unhandle message", promptToStartMessage);
    }
};
