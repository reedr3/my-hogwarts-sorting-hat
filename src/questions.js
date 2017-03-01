var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];

module.exports = {
    'ChooseQuestionIntent': function () {
        // TODO find answer to question that was chosen with this intent
        // emits answer to that question plus anotherQuestionMessage
        var answer = "because i say so";
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
         this.emit(':ask', messages["anotherQuestionMessage"], messages["anotherQuestionMessage"]);
     }
};
