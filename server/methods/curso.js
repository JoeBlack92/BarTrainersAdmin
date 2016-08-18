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
            profesores:[]

        });


    },

    anadirAlumno : function (cursoId, alumnoId) {



                Cursos.update({_id: cursoId}, {$push: {alumnos: alumnoId}});

                Niveles.insert({

                    cursoId: cursoId,
                    alumnoId: alumnoId,
                    niveles: {
                        nivel1: false,
                        nivel2: false,
                        nivel3: false
                    }

                });

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