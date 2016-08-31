/**
 * Created by iw-poblenou2 on 26/8/16.
 */
EvaluarController = RouteController.extend({

    waitOn: function(){
        return Meteor.subscribe('curso', this.params.IdCurso);
    },

    data: function() {

        if(this.ready()){

            var curso = Cursos.findOne({_id: this.params.IdCurso});
            if(curso){
                return curso;
            }
        }

    }

});