$('#envio').click(function(e) {
    e.preventDefault();

    if($('[name=first_name]').val().length == 0){
        $('#resp').val('campo primeiro nome obrigatorio');
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/teste',
        data: $('form').serialize(),
        success: function(callback) {
            console.log(callback);
            $('#resp').val('Ola ' + callback.first_name);
            $('[name=first_name]').val('');
            $('[name=last_name]').val('');
        },
        error: function() {
            $(this).html("error!");
        }
    });
});