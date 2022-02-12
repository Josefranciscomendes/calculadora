let dados = document.querySelector('#dados')

function insert(valor) {
	let input = document.querySelector('#dados').innerHTML
	document.querySelector('#dados').innerHTML = input + valor

}

let resultado = document.querySelector('#resultado')

resultado.addEventListener('click', () => {
	let input = document.querySelector('#dados').innerHTML
	document.querySelector('#dados').innerHTML = eval(input)
})

let apagar = document.querySelector('#apagar')

apagar.addEventListener('click', () => {
	let input = document.querySelector('#dados').innerHTML
	document.querySelector('#dados').innerHTML = input.substring(0, input.length -1)

})


let limpar = document.querySelector('#limpar')

limpar.addEventListener('click', () => {
	document.querySelector('#dados').innerHTML = ''
})




