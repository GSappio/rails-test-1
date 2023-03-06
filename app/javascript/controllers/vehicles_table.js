$(document).ready(function() {
    carregarVeiculos(function(veiculos) {
      $.each(veiculos, function(i, veiculo) {
        var row = '<tr data-modelo="' + veiculo.model + '">';
        row += '<td>' + vehicle.manofature + '</td>';
        row += '<td>' + vehicle.model + '</td>';
        row += '</tr>';
        $('#veiculos-table tbody').append(row);
      });
    });
    
    $('tbody tr').click(function() {
      var modelo = $(this).data('modelo');
      carregarDetalhesVeiculo(modelo, function(data) {
        var details = '<p><strong>Marca:</strong> ' + data.manofature + '</p>';
        details += '<p><strong>Modelo:</strong> ' + data.model + '</p>';
        $('#veiculo-details').html(details);
      });
    });
  });