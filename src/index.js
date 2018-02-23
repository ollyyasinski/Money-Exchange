// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var output = new Object();
    var coins= [50, 25, 10, 5, 1];
    var names = ["H", "Q", "D", "N", "P"];
    if (currency > 10000){
        output = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    else {
        for (var i = 0; i < coins.length; i++){
            if (currency / coins[i] >= 1){
                output[names[i]] = Math.floor(currency / coins[i]);
                currency =  currency % coins[i];
            }
        }
    }
    return output;
}
