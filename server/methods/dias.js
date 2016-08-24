/**
 * Created by iw-poblenou2 on 23/8/16.
 */
Meteor.methods({

    crearDia: function (datosDia) {

        console.log(datosDia);

        Dias.insert({

            fecha: datosDia.fecha,
            idBarra:datosDia.barra,
            horas: [
                {hora:"08:00",libre:true, idReserva:""},
                {hora:"09:00",libre:true, idReserva:""},
                {hora:"10:00",libre:true, idReserva:""},
                {hora:"11:00",libre:true, idReserva:""},
                {hora:"12:00",libre:true, idReserva:""},
                {hora:"13:00",libre:true, idReserva:""},
                {hora:"14:00",libre:true, idReserva:""},
                {hora:"15:00",libre:true, idReserva:""},
                {hora:"16:00",libre:true, idReserva:""},
                {hora:"17:00",libre:true, idReserva:""},
                {hora:"18:00",libre:true, idReserva:""},
                {hora:"19:00",libre:true, idReserva:""},
                {hora:"20:00",libre:true, idReserva:""}
            ]


        });


    },

    updateDia: function (fecha, datos ) {


        var pos = datos.pos;
        var horaSet;
        var reservaSet;
        var query;
        console.log(
            "pos: " + pos
            +"horas:"+ datos.horas
            +"datos barra: "+ datos.barra
            +"fecha: " + fecha
        );

        for(var i = 0; i < datos.horas; i++){

            horaSet = "horas." + pos+ ".libre";
            reservaSet = "horas." + pos+ ".idReserva";

            query = {};
            query[horaSet] = false;
            query[reservaSet] = datos.idReserva;

            // var test = Dias.findOne({fecha:fecha , idBarra: datos.barra});
            // Algo no funciona aqui
            // console.log(test);

            Dias.update({fecha:fecha , idBarra: datos.barra},{$set:query});

            pos++;

        }




    },


    // eliminarCurso: function (cursoId) {
    //
    //     if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
    //
    //         Cursos.remove({_id: cursoId});
    //         Niveles.remove({cursoId: cursoId})
    //
    //     } else {
    //
    //         throw new Meteor.Error('no-admin', 'No eres administrador');
    //
    //     }
    //
    // }

});