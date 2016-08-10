Template.reserva.helpers({
 
    user: function () {


        var user = Meteor.users.findOne({_id: this.id_user});
        console.log(user.profile);
        return Meteor.users.findOne({_id: this.id_user});


    }


});

Template.reserva.events({
 //add your events here
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

