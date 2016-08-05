/**
 * Created by Equipo on 04/08/2016.
 */


Meteor.startup(function () {

    if(!Meteor.users.findOne({'roles.0': 'admin'})){
        var id = Accounts.createUser({
            username: 'admin',
            email: 'admin@admin.com',
            password: 'admin',
            profile: {
                role: 'admin',
                nombre: 'Admin',
                apellido: 'Admin'
            }
        });

        Roles.addUsersToRoles(id, 'admin');

    }

});
