window.addEventListener("resize", renderPopper);

document.addEventListener("DOMContentLoaded", function () {
  if ($("#happines_slider").length) {
    $("#happines_slider").slick({
      vertical: true,
      infinite: false,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 870,
          settings: {
            vertical: false,
            verticalSwiping: false,
            dots: true,
          },
        },
      ],
    });
  }
});

var btnLocation = document.getElementById("location-button");
var tooltipLocaion = document.getElementById("location-tooltip");

var btnInstr = document.getElementById("instructor-button");
var tooltipInstr = document.getElementById("instructor-tooltip");

var btnTime = document.getElementById("time-button");
var tooltipTime = document.getElementById("time-tooltip");

var btnCourse = document.getElementById("course-button");
var tooltipCourse = document.getElementById("course-tooltip");

var btnTimeMobile = document.getElementById("time-button_mobile");
var tooltipTimeMobile = document.getElementById("time-tooltip_mobile");

var btnRetreatMobile = document.getElementById("course-button_mobile");
var tooltipRetreatMobile = document.getElementById("course-tooltip_mobile");

var btnInstrMobile = document.getElementById("instructor-button_mobile");
var tooltipInstrMobile = document.getElementById("instructor-tooltip_mobile");

function renderPopper() {
  Popper.createPopper(btnInstr, tooltipInstr, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
  Popper.createPopper(btnTime, tooltipTime, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
  Popper.createPopper(btnCourse, tooltipCourse, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
  Popper.createPopper(btnTimeMobile, tooltipTimeMobile, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
  Popper.createPopper(btnRetreatMobile, tooltipRetreatMobile, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
  Popper.createPopper(btnInstrMobile, tooltipInstrMobile, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
  Popper.createPopper(btnLocation, tooltipLocaion, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
}

var buttons = document.querySelectorAll(".tooltip-button");
var tooltips = document.querySelectorAll(".tooltip-block");

buttons.forEach(function (btn) {
  btn.addEventListener("focus", function () {
    btn.classList.add("tooltip-button_active");
    var tooltip = document.querySelector(
      ".tooltip-button_active + .tooltip-block"
    );
    tooltip.classList.add("active");
  });
  btn.addEventListener("blur", function () {
    var tooltip = document.querySelector(
      ".tooltip-button_active + .tooltip-block"
    );
    btn.classList.remove("tooltip-button_active");

    tooltip.classList.remove("active");
  });
});

renderPopper();

handlerSelectionItem(btnCourse, tooltipCourse);
// handlerSelectionItem(btnTime, tooltipTime);

function handlerSelectionItem(btn, tooltip) {
  var tooltipItems = tooltip.querySelectorAll("li");
  var btnValue = btn.querySelector(".btn");
  tooltip.style.pointerEvents = "all";
  tooltipItems.forEach(function (item) {
    item.addEventListener("click", function () {
      btnValue.innerHTML = item.innerHTML;
      btn.classList.add("active");
      renderPopper();
    });
  });
}

var upcomingCourseCards = document.querySelectorAll(".upcoming_course_card");

upcomingCourseCards.forEach(function (card) {
  if (card.dataset.full === "true" || card.dataset.complete === "true") {
    card.querySelector(".course_detail_box").classList.add("d-none");
  }
});

//script for smart input

function bindSmartInput(input, btn, tooltip) {
  var smartInput = input.querySelector("input");
  var smartInputList = input.querySelector(".smart-input--list");
  var smartInputListItems = smartInputList.querySelectorAll(
    ".smart-input--list-item"
  );
  var find = false;

  smartInput.addEventListener("keyup", function () {
    input.classList.add("active");
    smartInputListItems.forEach(function (item) {
      for (let word = 0; word < event.target.value.length; word++) {
        if (event.target.value[word] === item.innerHTML[word]) find = true;
        else {
          find = false;
          break;
        }
      }
      if (find || event.target.value === item.innerHTML) {
        item.classList.remove("d-none");
        item.addEventListener("click", function () {
          event.target.value = item.innerHTML;
          btn.classList.add("active");
          btn.querySelector(".btn").innerHTML = item.innerHTML;
          input.classList.remove("active");
        });
      } else if (event.target.value.trim() === "") {
        input.classList.remove("active");
      } else {
        item.classList.add("d-none");
      }
    });
  });

  smartInput.addEventListener("focus", function () {
    btn.classList.add("active");
    tooltip.classList.add("active");
  });

  smartInput.addEventListener("blur", function () {
    btn.classList.remove("active");
    tooltip.classList.remove("active");
  });
}

var smartInputLocation = document.querySelectorAll(".smart-input")[0];
var smartInputInstructor = document.querySelectorAll(".smart-input")[1];

bindSmartInput(smartInputLocation, btnLocation, tooltipLocaion);
bindSmartInput(smartInputInstructor, btnInstr, tooltipInstr);

var switchFilter = document.getElementById("switch-filter");
var switchFilterBtns = switchFilter.querySelectorAll(".btn");

switchFilterBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    if (btn.dataset.swicthActive === "true") return;
    if (index < switchFilterBtns.length - 1) {
      switchFilterBtns[index + 1].dataset.swicthActive = "false";
      btn.dataset.swicthActive = "true";

      btnLocation.dataset.swicthActive = "false";
    } else {
      switchFilterBtns[index - 1].dataset.swicthActive = "false";
      btn.dataset.swicthActive = "true";

      btnLocation.dataset.swicthActive = "true";
    }
    renderPopper();
  });
});

var checkboxes = tooltipTime.querySelectorAll(".custom-checkbox");
var dropdownTimeButton = document.getElementById("dropdownTimeButton");
var dropdownTimeMenu = document.querySelector(
  "#time-tooltip .dropdown .dropdown-menu"
);
var dropdownTimeItems = dropdownTimeMenu.querySelectorAll(".dropdown-item");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    btnTime.classList.add("active");
    tooltipTime.classList.add("active");
  });
});

dropdownTimeButton.addEventListener("click", function () {
  btnTime.classList.add("active");
  tooltipTime.classList.add("active");
});

dropdownTimeItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var timeValue = "";
    dropdownTimeButton.innerHTML = item.innerHTML;
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        timeValue +=
          checkbox.parentElement.querySelector(".checkbox-text").innerHTML + ", ";
      }
    });
    timeValue += item.innerHTML;
    btnTime.querySelector(".btn").innerHTML = timeValue;
    tooltipTime.classList.remove("active");
  });
});
