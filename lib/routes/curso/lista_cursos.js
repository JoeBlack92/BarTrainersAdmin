/**
 * Created by iw-poblenou2 on 16/8/16.
 */
ListaCursosController = RouteController.extend({

    waitOn: function(){

        if(Meteor.userId()){
            return Meteor.subscribe('listaCursos') ;
        }else{
            this.redirect('login');
        }

    }

});