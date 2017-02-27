/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
 * The Intent Schema, Custom Slots, and Sample Utterances for this skill, as well as
 * testing instructions are located at http://amzn.to/1LzFrj6
 *
 * For additional samples, visit the Alexa Skills Kit Getting Started guide at
 * http://amzn.to/1LGWsLG
 */

var Alexa = require('alexa-sdk');

var states = {
    STARTMODE: '_STARTMODE',                // Prompt the user to start or restart the game.
    ASKMODE: '_ASKMODE',                    // Alexa is asking user the questions.
    DESCRIPTIONMODE: '_DESCRIPTIONMODE'     // Alexa is describing the final choice and prompting to start again or quit
};


// starting node
var nodes = [{ "node": 1, "message": "Do you want to hear the sorting song or skip to the sorting ceremony? Say begin song or say begin sorting", "song": 2, "sort": 3, "yes": 2, "no": 3 },
// song and sorting nodes
             { "node": 2, "message": "Sorting song goes here", "sort": 3, "yes": 3, "no": 1 },
             { "node": 3, "message": "Put me on so I can sort you! Sort sort sort. So much sorting. Sort all the students! Take me off so I can announce your house!", "G": 4, "R": 5, "H": 6, "S": 7, "yes": 4, "no": 6 },
// house announcement nodes
             { "node": 4, "message": "Gryffindor! Would you like to hear more about your house or continue? Say hear more or say continue.", "poem": 8, "continue": 12, "yes": 8, "no": 12 },
             { "node": 5, "message": "Ravenclaw! Would you like to hear more about your house or continue? Say hear more or say continue.", "poem": 9, "continue": 12, "yes": 9, "no": 12 },
             { "node": 6, "message": "Hufflepuff! Would you like to hear more about your house or continue? Say hear more or say continue.", "poem": 10, "continue": 12, "yes": 10, "no": 12 },
             { "node": 7, "message": "Slytherin! Would you like to hear more about your house or continue? Say hear more or say continue.", "poem": 11, "continue": 12, "yes": 11, "no": 12 },
// house poem nodes
             { "node": 8, "message": "Brave and stuff", "continue": 12, "yes": 12, "no": 3 },
             { "node": 9, "message": "Really smart", "continue": 12, "yes": 12, "no": 3 },
             { "node": 10, "message": "Honey badger don't give a shhh", "continue": 12, "yes": 12, "no": 3 },
             { "node": 11, "message": "Cunning or whatever", "continue": 12, "yes": 12, "no": 3 },
// song again, sort again, or questions node, or finish
             { "node": 12, "message": "Would you like to hear the sorting song again? Or would you like to sort another student? Or would the student just sorted like to ask me some questions? Say begin song, or say begin sorting, or say I have a question (and put the hat back on). Or say mischief managed to finish.", "song": 2, "sort": 3, "question": 13, "yes": 2, "no": 13 },
// which question list (bee in your bonnet)
             { "node": 13, "message": "Bee in your bonnet? Which of the following questions would you like to ask? One, did you put me in the right house? Two, why do you take longer to sort some people? Three, third question. Four, fourth question. Say one, two, three, or four to ask your question.", "one": 14, "two": 15, "three": 16, "four": 17, "yes": 14, "no": 15 },
// question answers
             { "node": 14, "message": "Witty answer about being right or something. Do you have another question?", "yes": 13, "no": 12 },
             { "node": 15, "message": "For some it is a clear choice, others are harder to decide. Do you have another question?", "yes": 13, "no": 12 },
             { "node": 16, "message": "Witty answer number three. Do you have another question?", "yes": 13, "no": 12 },
             { "node": 17, "message": "Witty answer number four. Do you have another question?", "yes": 13, "no": 12 }
];

// this is used for keep track of visted nodes when we test for loops in the tree
var visited;

// These are messages that Alexa says to the user during conversation

// This is the intial welcome message
var welcomeMessage = "Welcome to Hogwarts! Before you begin your studies you must be sorted into your houses. While here, your house will be like your family. Would you like to begin?";

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

// the first node that we will use
var START_NODE = 1;

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

// Called at the start of the game, picks and asks first question for the user
var startGameHandlers = Alexa.CreateStateHandler(states.STARTMODE, {
    'AMAZON.YesIntent': function () {

        // ---------------------------------------------------------------
        // // check to see if there are any loops in the node tree - this section can be removed in production code
        // visited = [nodes.length];
        // var loopFound = helper.debugFunction_walkNode(START_NODE);
        // if( loopFound === true)
        // {
        //     // comment out this line if you know that there are no loops in your decision tree
        //      this.emit(':tell', loopsDetectedMessage);
        // }
        // ---------------------------------------------------------------

        // set state to asking questions
        this.handler.state = states.ASKMODE;

        // ask first question, the response will be handled in the askQuestionHandler
        var message = helper.getSpeechForNode(START_NODE);

        // record the node we are on
        this.attributes.currentNode = START_NODE;

        // ask the first question
        this.emit(':ask', message, message);
    },
    'AMAZON.NoIntent': function () {
        // Handle No intent.
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', goodbyeMessage);
    },
    'AMAZON.StartOverIntent': function () {
         this.emit(':ask', promptToStartMessage, promptToStartMessage);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', helpMessage, helpMessage);
    },
    'Unhandled': function () {
        this.emit(':ask', promptToStartMessage, promptToStartMessage);
    }
});


