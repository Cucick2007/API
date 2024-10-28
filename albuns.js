
//Conectar com a API uttilizando o FETCH

fetch('albuns.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    //Map Of The Soul: 7 ~ The Jpurney ~
    document.getElementById('imagem').innerHTML = corpo.image
    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('disco').innerHTML = corpo.album
    document.getElementById('estilo').innerHTML = corpo.style
    document.getElementById('preco').innerHTML = corpo.price

    //Golden
    document.getElementById('imagem2').innerHTML = corpo.image2
    document.getElementById('nome2').innerHTML = corpo.nome2
    document.getElementById('disco2').innerHTML = corpo.album2
    document.getElementById('estilo2').innerHTML = corpo.style2
    document.getElementById('preco2').innerHTML = corpo.price2

    //Layover
    document.getElementById('imagem3').innerHTML = corpo.image3
    document.getElementById('nome3').innerHTML = corpo.nome3
    document.getElementById('disco3').innerHTML = corpo.album3
    document.getElementById('estilo3').innerHTML = corpo.style3
    document.getElementById('preco3').innerHTML = corpo.price3

    //Jack in the Box
    document.getElementById('imagem4').innerHTML = corpo.image4
    document.getElementById('nome4').innerHTML = corpo.nome4
    document.getElementById('disco4').innerHTML = corpo.album4
    document.getElementById('estilo4').innerHTML = corpo.style4
    document.getElementById('preco4').innerHTML = corpo.price4

})