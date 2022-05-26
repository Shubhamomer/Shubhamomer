function Move(str) {
var a = 20;
    switch(str) {
      case "Up":
    var x=document.getElementById('Car').offsetTop;
    x = x-a;
    document.getElementById('Car').style.marginTop=x+'px';
        break;
      
      case "buttom":
      var x = document.getElementById('Car').offsetTop;
      x = x+a;
      document.getElementById('Car').style.marginTop=x+'px';
      break;
    }
    
}

