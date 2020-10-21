const pizzas = {
royal:{
    nom: 'pizza-royale',
    prix: 15,
    img: 'pizza-royale.jpeg'
},
viande:{
    nom: 'pizza-viande',
    prix: 15,
    img: 'pizza-viande.jpg'
},
neptune:{
    nom: 'pizza-neptune',
    prix: 15,
    img: 'pizza-neptune.jpg'
},
margerita:{
    nom: 'pizza-margerita',
    prix: 15,
    img: 'pizza-margerita.jpg'
},
mexicano:{
    nom: 'pizza-mexicano',
        prix: 15,
    img: 'pizza-mexicano.jpg'
}

};
let cart = {} ;
let htmlb='';
let htmlp='';
 for (var key in pizzas){
     htmlp+='<div class="col-md-4">';
     htmlp+='<div  class="card">';
     htmlp+='<img class="card-img-top" src="'+pizzas[key].img+'" alt="pizza">';
     htmlp+='  <div class="card-body">';
     htmlp +='<h5 >'+pizzas[key].nom+'</h5>';
     htmlp +='<h6 >'+pizzas[key].prix+' $</h6>';
     htmlp+='<div class="float-right icons"  >';
     htmlp+='<button class="btn btn-plus" id="'+key+'"onclick="plusQts(this)"><i class="fa fa-plus icon plus"> </i></button>';
     htmlp+='<input type="text" id="'+key+'" class="form-control form-input" value="0">';
     htmlp+='<button class="btn btn-minus" onclick="minusQts(this)"><i class="fa fa-minus icon minus">  </i> </button>';
     htmlp+='</div>';
     htmlp+='</div>';
     htmlp+='<div class="btn-div"><button class="btn btn-add" id="'+key+'" onclick="addToCart(this)">add to cart</button></div>';
     htmlp+='</div>';
     htmlp+='</div>';
 }
htmlp+='';

let container=document.getElementById("pizzas");
container.innerHTML=htmlp;

function plusQts(btn) {
    let parent =btn.parentElement;
    let input=parent.children[1];
    let qts=input.value;
    qts++;
  input.value=qts;
  input.innerHTML=qts;
}
 function minusQts(btn) {
     let parent =btn.parentElement;
     let input=parent.children[1];
     let qts=input.value;
     if(qts>0) {
         qts--;
         input.value = qts;
         input.innerHTML = qts;
     }else{
         alert('qantity is equal to 0');
     }

}
function addToCart(btn) {

    const key = btn.id;
     const div=  btn.parentElement;
     const card = div.previousElementSibling;
     const qts=card.children[2];

    const cart = document.getElementById('cart-body');
    if (qts.children[1].value >0 ) {
        document.getElementById('cart').style.display="flex";
        document.getElementById('icon-cart').style.display="none";



        htmlb+='<div class="ligne"><i class="fa fa-window-close" onclick="supprimer(this)"></i>' +
            '<p>'+qts.children[1].value+'</p>'+
            '<p class="cart-product">'+pizzas[key].nom+'</p>' +
            '<p class="prix">'+pizzas[key].prix * Number(qts.children[1].value) +'</p></div>';
        let total=document.getElementById("total").innerText;
        total=Number(total)+(pizzas[key].prix * Number(qts.children[1].value));
        document.getElementById("total").innerText=total;



    }

    cart.innerHTML=htmlb;
}

function displayCart(btn) {
    btn.style.display="none";
    btn.style.cssFloat='left';
    document.getElementById('cart').style.display="flex";

}
function display() {
    document.getElementById('cart').style.display="none";
    document.getElementById('icon-cart').style.display="flex";


}
function supprimer(btn) {
   const div= btn.parentElement;
   console.log(div);
    let total=document.getElementById("total").innerText;
    total=Number(total)-Number(div.children[3].innerText);
    console.log(total);
    document.getElementById("total").innerText=total;
   div.remove();



}
