//Retorna o primeiro elemento dentro do documento
var titulo = document.querySelector(".titulo");
//altera o conteúdo
titulo.textContent = "Aparecida Nutricionista";

//querySelectAll pega todos os pacientes
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
	
	/*var tdNome = paciente.querySelector(".info-nome");
    var nome = tdNome.textContent;*/

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    if(!pesoValido){
        console.log("peso invalido");
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");//pega a classe no css
        //paciente.style.backgroundColor = "red";
        //paciente.style.color = "red";
    }

    var alturaValida = validaAltura(altura);
    if(!validaAltura){
        console.log("altura invalido");
        aulturaValida = false;
        tdIMC.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "lightcoral";
    }
	
	/*var nomeValido = validaNome(nome);
	if(!validaNome){
		console.log("nome invalido");
        nomeValida = false;
        paciente.classList.add("paciente-invalido");
	}*/
	
    if(validaAltura && validaPeso){
        var imc = calculaIMC(peso,altura);
        tdIMC.textContent = imc.toFixed(2);//toFixed imprime só até numero de casa decimais determinadas
    }
}

function calculaIMC(peso,altura){
    var imc = 0; 
    imc = peso / (altura * altura);
    return imc;
}

function validaPeso(peso){
	if(peso >= 0 && peso <1000){
		return true;
	}
	else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura < 3){
		return true;
	}
	else{
		return false;
	}
}

function validaGordura(gordura){
	if(gordura >= 0 && gordura < 50){
		return true;
	}
	else{
		return false;
	}
}












/*function validaNome(nome){
	if(nome != ''){
	   return true; 
	}
	else{
		return false;
	}
}*/
