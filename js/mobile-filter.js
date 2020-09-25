var filterButton = $(".filter--button");
var filterBox = $(".filter--box");

filterBox.hide();

filterButton.click(function () {
  $(this).toggleClass("active");
  filterBox.toggle(500);
});

// Script for mobile filter

var body = document.querySelector("body");

var filterCount = document.getElementById("filter-count");

var locationButtonMobile = document.getElementById("location-button_mobile");
var locationModalMobile = document.getElementById("location-modal_mobile");
var locationCloseMobile = document.getElementById("location-close_mobile");

var courseButtonMobile = document.getElementById("course-button_mobile");
var courseModalMobile = document.getElementById("course-modal_mobile");
var courseCloseMobile = document.getElementById("course-close_mobile");

var dateButtonMobile = document.getElementById("date-button_mobile");
var dateModalMobile = document.getElementById("date-modal_mobile");
var dateCloseMobile = document.getElementById("date-close_mobile");

var timeButtonMobile = document.getElementById("time-button_mobile");
var timeModalMobile = document.getElementById("time-modal_mobile");
var timeCloseMobile = document.getElementById("time-close_mobile");

var instrButtonMobile = document.getElementById("instructor-button_mobile");
var instrModalMobile = document.getElementById("instructor-modal_mobile");
var instrCloseMobile = document.getElementById("instructor-close_mobile");

function bindElementForModal(btn, modal, close) {
  btn.addEventListener("click", function () {
    body.classList.add("overflow-hidden");
    modal.classList.add("active");
  });

  close.addEventListener("click", function () {
    body.classList.remove("overflow-hidden");
    modal.classList.remove("active");
  });
}

function selectFilter(modal, btn, dataset) {
  var selectBtn = modal.querySelector(".select-btn");

  if (modal.querySelector(".dropdown")) {
    var customDropdownBtn = modal.querySelector(".custom-dropdown");
    var customDropdownMenu = modal.querySelector(".dropdown-menu");
    var customDropdownItems = customDropdownMenu.querySelectorAll(
      ".dropdown-item"
    );

    customDropdownItems.forEach(function (item) {
      item.addEventListener("click", function () {
        if (dataset === "time") {
          var checkboxList = modal.querySelector(
            ".mobile-modal--header .checkbox-list"
          );
          var checkboxItems = checkboxList.querySelectorAll(".custom-checkbox");
          var timeValue = "";

          checkboxItems.forEach(function (checkbox) {
            if (checkbox.checked) {
              timeValue +=
                checkbox.parentElement.querySelector(".checkbox-text")
                  .innerHTML + ", ";
            }
          });

          customDropdownBtn.innerHTML = item.innerHTML;
          modal.dataset[dataset] = timeValue + customDropdownBtn.innerHTML;
        } else {
          customDropdownBtn.innerHTML = item.innerHTML;
          modal.dataset[dataset] = customDropdownBtn.innerHTML;
        }
      });
    });
  }

  selectBtn.addEventListener("click", function () {
    if (
      modal.dataset[dataset] !== "null" &&
      !btn.classList.contains("active")
    ) {
      btn.querySelector(".btn").innerHTML = modal.dataset[dataset];
      btn.classList.add("active");
      filterCount.innerHTML = +filterCount.innerHTML + 1;
    } else if (btn.classList.contains("active")) {
      btn.querySelector(".btn").innerHTML = modal.dataset[dataset];
    } else if (dataset === "date") {
      var dateValue = document.getElementById("datepicker-input").value;
      modal.dataset[dataset] = dateValue;
      btn.querySelector(".btn").innerHTML = modal.dataset[dataset];
      btn.classList.add("active");
      filterCount.innerHTML = +filterCount.innerHTML + 1;
    } else if (dataset === "location" || dataset === "instructor") {
      filterCount.innerHTML = +filterCount.innerHTML + 1;
    }

    body.classList.remove("overflow-hidden");
    modal.classList.remove("active");
  });
}

function clearFilter(modal, btn, dataset) {
  var clearBtn = modal.querySelector(".clear");

  clearBtn.addEventListener("click", function () {
    if (btn.classList.contains("active")) {
      btn.querySelector(".btn").innerHTML = modal.dataset[dataset];
      btn.classList.remove("active");
      filterCount.innerHTML = +filterCount.innerHTML - 1;
    }

    if (modal.querySelector(".custom-dropdown")) {
      modal.querySelector(".custom-dropdown").innerHTML =
        "Select " + modal.dataset[dataset].toLowerCase();
    }

    if (modal.querySelector(".checkbox-list")) {
      var checkboxes = modal.querySelectorAll(".checkbox-list .custom-checkbox");

      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }

    body.classList.remove("overflow-hidden");
    modal.classList.remove("active");
  });
}

