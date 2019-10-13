//BANCO P/ CADASTRO DO USUARIO
class banco_Usuario{
	constructor(indentificacao_banco){
		this.indentificacao_banco = indentificacao_banco;
		this.database = JSON.parse(localStorage.getItem(this.indentificacao_banco)) || [];
	}
	salvar_cadastro_login(cadastro){
		this.database.push(cadastro);
		localStorage.setItem(this.indentificacao_banco , JSON.stringify(this.database));
		alert('Salvo com sucesso');
		location.href = "login.html"
		
	}
}
var cadastros_login = new banco_Usuario('CadastroUsuario');


//BANCO P/ CADASTRO DOS PETS
class banco_Pets{
	constructor(indentificacao_banco){
		this.indentificacao_banco = indentificacao_banco;
		this.database = JSON.parse(localStorage.getItem(this.indentificacao_banco)) || [];
	}
	salvar_cadastro_usuario(cadastro){
		this.database.push(cadastro);
		localStorage.setItem(this.indentificacao_banco , JSON.stringify(this.database));
		
		
	}
}
var cadastros_usuarios = new banco_Pets('IMC');
