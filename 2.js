function creatPrymid(noOFRows) {
    for (let i = 0; i < noOFRows; i++) {
      var stringToPrint = "";
      for (var j = 0; j < i + 1; j++) {
        stringToPrint = stringToPrint + "*";
      }
      console.log(stringToPrint);
    }
  }
  creatPrymid(10);

  
function hillPattern (noRows){


}


var answer = hillPattern(10);
console.log(answer);