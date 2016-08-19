/**
 * Created by iw-poblenou2 on 19/8/16.
 */

Meteor.methods({
    
    crearNotificacion: function (datosNotificacion) {
        console.log(datosNotificacion);
        Notificaciones.insert({
            idEmpresa: datosNotificacion.idEmpresa,
            idAlumno: datosNotificacion.idAlumno,
            propuesta: datosNotificacion.propuesta,
            vista: false
            
        });

    }
});
