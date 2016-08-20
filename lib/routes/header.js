/**
 * Created by iw-poblenou2 on 19/8/16.
 */
HeaderController = RouteController.extend({

    waitOn: function(){

        var currentUser = Meteor.user();


        if(currentUser){
            if(currentUser.roles[0] == 'alumno'){
                return Meteor.subscribe('listaNotificaciones');

            }
        }

    },

    data: function() {

        if (this.ready()) {


            var Notificaciones = Notificaciones.find();
            var numeroNotificaciones = Notificaciones.count();
            var isVisible = false;
            console.log(numeroNotificaciones);
            if (numeroNotificaciones > 0) {
                isVisible = true;
            }


            return {
                isVisible: isVisible,
                numeroNotificaciones: numeroNotificaciones
            }

        }
    }

});