"use strict";
// урок 36


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




let car = {
    kuzov: "Железо",
    kolesa: "4 колеса",
    modal: function() {
            alert("Hello");
    }
};

  let mb = {
     marka: "Мерс",
     god: "2023"
  };


//let mb = Object.create(car);


mb.__proto__ = car;

console.log(mb.kuzov);
//console.log(mb.modal);


//Object.setPrototypeOf(mb, car);
//console.log(mb.modal);
// mb.modal();








    





    





