const btn = document.querySelector(".btn");
console.log(btn)
let n = window.screen.width;
let m = window.screen.height;
btn.addEventListener('click', () => {
  alert(`Ширина: ${n},
Высота: ${m}`);
})
