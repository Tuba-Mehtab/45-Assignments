//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person : string = "Tipu Sultan"
let quote  : string = "Better to live one day as a tiger than a thousand years as a sheep"
let message : string = `${famous_person} once said, "${quote}"`
console.log(message)