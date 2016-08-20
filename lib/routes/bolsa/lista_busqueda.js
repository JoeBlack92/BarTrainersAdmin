/**
 * Created by iw-poblenou2 on 19/8/16.
 */
ListaBusquedaController= RouteController.extend({
    waitOn: function(){

        if(Meteor.userId()){
            return Meteor.subscribe('listaAlumnos') ;
        }else{
            this.redirect('login');
        }

    }
});