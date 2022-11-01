let arr = [1,2,3,4,5,6];
console.log(arr.reverse());


function getMaxOfArray(Array) {
  return Math.max.apply(null, Array);
}
let maxNumber = [3,67,15,100];
console.log(getMaxOfArray(maxNumber));


function fibonachi_1(num){
if(num < 2){
  return num;
  }
  return fibonachi_1(num - 1) + fibonachi_1(num - 2);
}
console.log(fibonachi_1(2));


let arr_1 = [1, 300, 18, -10, - 0,001, 2, 20];
arr.sort((a, b) => b - a);
console.log( arr_1 );


let arr_2 = [1, 300, 18, -10, - 0,001, 2, 20];
arr.sort((a, b) => b - a);
console.log( arr_2 );


function sortArr(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }
  let arr_3 = [3, 4, 1, 2, 7];
  arr_3.sort(sortArr);
  console.log(arr_3);


const arr_4 = [1, 2, 3, 1, 1, 100, 99, 99, 99, 0,01];
const makeUniq = (arr_4) => {
  return arr_4.filter((el, id) => arr_4.indexOf(el) === id);
}
console.log(makeUniq(arr_4));


// даны 2 4-х значных числа с неповторяющимися цифрами, 
// надо определить сколько цифр в этих числах совпадают по значению и позиции и 
// сколько только по значению (3487 и 3794 ---> 1 и 2 ) 

function numbers (num_1, num_2){

    if(`${num_1}`.length !== 4 && `${num_2}`.length !== 4){
            console.log( `${num_1} ${num_1},input four digit numbers`);
          }
    if(typeof num_1 !== 'number' && typeof num_2 !== 'number'){
            console.log(`${num_1} ${num_2},input type number`);
          } 
    //! На этом участке кода я нашел быстрое решение, перевода числа в массив чисел.
    // На самом деле я сам понимаю что это не правильно так делать и я частично понимаю этот код(не в полной мере),
    // поэтому мне хотелось бы это изменить, и в дальнейшем поправлю это дело ! 
    let arr1 = num_1.toString(10).split('').map(int => parseInt(int, 10));
    let arr2 = num_2.toString(10).split('').map(int => parseInt(int, 10));
    // console.log('Array',arr1,arr2);
    let counterPosAndValue = 0;
    let counterValue = 0;
    // console.log('rezult of peremennaja', counterValue );
    // console.log('rezult of peremennaja', counterPosAndValue );
      for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
    // console.log('for1', arr1[i]);
    // console.log('for2', arr2[j]);
          if (arr1[i] === arr2[j]){
            counterValue ++;
    // console.log('Counter value',counterValue);
          if (i === j){
              counterPosAndValue ++; 
    // console.log('Counter poz and value',counterPosAndValue);
                }
            }
        }   
    }
      return `Rezult ${counterValue},${counterPosAndValue}`;
}      
console.log(numbers(3650,1358));