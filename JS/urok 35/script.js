"use strict";
// урок 35

// Передача по сссылке или по значению

// Копирование объекта 
// Копирование массива 

// Новые стандарты 
// Оператор разворота Spread 


let a = 10, 
    b = a;  //  не заменяется  копируется значение a

    b=b+15;

    console.log(b);  //25
    console.log(a);  // 10 

    const arr1 = {    //arr1 -это объект 
        a: 1,
        b: 2
    };

    // console.log(arr1);
    const newArr = arr1;  // не копирует передает лишь ссылку на сам объект

    // console.log(newArr);

    newArr.a = 10;

    //console.log(newArr);
    console.log(arr1);

    function copy_arr(myObj){
        const newObj = {};

        let key;
        for(key in myObj){
            newObj[key] = myObj[key];
        }
        return newObj;

    }

    const oldObj = {
        name: "Ismar",
        surname: "Suleimanov",
        hobby: {
            1: "swimming",
            2: "running"
        }
    };
    //console.log(oldObj);
    const newObj = copy_arr(oldObj);

    newObj.name = "Alex",

    console.log(newObj);
    console.log(oldObj);

    newObj.hobby[1]="reading";           // если дано перечисление хобби цифрами  обращаем таким образом // если дается  словами  то будем обращаться с точкой например: hobb1: ,hobb2: ---->newObj.hobby.hobb1, 

    console.log(newObj);
    console.log(oldObj);

    
    // Метод Object.Assign()
    // Метод Object.Assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект

    const newAssign = Object.assign(arr1,oldObj); // результат дал нам новую  переменную newAssign cклейку из двух объекта arr1 и oldObj
    
    newAssign.name = "Panda";
    
    console.log(newAssign);  //новый объект изменился
    console.log(oldObj);     //старый объект остается неизменным

  
    //метод slice
    const arr = ["яблоки","груши", "виноград"];
     // индексы      0        1         2

     const arr2 = arr.slice(1);// начинается 1 и результат груши и виноград
     //const arr2 = arr.slice(0, 2); указывается промежуток  с нуля до 2 не включая 2 результат яблоки и груши 

    //  arr2[2] = "вишня";
    //  console.log(arr);
     console.log(arr2);


     //оператор spread

     const tehnika = ["телефон", "планшеты", "компьютеры"],
          meilodii = ["рок", "хип-хоп", "джаз"],
          combo    = [...tehnika, ...meilodii, "плавание", "бег"]; //  синтаксис ... три точки [...obj]  -для массива и строк  ---- для функции Function(...obj) ---для объекта let objClone ={...obj}
          console.log(combo); 


    const old_per = ["телефон", "планшеты", "компьютеры"];

    const new_per = [...old_per];

    new_per [1] = "футболка";
     
    console.log(old_per);
    console.log(new_per);  

    const arr3 = {
        a: 1,
        b: 2
    };
     
    const arr4 = {...arr3};  // вызов объекта с {...arr3}

    arr4.b = 10;

    console.log(arr3);
    console.log(arr4);

    




    





    





