/**
 * Created by puesto1 on 4/8/16.
 */


ListaAlumnosController = RouteController.extend({

    waitOn: function(){
        return Meteor.subscribe('listaAlumnos') ;
    }

});