// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let lista = document.querySelectorAll('.botao-expandir-retrair');

for (let l of lista){
	l.addEventListener('click', function(e) { 
		let pEl = e.currentTarget;
		let parent = pEl.parentElement;
		parent.classList.toggle('expandido');
		pEl.innerHTML = '-';
		} )
}
