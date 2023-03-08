//= require jquery
//= require jquery_ujs
//= require_tree .

var selectedVehicleId;
var model = $("#vehicle-model").val();
var manufacturer = $("#vehicle-manufacturer").val();
var color = $("#vehicle-color").val();
var fuel = $("#vehicle-fuel").val();
var transmission = $("#vehicle-transmission").val();

var vehicle = {
  model: model,
  manufacturer: manufacturer,
  color: color,
  fuel: fuel,
  transmission: transmission,
};

$(document).on("click", ".show-vehicle", function (e) {
  e.preventDefault();

  var id = e.target.id;
  var url = "/vehicles/" + id;
  selectedVehicleId = $(this).closest("tr").data("vehicle-id");

  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    success: function (data) {
      $("#vehicle-model").val(data.model); //pega os vaores do veiculo selecionado com json nos inputs
      $("#vehicle-manufacturer").val(data.manofature);
      $("#vehicle-color").val(data.color);
      $("#vehicle-fuel").val(data.fuel);
      $("#vehicle-transmission").val(data.transmission);

      $(".edit-vehicle").show();

      $("div").show();

      $(".form-control").prop("disabled", true); // deixa os inputs não editaveis

      $(".save-vehicle").hide();

      $(".save-vehicle").attr("id", id);
    },
  });
});

$(document).on("click", "#new-vehicle-btn", function () {
  $("div").show();

  $(".form-control").removeAttr("disabled"); // deixa os inputs  editaveis

  $(".form-control").val("");

  $("#create-btn").show();
  $(".edit-vehicle").hide();
});

$(document).on("click", ".edit-vehicle", function (e) {
  $("div").show();

  $(".form-control").removeAttr("disabled"); // deixa os inputs  editaveis

  $(".save-vehicle").show();
  $(".edit-vehicle").hide();
});

$(document).on("click", ".save-vehicle", function (e) {
  // fazer a requisição PUT para atualizar o veículo
  $.ajax({
    url: "/vehicles/" + e.target.id,
    type: "PUT",
    data: { vehicle },
    dataType: "json",
    success: function (response) {
      // exibir uma mensagem de sucesso
      alert("Vehicle updated successfully");

      $(".form-control").prop("disabled", true); // deixa os inputs não editaveis

      // ocultar o botão "Save"
      $(".save-vehicle").hide();

      // exibir o botão "Edit"
      $(".edit-vehicle").show();

      console.log(vehicle);
      console.log({ vehicle });
    },

    error: function (xhr, status, error) {
      // exibir uma mensagem de erro
      alert("Failed to update vehicle: " + error);
    },
  });
});

$(document).on("click", "#create-btn", function (e) {
  e.preventDefault();
  // enviar uma requisição AJAX para criar um novo registro
  $.ajax({
    url: "/vehicles",
    method: "POST",
    data: { vehicle },

    success: function (response) {
      // atualizar a tabela com o novo registro
      $("#vehicle-table tbody").append(`
        <tr>
          <td>${response.id}</td>
          <td>${response.model}</td>
          <td>${response.manofature}</td>
          <td>${response.color}</td>
          <td>${response.fuel}</td>
    
          <td>
            <a href="#" class="show-vehicle" data-id="${response.id}">Show</a>
            <button class="edit-vehicle" data-id="${response.id}" style="display:none">Edit</button>
            <button class="delete-vehicle" data-id="${response.id}" style="display:none">Delete</button>
          </td>
        </tr>
      `);

      // limpar os valores dos inputs
      $(".form-control").val("");

      // ocultar o botão "criar"
      $("#create-btn").hide();
    },
    error: function () {
      alert("Não foi possível criar um novo veículo");
    },
  });
});
