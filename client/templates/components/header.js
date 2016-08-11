/**
 * Created by puesto1 on 3/8/16.
 */



Template.header.events({

    'click #salir': function () {
        Meteor.logout(function () {
            Router.go('login');
        });
    }

});