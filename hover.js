let paragraph = ['one', 'two', 'three', ];

let txt = document.querySelectorAll('.description');
for (let i = 0; i < paragraph.length; i++) {
  txt[i].style.opacity = "0";

  document.getElementById('pic-' + paragraph[i]).addEventListener('mouseover', ()=> {
    for (let i = 0; i < paragraph.length; i++) {
      txt[i].style.opacity = "1";
      txt[i].style.transition = "all 0.5s ease";
    }
  })
};