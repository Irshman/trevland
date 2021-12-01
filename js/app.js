/* Cod for burger menu */

let btn = document.querySelector('.hero__btn-menu');
let nav = document.querySelector('.hero__nav');
let logo = document.querySelector('.hero__logo');

btn.addEventListener('click', function() {
  btn.classList.toggle('hero__btn-menu--active');
  nav.classList.toggle('hero__nav--active');
  logo.classList.toggle('hero__logo--active');
});

/* Code for sliders */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    loop: true,
    slidesPerGroup: 2,
    centeredSlides: true,
    speed: 900,
    pagination: {
      el: ".special-offers__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".special-offers__next",
      prevEl: ".special-offers__prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      480: { 
        slidesPerView: 'auto',
        slidesPerGroup: 1, 
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 73,
        slidesPerGroup: 2,
      },
    },
  });


  /* code for button bact to top */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector(".my__btn").style.display = "block";
    } else {
        document.querySelector(".my__btn").style.display = "none";
    }
    if (window.innerWidth < 780) {
      document.querySelector(".my__btn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/* Modal  */

var btnModal = document.querySelector(".btn__modal");

btnModal.addEventListener('click', function() {
  let modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");

  modalDiv.innerHTML = `
    <div class="modal__content">
        <span class="close">&times;</span>
        <h1 class="modal__title">Railtrips To Here, There And Everywhere!</h1>
        <p class="modal__text">We all wish to start our year the best way possible and also according to a common belief if you have a great start to your.</p>
        
        <form action="">
            <div class="user-info">
                <div class="user-value">
                    <label class="user-title" for="name">Enter your first name and last name:</label>
                    <input class="user-name" type="text" id="name" placeholder="John Smith">
                </div>
                
                <div class="row">
                    <label class="user-title" for="num">Enter your age:</label>
                    <input type="number" class="user-age" placeholder="Your age...">
                </div>

                <button class="btn btn__ok">OK</button>
                <button class="btn btn__close">Close</button>
        </form>
    </div>
`;
  document.body.appendChild(modalDiv);

  let span = document.querySelector(".close");
  let btnClose = document.querySelector(".btn__close");
  let btnGetInput = document.querySelector(".btn__ok");
  
  span.onclick = function() {
    modalDiv.remove();
  };

  btnClose.onclick = function() {
    modalDiv.remove();
  };

btnGetInput.onclick = function() {
    let inputName = document.querySelector(".user-name").value;
    let inputAge = document.querySelector(".user-age").value;

    console.log(`${inputName}, ${inputAge} age.`);
}

});

