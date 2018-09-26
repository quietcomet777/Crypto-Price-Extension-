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
var prices = [];
//here the html display is made from the json response 
coinDataDisplay = ""
for(i = 0; i < symbols.length; i++)
{

	coinDataDisplay += "<tr><td>" + symbols[i] + "</td>";
	//coinDataDisplay += "<td>" + coinData[symbols[i]].USD.PRICE + "</td>";
	coinDataDisplay += "<td>" + coinData[symbols[i]].USD.HIGHDAY + "</td>";
	coinDataDisplay += "<td>" + coinData[symbols[i]].USD.LOWDAY + "</td>";
	coinDataDisplay += "<td>" + coinData[symbols[i]].USD.CHANGE24HOUR + "</td></tr>"

	prices.push(coinData[symbols[i]].USD.PRICE.slice(1,coinData[symbols[i]].USD.PRICE.length));


}

//jquery adds the formatted data to the html display 
$( coinDataDisplay ).replaceAll( "#replaceWithCoin" );


var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  symbols, //["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Current Values',
            data: prices, // [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true 
                }
            }]
        }
    }
});


 
