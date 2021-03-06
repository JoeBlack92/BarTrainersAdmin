/**
 * Created by puesto1 on 3/8/16.
 */

Template.nuevoAlumno.onCreated(function () {

    var instance = this;
    instance.foto = new ReactiveVar('/img/avatar.png');

});

Template.nuevoAlumno.helpers({

    foto: function () {
        return Template.instance().foto.get();
    }
    
});

Template.nuevoAlumno.events({

    'click #tomar-foto': function (event,template) { //event, template
        MeteorCamera.getPicture({width: 300, height:300, quality:100}, function (error, data) {
            if(!error){
                template.foto.set(data); //imagen base64
            }
        });
    },

    'submit #agregarAlumno': function (e,t) {

        e.preventDefault();

        var datosAlumno = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val(),
            foto: Template.instance().foto.get(),
            telefono: $('#tel').val(),
        };

        if(!datosAlumno.nombre){
            return alert('Ingresa un nombre');
        }else if(!datosAlumno.apellido){
            return alert('Ingresa un apellido');
        }else if(!datosAlumno.username){
            return alert('Ingresa un nombre de usuario');
        }else if(!datosAlumno.email){
            return alert('Ingresa un email');
        }else if(!datosAlumno.telefono){
            return alert('Ingresa un telefono');
        }

        Meteor.call('crearAlumno', datosAlumno, function (error, result) {

            if(!error){
                Router.go('listaAlumnos');
            }else{
                console.log(error.reason);
                if(error.reason == "Username already exists."){
                    alert('El nombre de usuario ya esta registrado');
                }else if(error.reason == "Email already exists."){
                    alert('Este email ya esta registrado');
                }
            }
            
        });

    }

});