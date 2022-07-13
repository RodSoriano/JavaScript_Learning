//create an object using bracket and dot notation that represents
//the characteristics and related data you may find in a
// Game of Clue

let game = {};

game.murderer = "??";

game['weapons'] = [
    {type: 'pipe', location: 'garage'},
    {type: 'stick', location: 'garden'},
    {type: 'angry cat', location: 'lounge'}];

game.characters = [];

game.characters.push('Miss Scarlet');

console.log(game);