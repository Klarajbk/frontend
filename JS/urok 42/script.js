"use strict";
// урок 35


// использование строго режима для обработки данных

// ООП - понятие 

// Применение 

// Как понять что есть строка

// let str = "текст";
// let strObj = new String(str);

// console.log(str);       //выводит: текст
// console.log(strObj);    // выводит: [String: 'текст']

// console.log(typeof(str));       //string
// console.log(typeof(strObj));    //object




// let car = {
//     kuzov: "Железо",
//     kolesa: "4 колеса",
//     modal: function() {
//             alert("Hello");
//     }
// };

// // let mb = {
// //     marka: "Мерс",
// //     god: "2023"
// // };


// let mb = Object.create(car);

//mb._proto_ = car;

//console.log(mb.kuzov);
// console.log(mb.modal);


//Object.setPrototypeOf(mb, car);
// console.log(mb.modal);
// mb.modal(); 

//Динамическая типизация

// let  number = +"1";               //(перед строкой поставить +) конвертация строку в число
// console.log(number + 5);           
// console.log(parseInt(number)+5);   //2 метод(старый) 
// console.log(typeof('1'));           // typeof используетя чтобы узнать тип, строка или число и т.д...

// let res_input = +prompt("Введите свой возраст","");
// console.log(typeof(res_input));

// console.log(res_input+10);

//https://miukid.com/cat/

//console.log("https://miukid.com/cat/"+res_input);
// console.log('https://miukid.com/cat/${res_input}');

//  console.log(res_input);


// урок42

let click = document.getElementById("btn1");

// click.onclick = function() {
//     alert("click");
// }
// click.onclick = function() {
//     alert("click2");          // если используем на  один тот же клик несколько событий то  когда нажимаем  будет вызваться только последний элемент  
// }

// click.addEventListener( 'click',() =>{
//     alert("click");

// });

// click.addEventListener( 'click',() =>{    // сколько раз прописываем столько раз вызывает то есть все действии работает по очереди
//     alert("click");

// });

// click.addEventListener('mouseover',() =>{    // при наведении
//     alert("click");

// });
// click.addEventListener( 'mouseout',() =>{  // покидает
//     alert("click");

// });

let delete_elem = (e) =>{

    e.target.remove();
    alert(`Вы кликнули на кнопку: ${e.target.innerText}`);
};

click.addEventListener( 'click', delete_elem);
click1.addEventListener( 'click', delete_elem);  
  
    













    





    





