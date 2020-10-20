let subscrBtn = document.querySelector('.subscr-js');
let subscrThx = document.querySelector('.subscr__thx');

subscrBtn.addEventListener('click', function (e) {
   e.preventDefault();
   subscrThx.classList.add('_active');
})

let questionsBtn = document.querySelectorAll('.questions__item');
let questionsThx = document.querySelector('.questions__thx');

questionsBtn.forEach(el => {
   el.addEventListener('click', function () {
      questionsThx.classList.add('_active');
   })
});

let popupBack = document.querySelector('.popup__back');
let bodyLock = document.querySelector('body');

popupBack.addEventListener('click', function (e) {
   e.preventDefault();
   subscrThx.classList.remove('_active');
   questionsThx.classList.remove('_active');
   popup.classList.remove('_active');
   bodyLock.classList.remove('_lock');
})

let petitionBtn = document.querySelector('.petition-js');
let popup = document.querySelector('.popup');

petitionBtn.addEventListener('click', function (e) {
   e.preventDefault();
   popup.classList.add('_active');
   bodyLock.classList.add('_lock');
})

