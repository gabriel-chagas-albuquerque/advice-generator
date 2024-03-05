colocarConselhoNaTela()
const botao = document.querySelector('.border-dice')
botao.addEventListener('click',() =>{
    colocarConselhoNaTela()
})


async function gerarConselhoAleatorio(){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = fetch(url)
    return (await resposta).json()
}

async function colocarConselhoNaTela(){
    const conselhoAleatorio = await gerarConselhoAleatorio()
    const conselho = document.querySelector('.content')
    conselho.innerHTML = conselhoAleatorio.slip.advice
    const numeroDoConselho = document.querySelector('.title')
    numeroDoConselho.innerHTML = `ADVICE #${conselhoAleatorio.slip.id}`    
}