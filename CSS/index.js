window.onload = function() {
    document.getElementById("getstart").onmouseover = function()
    {
        this.style.backgroundColor = "red";
    }

    document.getElementById("getstart").onmouseout = function()
    {
        this.style.backgroundColor = "green";
    }
}

// document.querySelectorAll('.nav-link').addEventListener("click",function(){
//   document.querySelectorAll('.nav-link').classList.add("active")
// })

function bigImg(x) {
    x.style.height = "500px";
    x.style.width = "500px";
  }
  
  function normalImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
  }

  let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}
//preloader Code 
(function(loader) {

    window.addEventListener('beforeunload', function(e) {
      activateLoader();
    });
  
    window.addEventListener('load', function(e) {
      deactivateLoader();
    });
  
    function activateLoader() {
      loader.style.display = 'block';
      loader.style.opacity = 1;
    }
  
    function deactivateLoader() {
      /**
       * ensures that the loading animation plays for at least a second to give the
       * appearance of seamless loading on pages that execute and load extremely
       * quickly (i.e., intranet pages)
       */
      setTimeout(function() {
        deactivate();
      }, 1000);
  
      function deactivate() {
        loader.style.opacity = 0;
        loader.addEventListener('transitionend', function() {
          loader.style.display = 'none';
        }, false);
      }
    }
  
  })(document.querySelector('.o-page-loader'));

  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}