let swappinCases="muTEB";






let sw=swappinCases.split("").map(function(ele){

     return ele===ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();

})
.join("-");


console.log(sw);