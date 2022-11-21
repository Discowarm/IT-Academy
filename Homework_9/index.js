// Решить используя промисы и async/await
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
// со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает 
// число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь 
// загрузки первого сработавшего промиса и выведите результат его работы на экран.


const prom1 = new Promise((resolve, reject) => {
    setTimeout(resolve , 1000, "1");
    }); 
  
  const prom2 = new Promise((resolve, reject) => {
    setTimeout(resolve , 3000, "2");
    }); 
  
  const prom3 = new Promise((resolve, reject) => {
    setTimeout(resolve ,5000, "3");
     }); 
  
  Promise.race([prom1, prom2, prom3])
    .then(data => {
  console.log(data);
    });
  
  // Promise.any([prom1, prom2, prom3])
  //   .then(data => {
  // console.log(data);
  //   });
  
  //   Promise.all([prom1, prom2, prom3])
  //   .then(data => {
  // console.log(data);
  //   });
  
  
  // Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды 
  // выведет случайное число от 1 до 5. Создайте async функцию, которая с помощью await 
  // будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.
    
    
  function getRandomNum() {
      return new Promise((resolve,) => {
        setTimeout(resolve, 3000, Math.floor(Math.random() * 5));
      })
      // .then(data => {
      //   console.log(data);
        
      //     })
  }  
   
  async function getRandomPow(){
    const result = await getRandomNum();
    const pow = Math.pow(result,2);
    console.log(pow);
  }
  getRandomPow();
  
  
  // Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды 
  // выведет случайное число от 1 до 5. Сделайте также функцию getNum2, которая 
  // возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
  // Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, 
  // затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и 
  // выводит на экран.
  
  
  function getNum1() {
    return new Promise((resolve,) => {
      setTimeout(resolve, 3000, Math.floor(Math.random() * 5));
    })
  //  .then(data => {
  //    console.log(data);
      // })
  }  
  
  
  function getNum2() {
    return new Promise((resolve,) => {
      setTimeout(resolve, 5000, Math.floor(Math.random() * (Math.floor(10) - Math.ceil(6) + 1)) + Math.ceil(6))
    })
  // .then(data => {
  //    console.log(data);
  //  })
  } 
  
  
  async function getNumResult(){
    const resGetNum1 = await getNum1();
    // console.log('GetNum1',resGetNum1);
    const resGetNum2 = await getNum2();
    // console.log('GetNum2',resGetNum2);
    const resSumTwoFunc = resGetNum1 + resGetNum2;
  console.log(resSumTwoFunc);
   }
   getNumResult();