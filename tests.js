//create an object using bracket and dot notation that represents
//the characteristics and related data you may find in a
// Game of Clue

let game = {};

game.murderer = "??";

game['weapons'] = [
    {type: 'pipe', location: 'garage'},
    {type: 'stick', location: 'garden'},
    {type: 'angry cat', location: 'lounge'},
    {tyoe: 'pinguin', location: 'Freezer'}];

game.characters = [];

game.characters.push('Miss Scarlet');
game.characters.push('Madam Bleu');

game.suspects = [
    {
        name: 'Rusty',
        color: 'Orange'
    },
    {
        name: 'Mr. Obrien',
        color: 'Red'
    }
];

game.suspects.push(
    {
        name: 'Arthur Carter',
        color: 'Yellow'
    },
    {
        name: 'Stephanie McAllen',
        color: 'Blue'
    });

// console.log(game);

let len = game.suspects.length;

for(let i = 0; i < len; i++)
    {
        let temp = game.suspects[i];
        // console.log(temp);
    }

let murderer = game.suspects[Math.floor(Math.random() * len)];

// desctructuring

var [colorOne, colorTwo] = [game.suspects[0].color, game.suspects[2].color];

console.log(colorOne);
console.log(colorTwo);


// console.log(murderer);
