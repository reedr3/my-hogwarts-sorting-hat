var helper = require("./helper");
var skillVariables = require("./skill-variables");
var states = skillVariables["states"];
var messages = skillVariables["messages"];
var sortingSongs = skillVariables["sortingSongs"];
var sortingQuestions = skillVariables["sortingQuestions"];

module.exports = {

    'AnswerIntent': function () {
        // for now all question are multiple choice, 1-4
        // there are a fixed number of questions for now in a fixed order
        // TODO
        // have several different numbers to choose from to determine number of questions each time
        // have a helper fn which scrambles order (maybe always have the 'not slytherin' question last)
        // have questions that are yes or no answers or word answers (numbers feel so artificial)
        // if i really have too much time on my hands, could make a node progression so certain answers trigger certain questions, etc.. (could also determine the length based on which path down tree you take...)


        // gets the number of the answer the user gave
        var answer = parseInt(this.event.request.intent.slots.Answer.value);

        // var winningHouse = helper.houseTally(answer);
        // this.attribute.winningHouse = winningHouse;

        this.attributes.currentSortingQuestion += 1;

        if (this.attributes.currentSortingQuestion <= 4) {
          this.emit(':ask', sortingQuestions[this.attributes.currentSortingQuestion], sortingQuestions[this.attributes.currentSortingQuestion]);
        }
        else if (this.attributes.currentSortingQuestion > 4) {
          this.emit(':ask', messages["endOfSortingMessage"], messages["endOfSortingMessage"]);
        }
        // call helper which keeps tally of how many points for each house based on answers (stored in this.attributes.Gryffindor, etc.)
        // call helper which identifies next question to ask
        // emit next question
        //this.emit(':ask', answer + messages["anotherQuestionMessage"], messages["anotherQuestionMessage"]);
    },

    'ReadyIntent': function () {

      var houseChoice = helper.getRandomIntInclusive(0, 3);
      //var houseChoice = this.attributes.winningHouse;
      this.attributes.houseChoice = houseChoice;
      var house = helper.getHouseSpeech(houseChoice);

      this.handler.state = states.ANNOUNCEMODE;

      this.emit(':ask', messages["postSortingMessage"] + house + messages["postAnnounceMessage"], messages["postAnnounceMessage"]);
    },

    // 'AMAZON.YesIntent': function () {
    //      // Handle Yes intent.
    //      this.emit(':ask', messages["chooseQuestionMessage"], messages["chooseQuestionMessage"]);
    //  },
    //
    //  'AMAZON.NoIntent': function () {
    //      // Handle No intent.
    //      this.handler.state = states.NAVMODE;
    //      this.emit(':ask', messages["navMessage"], messages["navMessage"]);
    //  },



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
         this.emit(':ask', messages["unhandleMessage"] + messages["sortingHelpMessage"], messages["sortingHelpMessage"]);
     }
};
