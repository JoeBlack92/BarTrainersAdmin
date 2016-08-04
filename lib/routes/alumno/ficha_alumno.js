/**
 * Created by puesto1 on 4/8/16.
 */


FichaAlumnoController = RouteController.extend({

    waitOn: function(){
        return Meteor.subscribe('alumno', this.params._id) ;
    },
    data: function() {

        if(this.ready()){

            var alumno = Meteor.users.findOne({_id: this.params._id});
            if(alumno){
                return alumno;
            }else{
                this.redirect('notFound');
            }
        }

    }

});