// Vetor de pessoas
let vetor = []

// Cadastro
function cadastrar(){

    // Obter o nome e a cidade
    let nome = document.querySelector('#nome')
    let cidade = document.querySelector('#cidade')

    // Validação
    if(nome.value == ''){
        alert('Informe um nome!')
    }else if(cidade.value == ''){
        alert('Informe uma cidade!')
    }else{

        // Criar objeto JSON
        let pessoa = {
            'nome'  :nome.value,
            'cidade':cidade.value
        }

        // Limpar os campos
        nome.value = ''
        cidade.value = ''

        // Cursor
        nome.focus()

        // Adicionar o objeto no vetor
        vetor.push(pessoa)

        // Função para selecionar os registros
        selecionar()
    }
}

// Remover
function remover(indice){
    
    // Remover pessoa do vetor
    vetor.splice(indice, 1)

    // Função para selecionar os registros
    selecionar()

}

// Selecionar
function selecionar(){
    // Obter o elemento tabela
    let tabela = document.querySelector('#tabela')

    // Limpar a tabela
    tabela.innerHTML = ''

    // Laço de repetição
    for(let indice=0; indice < vetor.length; indice++){

        // Criar uma linha de tabela (tr)
        let linha = tabela.insertRow(-1)

        // Criar colunas
        let colunaNome    = linha.insertCell(0)
        let colunaCidade  = linha.insertCell(1)
        let colunaRemover = linha.insertCell(2)

        // Adicionar os valores nas colunas
        colunaNome.innerText    = vetor[indice].nome
        colunaCidade.innerText  = vetor[indice].cidade
        colunaRemover.innerHTML = `<button class='btn btn-danger' onclick='remover(${indice})'>Remover</button>`
    }
}