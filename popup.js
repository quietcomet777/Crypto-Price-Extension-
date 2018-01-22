// version 1 only provides support for the current price of four currencies 
// to be added: select specific currencies and display previous days price 



var symbols = ['BTC', 'ETH', 'BCH' , 'LTC'];
var coinPricesCurrent = [];
var coinPricesPast = [];
var date = new Date();
date.setDate(date.getDate() - 1 );
var timestampYesterday = Math.round(date.getTime() / 1000);  //time stamp of previous day for other request



document.writeln("Current Prices" + "<br/>");

var coinRequest1 = new XMLHttpRequest();
var coinRequest2 = new XMLHttpRequest();

 for (i in symbols)
 {

 coinRequest1.open("GET", "https://min-api.cryptocompare.com/data/price?fsym=" + symbols[i] + "&tsyms=USD&e=Coinbase",false);
 coinRequest2.open("GET", "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" + symbols[i] + "&tsyms=USD&ts=" + timestampYesterday,false);

 coinRequest1.send(null);
 coinRequest2.send(null);

 

  coinPricesCurrent.push(JSON.parse(coinRequest1.response).USD);
  coinPricesPast.push(JSON.parse(coinRequest2.response))

 }

 
 for (i in coinPricesCurrent)
 {
  document.writeln(symbols[i] + "  " + coinPricesCurrent[i] + '<br/>');

 }
