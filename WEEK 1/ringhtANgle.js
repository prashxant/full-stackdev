function Pettern(noOfRows) {
    for (var i = 1; i <= noOfRows; i++) {
      var hi = "";
      for (var j = 1; j <= i; j++) {
        hi = hi + "*";
      }
      console.log(hi);
    }
  }
  Pettern(10);
   