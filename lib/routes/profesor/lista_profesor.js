/**
 * Created by puesto1 on 4/8/16.
 */


ListaProfesoresController = RouteController.extend({

    waitOn: function(){

        if(Meteor.userId()){
            return Meteor.subscribe('listaProfesores') ;
        }else{
            this.redirect('login');
        }

    }

});