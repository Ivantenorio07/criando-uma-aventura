
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
button.addEventListener('click', function() {
const atual = documenet.querySelector('.ativo');
const proximoPasso = 'passo-' + this.getAtribute('data-proximo');
})
})