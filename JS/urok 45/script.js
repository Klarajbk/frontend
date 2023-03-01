(function () {
  "use strict"; //строгий режим 


  class ploshad {

    constructor(width,height) {
      this.width = width;
      this.height =height;

    }

    calcploshad() {
      return this.width * this.height;
    }

    calcploshad2() {
      return this.width + this.height;
    }

  }
   
//  const res_area = new ploshad(10,20);
//  const res_area2 = new ploshad(15,25);

//  console.log(res_area.calcploshad()); 
//  console.log(res_area2.calcploshad2());
  
class ploshadText extends ploshad{
   // extends  - связка двух классов 


   constructor(width, height, text, value) {
    super(width,height);

    this.text = text;
    this.value =value;    //  здесь width и height не нужно присваивать выше уже написали присвоили
              
   }

   showText()  {
    console.log(`Text: ${this.text}| Value: ${this.value}`);
   }

  
}
const block = new ploshadText(20, 20, "Ismar", "Тема урока Class");

block.showText(); //приклеить блоку шоутекст
console.log(block.calcploshad());







}());

