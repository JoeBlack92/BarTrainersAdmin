/**
 * Created by iw-poblenou2 on 19/8/16.
 */
ListaNotificacionesController = RouteController.extend({

    waitOn: function(){

        if(Meteor.userId()){
            return Meteor.subscribe('listaNotificaciones') ;
        }else{
            this.redirect('login');
        }

    }

});