var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();//previna o comportamento padrão do botão na tag forms
    
    var form = document.querySelector("#form-adiciona");
    
    //extrai informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);
    
    //cria a tr e td do apciente
    var pacienteTr = montaTr(paciente);
	console.log(pacienteTr);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
	
	form.reset();
     
});

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


















/*
titulo.addEventListener("click", function (){
    console.log("função anônima");
});
titulo.addEventListener("click", mostraMensagem);
function mostraMensagem (){
    console.log("eu fui clicado");
}
*/