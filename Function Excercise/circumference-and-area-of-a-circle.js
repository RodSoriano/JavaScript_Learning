//Let's write a program that will take the radius of a circle and return it's circumference and area.

function circumference(radius){
    return 2 * Math.PI * radius;
}

function area(radius){
    return Math.PI * radius ** 2
}

console.log(area(35));