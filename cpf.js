// Função para consumir API


function buscar() {

    // Carrega o JSON e processa os dados
    fetch('cpf.json').then(response => response.json()).then(corpo => {
        
        console.log(corpo)
        var ident = document.getElementById('valor').value
        var encontrado = false

        corpo.forEach(pessoa => {
                if (ident == pessoa.cpf) {
            var link1 = `<a href="${pessoa.link}"></a>`
            document.getElementById('image').innerHTML = pessoa.image
            document.getElementById('nome').innerHTML = pessoa.nome
            document.getElementById('idade').innerHTML = pessoa.idade
            document.getElementById('cidade').innerHTML = pessoa.cidade
            document.getElementById('profissao').innerHTML = pessoa.profissao

            document.getElementById('erro').innerHTML = "Registro Invalido"
            encontrado = true
            }
        })
        if (!encontrado) {
            document.getElementById('erro').innerHTML = "Registro Invalido"
        }
    })
}