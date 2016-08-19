/**
 * Created by iw-poblenou2 on 19/8/16.
 */
Meteor.methods({

    crearEmpresa: function (datosEmpresa) {

        var id = Accounts.createUser({
            username: datosEmpresa.username,
            email: datosEmpresa.email,
            password: datosEmpresa.password,
            profile: {
                nombre: datosEmpresa.nombre,
                foto: datosEmpresa.foto,
                role: 'empresa'
            }
        });

        Roles.addUsersToRoles(id, 'empresa');

    },

    
    eliminarEmpresa: function (idEmpresa) {

        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {

            Meteor.users.remove({_id: idEmpresa});

        }else{

            throw new Meteor.Error('no-admin', 'No eres administrador');

        }

    }


});