/**
 * Created by puesto1 on 3/8/16.
 */


Template.header.helpers({
    title: function () {
        if(Router.current().route.getName() == 'nuevoAlumno'){
            return 'Nuevo Alumno';
        }else if(Router.current().route.getName() == 'inicio'){
            return 'Inicio';
        }
    }
});