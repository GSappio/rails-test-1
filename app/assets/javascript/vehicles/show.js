(function () {
  console.log(document.getElementById("show-vehicles-function"));
  console.log(postComment);

  function postComment(data) {
    const id = window.location.pathname.split("/")[2];
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/comments/",
      dataType: "json",
      data: { comment: { description: data, vehicle_id: id } },
      success: () => save(data),
    });
  }

  function init() {
    $("#button").on("click", (e) => {
      e.preventDefault();
      const value = $("#input").val();
      console.log("meno clicou aqui");
      postComment(value);
    });
  }

  $(document).on("ready", () => {
    if (!document.getElementById("show-vehicles-function")) return;
    init();
    console.log("function loaded");
    console.log(document.getElementById("show-vehicles-function"));
  });

  function save(description) {
    $("#comments").append(`<span> ${description} </span>`);
  }
})();
