// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
};

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);

let names = ["yo","que", "se"];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift.`);
  }
}

writeCards(names, "haloween");

function countdown(number) {
  let i = number;

  while (i >= 0) {
    console.log(i--);
  }
}
countdown(number);
