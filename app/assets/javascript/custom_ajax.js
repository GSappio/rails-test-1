$(document).ready(function() {
    $('#btn-alter-form').on('click', () => {
      const first_name = $('#first_name').val()
      const last_name = $('#last_name').val()
      const user = {first_name, last_name}
        console.log(user);
      $.ajax({
        type: "PATCH",
        url: "http://localhost:3000/user",
        data: {user: {...user}},
        dataType: 'json',

      });
       $("#btn-modal").html(`${first_name} ${last_name}`)
    });
  });
  