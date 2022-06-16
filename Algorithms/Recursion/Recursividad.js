//recursividad o recurrencia
//estrategia para resolver problemas 
//esto hace que el problema se divida en varias partes

//sumar numero hasta que llegue al valor de corte

function sumar(num)
    {
        let total = 0;

        for(var i = 0; i <= num; i++)
            {
                total += i;
                //total = total + i;
            }

        return total;
    }

function sum(num, total = 0)
    {
        if(num <= 0) return total;

        total += num;
        num -= 1;

        return sum(num,total); // recursividad lo vuelve a ejecutar hasta que sea igual a 0
    }
