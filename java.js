document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

       
        var welcomeMessage = 'Bienvenid@, ' + name + '!';

       
        alert(welcomeMessage);

         
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    });
});


