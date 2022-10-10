// ========================= Homework_7 START ===========================
function random (int, divider) {
  if(int === 0 && divider === 0){
    return `${int} ${divider} Введите числа больше 0`;
  } 
  if(typeof int !== 'number' && typeof divider !== 'number'){
    return `${int} ${divider} input type number`;
  }
  let resultRandom = [];
  let i = 0;
  let number = int;
  const counter = divider - 1;
  while(i < counter){
    // console.log('number', number);
    const random = Math.random(); 
    // console.log('random', random);
    const generateRandom = Math.round(random * (number - 0 + 1)) + 1;
    // console.log('generateRandom', generateRandom);
    resultRandom.push(generateRandom);
    number -= generateRandom;
    i++;
  }
  resultRandom.push(number);
  const sum = resultRandom.reduce((a,b) => a + b);
  const stringOfDivider = resultRandom.join(',');
  return `${sum} is equal of sum ${stringOfDivider}`;
}
console.log(random(20, 3));
console.log(random(100, 2));
console.log(random(205, 1));
console.log(random(198, 4));
console.log(random(9, 4));



const coub = () => {
  let attempts = 1;
  const userOne = [];
  const userTwo = [];
  while (attempts < 4) {
    attempts += 1;
    const randomNumberOne = Math.floor(Math.random() * 6 + 1);
    const randomNumberTwo = Math.floor(Math.random() * 6 + 1);
    userOne.push(randomNumberOne);
    userTwo.push(randomNumberTwo);
  }
  const sumOne = userOne.reduce((a, b) => a + b);
  const sumTwo = userTwo.reduce((a, b) => a + b);
  if (sumOne === sumTwo) {
    return `Is draw ${sumOne} vs ${sumTwo}`;
  }
  if (sumOne > sumTwo) {
    return `User one win ${sumOne} vs ${sumTwo}`;
  }
  return `User two win ${sumOne} vs ${sumTwo}`;
} 
console.log(coub());




function numberOfFridaythe13thsIn(year_2000, year_2022) {
  let count = 0;
  for (let month = 0; month < 264; month++) {
      let getNumberOfFridays = new Date(year_2000, year_2022, month, 13);
      if(getNumberOfFridays.getDay() === 5){
        count++;
    }
}
  return count;                            
}
console.log(numberOfFridaythe13thsIn(2000, 2022));

// =============== Homework_7 END ===========================================