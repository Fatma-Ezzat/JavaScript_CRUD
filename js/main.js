
//crud(create,retrieve,update,delete)
var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory")
var productDesc=document.getElementById("productDesc");
var addBtn=document.getElementById("addBtn");
var inputs=document.getElementsByClassName("form-control");
var products;
var currentIndex=0;
if(localStorage.getItem("productsList")==null)
{
    products=[];
}
else
{
  products=JSON.parse(localStorage.getItem("productsList"));//mlyana
  displayData()
}

addBtn.onclick=function()
{
  if(addBtn.innerHTML=="add product") //add mode
  {
    addProduct();
  }
  else{   //update mode
    updateProduct()
  }

  displayData();
  clearForm()
}

function addProduct(){
  var product=
  {
    name:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value,
  }
  products.push(product);
  localStorage.setItem("productsList",JSON.stringify(products))
}

function displayData(){
  var cartona="";
  for(var i=0;i<products.length;i++){
    cartona+=`<tr>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].category}</td>
                <td>${products[i].desc}</td>
                <td><button onclick="deleteProduct(${i})" class='btn btn-danger'>delete</button></td>
                <td><button  onclick="getProductInfo(${i})" class='btn btn-warning'>update</button></td>
              </tr>`
  }
  document.getElementById("tableBody").innerHTML=cartona
}
function deleteProduct(index){
  products.splice(index,1);
  displayData();
  localStorage.setItem("productsList",JSON.stringify(products))
}
//move then improve
function clearForm()
{
  for(var i=0;i<inputs.length;i++){
    inputs[i].value=""
  }
}

function search(searchTxt)
{
  var cartona="";
  for(var i=0;i<products.length;i++){
    if(products[i].name.toLowerCase().includes(searchTxt.toLowerCase())){ 
        cartona+=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="deleteProduct(${i})" class='btn btn-danger'>delete</button></td>
        <td><button onclick="getProductInfo(${i})" class='btn btn-warning'>update</button></td>
      </tr>`
    }
  }
  document.getElementById("tableBody").innerHTML=cartona
}

function getProductInfo(index){

  currentIndex=index;//0

  var product=products[index];
  productName.value=product.name;
  productPrice.value=product.price;
  productCategory.value=product.category;
  productDesc.value=product.desc;
  addBtn.innerHTML="update product";

}

function updateProduct(){
  var product=
  {
    name:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value,
  }
  products[currentIndex].name=product.name;
  products[currentIndex].price=product.price;
  products[currentIndex].category=product.category;
  products[currentIndex].desc=product.desc;


  localStorage.setItem("productsList",JSON.stringify(products))

}

//validation(data is valid)
//logic
//secure
//regular expression--rejex(pattern of symbols and chars)

var nameAlert=document.getElementById("nameAlert");
productName.onkeyup=function(){
  var nameRejex=/^[A-Z][a-z]{2,8}$/;
  if(nameRejex.test(productName.value)) //7lw(valid)
  {
     addBtn.removeAttribute("disabled") ; 
     productName.classList.add("is-valid");
     productName.classList.remove("is-invalid");
     nameAlert.classList.add("d-none")

  }
  else                 //w74(in-valid)
  {
     addBtn.disabled="true";
     productName.classList.add("is-invalid");
     productName.classList.remove("is-valid");
     nameAlert.classList.remove("d-none")
  }
}



//DOM(document object model)

var demo=document.getElementById("demo"); //dom statement
var inputsCollections=Array.from(document.getElementsByClassName("form-control"));
var test=document.getElementsByTagName("input");
var test2=document.getElementsByName("gender");
var test3=document.querySelector(".form-control");
var test4=document.querySelectorAll(".form-control");

