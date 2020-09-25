function checkoutMain() {
  if (window.matchMedia("(min-width: 991px)").matches) {
    // Checkout Page
    var body = document.querySelector("body");
    var footer = document.querySelector("footer.footer");
    var firstOrderCard = document.querySelectorAll(".order__card")[0];
    var inputPassword = document.getElementById("password");
    var tooltipPassword = document.getElementById("password-tooltip");
    var inputZip = document.getElementById("zip");
    var tooltipZip = document.getElementById("zip-tooltip");
    var joinJourneyBtn = document.getElementById("join-journey");
    var joinJourneyModal = document.getElementById("join-journey-modal");
    var infoCourseModal = document.getElementById("info-course-modal");
    var infoCourseModalCloseBtn = infoCourseModal.querySelector(".modal-window__close");
    var activeInput = firstOrderCard.querySelector("input.active");
    var recieptMoreInformationBtn = document.querySelector(
      ".reciept__more > button"
    );
    var recieptModal = document.querySelector(".modal-window");
    var recieptModalWindowCloseBtn;
    var recieptModalWindowBtn;

    if (recieptModal) {
      recieptModalWindowCloseBtn = recieptModal.querySelector(
        ".modal-window__close"
      );
      recieptModalWindowBtn = recieptModal.querySelector(
        ".modal-window__btn"
      );
    }

    var agreeCheckoutCheckbox = document.querySelector(
      ".agreement__group_important_desktop > #program"
    );
    var agreeImportantElement = document.querySelector(
      ".agreement__important_desktop"
    );

    footer.style.marginBottom = "0px";

    if (agreeCheckoutCheckbox) {
      agreeCheckoutCheckbox.addEventListener("click", function () {
        if (agreeCheckoutCheckbox.checked) {
          agreeImportantElement.classList.add("hide");
        } else {
          agreeImportantElement.classList.remove("hide");
        }
      });
    }

    if (joinJourneyBtn) {
      joinJourneyBtn.addEventListener("click", function () {
        recieptModal.style.display = "flex";
        infoCourseModal.classList.remove("show");
        joinJourneyModal.classList.add("show")
        body.classList.add("overflow-hidden");
      });
      joinJourneyModal.querySelector(".close-modal").addEventListener("click", function () {
        recieptModal.style.display = "none";
        infoCourseModal.classList.add("show");
        joinJourneyModal.classList.remove("show")
        body.classList.remove("overflow-hidden");
      });
    }

    inputPassword.addEventListener("focus", function () {
      tooltipPassword.classList.add("active");
    });

    inputPassword.addEventListener("blur", function () {
      tooltipPassword.classList.remove("active");
    });

    inputZip.addEventListener("focus", function () {
      tooltipZip.parentElement.classList.add("error");
    });

    inputZip.addEventListener("blur", function () {
      tooltipZip.parentElement.classList.remove("error");
    });

    if (recieptMoreInformationBtn) {
      recieptMoreInformationBtn.addEventListener("click", function () {
        recieptModal.style.display = "flex";
        infoCourseModal.classList.add("show");
        body.classList.add("overflow-hidden");
      });
    }

    if (infoCourseModalCloseBtn) {
      infoCourseModalCloseBtn.addEventListener("click", function() {
        infoCourseModal.classList.remove("show");
      });
    }

    if (recieptModalWindowCloseBtn) {
      recieptModalWindowCloseBtn.addEventListener("click", function () {
        recieptModal.style.display = "none";
        body.classList.remove("overflow-hidden");
      });
    }

    if (recieptModalWindowBtn) {
      recieptModalWindowBtn.addEventListener("click", function () {
        recieptModal.style.display = "none";
        body.classList.remove("overflow-hidden");
      });
    }
  } else {
    // mobile scripts
    var body = document.querySelector("body");
    var footer = document.querySelector("footer.footer");
    var courseDetailsBtn = document.getElementById("course-details");
    var courseCard = document.querySelector(".course-card");
    var mobileModal = document.querySelector(".mobile-modal");
    var mobileCloseModalBtn = mobileModal.querySelector(".close-modal");
    var courseMoreInformationBtn = mobileModal.querySelector(
      ".course-more > .link"
    );
    var courseMoreFullInformation = mobileModal.querySelector(
      ".course-more__full"
    );

    var html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    var agreeCheckoutCheckbox = document.querySelector(
      ".agreement__group_important_mobile > #program"
    );
    var agreeImportantElement = document.querySelector(
      ".agreement__important_mobile"
    );

    footer.style.marginBottom = courseCard.offsetHeight + "px";

    if (agreeCheckoutCheckbox) {
      agreeCheckoutCheckbox.addEventListener("click", function () {
        if (agreeCheckoutCheckbox.checked) {
          agreeImportantElement.classList.add("hide");
        } else {
          agreeImportantElement.classList.remove("hide");
        }
      });
    }

    courseDetailsBtn.addEventListener("click", function () {
      var modalBottom = height - html.scrollTop - window.innerHeight;
      body.classList.add("overflow-hidden");
      mobileModal.style.bottom = 0 + "px";
      mobileModal.classList.add("show");
      setTimeout(function () {
        mobileModal.classList.add("active");
      }, 0);
    });

    mobileCloseModalBtn.addEventListener("click", function () {
      body.classList.remove("overflow-hidden");
      mobileModal.classList.remove("active");
      setTimeout(function () {
        mobileModal.classList.remove("show");
      }, 500);
    });

    if (courseMoreInformationBtn) {
      courseMoreInformationBtn.addEventListener("click", function () {
        courseMoreFullInformation.classList.toggle("show");
      });
    }

    // Join pop-up
    var joinButton = mobileModal.querySelector(".join-btn");

    if (joinButton) {
      var joinPopup = document.querySelector('.course-details-card_mobile[data-modal="' + joinButton.dataset.joinModal + '"]');
      var joinClosePopupBtn = joinPopup.querySelector(".close-modal");

      joinButton.addEventListener("click", function (e) {
        e.preventDefault();

        mobileModal.classList.remove("active");
        setTimeout(function () {
          mobileModal.classList.remove("show");
        }, 300);

        joinPopup.classList.add("open");
        setTimeout(function () {
          joinPopup.classList.add("show");
        }, 600);

      });

      joinClosePopupBtn.addEventListener("click", function (e) {
        e.preventDefault();

        body.classList.remove("overflow-hidden");
        joinPopup.classList.remove("show");
        setTimeout(function () {
          joinPopup.classList.remove("open");
        }, 300);

      });
    }

  }

  if (document.getElementById("retreat-prerequisite")) {
    prerequisite()
  }
}

checkoutMain();

window.addEventListener("resize", checkoutMain);


function prerequisite() {
  var body = document.body;

  body.classList.add("overflow-hidden");

  var modal = document.querySelector(".modal-window_no-log");
  var retreatPrerequisiteModal = modal.querySelector("#retreat-prerequisite");

  modal.style.display = "flex";
  retreatPrerequisiteModal.classList.add("show");
  retreatPrerequisiteModal.classList.add("active");
  modal.classList.add("active");

  if (retreatPrerequisiteModal) {
    var closeBtn = retreatPrerequisiteModal.querySelectorAll(".close-modal");
    if (window.matchMedia("(min-width: 991px)").matches) {
      closeBtn[1].addEventListener("click", function () {
        retreatPrerequisiteModal.classList.remove("show");
        body.classList.remove("overflow-hidden");
        modal.style.display = "none";
      });
    } else {
      closeBtn[0].addEventListener("click", function () {
        modal.classList.remove("active");

        body.classList.remove("overflow-hidden");
        setTimeout(function () {
          retreatPrerequisiteModal.classList.remove("active");
        }, 180);
        setTimeout(function () {
          modal.style.display = "none";
          retreatPrerequisiteModal.classList.remove("show");
        }, 300);
      });
    }

  }
}
