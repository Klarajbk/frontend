(function () {
  "use strict"; //строгий режим 


//   class ploshad {

//     constructor(width,height) {
//       this.width = width;
//       this.height =height;

//     }

//     calcploshad() {
//       return this.width * this.height;
//     }

//     calcploshad2() {
//       return this.width + this.height;
//     }

//   }
   
// //  const res_area = new ploshad(10,20);
// //  const res_area2 = new ploshad(15,25);

// //  console.log(res_area.calcploshad()); 
// //  console.log(res_area2.calcploshad2());
  
// class ploshadText extends ploshad{
//    // extends  - связка двух классов 


//    constructor(width, height, text, value) {
//     super(width,height);

//     this.text = text;
//     this.value =value;    //  здесь width и height не нужно присваивать выше уже написали присвоили
              
//    }

//    showText()  {
//     console.log(`Text: ${this.text}| Value: ${this.value}`);
//    }

  
// }
// const block = new ploshadText(20, 20, "Ismar", "Тема урока Class");

// block.showText(); //приклеить блоку шоутекст
// console.log(block.calcploshad());




class cardProduct {
  constructor(tooltip, tooltipClass, img, title, originPrice, oldPrice, innerBlock){
    this.tooltip = tooltip;
    this.tooltipClass = tooltipClass;
    this.img = img;
    this.title = title;
    this.originPrice = originPrice;
    this.oldPrice = oldPrice;
    this.innerBlock = document.querySelector(innerBlock);
    this.valuta = 87;
    this.originPrice = this.convetToUSD(this.originPrice);
    this.oldPrice = this.convetToUSD(oldPrice);

   
  }
  convetToUSD(price){
    const result = price /this.valuta;
    return result.toFixed(2);

  }


  render () {   //render- объявление необходимых данных
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = ` 
                    
                    <div class="img">
                        <div class="tooltip ${this.tooltipClass}">${this.tooltip}</div>
                        <img src=${this.img} alt="img1.jpg">

                        
                    </div>

                    <div class="body_product">
                            
                        <div class="body_title">
                            <a href="?search=#" class="ttl">${this.title}</a>
                            
                            <div class="block_stars">
                                <div class="stars">
                                    <i class="fa-sharp fa-solid fa-star"></i>
                                    <i class="fa-sharp fa-solid fa-star"></i>
                                    <i class="fa-sharp fa-solid fa-star"></i>
                                    <i class="fa-sharp fa-solid fa-star"></i>
                                    <i class="fa-sharp fa-solid fa-star"></i>
                                </div>
                                <div class="reviews">6 review(s)</div>
                            </div>
                            
                            <div class="price">
                                <span>${this.originPrice}</span>
                                <del>$ ${this.oldPrice}</del>

                            </div> 

                        </div>
                        <div class="btns dnone">
                            <ul class="ul_li">
                                <li class="add_card">
                                    <span class="seryi_krug">
                                    <i class="fa-sharp fa-solid fa-bag-shopping"></i>
                                    </span>
                                </li>
                                <li>
                                    <span class="seryi_krug">
                                    <i class="fa-sharp fa-solid fa-scale-balanced"></i>
                                    </span>
                                </li>
                                <li>
                                    <span class="seryi_krug">
                                    <i class="fa-sharp fa-solid fa-heart"></i>
                                    </span>
                                </li>
                            </ul>


                        </div>
                    </div>    
                
              `;

              this.innerBlock.append(div);


  }
}

//tooltip,tooltip, img, title, originPrice, oldPrice, innerBlock

new cardProduct(
    'new',
    'dscnt',
    'img/product/product1/img1.jpg',
    'Animal Print Sweatshirt 1',
    1230,
    2500,
    '.list-product'
).render();

new cardProduct(
    'new',
    'dscnt',
    'img/product/product2/img2.jpg',
    'Animal Print Sweatshirt 2',
    1500,
    2000,
    '.list-product'
).render();

new cardProduct(
    'sale',
    'new',
    'img/product/product4/img4.jpg',
    'Animal Print Sweatshirt 3',
    1400,
    1900,
    '.list-product'
).render();

new cardProduct(
    '-20%',
    'dscnt',
    'img/product/product3/img3.jpg',
    'Animal Print Sweatshirt 4',
    2400,
    3000,
    '.list-product'
).render();

new cardProduct(
    'sale',
    'new',
    'img/product/product1/img1.jpg',
    'Animal Print Sweatshirt 5',
    1230,
    2500,
    '.list-product'
).render();



const Data = {
    name: "ismar",
    age: 26
};
console.log(Data);




}());

