// version 1 only provides support for the current price of four currencies 
// to be added: select specific currencies and display previous days price 
console.log("hello");

var symbols = ['BTC', 'ETH', 'BCH' , 'LTC'];
var ccEndpoint = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=";

var coinRequest1 = new XMLHttpRequest();
var i = 0;


// for ( i = 0 , i < symbols.len(), i++)
 //{
 	//ccEndpoint += symbol + ",";

 //}

console.log(ccEndpoint);
// coinRequest1.open("GET", "https://min-api.cryptocompare.com/data/price?fsym=" + symbols[i] + "&tsyms=USD&e=Coinbase",false);
 //coinRequest1.send(null);
 
// var currentPrice = JSON.parse(coinRequest1.response).USD;
 //var currentDisplay = document.getElementById("coin" + i);
 //currentDisplay.innerHTML = symbols[i] + " " + currentPrice;
