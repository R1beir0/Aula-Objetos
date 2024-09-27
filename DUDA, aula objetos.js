//////////Exercícios interpretação de códigos
/*1*/
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

/* Será impresso no console: 
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"*/



/*2*/
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

/*A) Será impresso no console:
nome:Juca, idade:3, raca:SRD
nome:Juba, idade:3, raca:SRD 
nome:Jubo, idade:3, raca:SRD
B) Ela copia o objeto ou a array inteiro anterior*/



/*3*/
/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/
/*A) Será impresso no console: false, undefined
B) false: não existe a string "backender" no objeto. 
undefined: não foi definido valor para "altura" 
*/



//////////Exercícios escrita de códigos
/*1*/
/*a*/
/*const pessoa = {
    nome: "Eduarda",
    apelidos: ["Duda", "Dudinha", "Dudão"],
}

function pessoas(pessoa) {
console.log(`Eu sou ${pessoa.nome} mas pode me chamar de: ${pessoa.apelidos}`)
} */


/*b*/
/*const objeto = {
    ...pessoa,
    apelidos: ["Dudoca", "dudona", "dudis"],
}
pessoas(objeto)*/



/*2*/
/*a*/
/*const objeto1 = {
nome:"babalu",
idade:10,
profissao:"perigo",
 }

 const objeto2 = {
nome:"nanica",
idade:11,
profissao:"bebe",
 }*/

 /*function minhaFuncao(objeto1) {
   const valores = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length]
    return valores 
 }
 console.log(minhaFuncao(objeto1))*/

 /*3*/
 /*const carrinho = []

 const frutaSacolao = {
nome: "banana",
disponibilidade: true
 }

 const frutaSacolao2 = {
nome: "maca",
disponibilidade: true
 }

 const frutaSacolao3 = {
nome: "abacate", 
disponibilidade: true 
 }

 function sacolao(frutas, frutas1, frutas2) {
carrinho.push(frutaSacolao)
carrinho.push(frutaSacolao2)
carrinho.push(frutaSacolao3)

 }
sacolao(carrinho)
console.log(carrinho)*/

