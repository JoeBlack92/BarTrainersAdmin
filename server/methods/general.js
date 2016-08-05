/**
 * Created by puesto1 on 5/8/16.
 */


Meteor.methods({

    guardarPerfil: function (datos) {
        
        var usernameExist = Meteor.users.findOne({username: datos.username});
        var emailExist = Meteor.users.findOne({'emails.0.address': datos.email});
        var currentUser = Meteor.user();

        if(usernameExist && usernameExist.username != currentUser.username){
            throw new Meteor.Error('usernameExist', 'El nombre de usuario ya esta registrado');
        }

        if(emailExist && emailExist.emails[0].address != currentUser.emails[0].address){
            throw new Meteor.Error('emailExist', 'El email ya esta registrado');
        }

        Meteor.users.update({_id: Meteor.userId()},{$set: {

            username: datos.username,
            'profile.nombre': datos.nombre,
            'profile.apellido': datos.apellido,
            'emails.0.address': datos.email

        }});

    }

});