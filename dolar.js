fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia =>{
    document.getElementById('valorDolar').innerHTML = economia.USDBRL.bid;
    document.getElementById('valorMaior').innerHTML = economia.USDBRL.high;
    document.getElementById('valorMenor').innerHTML = economia.USDBRL.low;
    console.log(economia)
})
 setInterval(() => {
    location.reload()
 }, 1000);