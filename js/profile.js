function profileMain() {
  var inputEmail = document.getElementById("email-input");
  var tooltipEmail = document.getElementById("email-tooltip");
  var profileModal = document.querySelector(".profile-modal");
  var linksModal = document.querySelectorAll(".link-modal");

  var profileModalMobile = document.querySelector(".profile-modal_mobile");
  var linksModalMobile = document.querySelectorAll(".link-modal_mobile");

  var profileAlertElement = document.querySelector(".profile__alert");
  var profileCloseAlertBtn = document.querySelector(".profile__close-alert");

  if (profileCloseAlertBtn) {
    profileCloseAlertBtn.addEventListener("click", function () {
      profileAlertElement.classList.add("profile__alert_close");
    });
  }



  linksModal.forEach(function (link) {
    var modal = profileModal.querySelector(
      "div[data-modal=" + link.dataset.hrefModal + "]"
    );

    if (modal) {
      var closeBtn = modal.querySelectorAll(".close-modal");

      link.addEventListener("click", function (event) {
        event.preventDefault();
        document.body.classList.add("overflow-hidden");
        profileModal.classList.add("show");
        modal.classList.add("show");
        setTimeout(function () {
          profileModal.classList.add("active");
        }, 300);
      });

      if (window.matchMedia("(max-width: 991px)").matches) {
        closeBtn[0].addEventListener("click", function (event) {
          event.preventDefault();
          document.body.classList.remove("overflow-hidden");
          profileModal.classList.remove("active");
          modal.classList.remove("show");
          setTimeout(function () {
            profileModal.classList.remove("show");
          }, 300);

        });
      } else {
        closeBtn[1].addEventListener("click", function (event) {
          event.preventDefault();
          document.body.classList.remove("overflow-hidden");
          profileModal.classList.remove("active");
          profileModal.classList.remove("show");
          modal.classList.remove("show");
        });
      }

    }
  });

  if (inputEmail) {
    inputEmail.addEventListener("focus", function () {
      tooltipEmail.parentElement.classList.add("error");
    });

    inputEmail.addEventListener("blur", function () {
      tooltipEmail.parentElement.classList.remove("error");
    });
  }

  var emblaNode = document.getElementById("embla");
  if (emblaNode) {
    var embla = EmblaCarousel(emblaNode, { align: "center" });
  }
}

window.addEventListener("resize", profileMain);

profileMain();
