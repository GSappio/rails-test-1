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
    const novaData = new Date(Date.UTC(2023, 09, 20, 10, 11, 08));
    $("#comments").append(
      `<textarea id="message" rows="4" class="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled readonly placeholder="Write your thoughts here..." >
      ${$("#username").val()}:
      ${novaData.toLocaleString("pt-BR", { timezone: "UTC" })}: 
      ${description} </textarea>`
    );
  }
})();
