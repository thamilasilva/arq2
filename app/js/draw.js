function draw(){
	/*CRIANDO OS ELEMENTOS E CHAMANDO O OBJETO DO BANCO */

	cadastros_usuarios.database.forEach(function(imc){
	
		let  article = document.createElement('article');
		let  img = document.createElement('img');
		let  div = document.createElement('div');
		let  a = document.createElement('a');
		let  h4 = document.createElement('h4');
		let  p = document.createElement('p');

      

 
	 
		let imc_peso = document.createTextNode (imc.peso);
		let meuspets_nome_animal_h4 = document.createTextNode('Oi, sou a ' + imc.nomeAnimal);
		let meuspets_sobre_animal_p = document.createTextNode('Essa gatinha linda é a ' + imc.nomeAnimal +' . A ' + imc.nomeAnimal + ' é carinhosa e companheira, '+ meuspets.opcaoCastrado +', '+ meuspets.opcaoVacinado +' e '+ meuspets.opcaoVermifugada +' . Ela está em '+ meuspets.cidade +', mas pode ser levada para  outras cidades próximas.  Alguém tem espaço na sua casa e na sua vida para acolher essa panterinha fofa? Se sim, pedimos que escreva para gente: '+ meuspets.email +' , ou ligue: '+ meuspets.telefone + ' .');
           /*ADICIONANDO A IMAGEM */
		img.setAttribute('src','img/beautiful_cat_cat_muzzle_fluffy_93328_1280x720.jpg');

		  /*ADICIONANDO AS CLASSES AOS ELEMENTOS DO ARTICLE E DA DIV */

		article.setAttribute('class','servico');
		div.setAttribute('class', 'inner');

			  /* MOSTRANDO PARA O NAVEGADOR QUE OS ELEMENTOS IMG E A DIV PERTENCEM AO ARTICLE*/
			  
		article.appendChild(img);
		article.appendChild(div);

		  /* MOSTRANDO PARA O NAVEGADOR QUE OS ELEMENTOS A, H4 E P PERTENCEM A DIV*/

		div.appendChild(a);
		div.appendChild(h4);
		div.appendChild(p);
				
		 /*ABRINDO OS ELEMENTOS A, H4 E P */
 
		a.appendChild(meuspets_nome_animal_a);
		h4.appendChild(meuspets_nome_animal_h4);
		p.appendChild(meuspets_sobre_animal_p);

		 /*ADICIONANDO CLASSE MAIN AO ARTICLE */

		document.querySelector('#main4').appendChild(article);
		
		 
		
 
})
} 

