// 2) По клику на кнопку добавить в корзину товар со следующими параметрами:
// 1) Картинка
// 2) Заголовок
// 3) Доп параметры 
// 4) Цена

// 3) Добавить в корзину

// Конкретные задачи:
    // 1) Получить картинку
    // 2) Получить заголовок
    // 3) Получить доп параметры
    // 4) Получить цену

    // Принцип получения данных следующий:
        //Получить данные с помощью:
            //.class
            //#id
            //attribute
            //tag



// .class --  document.getElementsByClassName -внутри документа получить элементы по названию класса 
// document - вкладка
// (.) - связка
// get - получить 
// Elements - элементы (потому что классов бывают несколько)
// By - по, от
// ClassName - название класса 

// getElementsByClassName- получить элементы по названию класса 

// let ttl=document.getElementsByClassName("ttl");
// ttl[0].innerText

// результат  : ничего не вывелось.
// Без команды ничего не выведется!

// let ttl=document.getElementsByClassName("ttl");
// console.log(ttl[0].innerText);


//forEach

// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });


//filter

// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// alert( positiveArr ); // 1,2,3


//map

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// // получили массив с длинами
// alert( nameLengths ); // 4,3,10


//every/some

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//   return number > 0;
// }

// alert( arr.every(isPositive) ); // false, не все положительные
// alert( arr.some(isPositive) ); // true, есть хоть одно положительно



//reduce/reduceRight

// var arr = [1, 2, 3, 4, 5]

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum + current;
// }, 0);

// alert( result ); // 15


//querySelectorAll  - обращение от родителького к дочернему элементу
 let ttl = document.querySelectorAll(".body_product > .ttl");

//Вариант вывода 1
    // console.log(ttl[1].innerText);
    // console.log(ttl[0].innerText);
    // console.log(ttl[2].innerText);
    // console.log(ttl[3].innerText);
    // console.log(ttl[4].innerText);




 for (let text of ttl){
    console.log(text.innerText);
 }   

 var elements = document.getElementsByClassName("add_card");
 var myFunction = function (){ 
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    alert(attribute[0].innerText);
};
 for (var i=0; i< elements.length; i++){
    elements[i].addEventListener('click', myFunction,false);
}




// urok 30

// function test_fun(parametr){
// 	var number=10;
// 	var res;
// 	res = number+parametr;
// 	alert(res);
// }
// test_fun(1);


const arr={
    name: "Ismar",
    age:26,
    param: {
        color: "white",
        nat: "dungan"
    }
};
console.log(arr.name);
delete arr.name;
console.log(arr.name);

for( let key in arr){
    if (typeof(arr[key]) === 'object'){
        for(let key2 in arr[key]){
            console.log(arr[key][key2]);

        }
    } else {
        console.log(arr[key]);
    }
    

}


// урок  31

// Что такое функция?

// let num = 10;
// let num2 = 15;
// let num3 = 20;

// console.log(num);
// console.log(num2);
// console.log(num3);

//вместо выше написанного можно написать в сокращенном виде:

// function name_fun(number){
//     let num = number;
//     console.log(num);
// }
// name_fun(200);

let num = 200;
function name_fun(num){
    let per_const = 120;
    let result;

    result = per_const + num;
    
    console.log(result);
}
name_fun(200);