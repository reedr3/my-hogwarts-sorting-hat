var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var houses = skillVariables["houses"];
var poems = skillVariables["poems"];
var questions = skillVariables["questions"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];

module.exports = {

  // play the appropriate poem for the house that was announced
  playPoem: function (context, response) {
    var poemNodeId = this.getPoemNode(context.attributes.currentNode, response);
    // get the speech for the child node
    var message = this.getSpeechForNode(poemNodeId);
    context.emit(':ask', message + messages["continueMessage"], message + messages["continueMessage"]);
  },

  // TODO do i still need this yesNo function?????????? should i replace it with more specific logic?
  // if i get rid of nodes, should probably ditch it

  // logic to provide the responses to the yes or no responses to the main questions
  yesOrNo: function (context, reply) {
      // this is a question node so we need to see if the user picked yes or no
      var nextNodeId = this.getNextNode(context.attributes.currentNode, reply);
      // error in node data
      if (nextNodeId == -1)
      {
          context.handler.state = states.STARTMODE;
          // the current node was not found in the nodes array
          // this is due to the current node in the nodes array having a yes / no node id for a node that does not exist
          context.emit(':tell', "node not found");
          //context.emit(':tell', nodeNotFoundMessage, nodeNotFoundMessage);
      }
      // get the speech for the child node
      var message = this.getSpeechForNode(nextNodeId);
      // set the current node to next node we want to go to
      context.attributes.currentNode = nextNodeId;
      context.emit(':ask', message, message);
  },

  // returns the speech for the provided node id
  getSpeechForNode: function (nodeId) {
      for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].node == nodeId) {
              return nodes[i].message;
          }
      }
      return "speechNotFoundMessage" + nodeId;
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

  // gets the speech output for the chosen house
  getHouseSpeech: function (houseId) {
      return houses[houseId];
  },

  // gets the poem output for the chosen house
  getPoemSpeech: function (context) {
      var houseId = context.attributes.houseChoice;
      return poems[houseId];
  },

  // gets the poem output for the chosen house
  getQuestionSpeech: function (questionId) {
      return questions[questionId];
  },

  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
