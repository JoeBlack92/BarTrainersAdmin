/**
 * Created by puesto1 on 3/8/16.
 */

Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'inicio',
    template: 'inicio'
});

Router.route('/nuevo-alumno', {
    name: 'nuevoAlumno',
    template: 'nuevoAlumno'
});

Router.route('/lista-alumnos', {
    name: 'listaAlumnos',
    template: 'listaAlumnos'
});