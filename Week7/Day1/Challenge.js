/*
  Decode Colors.

  Create a function that expects an array with colors and returns a resistance.

  - decodeColors('brown black black'); // '10 ohms, 20%'
  - decodeColors('orange orange yellow gold'); // '330k ohms, 5%'
  - decodeColors('red black green gold'); // '2M ohms, 5%'

  This are the rules:
    - First three colors are the amount of Ohms -resistance unit-
    - Fourth color is the tolerance

  Colors dictionary:
    const colors = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      gray: 8,
      white: 9,
    };

  We use the exponentiation format to represent the resistance:
    - `34 x 10^5` -> 340,000
    - `52 x 10^3` -> 5,200

  The first 2 numbers are to represent the base: `34` and `52` in our examples.
    - `34` would be 'orange yellow'. First color the first number, second second.
    - `52` would be 'gree red'.

  Third color would be exponent of 10.
    - `10^5` would be 'green'
    - `10^3` would be 'orange'

  Back to our resistances:
    - 340,000 would be 'orange yellow green'
    - 5,200 would be 'green red orange'

  Tolerance color:
    - 20% -> NO fourth color
    - 10% -> `silver`
    - 5% -> 'gold'

  More examples;
    - decodeColors('brown black black'); // '10 ohms, 20%'
    - decodeColors('brown black brown gold'); // '100 ohms, 5%'
    - decodeColors('brown black red silver'); // '1k ohms, 10%'
    - decodeColors('red red orange silver'); // '22k ohms, 10%'
    - decodeColors('yellow violet orange gold'); // '47k ohms, 5%'
    - decodeColors('orange orange yellow gold'); // '330k ohms, 5%'
    - decodeColors('red black green gold'); // '2M ohms, 5%'

*/

const colors = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      gray: 8,
      white: 9,
};

function decodeColors(bands) {
  let colorsArray = bands.split(" ");
  //console.log(colorsArray)
  let base = colors[colorsArray[0]] + "" + colors[colorsArray[1]];
  //console.log(base);
  let resistance = (base * Math.pow(10, colors[colorsArray[2]]));
  //console.log(resistance);
  if (resistance < 1000) {
    resistance = resistance + " ohms";
  } else if (resistance >= 1000 && resistance < 1000000) {
    resistance = resistance/1000 + "k ohms";
  } else {
    resistance = resistance/1000000 + "M ohms";
  }
  
  if (colorsArray.length === 4) {
    if (colorsArray[3] === 'gold') {
      return resistance + ", 5%";
    } else if (colorsArray[3] === 'silver') {
      return resistance + ", 10%";
    }
  } else {
    return resistance + ", 20%";
  }

}

// console.log(decodeColors('brown black black'); // '10 ohms, 20%'
// console.log(decodeColors('brown black brown gold'); // '100 ohms, 5%'
// console.log(decodeColors('brown black red silver')); // '1k ohms, 10%'
// console.log(decodeColors('red red orange silver')); // '22k ohms, 10%'
// console.log(decodeColors('yellow violet orange gold')); // '47k ohms, 5%'
// console.log(decodeColors('orange orange yellow gold')); // '330k ohms, 5%'
// console.log(decodeColors('red black green gold')); // '2M ohms, 5%'

function encodeResistorColors(bands) {
  //reverse colors
  const reversedColors = {}
  Object.keys(colors).forEach(key => {
    const value = colors[key];
    reversedColors[value] = key; 
  });
  //console.log(reversedColors)

  let result;
  let codeArray = bands.split(" ");
  let colours = codeArray[0].split("");
  let coloursBig = colours.join("").replace(/[k]/g, "000").replace(/\M/g,'000000');
  if (codeArray[0] < 100) {
    result = reversedColors[colours[0]] + " " + reversedColors[colours[1]] + " black";
  } else if (codeArray[0] > 100 && codeArray[0] < 1000) {
    result = reversedColors[colours[0]] + " " + reversedColors[colours[1]] + " brown";
  } else if (codeArray[0] > 1000 && codeArray[0] < 100000) {
    result = coloursBig.replace(/[0000]/g, "yellow")
    console.log(colours);
    result = reversedColors[colours[0]] + " " + reversedColors[colours[1]] + " brown";
  }
  
  if (codeArray.length === 3) {
    if (codeArray[2] === "5%") {
      return result + " gold";
    } else if (codeArray[2] === "10%") {
      return result + " silver";
    } 
  } else {
      return result;
  }

}

console.log(encodeResistorColors("10 ohms 5%")) // "brown black black gold"
console.log(encodeResistorColors("220 ohms 10%")) // "red red brown silver"
console.log(encodeResistorColors("1k ohms 5%")) // "brown black red gold"
console.log(encodeResistorColors("47k ohms 20%")) // "yellow violet red"
console.log(encodeResistorColors("1M ohms 10%")) // "brown black green"
console.log(encodeResistorColors("2M ohms 5%")) // "red black green gold"