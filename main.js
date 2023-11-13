const cb = document.querySelectorAll("input");
  
function randomizeButtons() {
    console.log("test");
    const rdm = Math.floor(Math.random() * cb.length);
    cb[rdm].click();
}
  
for (let i = 0; i < cb.length; i++) {
    cb[i].addEventListener("click", randomizeButtons);
}