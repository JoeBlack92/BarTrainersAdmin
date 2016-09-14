/**
 * Created by iw-poblenou2 on 16/8/16.
 */


Meteor.methods({

    crearCurso: function (datosCurso) {
        
        console.log(datosCurso);

        Cursos.insert({

            nombre: datosCurso.nombre,
            horas: datosCurso.horas,
            desc: datosCurso.desc,
            alumnos:[],
            profesores:[],
            ejercicios: []

        });


    },

    anadirAlumno : function (cursoId, alumnoId, datosId) {


                Cursos.update({_id: cursoId}, {$push: {alumnos: alumnoId}});

                Niveles.insert({
                    idAlumno: alumnoId,
                    idCurso: cursoId,
                    ejercicios: datosId
                })

               

    },
    eliminarAlumnoCurso: function (cursoId, alumnoId) {


        Cursos.update({_id: cursoId }, { $pull: { alumnos: alumnoId } },{ multi: true });

        Niveles.remove({idCurso: cursoId , idAlumno: alumnoId});

    },
    eliminarProfesorCurso: function (cursoId, profeId) {


        Cursos.update({_id: cursoId }, { $pull: { profesores: profeId } },{ multi: true });

    },

    anadirEjecicio : function (cursoId, nameEje) {

        var datos = {name: nameEje, finalizado: false};
        

        
        Cursos.update({_id: cursoId}, {$push: {ejercicios: nameEje}});

        Niveles.update({idCurso: cursoId},{$push: {ejercicios: datos}},{multi:true});
        
    },

    eliminarEjercicio: function (cursoId, nameEje) {

        // console.log("Cursoid:  "+cursoId
        //     +"   name: "+ nameEje);
        
        Cursos.update({_id: cursoId}, {$pull: {ejercicios: nameEje}});

        Niveles.update({idCurso: cursoId},{$pull: {ejercicios: { name: nameEje}}},{multi:true});

    },

    evaluar : function (cursoId, alumnoId, nameEje, nuevoVal) {

        // console.log("idCurso: "+ cursoId
        // +"\nalumno: "+ alumnoId
        // +"\nname: "+ nameEje
        // +"\nval: "+ nuevoVal);

        Niveles.update({idCurso: cursoId, idAlumno: alumnoId, 'ejercicios.name':nameEje},{$set: {'ejercicios.$.finalizado': nuevoVal}});

    },

    anadirProfesor : function (cursoId, profesorId) {



                Cursos.update({_id: cursoId}, {$push: {profesores: profesorId}});
        

    },

    eliminarCurso: function (cursoId) {

        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {

            Cursos.remove({_id: cursoId});
            Niveles.remove({cursoId: cursoId})

        }else{

            throw new Meteor.Error('no-admin', 'No eres administrador');

        }

    }

});