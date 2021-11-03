window.addEventListener("DOMContentLoaded", () => {
  animateTitle();
});

function animateTitle() {
  favIcon = document.getElementById("fav");
  titletext = document.getElementsByTagName("title")[0];

  titlecount = 0;
  setInterval(() => {
    
    if (titlecount == 0) {
    titletext.innerHTML = "A"
    favIcon.setAttribute("href", "Media/fav/1favicon.png")
    }
    else if (titlecount == 1) titletext.innerHTML = "Ar";
    else if (titlecount == 2){
      titletext.innerHTML = "Art";
      favIcon.setAttribute("href", "Media/fav/2favicon.png")
    }
    else if (titlecount == 3) titletext.innerHTML = "Art M";
    else if (titlecount == 4){
      titletext.innerHTML = "Art Ma";
      favIcon.setAttribute("href", "Media/fav/3favicon.png")
    }
    else if (titlecount == 5) titletext.innerHTML = "Art Man";
    else if (titlecount == 6){
      titletext.innerHTML = "Art Mani";
      favIcon.setAttribute("href", "Media/fav/4favicon.png")
    }
    else if (titlecount == 7) titletext.innerHTML = "Art Mania";
    else if (titlecount == 8){
      titletext.innerHTML = "Art Mania P";
      favIcon.setAttribute("href", "Media/fav/5favicon.png")
    }
    else if (titlecount == 9) titletext.innerHTML = "Art Mania pr";
    else if (titlecount == 10){
      titletext.innerHTML = "Art Mania pri";
      favIcon.setAttribute("href", "Media/fav/6favicon.png")
    }
    else if (titlecount == 11) titletext.innerHTML = "Art Mania prit";
    else if (titlecount == 12){
      titletext.innerHTML = "Art Mania pritz";
      favIcon.setAttribute("href", "Media/fav/7favicon.png")
    }
    else if (titlecount == 13) titletext.innerHTML = "Art Mania pritz";
    else if (titlecount == 14){
      titletext.innerHTML = "Art Mania prit";
      favIcon.setAttribute("href", "Media/fav/8favicon.png")
    }
    else if (titlecount == 15) titletext.innerHTML = "Art Mania pri";
    else if (titlecount == 16){
      titletext.innerHTML = "Art Mania pr";
      favIcon.setAttribute("href", "Media/fav/9favicon.png")
    }
    else if (titlecount == 17) titletext.innerHTML = "Art Mania p";
    else if (titlecount == 18){
      titletext.innerHTML = "Art Mania";
      favIcon.setAttribute("href", "Media/fav/10favicon.png")
    }
    else if (titlecount == 19) titletext.innerHTML = "Art Mani";
    else if (titlecount == 20){
      titletext.innerHTML = "Art Man"
      favIcon.setAttribute("href", "Media/fav/11favicon.png")
    }
    else if (titlecount == 21) titletext.innerHTML = "Art Ma";
    else if (titlecount == 22){
      titletext.innerHTML = "Art M"
      favIcon.setAttribute("href", "Media/fav/12favicon.png")
    } 
    else if (titlecount == 23) titletext.innerHTML = "Art";
    else if (titlecount == 24) titletext.innerHTML = "Ar";
    else if (titlecount == 25) titletext.innerHTML = "A";
    if(titlecount == 25) titlecount = 0;
    titlecount++;
  }, 100);

}
