function pattern(n) {
    var hi = "";
    for (var i = 0; i < n; i++) {
      hi = hi + "**";
    }
    console.log(hi);
  }
  
  function pp(n) {
    for (var i = 0; i <= n; i++) {
      pattern(i);
    }
  }
  
  var answer = pp(5);
  console.log(answer);
  