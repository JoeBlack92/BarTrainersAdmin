/**
 * Created by iw-poblenou2 on 19/8/16.
 */

ListaEmpresasController = RouteController.extend({

    waitOn: function(){

        if(Meteor.userId()){
            return Meteor.subscribe('listaEmpresas') ;
        }else{
            this.redirect('login');
        }

    }

});