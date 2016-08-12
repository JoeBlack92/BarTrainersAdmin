/**
 * Created by iw-poblenou2 on 10/8/16.
 */



ListaReservasController = RouteController.extend({

    waitOn: function(){

        if(Meteor.userId()){
            return Meteor.subscribe('listaReservas') ;
        }else{
            this.redirect('login');
        }

    }

}); 