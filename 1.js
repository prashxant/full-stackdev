function sum(a, b) {
    return a + b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function calculate(firstEl, secondEl, operator) {
    return operator(firstEl, secondEl);
  }
  var answer = calculate(31, 55, sum);
  
  console.log(answer);
  