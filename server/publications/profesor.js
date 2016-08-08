/**
 * Created by puesto1 on 8/8/16.
 */


Meteor.publish('profesor', function (profesorId) {

    if(Roles.userIsInRole(this.userId,['admin'])){
        return Meteor.users.find({_id: profesorId});
    }

});

Meteor.publish('listaProfesores', function () {


    if(Roles.userIsInRole(this.userId ,['admin'])){
        return Meteor.users.find({'roles.0' : 'profesor'});
    }

});