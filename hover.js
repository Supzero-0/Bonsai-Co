let pictures = ['one', 'two', 'three', 'four', ];

let x = document.querySelectorAll('.entretienText');
for (let i = 0; i < pictures.length; i++) {
  x[i].style.opacity = "0";

  document.getElementById('pic-' + pictures[i]).addEventListener('mouseover', ()=> {
    for (let i = 0; i < pictures.length; i++) {
      x[i].style.opacity = "1";
      x[i].style.transition = "all 0.5s ease";
    }
  })
};