// GOAL RESPOSTA CERTA - eu clico na resposta certa e aparece-me HTML e CSS a dizer "Correcto"

// GOAL RESPOSTAS ERRADAS - eu clico numa resposta errada e aparece-me HTML e CSS a dizer "Oops errada" + "algo específico à resposta que eu cliquei" + "tente outra vez"

// GOAL RESPOSTA CERTA

// 1. tenho que ir buscar o botão com a resposta correcta

const respostaCerta = document.getElementById ('resposta-certa');

//1.2 tenho que ir buscar o <p> para onde eu quero injectar conteúdo

const explicacao = document.getElementById('explicacao');

//2. tenho que pôr o elemento resposta certa a escutar o meu 'click'

respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML = "<strong>Correcto!!</strong>"
})

// GOAL RESPOSTAS ERRADAS

const respostasErradas = document.querySelectorAll('.resposta-errada');

respostasErradas.forEach((resposta) => {
	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo = "<strong>Oops, errado...</strong>"

		if(resposta.id === "resposta-html") {
			explicacaoConteudo = explicacaoConteudo + "HTML permite-nos dar estrutura e conteúdo à nossa página."
		} else if(resposta.id === "resposta-CSS") {
			explicacaoConteudo = explicacaoConteudo + "CSS permite-nos dar estilo à nossa página."
		} else {
			explicacaoConteudo = explicacaoConteudo + "Ruby é uma das várias linguagens que pode ser usada para backend."
		}
		explicacaoConteudo += " Tenta outra vez!"

		explicacao.innerHTML = explicacaoConteudo;
	})
})