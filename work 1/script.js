const btn = document.querySelector('.j-btn-test');
const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');
      
btn.addEventListener('click', () => {
  btnOne.classList.toggle('btn_icon_two');
  btnTwo.classList.toggle('btn_icon_two');
});
