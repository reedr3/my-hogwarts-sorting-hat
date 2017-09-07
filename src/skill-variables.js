module.exports = {

  // TODO
  // create separate file to run actual sorting (you know... the point of all this, lol)
  // extra credit: have it know if it's sorted a student already since it was last restarted so it can ask if want to sort another student or something
  // extra extra credit: have it keep a tally of people's names (or numbers at least) and which houses they were sorted into

  "sortingQuestions": [
    [
      "Which of the following would you most hate people to call you? Ordinary, ignorant, cowardly, or selfish. ",
      "Given the choice, would you rather invent a potion that would guarantee you love, glory, wisdom, or power? ",
      "How would you like to be known to history? The wise, the good, the great, or the bold. "
    ],
    [
      "What kind of instument most pleases your ear? Violin, trumpet, piano, or drum. ",
      "Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of: a crackling log fire, the sea, fresh parchment, or home. ",
      "Which road tempts you most? The grassy lane, the latern lit alley, the twisting path, or the cobbled street. "
    ],
    [
      "Which would you rather be? Envied, imitated, trusted, praised, liked, or feared. ",
      "Which of the following do you find most difficult to deal with? Hunger, cold, loneliness, boredom, or being ignored. ",
      "Which would you rather be? Envied, imitated, trusted, praised, liked, or feared. "
    ],
    [
      "What are you most looking forward to learning at Hogwarts? Apparition, transfiguration, broomstick flying, hexes and jinxes, magical creatures, castle secrets, or everything! ",
      "If you could have any power, which would you choose? Read minds, invisibility, superhuman strength, speak to animals, change the past, change appearance at will. ",
      "Which of the following would you most like to study? Centaurs, goblins, merpeople, ghosts, vampires, werewolves, trolls. "
    ],
    [
      "Dawn or dusk? ",
      "Moon or stars? ",
      "Forest or river? "
    ],
    [
      "Black or white? ",
      "Heads or tails? ",
      "Left or right? "
    ],
    [
      "Your wishes are important to my decision so if there is a particular house you do not wish to be a part of, I will take that into consideration. Simply say which house you don't want to be in, for example say not Slytherin. Or say any is fine. ",
      "Your wishes are important to my decision so if there is a particular house you do not wish to be a part of, I will take that into consideration. Simply say which house you don't want to be in, for example say not Slytherin. Or say any is fine. ",
      "Your wishes are important to my decision so if there is a particular house you do not wish to be a part of, I will take that into consideration. Simply say which house you don't want to be in, for example say not Slytherin. Or say any is fine. "
    ]
  ],

  "houseAnswers": {

    "Gryffindor": [
      "cowardly", "glory", "the bold", "bold", "the trumpet", "trumpet", "a crackling log fire",
      "a crackling fire", "a log fire", "crackling log fire", "crackling fire", "log fire", "fire", "a fire",
      "imitated", "envied", "being ignored", "ignored", "hunger", "secrets about the castle", "secrets about castle",
      "secrets", "castle secrets", "broomstick flying", "flying", "broomstick", "broomsticks", "invisibility",
      "superhuman strength", "strength", "werewolves", "trolls", "the twisting path", "twisting path", "the path",
      "path", "dawn", "stars", "forest", "black", "heads", "right"
    ],

    "Ravenclaw": [
      "ignorant", "wisdom", "the wise", "wise", "the violin", "violin", "fresh parchment",
      "parchment", "trusted", "praised", "boredom", "cold", "everything", "every",
      "all of it", "transfiguration", "read minds", "mind read", "mind reading", "reading minds", "change the past",
      "change past", "centaurs", "merpeople", "the cobbled street", "cobbled street", "the street", "street",
      "dusk", "moon", "river", "white", "heads", "left", "filler",
      "filler", "filler", "filler", "filler", "filler", "filler", "filler"
    ],

    "Hufflepuff": [
      "selfish", "love", "the good", "good", "the drum", "drum", "home",
      "trusted", "liked", "hunger", "loneliness", "apparition", "all about magical creatures", "magical creatures",
      "creatures", "speak to animals", "talk to animals", "animals", "change your appearance at will", "change appearance at will", "change your appearance",
      "change appearance", "appearance", "ghosts", "centaurs", "the grassy lane", "grassy lane", "the lane",
      "lane", "dawn", "stars", "river", "white", "tails", "right",
      "filler", "filler", "filler", "filler", "filler", "filler", "filler"
    ],

    "Slytherin": [
      "ordinary", "power", "the great", "great", "the piano", "piano", "the sea",
      "sea", "envied", "feared", "cold", "being ignored", "ignored", "hexes and jinxes",
      "hexes", "jinxes", "broomstick flying", "flying", "broomstick", "broomsticks", "read minds",
      "reading minds", "mind read", "mind reading", "invisibility", "goblins", "vampires", "the latern lit alley",
      "lantern lit alley", "the alley", "alley", "the lantern alley", "lantern alley", "the lit alley", "lit alley",
      "dusk", "moon", "forest", "black", "tails", "left", "filler"
    ]
  },

  "houses": [
      "Gryffindor! ",
      "Ravenclaw! ",
      "Hufflepuff! ",
      "Slytherin! "
  ],

  "poems": [
     "You've been sorted into Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. ",
     "You've been sorted into Ravenclaw, Since you've a ready mind, Where those of wit and learning, Will always find their kind. ",
     "You've been sorted into Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. ",
     "You've been sorted into Slytherin, Where you'll make your true friends. Those cunning folk use any means, To achieve their ends. "
  ],

  "questions": [
     "Ah yes, you were particularly difficult to sort, but I stand by what I said. ",
     "For some it is clear where they belong. Others are harder and I need more time to decide. "
  ],

  "states": {
      STARTMODE: '_STARTMODE',        // prompt user to start with either song or sorting
      SORTINGMODE: '_SORTINGMODE',    // actual sorting questions
      ANNOUNCEMODE: '_ANNOUNCEMODE',  // announce house user was sorted into and offer poem about house
      NAVMODE: '_NAVMODE',            // intermediate/central menu where you can go back to song, sort another user, or ask hat questions
      QUESTIONSMODE: '_QUESTIONSMODE' // offers possible questions the user can ask the hat, then provides answers
  },

  "messages": {
      "welcomeMessage": "Welcome to hogworts! Before we get started, here are a few helpful commands. At any point, you can start over by saying start over or by saying I solemnly swear I am up to no good. You can exit at any point by saying exit or by saying mischief managed. Alright, wonderful! Before you begin your studies you must be sorted into your houses. While at hogworts, your house will be like your family. Lets begin! Do you want to hear the sorting song or do you want to skip to the sorting ceremony? Say begin song or say begin sorting. ",
      "repeatWelcomeMessage": "Say begin song or say begin sorting. ",
      "afterSongMessage": "Would you like to begin the sorting now? Say begin sorting. ",
      "preSortingMessage": "Lets begin! ",
      "endOfSortingMessage": "I know just what to do with you! Are you ready to hear your house? Say ready. ",
      "postSortingMessage": "Better be ",
      "postAnnounceMessage": "Would you like to hear more about your house or continue? Say hear more or say continue. ",
      "continueMessage": "Please say continue. ",
      "navMessage": "Would you like to hear the sorting song again? Or would you like to sort another student? Or would you like to ask me some questions? Say begin song, or say sort another student, or say I have a question, or say mischief managed to finish. ",
      "chooseQuestionMessage": "Bee in your bonnet? Which of the following questions would you like to ask? One, did you put me in the right house? Two, why do you take longer to sort some people? Say one or two to ask your question. ",
      "anotherQuestionMessage": "Do you have another question? ",
      "goodbyeMessage": "Goodbye! ",
      "helpMessage": "I am the sorting hat! I can sing my song for you, or I can ask you questions and sort you into your house, or you can ask me questions after I sort you. ",
      "startOverMessage": "Would you like to start the program over? Say start over. ",
      "unhandleMessage": "Sorry, I didn't catch that. ",
      "shortNavMessage": "Say begin song, or say sort another student, or say I have a question, or say mischief managed to finish. "
  },

  "sortingSongs": [

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "Oh, you may not think I'm pretty, But don't judge on what you see. I'll eat myself if you can find, A smarter hat than me. " +
    "You can keep your bowler's black, Your top hats sleek and tall, For I'm the Hogwarts Sorting Hat, And I can cap them all. " +
    "You might belong in Gryffindor, Where dwell the brave of heart, Their daring, nerve, and chivalry, set Gryffindors apart. " +
    "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, and unafraid of toil. " +
    "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind. " +
    "Or perhaps in Slytherin, You'll make your true friends, Those cunning folk use any means, To achieve their ends. " +
    "So put me on! Don't be afraid! And don't get in a flap! You're in safe hands (though I have none), For I'm a Thinking Cap! ",

    "A thousand years or more ago, When I was newly sewn, There lived four wizards of renown, Whose names are still well known. " +
    "Bold Gryffindor, from wild moor, Fair Ravenclaw, from glen, Sweet Hufflepuff, from valley broad, Shrewd Slytherin, from fen. " +
    "They shared a wish, a hope, a dream, They hatched a daring plan To educate young sorcerers Thus Hogwarts School began. " +
    "Now each of these four founders Formed their own house, for each Did value different virtues In the ones they had to teach. " +
    "By Gryffindor, the bravest were Prized far beyond the rest; For Ravenclaw, the cleverest Would always be the best. " +
    "For Hufflepuff, hard workers were Most worthy of admission; And power-hungry Slytherin Loved those of great ambition. " +
    "While still alive they did divide Their favorites from the throng, Yet how to pick the worthy ones When they were dead and gone? " +
    "'Twas Gryffindor who found the way, He whipped me off his head The founders put some brains in me So I could choose instead! " +
    "Now slip me snug about your ears, I've never yet been wrong, I'll have to look inside your mind And tell where you belong! ",

    "A thousand years or more ago, When I was newly sewn, There lived four wizards of renown, Whose names are still well known. " +
    "Bold Gryffindor, from wild moor, Fair Ravenclaw, from glen, Sweet Hufflepuff, from valley broad, Shrewd Slytherin, from fen. " +
    "They shared a wish, a hope, a dream, They hatched a daring plan To educate young sorcerers Thus Hogwarts School began. " +
    "Now each of these four founders Formed their own house, for each Did value different virtues In the ones they had to teach. " +
    "By Gryffindor, the bravest were Prized far beyond the rest; For Ravenclaw, the cleverest Would always be the best. " +
    "For Hufflepuff, hard workers were Most worthy of admission; And power-hungry Slytherin Loved those of great ambition. " +
    "While still alive they did divide Their favorites from the throng, Yet how to pick the worthy ones When they were dead and gone? " +
    "'Twas Gryffindor who found the way, He whipped me off his head The founders put some brains in me So I could choose instead! " +
    "Now slip me snug about your ears, I've never yet been wrong, I'll have to look inside your mind And tell where you belong! ",

    "In times of old when I was new And Hogwarts barely started The founders of our noble school Thought never to be parted: " +
    "United by a common goal, They had the selfsame yearning, To make the world's best magic school And pass along their learning. " +
    "Together we will build and teach! The four good friends decided And never did they dream that they Might someday be divided, " +
    "For were there such friends anywhere As Slytherin and Gryffindor? Unless it was the second pair Of Hufflepuff and Ravenclaw? " +
    "So how could it have gone so wrong? How could such friendships fail? Why, I was there and so can tell The whole sad, sorry tale. " +
    "Said Slytherin, We'll teach just those Whose ancestry is purest. Said Ravenclaw, We'll teach those whose Intelligence is surest. " +
    "Said Gryffindor, We'll teach all those With brave deeds to their name, Said Hufflepuff, I'll teach the lot, And treat them just the same. " +
    "These differences caused little strife When first they came to light, For each of the four founders had A House in which they might, " +
    "Take only those they wanted, so, For instance, Slytherin Took only pure-blood wizards Of great cunning, just like him, " +
    "And those of sharpest mind Were taught by Ravenclaw While the bravest and the boldest Went to daring Gryffindor. " +
    "Good Hufflepuff, she took the rest, And taught them all she knew, Thus the Houses and their founders Retained friendships firm and true. " +
    "So Hogwarts worked in harmony For several happy years, But then discord crept among us Feeding on our faults and fears. " +
    "The Houses that, like pillars four, Had once held up our school, Now turned upon each other and, Divided, sought to rule. " +
    "And for a while it seemed the school Must meet an early end, What with dueling and with fighting And the clash of friend on friend. " +
    "And at last there came a morning When old Slytherin departed And though the fighting then died out He left us quite downhearted. " +
    "And never since the founders four Were whittled down to three Have the Houses been united As they once were meant to be. " +
    "And now the Sorting Hat is here And you all know the score: I sort you into Houses Because that is what I'm for, " +
    "But this year I'll go further, Listen closely to my song: Though condemned I am to split you Still I worry that it's wrong, " +
    "Though I must fulfill my duty And must quarter every year Still I wonder whether sorting May not bring the end I fear. " +
    "Oh, know the perils, read the signs, The warning history shows, For our Hogwarts is in danger From external, deadly foes " +
    "And we must unite inside her Or we'll crumble from within I have told you, I have warned you.... Let the Sorting now begin. "
  ]

};
