const MAIN              = document.getElementById('main');
const ADD_USER_BTN      = document.getElementById('add-user');
const DOUBBLE_BUTTON    = document.getElementById('double');
const SHOW_MILLION      = document.getElementById('show-millionaires');
const SORT              = document.getElementById('sort');
const CALC_WEALTH       = document.getElementById('calculate-wealth');

let data = [];

//fetch random user and add money

getRandomUser();
getRandomUser();
getRandomUser();


//get random user function
async function getRandomUser()
    {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        const user = data.results[0];

        const newUser = 
            {
                name: `${user.name.first} ${user.name.last}`,
                money: Math.floor(Math.random() * 1000000)
            }

        console.log(newUser);

        addData(newUser);
    }


//double the money
function doubleMoney()
    {
        data = data.map((user) =>
            {
                return {...user, money: user.money * 2};
            });
        
        updateDOM();
    }


//filter by millionaires
function showMillionaires()
    {
        data = data.filter((user) => user.money > 1000000);

        updateDOM();
    }


//sort by richest function

function sort()
    {
        data.sort((a,b) => b.money - a.money);

        updateDOM();
    }

//add new object to data array
function addData(object)
    {
       data.push(object);

        updateDOM();
    }


//calculate wealth
function calcWealth()
    {
        const wealth = data.reduce((acc, user) => (acc += user.money), 0);
        const wealthUpdate = document.createElement('div');
        
        wealthUpdate.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
        main.appendChild(wealthUpdate);
    }


//update DOM function
function updateDOM(providedData = data)
    {
        MAIN.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
        providedData.forEach(item => 
            {
                const element = document.createElement('div');
                element.classList.add('person');
                element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
                MAIN.appendChild(element);
            });        
    }


//format number as money
function formatMoney(number)
    {
        //im still missing something here because money format is not excactly what is expected....working on it
        return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&');
    }


//event listener
ADD_USER_BTN.addEventListener('click', getRandomUser);
DOUBBLE_BUTTON.addEventListener('click', doubleMoney);
SHOW_MILLION.addEventListener('click', showMillionaires);
SORT.addEventListener('click', sort);
CALC_WEALTH.addEventListener('click', calcWealth);