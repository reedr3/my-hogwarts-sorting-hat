var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];

module.exports = {

    'ChooseQuestionIntent': function () {
        // emits answer to that question plus anotherQuestionMessage
        var question = parseInt(this.event.request.intent.slots.Question.value);
        var questionId = question - 1;
        var answer = helper.getQuestionSpeech(questionId);
        this.emit(':ask', answer + messages["anotherQuestionMessage"], messages["anotherQuestionMessage"]);
    },

    'AMAZON.YesIntent': function () {
         // Handle Yes intent.
         this.emit(':ask', messages["chooseQuestionMessage"], messages["chooseQuestionMessage"]);
     },

     'AMAZON.NoIntent': function () {
         // Handle No intent.
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
         this.emit(':ask', messages["unhandleMessage"] + messages["anotherQuestionMessage"], messages["anotherQuestionMessage"]);
     }
};
