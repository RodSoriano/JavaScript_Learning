function Persson()
{
    this.name = '';
    this.lastName = '';
}

function Progammer()
{
    this.lenguage = '';
}

Progammer.prototype = new Persson();

console.log(Progammer);
console.log(Persson);

const PROGRAMMER = new Progammer();
PROGRAMMER.name = 'ryan';
PROGRAMMER.lastName = 'reynolds';
PROGRAMMER.lenguage = 'PHP';

console.log(PROGRAMMER);