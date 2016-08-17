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

        var curs = Cursos.findOne({_id: cursoId});

        var al = Meteor.users.findOne({_id: {$in: curs.alumnos}});

        if(al){
            console.log(al._id + " == " + alumnoId);

            if(al._id == alumnoId){

                throw new Meteor.Error('exist', 'El alumno ya esta ingresado');

            }else{

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

            }
        }else{
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
        }




 
    },

    anadirProfesor : function (cursoId, profesorId) {

        var curs = Cursos.findOne({_id: cursoId});

        var pro= Meteor.users.findOne({_id: {$in: curs.profesores}});

        if(pro) {
            console.log(pro._id + " == " + profesorId);

            if (pro._id == profesorId) {

                throw new Meteor.Error('exist', 'El profesor ya esta ingresado');

            } else {

                Cursos.update({_id: cursoId}, {$push: {profesores: profesorId}});
            }
        }else{
            Cursos.update({_id: cursoId}, {$push: {profesores: profesorId}});
        }

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