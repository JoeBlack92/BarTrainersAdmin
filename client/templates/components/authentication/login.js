/**
 * Created by puesto1 on 5/8/16.
 */


Template.login.events({

    'submit #login': function (e,t) {
        
        e.preventDefault();
        
        var datosLogin = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        Meteor.loginWithPassword(datosLogin.email, datosLogin.password, function (error) {
            if(!error){
                Router.go('dashboard');
            }
        });

    }

});