//let usuarios = prompt("Digite Seu Nome ")
//alert("Ola " + usuarios + " Seja bem vindo")
//alertlet numero1= 87+96
//alert("A soma de 87+96 é igual a " + numero1)
//let numero2= 5*8
//alert("A mutiplicação de 5*8 é igual a " + numero2)


//calcular.addEventListener("click",(e) =>{
 // e.preventDefault();
 // console.log("click")
//})


 


 function comprar(){
   
  let p1 = parseFloat(document.getElementById("produto1").value);

  let p2 = parseFloat(document.getElementById("produto2").value);

  let dc = 5 ;
  
   let valor = p1 + p2;

   let desconto = valor - dc;

   alerte("O valor total da sua compra é de" + valor + "você ganhou desconto de  " + dc + "reais")
   
 }