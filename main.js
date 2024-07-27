var ProductNameInput = document.getElementById('ProductName')
var ProductPriceInput = document.getElementById('ProductPrice')
var ProductCategoryInput = document.getElementById('ProductCategory')
var ProductdesInput = document.getElementById('Descrption')
var ImgInput=document.getElementById('ProductImage')
var addbtn=document.getElementById('addbtn')
var upbtn=document.getElementById('upbtn')
var searchinput=document.getElementById('searchinput')
var productcontainer=[]

if(localStorage.getItem('products')!==null){
    productcontainer= JSON.parse(localStorage.getItem('products'))
displayProduct(productcontainer)
}

  function AddProduct(){
    console.log();
    var product={
       
        name:ProductNameInput.value,
        price:ProductPriceInput.value,
        Category:ProductCategoryInput.value,
        descrption:ProductdesInput.value,
        Imge:`images/${ImgInput.files[0].name}`,
       
    }
    
    console.log(product);
    productcontainer.push(product)
    localStorage.setItem('products',JSON.stringify(productcontainer))
    displayProduct(productcontainer)
  } 

function displayProduct(arr){
    var cartona=``
    for(var i=0; i<arr.length;i++)
    {
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].Category}</td>
        <td>${arr[i].descrption}</td>
        <td><img src="${arr[i].Imge}" width="200px" alt=""></td>
        
        <td><button onclick="clearproduct(${i})" class="btn btn-danger">Delete</button></td>
        <td><button class="btn btn-danger" onclick="setupdata(${i})">Updata</button></td> 
       </tr>
        `
    }
    document.getElementById('tbody').innerHTML=cartona
}

function clearproduct(index){
productcontainer.splice(index,1)
localStorage.setItem('products',JSON.stringify(productcontainer))
displayProduct(productcontainer)
}

// function SearchproductName(){
// term=searchinput.value
//     var cartona=``
// for(i=0;i<productcontainer.length;i++)
// {
    
//     if(productcontainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
//         cartona+=`
//         <tr>
//         <td>${i}</td>
//         <td>${productcontainer[i].name}</td>
//         <td>${productcontainer[i].price}</td>
//         <td>${productcontainer[i].Category}</td>
//         <td>${productcontainer[i].descrption}</td>
        
//         <td><button onclick="clearproduct(${i})" class="btn btn-danger">Delete</button></td>
//         <td><button class="btn btn-danger">Updata</button></td> 
//        </tr>
//         `
//     }


// }
// document.getElementById('tbody').innerHTML=cartona

// }

function search(term){
    var matht=[]
    for(i=0;i<productcontainer.length;i++)
    {
        if(productcontainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
                matht.push(productcontainer[i])
        }
    }
    displayProduct(matht)
}


function setupdata(index){

    current=index
addbtn.classList.replace('d-block','d-none')
upbtn.classList.replace('d-none','d-block')

    ProductNameInput.value=productcontainer[index].name
    ProductPriceInput.value=productcontainer[index].price
    ProductCategoryInput.value=productcontainer[index].Category
    ProductdesInput.value=productcontainer[index].descrption
}
var current
function Updata(){

    addbtn.classList.remove('d-none')
upbtn.classList.add('d-none')
   productcontainer[current].name=ProductNameInput.value
   productcontainer[current].price=ProductPriceInput.value
   productcontainer[current].Category=ProductCategoryInput.value
   productcontainer[current].descrption=ProductdesInput.value
displayProduct(productcontainer)
localStorage.setItem('products',JSON.stringify(productcontainer))

}


function ValidateInputes(element){
    var regax={
   

        ProductName:/^[A-Z][a-z]{2,8}/,
        ProductPrice:/^[1-9][0-9][0-9]/,
        Descrption:/^.{6}$/,
        ProductCategory:/^(mobila|tv|laptop)$/,
    }



   
    if(regax[element.id].test(element.value)==true){
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        element.nextElementSibling.classList.replace('d-block','d-none')


    }
    else{
        element.classList.add('is-invalid')
        element.classList.remove("is-valid")
        element.nextElementSibling.classList.replace('d-none','d-block')
    }
}