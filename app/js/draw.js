function draw(){
	/*CRIANDO OS ELEMENTOS E CHAMANDO O OBJETO DO BANCO */
	var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
  var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

	
  cadastros_usuarios.database.forEach(function(imc){
	
		
		let  li = document.createElement('li');
		let  div = document.createElement('div');
		let  button1 = document.createElement('button');
		let  button2 = document.createElement('button');
		let a1 = document.createElement('a');  
		let a2 = document.createElement('a');  
		let a3 = document.createElement('a');  
		let a4 = document.createElement('a');      

        
		
		var  imc02 = imc.peso/(imc.altura*imc.altura);
		var resultado;

		if (imc02 < 18.5) {
			resultado= "Abaixo do peso";
			} else if (imc02 >= 18.5 && imc02 < 25) {
					resultado = "Seu peso está normal";
			} else if (imc02 >= 25 && imc02 < 30) {
					resultado = "Acima do peso";
			} else if (imc02 >= 30 && imc02 < 35) {
					resultado = "Obesidade";	
			} else if (imc02 > 35) {
					resultado = "Obesidade mórbida";
			}
	 
		let imc_peso = document.createTextNode ('Peso: ' +imc.peso);
		let imc_altura = document.createTextNode('Altura: ' + imc.altura);
		let imc_imc = document.createTextNode('  IMC:  ' + imc02);
		let imc_resultado =  document.createTextNode('Situação: ' +resultado);

           /*ADICIONANDO A IMAGEM */
		

		  /*ADICIONANDO AS CLASSES AOS ELEMENTOS DO ARTICLE E DA DIV */

		
		div.setAttribute('class', 'buttons');
		button1.setAttribute('class', 'remove');
		button2.setAttribute('class', 'complete');

		button1.innerHTML = removeSVG;
		button2.innerHTML = completeSVG;

			  /* MOSTRANDO PARA O NAVEGADOR QUE OS ELEMENTOS IMG E A DIV PERTENCEM AO ARTICLE*/
			  
		
		li.appendChild(div);

		  /* MOSTRANDO PARA O NAVEGADOR QUE OS ELEMENTOS A, H4 E P PERTENCEM A DIV*/

		div.appendChild(button1);
		div.appendChild(button2);
		
				
		 /*ABRINDO OS ELEMENTOS A, H4 E P */
 
		a1.appendChild(imc_peso);
		li.appendChild(a1);
		a2.appendChild(imc_altura);
		li.appendChild(a2);
		a3.appendChild(imc_imc);
		li.appendChild(a3);
		a4.appendChild(imc_resultado);
		li.appendChild(a4);

		 /*ADICIONANDO CLASSE MAIN AO ARTICLE */

		document.querySelector('#todo.todo').appendChild(li);
		
		 
		
 
})
} 

