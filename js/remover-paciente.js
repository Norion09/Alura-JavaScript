var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
	event.target.parentNode.classList.add("fadeOut");
	
	setTimeout(function(){
		var alvoEvento = event.target;
		var paiDoAlvo = alvoEvento.parentNode;
		paiDoAlvo.remove();
	}, 500);
	
	//event.target.parentNode.romeve();//parentNode pega o pai to td
});







/*var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});*/