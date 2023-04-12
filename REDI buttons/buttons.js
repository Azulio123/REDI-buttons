

function changePic() {
    var pebblesImg = document.getElementById("pebbles");
    var flowersImg = document.getElementById("pebbles2");
  
    if (pebblesImg.style.display !== "none") {
      pebblesImg.style.display = "none";
      flowersImg.style.display = "block";
    } else {
      pebblesImg.style.display = "block";
      flowersImg.style.display = "none";
    }
  }    
    

function changeText() {
   document.getElementById("hidden-text").style.color = "black";
   document.getElementById("show-text").style.color = "white";
    
}

function changeLink() {
    document.getElementsByTagName("a")[0].setAttribute("href", "http://www.yahoo.com");
}