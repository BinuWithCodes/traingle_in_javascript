var n = 5;
var pattern = "";
for (var i = 1; i <= n; i++)
 {
  for (var j = 1; j <= n - i; j++) 
  {
    pattern += " ";
  }
  for (var k = 0; k < 2 * i - 1; k++) 
  {
    if(i === 1 || i === n) {
      pattern += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2)
       {
        pattern += "*";
      }
      else {
        pattern += " ";
      }
    }
  }
  pattern += "\n";
}
console.log(pattern);
