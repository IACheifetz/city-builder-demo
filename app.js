// import functions and grab DOM elements
const cityDropdown = document.getElementById('city-dropdown');
const countrysideDropdown = document.getElementById('countryside-dropdown');
const forestDropdown = document.getElementById('forest-dropdown');

const cityEl = document.getElementById('city');
const countrysideEl = document.getElementById('countryside');
const forestEl = document.getElementById('forest');

const reportedEl = document.getElementById('reported');

const sloganEl = document.getElementById('slogans');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

const nameEl = document.getElementById('names');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');

// let state

let cityCount = 0;
let countrysideCount = 0;
let forestCount = 0;

const slogans = [];
const townNames = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

cityDropdown.addEventListener('change', () => {
    
    let chosenCity = cityDropdown.options[cityDropdown.selectedIndex].value;

    cityCount++;

    cityEl.style.backgroundImage = `url("./assets/${chosenCity}-city.jpg")`;
    
    displayStatistics();
});

countrysideDropdown.addEventListener('change', () => {
    
    let chosenCountryside = countrysideDropdown.options[countrysideDropdown.selectedIndex].value;

    countrysideCount++;

    countrysideEl.style.backgroundImage = `url("./assets/${chosenCountryside}-countryside.jpg")`;

    displayStatistics();
});

forestDropdown.addEventListener('change', () => {
    
    let chosenForest = forestDropdown.options[forestDropdown.selectedIndex].value;

    forestCount++;

    forestEl.style.backgroundImage = `url("./assets/${chosenForest}-forest.jpg")`;

    displayStatistics();
});

sloganButton.addEventListener('click', () => {

    const newSlogan = sloganInput.value;

    slogans.push(newSlogan);

    sloganInput.value = '';

    displaySlogans();
});

function displaySlogans() {

    sloganEl.textContent = '';

    for (let slogan of slogans) {
        const pTag = document.createElement('h1');

        pTag.classList.add('slogan');
        pTag.textContent = slogan;

        sloganEl.append(pTag);
    }
    
    if (slogans.length === 4) {
        slogans.slice();
    }
}

function displayStatistics() {
    reportedEl.textContent = `You've changed the city ${cityCount} times, the countryside ${countrysideCount} times, and the forest ${forestCount} times.`;
}

nameButton.addEventListener('click', () => {

    const newName = nameInput.value;

    townNames.push(newName);

    nameInput.value = '';

    displayNames();
});

function displayNames() {

    nameEl.textContent = '';

    for (let name of townNames) {
        const h2 = document.createElement('h2');

        h2.classList.add('name');
        h2.textContent = `Welcome to: ${name}!`;

        nameEl.append(h2);
    }
    townNames.pop();
}