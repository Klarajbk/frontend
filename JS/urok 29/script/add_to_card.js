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

//  for (let text of ttl){
    // console.log(text.innerText);
//  }   

var elements = document.getElementsByClassName(add_card);
var myFunction = function (){ 
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    alert(attribute[0].innerText);
};
for (var i=0; i< elements.length; i++){
    elements[i].addEventListener('click', myFunction,false);
}