function allClear() {
  locationButtonMobile.querySelector(".btn").innerHTML =
    locationModalMobile.dataset.locationInitial;
  locationModalMobile.dataset.location = "null";
  locationButtonMobile.classList.remove("active");

  courseButtonMobile.querySelector(".btn").innerHTML =
    courseModalMobile.dataset.courseInitial;
  courseModalMobile.dataset.course = "null";
  courseButtonMobile.classList.remove("active");

  dateButtonMobile.querySelector(".btn").innerHTML =
    dateModalMobile.dataset.dateInitial;
  dateModalMobile.dataset.date = "null";
  dateButtonMobile.classList.remove("active");

  timeButtonMobile.querySelector(".btn").innerHTML =
    timeModalMobile.dataset.timeInitial;
  timeModalMobile.dataset.time = "null";
  timeButtonMobile.classList.remove("active");

  instrButtonMobile.querySelector(".btn").innerHTML =
    instrModalMobile.dataset.instructorInitial;
  instrModalMobile.dataset.instructor = "null";
  instrButtonMobile.classList.remove("active");

  filterCount.innerHTML = 0;
}

bindElementForModal(
  locationButtonMobile,
  locationModalMobile,
  locationCloseMobile
);
bindElementForModal(courseButtonMobile, courseModalMobile, courseCloseMobile);
bindElementForModal(dateButtonMobile, dateModalMobile, dateCloseMobile);
bindElementForModal(timeButtonMobile, timeModalMobile, timeCloseMobile);
bindElementForModal(instrButtonMobile, instrModalMobile, instrCloseMobile);

selectFilter(locationModalMobile, locationButtonMobile, "location");
selectFilter(courseModalMobile, courseButtonMobile, "course");
selectFilter(dateModalMobile, dateButtonMobile, "date");
selectFilter(timeModalMobile, timeButtonMobile, "time");
selectFilter(instrModalMobile, instrButtonMobile, "instructor");

clearFilter(locationModalMobile, locationButtonMobile, "locationInitial");
clearFilter(courseModalMobile, courseButtonMobile, "courseInitial");
clearFilter(dateModalMobile, dateButtonMobile, "dateInitial");
clearFilter(timeModalMobile, timeButtonMobile, "timeInitial");
clearFilter(instrModalMobile, instrButtonMobile, "instructorInitial");

var switchMobileFilter = document.getElementById("switch-mobile-filter");
var switchMobileFilterBtns = switchMobileFilter.querySelectorAll(".btn");

switchMobileFilterBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    if (btn.dataset.swicthActive === "true") return;
    if (index < switchFilterBtns.length - 1) {
      switchMobileFilterBtns[index + 1].dataset.swicthActive = "false";
      btn.dataset.swicthActive = "true";

      locationButtonMobile.dataset.swicthActive = "false";

      allClear();
    } else {
      switchMobileFilterBtns[index - 1].dataset.swicthActive = "false";
      btn.dataset.swicthActive = "true";

      locationButtonMobile.dataset.swicthActive = "true";

      allClear();
    }
    renderPopper();
  });
});

var smartMobileInput = document.getElementById("location-mobile-input");
var smartMobileInputList = smartMobileInput.querySelector(".smart-input--list");
var smartMobileInputListItems = smartMobileInputList.querySelectorAll(
  ".smart-input--list-item"
);
var locationSearch = document.getElementById("location-search");
var findMobile = false;

smartMobileInput.addEventListener("keyup", function (event) {
  smartMobileInput.classList.add("active");
  smartMobileInputListItems.forEach(function (item) {
    for (let word = 0; word < event.target.value.length; word++) {
      if (event.target.value[word] === item.innerHTML[word]) findMobile = true;
      else {
        findMobile = false;
        break;
      }
    }
    if (findMobile || event.target.value === item.innerHTML) {
      item.classList.remove("d-none");
      locationSearch.addEventListener("click", function () {
        locationButtonMobile.classList.add("active");
        locationButtonMobile.querySelector(".btn").innerHTML =
          event.target.value;
        smartMobileInput.classList.remove("active");
      });
      item.addEventListener("click", function () {
        event.target.value = item.innerHTML;
        smartMobileInput.classList.remove("active");
      });
    } else if (event.target.value.trim() === "") {
      smartMobileInput.classList.remove("active");
    } else {
      item.classList.add("d-none");
    }
  });
});

var smartMobileInputInstructor = document.getElementById(
  "instructor-mobile-input"
);
var smartMobileInputListInstructor = smartMobileInputInstructor.querySelector(
  ".smart-input--list"
);
var smartMobileInputListItemsInstructor = smartMobileInputListInstructor.querySelectorAll(
  ".smart-input--list-item"
);
var instructorSearch = document.getElementById("instructor-search");
var findInstructorMobile = false;

smartMobileInputInstructor.addEventListener("keyup", function (event) {
  smartMobileInputInstructor.classList.add("active");
  smartMobileInputListItemsInstructor.forEach(function (item) {
    for (let word = 0; word < event.target.value.length; word++) {
      if (event.target.value[word] === item.innerHTML[word])
        findInstructorMobile = true;
      else {
        findInstructorMobile = false;
        break;
      }
    }
    if (findInstructorMobile || event.target.value === item.innerHTML) {
      item.classList.remove("d-none");
      instructorSearch.addEventListener("click", function () {
        instrButtonMobile.classList.add("active");
        instrButtonMobile.querySelector(".btn").innerHTML = event.target.value;
        smartMobileInputInstructor.classList.remove("active");
      });
      item.addEventListener("click", function () {
        event.target.value = item.innerHTML;
        smartMobileInputInstructor.classList.remove("active");
      });
    } else if (event.target.value.trim() === "") {
      smartMobileInputInstructor.classList.remove("active");
    } else {
      item.classList.add("d-none");
    }
  });
});
