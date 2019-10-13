//CADASTRO DOS USUARIOS
class Cadastro_Pets{
	constructor(peso, altura){
        this.peso = peso;
		this.altura = altura;
		
		
	}
}

//FUNÇÃO RECEBENDO OS VALORES DOS IDS
function Imc() {
	
	var peso = document.getElementById('Peso').value;
	var altura = document.getElementById('Altura').value;
    


	if (peso == '' || altura == '') {
		alert('Campos vazios !!! preencha');
    }
    else{
		var cadastro = new Cadastro_Pets(peso, altura);
		cadastros_usuarios.salvar_cadastro_usuario(cadastro);
		location.reload();
		
        
    }
}