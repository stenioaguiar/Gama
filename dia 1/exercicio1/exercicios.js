//ex2
function sumAll(number) {
  var sum = 0;
  var aux;
  
  if (number[1] > number[0])
  {
    aux = number[1];
    number[1] = number[0];
    number[0] = aux;
  }
  
  for (i=number[1];i<=number[0];i++)
  {
    sum +=i;
  }
  
  return(sum)
}

//ex3
function destroyer() {
  var lista = [];
  var finalArray = [];
  var k = 0;
  
  for (var j = 1; j <= arguments.length; j++)
  {
    lista[j] = arguments[j];
  }
  
  
  for (var i = 0; i < arguments[0].length; i++) {
    if (lista.indexOf(arguments[0][i]) === -1)
    {
      finalArray[k] = arguments[0][i];
      k++;
    }
}
  return(finalArray);  
}

//ex4
function dropElements(lista,funcao) {
  var dropped = [];
  for (var i = 0; i<lista.length; i++)
  {
    if(funcao(lista[i]) === true)
    {
      dropped.push(lista[i])
    }
  }
  return(dropped);
}

//ex5
var Pessoa = function(nome, idade, telefone) {
	this.nome = nome;
	this.idade = idade;
	this.telefone = telefone;
}

var Professor = function(nome, idade, telefone, materia) {
	Pessoa.call(this, nome, idade, telefone)
	this.materia = materia;
	this.ensinar = function(texto) {
		console.log(this.nome + " " + texto + " " + this.materia);
	}
}

Professor.prototype = new Pessoa();
Professor.prototype.constructor = Professor;

