function aa(n) {
    str = "";
  
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
          str += "*"
      }
      str += "\n";
    }
    console.log(str)
  }
  aa(5);
      