module.exports = {

  // TODO get rid of nodes. pretty sure they can be replaced with just three lists of possible things: houses, house poems, and questions
  // nodes 9 and 10 can be deleted altogether, covered by messages
  // house and house poems can be matched up by index number in list (G house and G house poem both index 0 for example)
  // remove extrneous intents from each state and check for stuff i no longer need or could consolidate
  // maybe pull sorting song selection into helper function that sets variable that lasts until program restarted
  // - this helper function gets called in start state song intent, and then later nav state start intent just plays the same song saved to a variable from before (only new song if program restarted)
  // create separate file to run actual sorting (you know... the point of all this, lol)
  // extra credit: have it know if it's sorted a student already since it was last restarted so it can ask if want to sort another student or something
  // extra extra credit: have it keep a tally of people's names (or numbers at least) and which houses they were sorted into

  "nodes": [
  // house announcement nodes
               { "node": 1, "message": "Gryffindor! ", "poem": 5, "continue": 9, "yes": 5, "no": 9 },
               { "node": 2, "message": "Ravenclaw! ", "poem": 6, "continue": 9, "yes": 6, "no": 9 },
               { "node": 3, "message": "Hufflepuff! ", "poem": 7, "continue": 9, "yes": 7, "no": 9 },
               { "node": 4, "message": "Slytherin! ", "poem": 8, "continue": 9, "yes": 8, "no": 9 },
  // house poem nodes
               { "node": 5, "message": "Brave and stuff ", "yes": 9, "no": 9 },
               { "node": 6, "message": "Really smart ", "yes": 9, "no": 9 },
               { "node": 7, "message": "Honey badger don't give a shhh ", "yes": 9, "no": 9 },
               { "node": 8, "message": "Cunning or whatever ", "yes": 9, "no": 9 },
  // song again, sort again, or questions node, or finish
               { "node": 9, "message": "Would you like to hear the sorting song again? Or would you like to sort another student? Or would the student just sorted like to ask me some questions? Say begin song, or say begin sorting, or say I have a question (and put the hat back on). Or say mischief managed to finish. ", "yes": 10, "no": 10 },
  // which question list (bee in your bonnet)
               { "node": 10, "message": "Bee in your bonnet? Which of the following questions would you like to ask? One, did you put me in the right house? Two, why do you take longer to sort some people? Three, third question. Four, fourth question. Say one, two, three, or four to ask your question. ", "one": 11, "two": 12, "three": 13, "four": 14, "yes": 11, "no": 12 },
  // question answers
               { "node": 11, "message": "Witty answer about being right or something. ", "yes": 10, "no": 9 },
               { "node": 12, "message": "For some it is a clear choice, others are harder to decide. ", "yes": 10, "no": 9 },
               { "node": 13, "message": "Witty answer number three. ", "yes": 10, "no": 9 },
               { "node": 14, "message": "Witty answer number four. ", "yes": 10, "no": 9 }
  ],

  "states": {
      STARTMODE: '_STARTMODE',        // prompt user to start with either song or sorting
      ANNOUNCEMODE: '_ANNOUNCEMODE',  // announce house user was sorted into and offer poem about house
      NAVMODE: '_NAVMODE',             // intermediate/central menu where you can go back to song, sort another user, or ask hat questions
      QUESTIONSMODE: '_QUESTIONSMODE' // offers possible questions the user can ask the hat, then provides answers
  },

  "messages": {
      "welcomeMessage": "Welcome to hogworts! Before you begin your studies you must be sorted into your houses. While here, your house will be like your family. Lets begin! Do you want to hear the sorting song or do you want to skip to the sorting ceremony? Say begin song or say begin sorting. ",
      "repeatWelcomeMessage": "Say begin song or say begin sorting. ",
      "afterSongMessage": "Heed well my words. Would you like to begin the sorting now? Say begin sorting. ",
      "preSortingMessage": "Put me on so I can sort you! ",
      "postSortingMessage": "Take me off so I can announce your house! ... Better be ",
      "postAnnounceMessage": "Would you like to hear more about your house or continue? Say hear more or say continue. ",
      "continueMessage": "Please say continue. ",
      "navMessage": "Would you like to hear the sorting song again? Or would you like to sort another student? Or would the student just sorted like to ask me some questions? Say begin song, or say sort another student, or say I have a question (and put the hat back on). Or say mischief managed to finish. ",
      "chooseQuestionMessage": "Bee in your bonnet? Which of the following questions would you like to ask? One, did you put me in the right house? Two, why do you take longer to sort some people? Three, third question. Four, fourth question. Say one, two, three, or four to ask your question. ",
      "anotherQuestionMessage": "Do you have another question? ",
      "goodbyeMessage": "Goodbye! ",
      "helpMessage": "I am the sorting hat! I can sing my song for you, or I can ask you questions and sort you into your house, or you can ask me questions after I sort you. ",
      "startOverMessage": "Would you like to start the program over? Say start over. "
  },

  "sortingSongs": [
    "sorting song 1. ",
    "sorting song 2. ",
    "sorting song 3. "
  ]

};
