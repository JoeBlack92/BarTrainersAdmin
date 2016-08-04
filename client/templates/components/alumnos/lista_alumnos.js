/**
 * Created by puesto1 on 3/8/16.
 */

Template.listaAlumnos.onRendered(function () {
    $('ul.tabs').tabs();
});

Template.listaAlumnos.helpers({

    alumnos: function () {
        return Meteor.users.find();
    }

});