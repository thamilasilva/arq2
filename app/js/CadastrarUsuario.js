//CADASTRO DA LAN HOUSE
class Cadastro_Usuario{
	constructor(nome,cpf,altura,senha,ConfirmaSenha){
        this.nome = nome;
		this.cpf = cpf;
		this.altura = altura;
		this.senha = senha;
		this.ConfirmaSenha = ConfirmaSenha;
	}
}
//FUNÇÃO RECEBENDO OS VALORES DOS IDS
function CadastrarUsuario() {
	
	var nome = document.getElementById('Nome').value;
	var altura = document.getElementById('Altura').value;
	var senha = document.getElementById('Senha').value;
    var cpf = document.getElementById('Cpf').value;
    var ConfirmaSenha = document.getElementById('ConfirmaSenha').value;

	if (nome == '' || altura == '' || senha == '' || cpf == '' || ConfirmaSenha == '') {
		alert('Campos vazios !!! preencha');

	}
	
    else{

		if (senha != ConfirmaSenha) {
			alert('Senhas não Coincidem!')
		}
		else{
			var cadastro = new Cadastro_Usuario(nome,cpf,altura,senha,ConfirmaSenha);
		cadastros_login.salvar_cadastro_login(cadastro);
        location.reload();
		}
		
       
    }
}


	

	



function login(){
  	var cpf = document.getElementById('login_Cpf').value;
	var senha = document.getElementById('login_Senha').value;
	
	var index;
	if (cpf,senha == '') {
		alert('Você precisa inserir nome e senha !!!');
	}else
	{
		for (var i = 0; i < cadastros_login.database.length; i++) {
			 if(cadastros_login.database[i].cpf == cpf && cadastros_login.database[i].senha == senha ){
			 	 index = i;
			 }
		}
		if (index == undefined) {
			alert('Não encontrado, não possivel fazer login');
		}else{
			alert('Seja bem vindo: ' + cadastros_login.database[index].nome);
			
			
			window.open('AdotePets.html');
			
		}
	}
}


