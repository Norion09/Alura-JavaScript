var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();//previna o comportamento padrão do botão na tag forms
    
    var form = document.querySelector("#form-adiciona");
    //extrai informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
	console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
	
	adicionaPacienteNaTabela(paciente);
	
	form.reset();
	var mensagensErros = document.querySelector("#mensagens-erro");
	mensagensErros.innerHTML = "";
});
function adicionaPacienteNaTabela(paciente){
	//cria a tr e td do apciente
	var pacienteTr = montaTr(paciente)
	//adiciona paciente
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value).toFixed(2)
    }
    return paciente;
}
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
	
	var nomeTd = montaTd(paciente.nome, "info-nome");
	var pesoTd = montaTd(paciente.peso, "info-peso");
	var alturaTd = montaTd(paciente.altura, "info-altura");
	var gorduraTd = montaTd(paciente.gordura, "info-gordura");
	var imcTd = montaTd(paciente.imc, "info-imc");
	
    // adicionando o paciente na tabela "td"
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    return pacienteTr;
}
function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	
	return td;
}
function validaPaciente(paciente){
	
	var erros = [];
	
	if(paciente.nome.length == 0){
		erros.push("O campo nome está vazio");
	}
	if(!validaPeso(paciente.peso)){
	   	erros.push("Peso inválido");
	}
	if(!validaAltura(paciente.altura)){
	   	erros.push("Altura inválida");
	}
	if(!validaGordura(paciente.gordura)){
		erros.push("Porcentagem de gordura Inválida");
	}
	if(paciente.gordura.length == 0){
		erros.push("O campo gordura está vazio");
	}
	if(paciente.peso.length == 0){
		erros.push("O campo peso está vazio");
	}
	if(paciente.altura.length == 0){
		erros.push("O campo altura está vazio");
	}
	
	return erros;
}
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
	
	ul.innerHTML = "";//limpa o conteudo interno da ul
	
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}











/*
titulo.addEventListener("click", function (){
    console.log("função anônima");
});
titulo.addEventListener("click", mostraMensagem);
function mostraMensagem (){
    console.log("eu fui clicado");
}
*/