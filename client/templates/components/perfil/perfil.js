Template.perfil.helpers({
 //add you helpers here
});

Template.perfil.events({
    
    'submit #guardar-perfil': function (e,t) {

        e.preventDefault();

        var datosAlumno = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
            email: $('#email').val()
        };

        if(!datosAlumno.nombre){
            return alert('Ingresa un nombre');
        }else if(!datosAlumno.apellido){
            return alert('Ingresa un apellido');
        }else if(!datosAlumno.username){
            return alert('Ingresa un nombre de usuario');
        }else if(!datosAlumno.email){
            return alert('Ingresa un email');
        }

        Meteor.call('guardarPerfil', datosAlumno, function (error, result) {

            if(!error){
                Router.go('dashboard');
            }else{
                alert(error.reason);
            }

        });

    }
    
});

Template.perfil.onCreated(function() {
    //add your statement here
});

Template.perfil.onRendered(function() {
    //add your statement here
});

Template.perfil.onDestroyed(function() {
    //add your statement here
});

