/**
 * Created by puesto1 on 4/8/16.
 */


FichaProfesorController = RouteController.extend({

    waitOn: function(){
        return Meteor.subscribe('profesor', this.params._id);
    },

    data: function() {

        if(this.ready()){

            var profesor = Meteor.users.findOne({_id: this.params._id});
            if(profesor){
                return profesor;
            }
        }

    }

});