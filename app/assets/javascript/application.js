//= require jquery
//= require jquery_ujs
//= require_tree .

$(function () {
  $("#btn-modal").on("click", function () {
    $("#defaultModal").show();
    $("#defaultModal").addClass("show");
  });
});

$(function () {
  $("#cancel-btn-modal").on("click", function () {
    $("#defaultModal").hide();
    $("#defaultModal").removeClass("show");
  });
});

$(function () {
  $("#x-btn-modal").on("click", function () {
    $("#defaultModal").hide();
    $("#defaultModal").removeClass("show");
  });
});
