//= require jquery
//= require jquery_ujs
//= require_tree .



//obs: costuma se iniciar a applicacao ajax da seguinte maneira

//$(document).ready(function() {
//
//  $.ajax{
//       }
//                            }
var selectedVehicleId;

  $(document).on('click', '.show-vehicle', function(e) {
    e.preventDefault();
      //clicar no botao que contenha  a class "show-vehicle" acionará esse comando
 
  
    var id = e.target.id;
    var url = "/vehicles/" + id;
    selectedVehicleId = $(this).closest('tr').data('vehicle-id');


    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      success: function(data) {
        $("#vehicle-model").val(data.model); //pega os vaores do veiculo selecionado com json nos inputs
        $("#vehicle-manufacturer").val(data.manofature);
        $("#vehicle-color").val(data.color);
        $("#vehicle-fuel").val(data.fuel);
        $("#vehicle-transmission").val(data.transmission);
        $("#vehicle-id").val(data.id);
       
        $('.edit-vehicle').show();

        $("#model-vehicle").show(); // exibe os inputs especificados
        $("#manufacturer-vehicle").show();
        $("#color-vehicle").show();
        $("#fuel-vehicle").show();
        $("#transmission-vehicle").show();
        $("#price-vehicle").show();

        $("#vehicle-model").prop('disabled', true); // deixa os inputs não editaveis
        $("#vehicle-manufacturer").prop('disabled', true);
        $("#vehicle-color").prop('disabled', true);
        $("#vehicle-fuel").prop('disabled', true);
        $("#vehicle-transmission").prop('disabled', true);
        $("#vehicle-id").prop('disabled', true);

        $('.save-vehicle').hide();
        
        $( ".save-vehicle").attr('id', id)

      }
    });
  });

  

  
  $(document).on('click', '.edit-vehicle', function(e) {
    

    $("#model-vehicle").show(); // exibe os inputs especificados
    $("#manufacturer-vehicle").show();
    $("#color-vehicle").show();
    $("#fuel-vehicle").show();
    $("#transmission-vehicle").show();
    $("#price-vehicle").show();


    $("#vehicle-model").removeAttr('disabled'); // deixa os inputs  editaveis
    $("#vehicle-manufacturer").removeAttr('disabled');
    $("#vehicle-color").removeAttr('disabled');
    $("#vehicle-fuel").removeAttr('disabled');
    $("#vehicle-transmission").removeAttr('disabled');

    $('.save-vehicle').show();
    $('.edit-vehicle').hide();
  
  })




  $(document).on('click', '.save-vehicle', function (e) {
   // obter o ID do veículo a ser atualizado
  var vehicleId = $("#vehicle-id").val();

  // obter os valores atualizados dos inputs
  var model = $("#vehicle-model").val();
  var manufacturer = $("#vehicle-manufacturer").val();
  var color = $("#vehicle-color").val();
  var fuel = $("#vehicle-fuel").val();
  var transmission = $("#vehicle-transmission").val();


  // criar um objeto com os dados atualizados
  var vehicle = {

      model: model,
      manufacturer: manufacturer,
      color: color,
      fuel: fuel,
      transmission: transmission,

      
  
    
  };
  console.log(vehicle)
  console.log({vehicle})

  // fazer a requisição PUT para atualizar o veículo
  $.ajax({
    url: "/vehicles/" + e.target.id,
    type: "PUT",
    data: {vehicle},
    dataType: "json",
    success: function(response) {
      // exibir uma mensagem de sucesso
      alert("Vehicle updated successfully");

      $("#vehicle-model").prop('disabled', true); // deixa os inputs não editaveis
      $("#vehicle-manufacturer").prop('disabled', true);
      $("#vehicle-color").prop('disabled', true);
      $("#vehicle-fuel").prop('disabled', true);
      $("#vehicle-transmission").prop('disabled', true);


      // ocultar o botão "Save"
      $(".save-vehicle").hide();

      // exibir o botão "Edit"
      $(".edit-vehicle").show();
    },
    error: function(xhr, status, error) {
      // exibir uma mensagem de erro
      alert("Failed to update vehicle: " + error);
    }
  });
})
