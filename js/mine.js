
var products ;
if (localStorage.getItem('products') ==  null)  // lesa madfsh gded el local fadya
   products = [];
   else {
         
        products = JSON.parse(localStorage.getItem('products'));
        show();
    }

var btn = document.getElementById('mybtn');

/*
hi.addEventListener('click' , function() {
    window.alert('dhshdjks');
});

*/
var pname = document.getElementById('productname');   
var pdesc = document.getElementById('productdesc'); 
var pprice = document.getElementById('productprice'); 
var pcompany = document.getElementById('productcompany'); 
var search = document.getElementById('search');
var test = false ;


btn.onclick = function() {
       
      if (test === false)
       add();   
      else update();

    //    pname.value = "";
};

search.onkeyup = function () {

       var c = search.value;
       var cont = "";
        
       for (var i =0 ; i < products.length ; i++) {
             
            var myname = products[i].name ;
            myname = myname.toLowerCase();
            c = c.toLowerCase();
       
            if (myname.includes(c)) { //law empty string el condition dayman true 3shan keda byzharo tany
              cont += ` <div class = "col-md-4" > <div class="con mt-1">  <h1> ` + products[i].name + `  </h1> 
             <h2> ` + products[i].desc + ` </h2>   <h5> ` + products[i].price + `  </h5>  
             <h5> `+ products[i].company +`  </h5>  
             <button  class="btn btn-danger" onclick="delet(`+i+`)">Delete </button>  
             <button  class="btn btn-warning" onclick="ret(`+i+`)">Update </button>  
           
             </div> </div> ` ;
            }
       }

       document.getElementById('add').innerHTML = cont  ;
       

}

function add () {
    var product =  {
        name : pname.value ,
        desc : pdesc.value ,
        price : pprice.value ,
        company : pcompany.value
      }
     
     products.push(product);
     console.log(products);

     localStorage.setItem('products' , JSON.stringify(products));
     
    show();
    
}



function show () {

    var colm = "";

     for (var i = 0 ; i < products.length ; i++) {
        
          colm += ` <div class = "col-md-4" > <div class="con mt-1">  <h1> ` + products[i].name + `  </h1> 
          <h2> ` + products[i].desc + ` </h2>   <h5> ` + products[i].price + `  </h5>  
           <h5> `+ products[i].company +`  </h5>  
            <button  class="btn btn-danger" onclick="delet(`+i+`)">Delete </button>  
            <button  class="btn btn-warning" onclick="ret(`+i+`)">Update </button>  
           
             </div> </div> ` ;
     }
     document.getElementById('add').innerHTML = colm  ;

}
function delet (x) {
       
     products.splice(x , 1)  ;
     localStorage.setItem('products' , JSON.stringify(products));
     show();

}

   var globalx ;
  function ret (x) {
     test = true; 
    pname.value =  products[x].name;
    pdesc.value =  products[x].desc;
    pprice.value =  products[x].price;
    pcompany.value =  products[x].company;
 
    btn.textContent = 'Update Product' ;

    globalx = x; 

  }

  function update () {
   
    btn.textContent = 'Add Product' ;
    
    products[globalx].name =  pname.value ;
    products[globalx].desc = pdesc.value ;
    products[globalx].price =  pprice.value ;
    products[globalx].company = pcompany.value;

    localStorage.setItem('products' , JSON.stringify(products));

      show();

    test = false;
      
  }




