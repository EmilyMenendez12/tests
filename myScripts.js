for(var x = 0; x <= 8; x++){
  var y = Math.pow(2,x);
  document.write(y + "<br/>")
}
function myLoop(){
var end=
    document.getElementById("endLoop").value; 
for( var i = 0; i <= end; i++)
{
  document.write('<p>' + i + '</p>')
  }
}
