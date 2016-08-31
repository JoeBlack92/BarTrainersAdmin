Template.reserva.helpers({
 
    user: function () {


        var user = Meteor.users.findOne({_id: this.id_user});
      
        return Meteor.users.findOne({_id: this.id_user});


    }


});

Template.reserva.events({
    'click #removeReserva' : function (e,t) {
        
        var datos = {
            
            id: this._id,
            fecha: this.fecha,
            barra: this.barra
        }

        var retVal = confirm("Esta seguro de eliminar la reserva?");
        if( retVal == true ){

            Meteor.call('eliminarReserva', datos , function (error, result) {
                if(error){
                    return alert('No se ha podido eliminar la reserva');
                }
            });

        }

    }
});

Template.reserva.onCreated(function() {
    //add your statement here
});

Template.reserva.onRendered(function() {
    //add your statement here
});

Template.reserva.onDestroyed(function() {
    //add your statement here
});

