// Criação do JSON

var json = `{
    "id": 1,
    "album": "The Album",
    "nome": "Black Pink",
    "estilo": "Kpop",
    "faixas": "8 faixas",
    "image": "<img src= 'img/the album.jpg' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/album/71O60S5gIJSIAhdnrDIh3N?si=H6jfsSDCSKqYAoGcp-ta_Q"
}`

var json1 = `{
    "id": 2,
    "album": "AM",
    "nome": "Arctic Monkeys",
    "estilo": "Rock Alternativo, Psicodélico, Art Rock",
    "faixas": "15 faixas",
    "image": "<img src= 'img/AM.jpg' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/track/5FVd6KXrgO9B3JPmC8OPst?si=9d30579ca0284567"
}`

var json2 = `{
    "id": 3,
    "album": "Dangerous Woman",
    "nome": "Ariana Grande",
    "estilo": "pop",
    "faixas": "15 faixas",
    "image": "<img src= 'img/DM.jpg' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/track/3nef5W8jTkXrOKgCu4kmq7?si=4e6e164d96734b1e"
}`

var json3 = `{
    "id": 4,
    "album": "Utopia",
    "nome": "Travis Scott",
    "estilo": "hip-hop / trap",
    "faixas": "19 faixas",
    "image": "<img src= 'img/utopia.jfif' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/album/18NOKLkZETa4sWwLMIm0UZ?si=2oy6kweNRSav8cf3Hew-nA"
}`

var json4 = `{
    "id": 5,
    "album": "D-2",
    "nome": "Agust D",
    "estilo": "hip-hop / rap",
    "faixas": "10 faixas",
    "image": "<img src= 'img/D-2.jfif' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/album/7lhFsAaVCFaYbkNvBMw5Zf?si=GE5YQUvOQ4OACpmJZ7932A"
}`

var json5 = `{
    "id": 6,
    "album": "The Fame Monster (Deluxe)",
    "nome": "Lady Gaga",
    "estilo": "pop",
    "faixas": "Disco 1: 8 faixas / Disco 2: 16 faixas",
    "image": "<img src= 'img/TFM(D).jfif' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/album/6rePArBMb5nLWEaY9aQqL4?si=qpNZJ_-HTYq9HcEx7RiXQQ"
}`

var json6 = `{
    "id": 7,
    "album": "All Eyez on Me",
    "nome": "2Pac",
    "estilo": "gangsta rap",
    "faixas": "Disco 1: 14 faixas / Disco 2: 13 faixas",
    "image": "<img src= 'img/AEOM.jpg' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/album/78iX7tMceN0FsnmabAtlOC?si=E1nfJNUGSQOVE06og4X95A"
}`

var json7 = `{
    "id": 8,
    "album": "Irrastreável",
    "nome": "L7NNON",
    "estilo": "hip-hop / rap",
    "faixas": "31 faixas",
    "image": "<img src= 'img/Irrastreável.jpg' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/album/02xKTYrVQ1gSN8Lo4w7JmG?si=QPGtzZsoTKiHEqgsbW_W7Q"
}`

var json8 = `{
    "id": 9,
    "album": "Traumazine",
    "nome": "Megan Thee Stallion",
    "estilo": "hip-hop / rap",
    "faixas": "18 faixas",
    "image": "<img src= 'img/traumazine.jfif' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/album/4YP0h2KGDb20eJuStnBvim?si=K9cY6bWWQkWpGv_0omRkxg"
}`

var json9 = `{
    "id": 10,
    "album": "Lume",
    "nome": "Filipe Ret",
    "estilo": "trap / pop rap",
    "faixas": "11 faixas",
    "image": "<img src= 'img/lume.jfif' width='350px'>",
    "link": "https://open.spotify.com/intl-pt/album/4sB8eASUZfGxo2ZZ2lLwkG?si=kv7nZ3cmRBW7G93ogdANDA"
}`

// Coverter o texto STRING em JSON
var dados1 = JSON.parse(json)
var dados2 = JSON.parse(json1)
var dados3 = JSON.parse(json2)
var dados4 = JSON.parse(json3)
var dados5 = JSON.parse(json4)
var dados6 = JSON.parse(json5)
var dados7 = JSON.parse(json6)
var dados8 = JSON.parse(json7)
var dados9 = JSON.parse(json8)
var dados10 = JSON.parse(json9)

