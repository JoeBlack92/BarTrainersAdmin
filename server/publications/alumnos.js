/**
 * Created by puesto1 on 4/8/16.
 */

Meteor.publish('alumno', function (alumnoId) {
    
    if(Roles.userIsInRole(this.userId,['admin', 'profesor'])){
        return Meteor.users.find({_id: alumnoId});
    }

});


Meteor.publish('listaAlumnos', function () {
    
    if(Roles.userIsInRole(this.userId ,['admin', 'profesor'])){
        return Meteor.users.find({'roles.0' : 'alumno'});
    }
    
});


Meteor.publish('progresoAlumno', function (alumnoId) {

    return Progresos.find({_id: alumnoId});

});