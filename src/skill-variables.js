module.exports = {
  "nodes": [
  // house announcement nodes
               { "node": 1, "message": "Gryffindor! Would you like to hear more about your house or continue? Say hear more or say continue.", "poem": 5, "continue": 9, "yes": 5, "no": 9 },
               { "node": 2, "message": "Ravenclaw! Would you like to hear more about your house or continue? Say hear more or say continue.", "poem": 6, "continue": 9, "yes": 6, "no": 9 },
               { "node": 3, "message": "Hufflepuff! Would you like to hear more about your house or continue? Say hear more or say continue.", "poem": 7, "continue": 9, "yes": 7, "no": 9 },
               { "node": 4, "message": "Slytherin! Would you like to hear more about your house or continue? Say hear more or say continue.", "poem": 8, "continue": 9, "yes": 8, "no": 9 },
  // house poem nodes
               { "node": 5, "message": "Brave and stuff", "yes": 9, "no": 9 },
               { "node": 6, "message": "Really smart", "yes": 9, "no": 9 },
               { "node": 7, "message": "Honey badger don't give a shhh", "yes": 9, "no": 9 },
               { "node": 8, "message": "Cunning or whatever", "yes": 9, "no": 9 },
  // song again, sort again, or questions node, or finish
               { "node": 9, "message": "Would you like to hear the sorting song again? Or would you like to sort another student? Or would the student just sorted like to ask me some questions? Say begin song, or say begin sorting, or say I have a question (and put the hat back on). Or say mischief managed to finish.", "yes": 10, "no": 10 },
  // which question list (bee in your bonnet)
               { "node": 10, "message": "Bee in your bonnet? Which of the following questions would you like to ask? One, did you put me in the right house? Two, why do you take longer to sort some people? Three, third question. Four, fourth question. Say one, two, three, or four to ask your question.", "one": 11, "two": 12, "three": 13, "four": 14, "yes": 11, "no": 12 },
  // question answers
               { "node": 11, "message": "Witty answer about being right or something. Do you have another question?", "yes": 10, "no": 9 },
               { "node": 12, "message": "For some it is a clear choice, others are harder to decide. Do you have another question?", "yes": 10, "no": 9 },
               { "node": 13, "message": "Witty answer number three. Do you have another question?", "yes": 10, "no": 9 },
               { "node": 14, "message": "Witty answer number four. Do you have another question?", "yes": 10, "no": 9 }
  ]
};
