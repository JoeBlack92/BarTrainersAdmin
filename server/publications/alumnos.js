/**
 * Created by puesto1 on 4/8/16.
 */

Meteor.publish('alumno', function (alumnoId) {

    return Meteor.users.find({_id: alumnoId});

});

Meteor.publish('listaAlumnos', function () {

    return Meteor.users.find({});
    
});