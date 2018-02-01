// version 1 only provides support for the current price of four currencies 
// to be added: select specific currencies and display previous days price 


var symbols = ['BTC', 'ETH', 'BCH' , 'LTC'];


var coinRequest1 = new XMLHttpRequest();

 for (i in symbols)
 {

 coinRequest1.open("GET", "https://min-api.cryptocompare.com/data/price?fsym=" + symbols[i] + "&tsyms=USD&e=Coinbase",false);
 coinRequest1.send(null);
 
 var currentPrice = JSON.parse(coinRequest1.response).USD;
 var currentDisplay = document.getElementById("coin" + i);
 currentDisplay.innerHTML = symbols[i] + " " + currentPrice;

 }

