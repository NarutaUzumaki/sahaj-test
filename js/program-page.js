window.addEventListener("resize", main);

function main() {
  var sliders = document.querySelectorAll('.comments__item');
  sliders.forEach(function (slider) {
    slider.classList.remove('comment-opacity');
  });
  renderSwiper();

  var readMoreCommentsBtns = document.querySelectorAll(".comments__link");
  var commentsShortTexts = document.querySelectorAll(".comments__text .short");
  var commentsFullTexts = document.querySelectorAll(".comments__text .full");

  readMoreCommentsBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      commentsShortTexts[index].classList.add("d-none");
      commentsFullTexts[index].classList.remove("d-none");
      btn.classList.add("d-none");
    });
  });

  if (window.matchMedia("(min-width: 991px)").matches) {
    var researchImgItems = document.querySelectorAll(".research__block img");
    var researchQuote = document.querySelector(".research__quote");

    var quoteArrText = [
      '"Improved immune cell counts within as<br /> little as 3 weeks"',
      "“3x more time spent in deep,<br />restful stages of sleep.”",
      '"The Easy Breathing Technique That Can<br /> Lower Your Anxiety 44%"',
      '"Shows promise in providing relief for<br /> depression"',
    ];

    var indexImg = 0;

    var timer = setInterval(function () {
      if (indexImg < researchImgItems.length) {
        if (researchImgItems[indexImg].dataset.activeResearchSlide === "true") {
          researchImgItems[indexImg].setAttribute(
            "src",
            researchImgItems[indexImg].dataset.srcColor
          );
          researchQuote.innerHTML = quoteArrText[indexImg];
          if (indexImg !== 0) {
            researchImgItems[indexImg - 1].setAttribute(
              "src",
              researchImgItems[indexImg - 1].dataset.srcGray
            );
          }
          if (indexImg === 0) {
            researchImgItems[researchImgItems.length - 1].setAttribute(
              "src",
              researchImgItems[researchImgItems.length - 1].dataset.srcGray
            );
          }
        }

        if (indexImg < researchImgItems.length - 1) {
          researchImgItems[indexImg].dataset.activeResearchSlide = "false";
          researchImgItems[indexImg + 1].dataset.activeResearchSlide = "true";
        } else {
          researchImgItems[indexImg].dataset.activeResearchSlide = "false";
          researchImgItems[0].dataset.activeResearchSlide = "true";
        }

        indexImg++;
      } else {
        indexImg = 0;
      }
    }, 2000);

    var authForm = document.querySelector(".modal-window.auth");
    var authFormCard = authForm.querySelector(".modal-window__card");
    var registerButton = document.getElementById("register-button");
    var registerBottomButton = document.getElementById("register-button-2");

    var switchLoginFormBtn = authForm.querySelector("#login");
    var switchSignupFormBtn = authForm.querySelector("#signup");

    var switchLoginForm = authForm.querySelector("#login-form");
    var switchSignupForm = authForm.querySelector("#signup-form");

    var modalWindowCloseBtn = authForm.querySelector(".modal-window__close_desktop");

    switchLoginFormBtn.addEventListener("click", function () {
      switchSignupFormBtn.classList.remove("active");
      switchSignupForm.classList.remove("active");
      switchSignupForm.classList.remove("show");

      switchLoginFormBtn.classList.add("active");
      switchLoginForm.classList.add("active");
      setTimeout(function () {
        switchLoginForm.classList.add("show");
      }, 0);
    });

    switchSignupFormBtn.addEventListener("click", function () {
      switchLoginFormBtn.classList.remove("active");
      switchLoginForm.classList.remove("active");
      switchLoginForm.classList.remove("show");

      switchSignupFormBtn.classList.add("active");
      switchSignupForm.classList.add("active");
      setTimeout(function () {
        switchSignupForm.classList.add("show");
      }, 0);
    });

    registerButton.addEventListener("click", function () {
      document.body.classList.add("overflow-hidden");
      authForm.classList.add("show");
      setTimeout(function () {
        authFormCard.classList.add("show");
        authForm.classList.add("active");
      }, 300);
    });

    registerBottomButton.addEventListener("click", function () {
      document.body.classList.add("overflow-hidden");
      authForm.classList.add("show");
      setTimeout(function () {
        authFormCard.classList.add("show");
        authForm.classList.add("active");
      }, 300);
    });

    modalWindowCloseBtn.addEventListener("click", function () {
      document.body.classList.remove("overflow-hidden");
      authForm.classList.remove("active");
      authFormCard.classList.remove("show");
      setTimeout(function () {
        authForm.classList.remove("show");
      }, 300);
    });
  } else {
    var registerMobileModal = document.querySelector(".register-mobile-modal");
    var registerButton = document.getElementById("register-button");
    var registerBottomButton = document.getElementById("register-button-2");
    var closeMobileBtn = document.getElementById("close-mobile-btn");

    var authForm = document.querySelector(".modal-window.auth");
    var authFormCard = authForm.querySelector(".modal-window__card");

    var registerButton = document.getElementById("register-button");
    var registerBottomButton = document.getElementById("register-button-2");
    var modalWindowCloseBtn = authForm.querySelector(".modal-window__close_mobile");

    var switchLoginFormBtn = authForm.querySelector("#login");
    var switchSignupFormBtn = authForm.querySelector("#signup");

    var switchLoginForm = authForm.querySelector("#login-form");
    var switchSignupForm = authForm.querySelector("#signup-form");

    switchLoginFormBtn.addEventListener("click", function () {
      switchSignupFormBtn.classList.remove("active");
      switchSignupForm.classList.remove("active");
      switchSignupForm.classList.remove("show");

      switchLoginFormBtn.classList.add("active");
      switchLoginForm.classList.add("active");
      setTimeout(function () {
        switchLoginForm.classList.add("show");
      }, 0);
    });

    switchSignupFormBtn.addEventListener("click", function () {
      switchLoginFormBtn.classList.remove("active");
      switchLoginForm.classList.remove("active");
      switchLoginForm.classList.remove("show");

      switchSignupFormBtn.classList.add("active");
      switchSignupForm.classList.add("active");
      setTimeout(function () {
        switchSignupForm.classList.add("show");
      }, 0);
    });

    registerButton.addEventListener("click", function () {
      document.body.classList.add("overflow-hidden");
      authForm.classList.add("show");
      setTimeout(function () {
        authFormCard.classList.add("show");
        authForm.classList.add("active");
      }, 300);
    });

    registerBottomButton.addEventListener("click", function () {
      document.body.classList.add("overflow-hidden");
      authForm.classList.add("show");
      setTimeout(function () {
        authFormCard.classList.add("show");
        authForm.classList.add("active");
      }, 300);
    });

    modalWindowCloseBtn.addEventListener("click", function () {
      document.body.classList.remove("overflow-hidden");
      authForm.classList.remove("active");
      authFormCard.classList.remove("show");
      setTimeout(function () {
        authForm.classList.remove("show");
      }, 300);
    });
  }
}

main();
