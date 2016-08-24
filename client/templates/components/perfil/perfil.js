Template.perfil.onCreated(function() {

    var instance = this;
    var user = Meteor.user();
    // console.log("User foto: "+ user.profile.foto);
    if(user && user.profile.foto){
        instance.foto = new ReactiveVar(user.profile.foto);
    }else{
        instance.foto = new ReactiveVar('/img/avatar.png');
    }

});

Template.perfil.onRendered(function() {
    
});

Template.perfil.events({
    
    'submit #guardar-perfil': function (e,t) {

        e.preventDefault();

        var datos = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            foto: t.foto.get()
        };

        if(!datos.nombre){
            return alert('Ingresa un nombre');
        }else if(!datos.apellido){
            return alert('Ingresa un apellido');
        }else if(!datos.username){
            return alert('Ingresa un nombre de usuario');
        }else if(!datos.email){
            return alert('Ingresa un email');
        }

        Meteor.call('guardarPerfil', datos, function (error, result) {

            if(!error){
                Router.go('dashboard');
            }else{
                alert(error.reason);
            }

        });

    },
    
    'click #tomar-foto': function (e,template) {
        MeteorCamera.getPicture({width: 200, height:250, quality:80}, function (error, data) {
            if(!error){
                template.foto.set(data);
            }
        });
    }
    
});

Template.perfil.helpers({

    foto: function () {

        return Template.instance().foto.get();

    },
    isAdmin: function () {
        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
            return true;
        }
    }
});

Template.perfil.onDestroyed(function() {
    //add your statement here
});

