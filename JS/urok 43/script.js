"use strict";
// console.log(document); // отображает сам документ в консоле т.е. всю страницу
// console.log(document.head); //  получение основного заголовка, в котором содержится метаданные подключения в целом самой страницы настройки отображении.
// console.log(document.body); //получение все содержимые
// document.body.style.background = "red";
// console.log(document.body.childNodes);  // отображение подробности что содержится внутри body ( nodes -узлы )
// console.log(document.querySelector("#btn1")); 
// console.log(document.querySelector(".img").parentNode); 

for (let per of document.body.childNodes){
    if( per.nodeName == "#text"){
        continue;
    }
    console.log(per.nodeName);
}