
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

var getMaxProfit = function(values) {
  var min = values[0];
  var maxProfit = 0;
  for (var i = 0; i < values.length; i++) {
    if(values[i] < min) min = values[i];
    if(values[i] - min > maxProfit) maxProfit = values[i] - min;
  }
  return maxProfit;
};

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)i