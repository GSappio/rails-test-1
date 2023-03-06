(function () {
  console.log($(document).find("#show-function"));
  if (!$(document).find("#show-function")) return;

  function init() {
    $("#button").on("click", (e) => {
      e.preventDefault();
      $("#input").val();
      console.log("meno clicou aqui");
    });
  }

  $(document).on("ready", () => {
    init();
    console.log("function loaded");
  });
})();
