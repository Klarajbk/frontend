"use strict";
    // использование строго режима для обработки данных

    let number = 1;
        //данные которые указываются без скобок =числа
    
    let text = "ismar";
        // данные которые заключены в скобки называются строки "string"
    console.log(10*"ismar");//NaN -означает не правильное использование синтаксиса
    console.log(text+number);
                    
                    // текст + цифра= это будет означать операцию склеивания
                    // + это операция склеивания(текст + цифра) и сложения (цифра + цифра)
                    // -*/ - не будут отрабатывать и дает ошибку- NaN

    // true = истина 
    // false = ложь 
    
    let number2 = false;
    //console.log(unknown); //ошибка is not defined= не определено

    // создание объекта начинается с фигурных скобок 
    let obj={
        name: "Alex",
            //name это название первого объекта 
            // : это разделение между объектом и его значением 
            // "" внутри кавычек указывается значение объекта 
            // конец строки заканчивается на , 
        age: 26,
        location:"Kyrgyzstan" //в конце строки перед закрываеющей фигурной скобки не указывется ,
    };

    //первый вариант получения данных из объекта 
    // console.log- это команда для вывода данных на экран
        //obj- это переменная 
        //. это операция обращение к объекту 
        // name это название объекта 
    console.log("Name:" + obj.name + "Age" + obj.age);

    //второй вариант получения данных из объекта
            // obj - это переменная
            // []  это указание позиции и уточнение объекта 
            // "" нужны для определения объекта 
            // name это название объекта 


    console.log(obj["name"]);


            // Массивы
            //Массивы создается с помощью квадратных скобок[]
            // В массивах используются сразу значения 
            // для получения значения необходимо использовать порядковый номер

    //            0        1       2
    let arr = ["яблоко","iphone","pen"];

            //console.log(arr.яблоко); - underfined -не понятно -не определено
    console.log (arr[0]);  // яблоко




    //Базовые функции / Взаимодействие с пользователем
    // console.log("сообщение");//Данная команда нужна для того чтобы вывести сообщение в console в браузере

    // alert("Привет гость!");// Модальное окно - системное - дизайн нельзя изменить 

    // var years = prompt('Сколько вам лет?', 100);

    //         //prompt -состоит из 2 частей
            //1- часть -вопрос
            //2-часть - ответ по умолчанию

            // prompt- запоминает введенные данные для дальнейшей обработки

    // alert('Вам ' + years + ' лет!');

    // var result=prompt("Сколько будет 2+2=?","")
    // var msg;
    // if(result=="4"){
    //     msg = "Верно";
    // }
    // else {
    //     msg = "НеВерно";
    // }
    // alert(msg);

    // var result=confirm("Результат сложения 2+2 равен 4?")
    // alert(result);


    // Условные операторы
    // Важно знать!

    //операции сравнения всегда будут возвращать одно из следующих значений
    // TRUE-истина
    // FALSE-ложь

   // alert(2==4); // ==  - операция сравнения
    // alert(8 > 4); // >  -операция срвнения на большинство
    // alert(8 < 4); // >  -операция срвнения на меньшенство
    // alert(8 >= 4);// больше или равно
    // alert(8 <= 4);// меньше или равно
    // alert(8 != 4);// не равно


    alert("2"==2);

        //Когда происходит операция сравнения значения конвертируется в цифры
        //Все что заключены в кавычки это текст!
        //Все что без кавычек это числа!


    //Условные операторы
    
    // if - если
    // else - в противном случае

    // если 2 равно 2, то выполни след условие, выведи на экран сообщение о том что "Ответ правильный!" , в противном случае выведи на экран "Ответ не правильный!"
   
    // если 2 равно 2 
        //решение: if(2==2)
    //то
        // решение: {

       //  }

    //  выведи на экран сообщение
        // решение: alert("Ответ правильный!");

    // в противном случае 
        //решение: else {

        //}

    //выведи на экран "Ответ не правильный!"
        // решение: alert("Ответ не правильный!");

    // общее решение 

    if(4==2){
        alert("Ответ правильный!");
    }
    else {
        alert("Ответ не правильный!");
    }


    