// user will have been asked a question when this intent is called. We want to look at their yes/no
// response and then ask another question. If we have asked more than the requested number of questions Alexa will
// make a choice, inform the user and then ask if they want to play again
var askQuestionHandlers = Alexa.CreateStateHandler(states.ASKMODE, {

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
        this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
    },
    'Unhandled': function () {
        this.emit(':ask', "question unhandle", promptToSayYesNo);
    }
});

// user has heard the final choice and has been asked if they want to hear the description or to play again
var descriptionHandlers = Alexa.CreateStateHandler(states.DESCRIPTIONMODE, {

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
});

// --------------- Helper Functions  -----------------------

var helper = {

    // gives the user more information on their final choice
    giveDescription: function (context) {

        // get the speech for the child node
        var description = helper.getDescriptionForNode(context.attributes.currentNode);
        var message = description + ', ' + repeatWelcomeMessage;

        context.emit(':ask', message, message);
    },

    // logic to provide the responses to the yes or no responses to the main questions
    yesOrNo: function (context, reply) {

        // this is a question node so we need to see if the user picked yes or no
        var nextNodeId = helper.getNextNode(context.attributes.currentNode, reply);

        // error in node data
        if (nextNodeId == -1)
        {
            context.handler.state = states.STARTMODE;

            // the current node was not found in the nodes array
            // this is due to the current node in the nodes array having a yes / no node id for a node that does not exist
            context.emit(':tell', nodeNotFoundMessage, nodeNotFoundMessage);
        }

        // get the speech for the child node
        var message = helper.getSpeechForNode(nextNodeId);

        // have we made a decision
        if (helper.isAnswerNode(nextNodeId) === true) {

            // set the game state to description mode
            context.handler.state = states.DESCRIPTIONMODE;

            // append the play again prompt to the decision and speak it
            message = decisionMessage + ' ' + message + ' ,' + playAgainMessage;
        }

        // set the current node to next node we want to go to
        context.attributes.currentNode = nextNodeId;

        context.emit(':ask', message, message);
    },

    // gets the description for the given node id
    getDescriptionForNode: function (nodeId) {

        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].node == nodeId) {
                return nodes[i].description;
            }
        }
        return descriptionNotFoundMessage + nodeId;
    },

    // returns the speech for the provided node id
    getSpeechForNode: function (nodeId) {

        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].node == nodeId) {
                return nodes[i].message;
            }
        }
        return speechNotFoundMessage + nodeId;
    },

    // checks to see if this node is an choice node or a decision node
    isAnswerNode: function (nodeId) {

        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].node == nodeId) {
                if (nodes[i].yes === 0 && nodes[i].no === 0) {
                    return true;
                }
            }
        }
        return false;
    },

    // gets the next node to traverse to based on the yes no response
    getNextNode: function (nodeId, yesNo) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].node == nodeId) {
                if (yesNo == "yes") {
                    return nodes[i].yes;
                }
                return nodes[i].no;
            }
        }
        // error condition, didnt find a matching node id. Cause will be a yes / no entry in the array but with no corrosponding array entry
        return -1;
    },

    // Recursively walks the node tree looking for nodes already visited
    // This method could be changed if you want to implement another type of checking mechanism
    // This should be run on debug builds only not production
    // returns false if node tree path does not contain any previously visited nodes, true if it finds one
    debugFunction_walkNode: function (nodeId) {

        // console.log("Walking node: " + nodeId);

        if( helper.isAnswerNode(nodeId) === true) {
            // found an answer node - this path to this node does not contain a previously visted node
            // so we will return without recursing further

            // console.log("Answer node found");
             return false;
        }

        // mark this question node as visited
        if( helper.debugFunction_AddToVisited(nodeId) === false)
        {
            // node was not added to the visited list as it already exists, this indicates a duplicate path in the tree
            return true;
        }

        // console.log("Recursing yes path");
        var yesNode = helper.getNextNode(nodeId, "yes");
        var duplicatePathHit = helper.debugFunction_walkNode(yesNode);

        if( duplicatePathHit === true){
            return true;
        }

        // console.log("Recursing no");
        var noNode = helper.getNextNode(nodeId, "no");
        duplicatePathHit = helper.debugFunction_walkNode(noNode);

        if( duplicatePathHit === true){
            return true;
        }

        // the paths below this node returned no duplicates
        return false;
    },

    // checks to see if this node has previously been visited
    // if it has it will be set to 1 in the array and we return false (exists)
    // if it hasnt we set it to 1 and return true (added)
    debugFunction_AddToVisited: function (nodeId) {

        if (visited[nodeId] === 1) {
            // node previously added - duplicate exists
            // console.log("Node was previously visited - duplicate detected");
            return false;
        }

        // was not found so add it as a visited node
        visited[nodeId] = 1;
        return true;
    }
};
