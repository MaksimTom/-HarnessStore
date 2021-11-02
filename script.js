const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('.shop__btn');
const span = document.querySelector('.close');
const tagBody = document.querySelector('body');
const card = document.querySelectorAll('.shop__card');
const content = document.querySelector('.modal__card');
const size = document.querySelector('.modal__size');
const title = document.querySelector('.title__modal');
const img = document.querySelector('.modal__img');
const color = document.querySelector('.modal__color');
const price = document.querySelector('.modal__price');
let cloneContent;

//modal window start

for(let i = 0; i < card.length; i++){
  btn[i].onclick = function() {
    const inputSize = card[i].querySelectorAll('.input__size');
    const inputColor = card[i].querySelectorAll('.input__color');
    for (let k = 0; k < inputSize.length; k++){
      for (let y = 0; y < inputColor.length; y++){
        if (inputSize[k].checked && inputColor[y].checked){
          modal.style.display = 'block';
          tagBody.classList.add('hidden');
          // cloneContent = card[i].cloneNode(true);
          // content.append(cloneContent);
          
          img.src = card[i].querySelector('.item__img').src;
          title.innerHTML = card[i].querySelector('.title__item').textContent;
          size.innerHTML = inputSize[k].value;
          const black = 'img/RectangleBlack.png';
          const red = 'img/RectangleRed.png';
          console.log(inputColor[y].value)
          if(inputColor[y].value == 'black'){
            ;
            color.src = black;
          } else{ color.src = red;}
          console.log(card[i].querySelector('.new__price'));
          price.innerHTML = card[i].querySelector('.new__price').textContent;
          
        }
      }
    };
    if (modal.style.display != 'block'){
      alert('Выберите размер и цвет');
    }
  }
}

span.onclick = function() {
    modal.style.display = 'none';
    tagBody.classList.remove('hidden');
   
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        tagBody.classList.remove('hidden');
      
    }
}

//modal window end

//product selection button  start
const everyDayBtn = document.querySelectorAll('.everyday__belt');
const eroticBtn = document.querySelectorAll('.erotic__belt');

for(let k = 0; k < eroticBtn.length; k++){
  eroticBtn[k].onclick = function(){
    location.href="#catalog";
    for(let i = 0; i < card.length; i++){
      if (card[i].classList.contains('erotic')){
        card[i].style.display = 'block'
      } else { card[i].style.display = 'none'};
    }
  }
}

for(let k = 0; k < everyDayBtn.length; k++){
  everyDayBtn[k].onclick = function(){
    location.href="#catalog";
    for(let i = 0; i < card.length; i++){
      if (card[i].classList.contains('everyday')){
        card[i].style.display = 'block'
      } else { card[i].style.display = 'none'};
    }
  }
}

//product selection button  end

//burger start



//burger end