//link com JUQERY
var link1 = `<a href="${dados1.link}">Confira no Spotify</a>`
var link2 = `<a href="${dados2.link}">Confira no Spotify</a>`
var link3 = `<a href="${dados3.link}">Confira no Spotify</a>`
var link4 = `<a href="${dados4.link}">Confira no Spotify</a>`
var link5 = `<a href="${dados5.link}">Confira no Spotify</a>`
var link6 = `<a href="${dados6.link}">Confira no Spotify</a>`
var link7 = `<a href="${dados7.link}">Confira no Spotify</a>`
var link8 = `<a href="${dados8.link}">Confira no Spotify</a>`
var link9 = `<a href="${dados9.link}">Confira no Spotify</a>`
var link10 = `<a href="${dados10.link}">Confira no Spotify</a>`

function buscar() {

    var ident = document.getElementById('valor').value

    if (ident == dados1.id) {
        document.getElementById('image').innerHTML = dados1.image
        document.getElementById('album').innerHTML = dados1.album
        document.getElementById('nome').innerHTML = dados1.nome
        document.getElementById('estilo').innerHTML = dados1.estilo
        document.getElementById('faixas').innerHTML = dados1.faixas
        document.getElementById('link').innerHTML = link1
    }


    if (ident == dados2.id) {
        document.getElementById('image').innerHTML = dados2.image
        document.getElementById('album').innerHTML = dados2.album
        document.getElementById('nome').innerHTML = dados2.nome
        document.getElementById('estilo').innerHTML = dados2.estilo
        document.getElementById('faixas').innerHTML = dados2.faixas
        document.getElementById('link').innerHTML = link2
    }

    if (ident == dados3.id) {
        document.getElementById('image').innerHTML = dados3.image
        document.getElementById('album').innerHTML = dados3.album
        document.getElementById('nome').innerHTML = dados3.nome
        document.getElementById('estilo').innerHTML = dados3.estilo
        document.getElementById('faixas').innerHTML = dados3.faixas
        document.getElementById('link').innerHTML = link3
    }

    if (ident == dados4.id) {
        document.getElementById('image').innerHTML = dados4.image
        document.getElementById('album').innerHTML = dados4.album
        document.getElementById('nome').innerHTML = dados4.nome
        document.getElementById('estilo').innerHTML = dados4.estilo
        document.getElementById('faixas').innerHTML = dados4.faixas
        document.getElementById('link').innerHTML = link4
    }

    if (ident == dados5.id) {
        document.getElementById('image').innerHTML = dados5.image
        document.getElementById('album').innerHTML = dados5.album
        document.getElementById('nome').innerHTML = dados5.nome
        document.getElementById('estilo').innerHTML = dados5.estilo
        document.getElementById('faixas').innerHTML = dados5.faixas
        document.getElementById('link').innerHTML = link5
    }

    if (ident == dados6.id) {
        document.getElementById('image').innerHTML = dados6.image
        document.getElementById('album').innerHTML = dados6.album
        document.getElementById('nome').innerHTML = dados6.nome
        document.getElementById('estilo').innerHTML = dados6.estilo
        document.getElementById('faixas').innerHTML = dados6.faixas
        document.getElementById('link').innerHTML = link6
    }

    if (ident == dados7.id) {
        document.getElementById('image').innerHTML = dados7.image
        document.getElementById('album').innerHTML = dados7.album
        document.getElementById('nome').innerHTML = dados7.nome
        document.getElementById('estilo').innerHTML = dados7.estilo
        document.getElementById('faixas').innerHTML = dados7.faixas
        document.getElementById('link').innerHTML = link7
    }

    if (ident == dados8.id) {
        document.getElementById('image').innerHTML = dados8.image
        document.getElementById('album').innerHTML = dados8.album
        document.getElementById('nome').innerHTML = dados8.nome
        document.getElementById('estilo').innerHTML = dados8.estilo
        document.getElementById('faixas').innerHTML = dados8.faixas
        document.getElementById('link').innerHTML = link8
    }

    if (ident == dados9.id) {
        document.getElementById('image').innerHTML = dados9.image
        document.getElementById('album').innerHTML = dados9.album
        document.getElementById('nome').innerHTML = dados9.nome
        document.getElementById('estilo').innerHTML = dados9.estilo
        document.getElementById('faixas').innerHTML = dados9.faixas
        document.getElementById('link').innerHTML = link9
    }

    if (ident == dados10.id) {
        document.getElementById('image').innerHTML = dados10.image
        document.getElementById('album').innerHTML = dados10.album
        document.getElementById('nome').innerHTML = dados10.nome
        document.getElementById('estilo').innerHTML = dados10.estilo
        document.getElementById('faixas').innerHTML = dados10.faixas
        document.getElementById('link').innerHTML = link10
    } else {
        document.getElementById('erro').innerHTML = "Não Encontrado"
    }
    
}

console.log(dados1)
console.log(dados2)
console.log(dados3)
console.log(dados4)
console.log(dados5)
console.log(dados6)
console.log(dados7)
console.log(dados8)
console.log(dados9)
console.log(dados10)
