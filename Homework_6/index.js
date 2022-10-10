let n = 1000;
let sum = 0;
while(n > 50){
  sum++;
  n/=2; 
}
console.log(n);
console.log(sum);

let str = '732999';

if (Number(str[0]) + Number(str[1]) + Number(str[2]) == Number(str[3]) +Number(str[4]) + Number(str[5])){
  console.log("yes");
}else{
  console.log("no");
}

let arr_1=[12, 15, 20, 25, 59, 79.]
const sumOfNumbers = arr_1.reduce((acc, number) => acc + number, 0);
const result = sumOfNumbers/arr_1.length;
console.log(sumOfNumbers);
console.log(result);

let arr_2= [1,2,3,4,5];
arr_2.splice(3, 0, 'a','b','c')
console.log(arr_2)

let arr_3 =[1,2,3,4,5];
arr_3.splice(1)
arr_3.splice(1,0, 'a','b',2,3,4,'c',5,'e')

console.log(arr_3)


function sortArr(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr_4 = [3, 4, 1, 2, 7];
arr_4.sort(sortArr);
console.log(arr_4);