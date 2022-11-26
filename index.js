var counterElement = document.getElementById("counterText");
var incrementBtn = document.getElementById("increment");
var decrementBtn = document.getElementById("decrement");
var clearBtn = document.getElementById("clear");
var alertText = document.getElementById("alert-text");

var counter = counterElement.innerText;

function increment() {
  counter++;
  console.log(counter);
  counterElement.innerText = counter;
  
  if(counter > 1){
    clearBtn.style.display="block";
    alertText.style.display = "none";  
  }
}

function decrement() {
    if(counter >= 1){
      counter--;
      alertText.style.display = "none";      
    }
    else{
        alertText.style.display = "block";
    }
    if(counter ==0){
      clearBtn.style.display="none";
    }
  console.log(counter);
  counterElement.innerText = counter;
}

function clear() {
  counter = 0;
  console.log(counter);
  counterElement.innerText = counter;
  clearBtn.style.display="none";
}

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
clearBtn.onclick = clear;
