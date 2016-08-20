
Template.nuevaEmpresa.onCreated(function () {

    var instance = this;
    instance.foto = new ReactiveVar('/img/avatar.png');

});

Template.nuevaEmpresa.helpers({

    foto: function () {
        return Template.instance().foto.get();
    }

});

Template.nuevaEmpresa.events({
    'click #tomar-foto': function (event,template) { //event, template
        MeteorCamera.getPicture({width: 300, height:300, quality:100}, function (error, data) {
            if(!error){
                template.foto.set(data); //imagen base64
            }
        });
    },

    'submit #agregarEmpresa': function (e,t) {

        e.preventDefault();

        var datosEmpresa = {
            nombre: $('#nombre').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val(),
            foto: Template.instance().foto.get()
        };

        if(!datosEmpresa.nombre){
            return alert('Ingresa un nombre');
        }else if(!datosEmpresa.username){
            return alert('Ingresa un nombre de usuario');
        }else if(!datosEmpresa.email){
            return alert('Ingresa un email');
        }

        Meteor.call('crearEmpresa', datosEmpresa, function (error, result) {

            if(!error){
                Router.go('listaEmpresas');
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



Template.nuevaEmpresa.onRendered(function() {
    //add your statement here
});

Template.nuevaEmpresa.onDestroyed(function() {
    //add your statement here
});

