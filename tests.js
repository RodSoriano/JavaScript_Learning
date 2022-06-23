let input =19;

const test = new Promise((pepito1, reject) => {
        if(input > 18) {
                pepito1('eres mayor de edad');
            }
        else {
                reject('no eres mayor de edad');
            }
    });

test.then(response => console.log(response))
.catch(error => console.log(error));