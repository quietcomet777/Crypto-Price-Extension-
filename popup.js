// version 1 only provides support for the current price of four currencies 
// to be added: select specific currencies and display previous days price 

// all the symbols to be displayed are hard codes, later update will have user choidce
var symbols = ['BTC', 'ETH', 'BCH' , 'LTC','XRP'];
var ccEndpoint = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=";
var coinRequest1 = new XMLHttpRequest();
var i = 0;

//creates the string to be used for the GET request bassed off of the symbols used
for ( i = 0; i < symbols.length; i++)
 {
 	ccEndpoint += symbols[i] + ",";
 }

 ccEndpoint += "&tsyms=USD"

//api request along with some parsing of the JSON response
coinRequest1.open("GET", ccEndpoint,false);
coinRequest1.send(null);
var coinData = JSON.parse(coinRequest1.response).DISPLAY;

//here the html display is made from the json response 
coinDataDisplay = ""
for(i = 0; i < symbols.length; i++)
{

	coinDataDisplay += "<tr><td>" + symbols[i] + "</td>";
	coinDataDisplay += "<td>" + coinData[symbols[i]].USD.PRICE + "</td>";
	coinDataDisplay += "<td>" + coinData[symbols[i]].USD.HIGHDAY + "</td>";
	coinDataDisplay += "<td>" + coinData[symbols[i]].USD.LOWDAY + "</td></tr>";

}

//jquery adds the formatted data to the html display 
$( coinDataDisplay ).replaceAll( "#replaceWithCoin" );



 
