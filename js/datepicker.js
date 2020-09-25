$("#datepicker").daterangepicker({
  opens: "center",
  locale: {
    cancelLabel: "Clear",
    daysOfWeek: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  autoApply: true,
});

$("#datepicker").on("apply.daterangepicker", function (ev, picker) {
  $(this).val(
    picker.startDate.format("MM/DD/YYYY") +
      " - " +
      picker.endDate.format("MM/DD/YYYY")
  );
  $(this).text(
    picker.startDate.format("MM/DD/YYYY") +
      " - " +
      picker.endDate.format("MM/DD/YYYY")
  );
  $(this).parent().addClass("active");
  renderPopper();
});


$("#datepicker-input").daterangepicker({
  opens: "center",
  locale: {
    cancelLabel: "Clear",
    daysOfWeek: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  autoApply: true,
});

$("#datepicker-input").on("apply.daterangepicker", function (ev, picker) {
  $(this).val(
    picker.startDate.format("MM/DD/YYYY") +
      " - " +
      picker.endDate.format("MM/DD/YYYY")
  );
});
