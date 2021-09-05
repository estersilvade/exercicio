<html>
    <script>
      //O que é função?
//  - Função é um bloco de comandos a serem executados quando solicitado

        //Quando utilizamos?
/*- Utilizamos a função para evitar a repetição de codigos ao longo do processo de contrução de um programa;
Por ex: Se eu crio um programa matematico com um conta, toda vez que precisar dele vou precisar reescrever? 
para isso eu tenho uma função, coloco tudo dentro dela, dou um nome e chamo quando precisar.
*/

//O que é Função com Parametro?

function nomeDaFuncao(){
  alert(parametro)
}
nomeDafunção("ola parametro")
//

//O que é Sintaxe? 

/* SINTAXE É O FORMATO CORRETO UTILIZADO PARA ESCREVER UM PROCEDIMENTO/CODIGO*/

// QUAL A SINTAXE DA FUNCAO COM PARAMETRO?

function nomeDaFuncao(){
    alert(parametro)
}
nomeDaFuncao("Olá parametro")

//Explicando a sintaxe da função com parametro:

//A função é iniciada pela palavra function (função em Inglês) para declarar que o que vira depois é um função.
// Em seguida um nome é atribuido a função
// () é a indicação de parametro para a função, neste caso temos um parametro/atributo. A função ira pegar este nome e armazenar um espaço vazio para ele. 
//Quando a função for chamada, iremos passar o que deve substituir este espaço vazio
// {} indicam o armazenamento dos comandos desta função. TUDO o que estiver entre as chaves sera executado quando a função for chamada


//COMO EU CHAMO UMA FUNÇÃO?
// - A função é chamada pelo seu nome seguida de (): nomeDaFuncao()
// () sempre deve ser colocado pós a função para indicar uma execução e informar se contem ou não parametros para essa execução


//EX:

var numeroChave =  prompt("Qual a chave? ")
function surpresa(chave){
    if(chave == 1){
        alert("Palhaço")
    }
}

surpresa(numeroChave)

// function = caixa
// nome da função = nome da caixa
// if = condição, se o parametro CHAVE for igual a 1 comando dentro das {} sera executado
//alert = alertar uma informação
// palhaço = informação a ser alertada
// surpresa = ato de chamar a caixa
// () = ato de executar (a palavra chave sera substituida pelo valor inserido no prompt numeroChave)



// EX: 
//PROGRAMA DE SOMAR NUMEROS
//PROGRAMA DE SUBTRAIR NUMEROS
//PROGRAMA PARA MULTIPLICAR NUMEROS


// EXERCICIO: (UTILIZAR PARAMETRO) 
// Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto. Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.



//O QUE É RETURN:

//-Return é a indicação que após uma etapa ser verdadeira (indicada por condição ou lopping), o código não podera prosseguir e devera retornar. 
//Normalmente indicamos para qual etapa o código deve retornar.

//EX:
function confirmarChave(chave){
var numero = Number(prompt("Insira o número correto da chave: "));
if(chave == 1){
    alert("Chave esta correta")
}else{
    return confirmarChave()
    
}
}
confirmarChave(numero)

//Explicação:
//Neste exemplo, o return ira fazer com que a função seja executada sempre que o usuário inserir no prompt um numero diferente de 1


// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)


//EXERCICIO 2: (UTILIZAR PARAMETRO) Aula 

//Ajude este supermercado a calcular o desconto dos produtos. A cada 3 itens comprados, o 4º item sai com 50% de desconto.




    </script>
</html>