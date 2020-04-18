


const dropMenuButton = document.querySelector('#dropMenu');
const dropMenu = document.querySelector('.header-drop-nav');
const main = document.querySelector('.header-text');


dropMenuButton.addEventListener('click', toggleDropMenu);



function toggleDropMenu(){
  dropMenu.classList.toggle('show');
  if (main.style.marginTop === "400px") {
    main.style.marginTop = "60px"
  } else {
    main.style.marginTop = "400px"
  };
  
}
