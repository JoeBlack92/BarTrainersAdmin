/**
 * Created by puesto1 on 4/8/16.
 */


ListaAlumnosController = RouteController.extend({

    waitOn: function(){

        if(Meteor.userId()){
            return Meteor.subscribe('listaAlumnos') ;
        }else{
            this.redirect('login');
        }

    }

});