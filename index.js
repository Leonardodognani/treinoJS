"qualquer ideia de caracteres, como estas, 1-2+3,4." // string

// imprime no console... "console" é uma variante, ".log" é o método chamado no console
console.log("string"); //imprime string.


console.log(2.5 + 5) // imprime 7.5... números podem ser inteiros, reais, NaN (not a number) e infinity.


console.log(false) // falso. Boolean ou é verdadeiro ou falso.


null === undefined // falso



// objetos criam estruturas, chamam métodos e atributos.

console.log({
    name: "Leo",
    idade: 36,
    andar: function() {
        console.log('andar');
    },
});

 // Array são vetores, dados em listas, agrupamento de dados.

 console.log(["leite", "ovos", "achocolatado", "biscoito"]);





 //tipos de dados

// primitivos - string, numbers, booleans, undefined, Symbol e BigInt

//estruturais -   functions... objetos (Arrays, Map, Set, Date...)... o null é um primitivo/estrutural.



//variáveis - var, let const. 
//var e let podem mudar. const é imutável.

var clima = "quente"; // estamos atribuindo a variável clima o atributo string "quente".

console.log(clima); //imprime "quente".

let clima = "frio"; //estou mudando o atributo da variável clima para "frio".

const clima = "ameno" // o código irá apresentar erro, pois "const" é uma variável constante, imutável.

//  JS é uma linguagem fracamnte tipada e dinâmica. Fracamente tipada porque as variáveis não precisam
//  ter um valor definido e dinâmica porque podemos mudar os conteúdos das variáveis, 
//  como fizemos no exemplo acima. além disso, podemos mudar de string para numer para boolean, etc.




//Scope
//determina a visibilidade de alguma variável no JS.

//block statemant 
// criamos um bloco entre {} .

//o var é global e funciona dentro e fora do scopo. Porém, acontece o hoisting e se o bloco estiver
//atribuindo valor abaixo de quem "chama" a variável, ela será 'undefined'. Caso seja atribuída acima,
//então irá mostrar seu valor, como por exemplo:

console.log("o valor e X é =", X); // aqui o valor de X será "undefined", pois o X existe, mas 
//sem valor definido.
{
   var X = 5;
}

console.log("o valor e X é =", X); // aqui embaixo, o resultado de X seria igual a 5, pois o JS
// faz a leitura do código de cima para baixo.

//já o let e o const são locais e só funcionam dentro do bloco/scopo onde foram criadas. 
//além disso, no caso de let e const, mesmo dentro do bloco, devem ser declaradas antes de pedir
//a impressão de seu valor, senão gera erro no código, pois o JS contiua lendo de cima para baixo.
//caso sejam chamadas fora do bloco, mesmo que abaixo, não seria reconhecida, pois só existem dentro
//do bloco.



var age //declarando variável.
age = Number // atribuí valor.

var Name = "Leo" // declarei e atribuí valor.


let age, isHuman //agrupamento de declarações.
age = 36,
isHuman = true,

console.log(Name, age, isHuman ); //declarar de uma só vez.


console.log("o " + Name + " tem " + age + " anos."); // isso serve para concatenar, o resultado
// será "o Leo tem 36 anos."


console.log(`o ${Name} tem ${age} anos.`) // concatenando com template literals or template strings.
//o resultado será o mesmo da concatenação anterior.




 //objects

 const person = {
     name: Leo,
     age: 36,
     weight: 80,
     isAdmin: true
    
 }

 console.log(`${person.name} possui ${person.age} anos.`); // imprime Leo possui 36 anos. assim
 //escolhemos apenas os atributos que desejamos imprimir.





 //Array

 const animals = [
     "wolf",
     "cat",
     "monkey",
     "dog"
 ]

 console.log(animals[0]); // imprime wolf. começa a contagem do 0.


















