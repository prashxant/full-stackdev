function aa(n) {
    str = "";
    for (var i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);
  }
  aa(5);
  