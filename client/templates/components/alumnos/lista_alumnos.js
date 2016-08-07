/**
 * Created by puesto1 on 3/8/16.
 */

Template.listaAlumnos.helpers({

    alumnos: function () {
        return Meteor.users.find({'roles.0': 'alumno'});
    }

});