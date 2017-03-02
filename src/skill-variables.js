module.exports = {

  // TODO
  // create separate file to run actual sorting (you know... the point of all this, lol)
  // extra credit: have it know if it's sorted a student already since it was last restarted so it can ask if want to sort another student or something
  // extra extra credit: have it keep a tally of people's names (or numbers at least) and which houses they were sorted into

  "sortingQuestions": [
    ["Which of the following would you most hate people to call you? Ordinary, ignorant, cowardly, or selfish. ", "Given the choice, would you rather invent a potion that would guarantee you love, glory, wisdom, or power? "],
    ["question two one", "question two two"],
    ["question three one", "question three two"],
    ["question four one", "question four two"],
    ["question five one", "question five two"]
  ],

  "houseAnswers": {
    "Gryffindor": ["cowardly", "glory", "g3", "g4", "g5"],
    "Ravenclaw": ["ignorant", "wisdom", "r3", "r4", "r5"],
    "Hufflepuff": ["selfish", "love", "h3", "h4", "h5"],
    "Slytherin": ["ordinary", "power", "s3", "s4", "s5"]
  },

  "houses": [
      "Gryffindor! ",
      "Ravenclaw! ",
      "Hufflepuff! ",
      "Slytherin! "
  ],

  "poems": [
     "Brave and stuff. ",
     "Really smart. ",
     "Honey badger don't give a shhh. ",
     "Cunning or what-evs. "
  ],

  "questions": [
     "For some it is a clear choice, others are harder to decide. ",
     "Witty answer about being right or something. ",
     "Witty answer number three. ",
     "Witty answer number four. "
  ],

  "states": {
      STARTMODE: '_STARTMODE',        // prompt user to start with either song or sorting
      SORTINGMODE: '_SORTINGMODE',    // actual sorting questions
      ANNOUNCEMODE: '_ANNOUNCEMODE',  // announce house user was sorted into and offer poem about house
      NAVMODE: '_NAVMODE',            // intermediate/central menu where you can go back to song, sort another user, or ask hat questions
      QUESTIONSMODE: '_QUESTIONSMODE' // offers possible questions the user can ask the hat, then provides answers
  },

  "messages": {
      "welcomeMessage": "Welcome to hogworts! Before you begin your studies you must be sorted into your houses. While here, your house will be like your family. Lets begin! Do you want to hear the sorting song or do you want to skip to the sorting ceremony? Say begin song or say begin sorting. ",
      "repeatWelcomeMessage": "Say begin song or say begin sorting. ",
      "afterSongMessage": "Heed well my words. Would you like to begin the sorting now? Say begin sorting. ",
      "preSortingMessage": "Put me on so I can sort you! ",
      "endOfSortingMessage": "I know just what to do with you! Are you ready to hear your house? Take me off so I can announce your house! Then say ready. ",
      "postSortingMessage": "Better be ",
      "postAnnounceMessage": "Would you like to hear more about your house or continue? Say hear more or say continue. ",
      "continueMessage": "Please say continue. ",
      "navMessage": "Would you like to hear the sorting song again? Or would you like to sort another student? Or would the student just sorted like to ask me some questions? Say begin song, or say sort another student, or say I have a question (and put the hat back on). Or say mischief managed to finish. ",
      "chooseQuestionMessage": "Bee in your bonnet? Which of the following questions would you like to ask? One, did you put me in the right house? Two, why do you take longer to sort some people? Three, third question. Four, fourth question. Say one, two, three, or four to ask your question. ",
      "anotherQuestionMessage": "Do you have another question? ",
      "goodbyeMessage": "Goodbye! ",
      "helpMessage": "I am the sorting hat! I can sing my song for you, or I can ask you questions and sort you into your house, or you can ask me questions after I sort you. ",
      "startOverMessage": "Would you like to start the program over? Say start over. ",
      "unhandleMessage": "Sorry, I didn't catch that. ",
      "sortingHelpMessage": "Say one, two, three, or four to answer. "
  },

  "sortingSongs": [
    "sorting song 1. ",
    "sorting song 2. ",
    "sorting song 3. "
  ]

};
