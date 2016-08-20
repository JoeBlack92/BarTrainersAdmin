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

    var theURL = "https://bartrainers.herokuapp.com";
    
    Meteor.absoluteUrl.defaultOptions.rootUrl = theURL;
    process.env.ROOT_URL = theURL;
    process.env.MOBILE_ROOT_URL = theURL;
    process.env.MOBILE_DDP_URL = theURL;
    process.env.DDP_DEFAULT_CONNECTION_URL = theURL;

});
