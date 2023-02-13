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

document.querySelectorAll('.nav-link').addEventListener("click",function(){
  document.querySelectorAll('.nav-link').classList.add("active")
})
// const links = document.querySelectorAll('.nav-link');
    
// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       links.forEach((link) => {
//           link.classList.remove('active');
//       });
//       e.preventDefault();
//       link.classList.add('active');
//     });
//   });
// }

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