document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío normal del formulario

    emailjs.sendForm('service_0m9gjyb', 'template_yywtjtt', this)
        .then(function(response) {
            console.log('Success:', response);
            alert('El mensaje se ha enviado correctamente.');
        }, function(error) {
            console.log('Error:', error);
            alert('Hubo un error al enviar el mensaje. Inténtelo de nuevo.');
        });
});