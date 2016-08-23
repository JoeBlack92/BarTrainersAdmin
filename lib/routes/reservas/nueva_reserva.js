/**
 * Created by iw-poblenou2 on 23/8/16.
 */
NuevaReservaController = RouteController.extend({

    waitOn: function () {

        if (Meteor.userId()) {
            return Meteor.subscribe('dias');
        } else {
            this.redirect('login');
        }

    }

});