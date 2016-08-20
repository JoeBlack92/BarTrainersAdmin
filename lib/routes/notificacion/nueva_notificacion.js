/**
 * Created by iw-poblenou2 on 19/8/16.
 */
NuevaNotificacionController = RouteController.extend({

    waitOn: function(){
        return Meteor.subscribe('alumno', this.params._id);
    },

    data: function() {

        if(this.ready()){

            var al = Meteor.users.findOne({_id: this.params._id});
            console.log(al);
            if(al){
                return al;
            }
        }

    }

});