//JAVASCRIPT INTERMEDIATE CHALLENGES
//See README file for challenges instructions

//1. reverseArray()
const sentence = ['sense.','make', 'all', 'will', 'This'];

let reverseArray = (sentence) => {
    var reversed = [];
    while (sentence.length) {
        reversed.push(sentence.pop());
    }
    return reversed;
};

console.log(reverseArray(sentence));
// Should return ['This', 'will', 'all', 'make', 'sense.'];

//2. greetAliens()
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = (aliens) => {
    for (let alien of aliens) {
        console.log(`Oh powerful ${alien}, we humans offer our unconditional surrender!`);
    }
};

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 

//3. convertToBaby()
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = (animals) => {
    const newArray = [];
    for (let animal of animals) {
        newArray.push(`baby ${animal}`);
    }
    return newArray;
};

console.log(convertToBaby(animals));
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

//4. smallestPowerOfTwo()
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = numbers => {
    let results = [];
    // The 'outer' for loop - loops through each element in the array
    for (let i = 0; i < numbers.length; i++) {
        number = numbers[i];

        // The 'inner' while loop - searches for smallest power of 2 greater than the given number
        j = 1;
        while (j < number) {
            j = j * 2;
        }
        results.push(j);
    }
    return results;
}

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ]

//5. declineEverything() and acceptEverything()
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (veggies) => {
    veggies.forEach(politelyDecline);
};

const acceptEverything = (veggies) => {
    veggies.forEach(veggie => console.log(`Ok, I guess I will eat some ${veggie}.`));
};

//6. squareNums()
const numBers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

const squareNums = numBers.map(num => num * num);

console.log(squareNums);

//7. shoutGreetings()
const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

const shoutGreetings = (greetings) => greetings.map((greeting) => greeting.toUpperCase() + "!");

console.log(shoutGreetings(greetings));

//8. sortYears()
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const sortYears = (years) => {
    let sorted = years.sort();
    return sorted.reverse();
};

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

//9. justCoolStuff()
const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "fruit-by-the-foot",
    "pogs",
    "my room",
    "temporary tattoos",
];
  
const myStuff = [
    "rules",
    "fruit-by-the-foot",
    "wedgies",
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
    "braces",
    "the information superhighway",
];
  
const justCoolStuff = (coolStuff, myStuff) => {
    let presentInBoth = coolStuff.filter((stuff) => myStuff.includes(stuff));
    return presentInBoth;
};
  
console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
  
//10. isTheDinnerVegan()
const dinner = [
    {name: 'hamburger', source: 'meat'}, 
    {name: 'cheese', source: 'dairy'}, 
    {name: 'ketchup', source:'plant'}, 
    {name: 'bun', source: 'plant'}, 
    {name: 'dessert twinkies', source:'unknown'}
];
  
const isTheDinnerVegan = dinner => dinner.every(meal => meal.source === 'plant');
  
console.log(isTheDinnerVegan(dinner));
// Should print false

//11. sortSpeciesByTeeth()
const speciesArray = [ 
    {speciesName:'shark', numTeeth:50},
    {speciesName:'dog', numTeeth:42},
    {speciesName:'alligator', numTeeth:80},
    {speciesName:'human', numTeeth:32}
];
  
const sortSpeciesByTeeth = speciesArray => speciesArray.sort((sortedOne, sortedTwo) => sortedOne.numTeeth > sortedTwo.numTeeth);
  
console.log(sortSpeciesByTeeth(speciesArray));
// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

//12. findMyKeys()
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

const findMyKeys = randomStuff => randomStuff.findIndex(search => search === 'keys');

console.log(findMyKeys(randomStuff));
// Should print 4

//13. dogFactory()
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
  
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this._weight++;
        }
    }
};

//14. factorial()
const factorial = (number) => {
    if (number === 0 || number === 1) {
      return 1;
    } else if (number < 0) {
      return 'Please enter a number from 0 and above';
    } else if (number !== parseInt(number)) {
      return 'Please enter a whole number';
    } else {
      return number * factorial(number-1);
    }
};
  
console.log(factorial(6));

//15. subLength()
const subLength = (word, letter) => {
    let count = 0;
    let start;
    let end;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
            if (count > 2) {
            return 0;
            }
            if (start === undefined) {
            start = i;
            } else {
            end = i + 1;
            }
        }
    }
    return count < 2 ? 0 : end - start;
};

console.log(subLength('saturday', 'a'));

//16. groceries()
const groceries = groceryItems => {
    let callBackFunc = groceryItems.map(groceryItem => groceryItem.item)
    if (callBackFunc.length === 1) {
        return callBackFunc[0];
    }
    let comma = callBackFunc.join(', ');
    let insertComma = comma.lastIndexOf(',');
    return comma.slice(0, insertComma) + ' and' + comma.slice(insertComma + 1);
};
  
console.log(groceries([{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]));
// returns 'Carrots, Hummus, Pesto and Rigatoni'
   
console.log(groceries([{item: 'Bread'}, {item: 'Butter'}]));
// returns 'Bread and Butter'
   
console.log(groceries([{item: 'Cheese Balls'}]));
// returns 'Cheese Balls'
