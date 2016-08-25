/**
 * Created by iw-poblenou2 on 25/8/16.
 */
EjerciciosController = RouteController.extend({

    waitOn: function(){
        return Meteor.subscribe('curso', this.params._id);
    },

    data: function() {

        if(this.ready()){

            var curso = Cursos.findOne({_id: this.params._id});
            if(curso){
                return curso;
            }
        }

    }

});