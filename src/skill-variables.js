module.exports = {

  // TODO
  // maybe pull sorting song selection into helper function that sets variable that lasts until program restarted
  // - this helper function gets called in start state song intent, and then later nav state start intent just plays the same song saved to a variable from before (only new song if program restarted)

  // create separate file to run actual sorting (you know... the point of all this, lol)
  // extra credit: have it know if it's sorted a student already since it was last restarted so it can ask if want to sort another student or something
  // extra extra credit: have it keep a tally of people's names (or numbers at least) and which houses they were sorted into

  "houses": [
      "Gryffindor! ",
      "Ravenclaw! ",
      "Hufflepuff! ",
      "Slytherin! "
  ],

  "poems": [
     "Brave and stuff ",
     "Really smart ",
     "Honey badger don't give a shhh ",
     "Cunning or what-evs "
  ],

  "questions": [
     "For some it is a clear choice, others are harder to decide. ",
     "Witty answer about being right or something. ",
     "Witty answer number three. ",
     "Witty answer number four. "
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
      "startOverMessage": "Would you like to start the program over? Say start over. ",
      "unhandleMessage": "Sorry, I didn't catch that. "
  },

  "sortingSongs": [
    "sorting song 1. ",
    "sorting song 2. ",
    "sorting song 3. "
  ]

};
