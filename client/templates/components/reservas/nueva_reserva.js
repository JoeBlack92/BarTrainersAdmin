Template.nuevaReserva.onCreated(function () {

    var instance = this;

    instance.fechaReserva = new ReactiveVar(false);
    instance.fechaInicio = new ReactiveVar(false);
    instance.fechaFin = new ReactiveVar(false);
    instance.barra = new ReactiveVar(false);
});


Template.nuevaReserva.events({


    //meteor.userId

    'change #datepicker': function (e, t) {

        var fecha = picker.get('select', 'dd-mm-yyyy');
        t.fechaReserva.set(fecha);
        console.log(t.fechaReserva.get());



    },

    'change #hora-inicio': function (e, t) {

        $('#numero-horas').find('option:not(:first)').remove();
        $('select').material_select();

        if (t.fechaReserva.get()) {
            console.log($('#hora-inicio').find(":selected").text());
            var horaInicio = $('#hora-inicio').find(":selected").text();
            var string = t.fechaReserva.get() + " " + horaInicio;
            var fechaInicio = moment(string, "DD-MM-YYYY HH:mm");

            t.fechaInicio.set(fechaInicio.format());
            console.log(t.fechaInicio.get());

            var dia = Dias.findOne({ fecha:t.fechaReserva.get()});
            var posSel = $('#hora-inicio').find(':selected').attr('id');
            console.log('posicion inicial: '+posSel);
            var cotr = true;
            var cont = 0;


            for(var i = posSel ; i < 12 ; i++){

                if(cotr) {
                    if (dia.horas[i].libre == true && cont < 4) {
                        console.log('contador de horas: '+cont);
                        cont++;
                        $('#numero-horas').append('<option id="' + cont + '"val="' + cont + '">' + cont + ' hora/s' + '</option>');
                    } else{
                        cotr = false;
                        console.log('c '+cont);
                    }
                }
            }
            //
            // $.each(dia.horas.indexOf(posSel), function (i, item) {
            //     if(cotr) {
            //         if (item.libre == true) {
            //             console.log('contador de horas: '+cont);
            //             cont++;
            //             $('#numero-horas').append('<option id="' + cont + '"val="' + cont + '">' + cont + ' hora/s' + '</option>');
            //         } else{
            //             cotr = false
            //         }
            //     }
            // });
            $('select').material_select();

        } else {
            alert('Seleccciona una fecha!');
        }

    },

    'change #numero-horas': function (e, t) {


        if (t.fechaInicio.get()) {
            var horas = $('#numero-horas').find(":selected").attr('id');
            console.log("horas: "+ horas);
            var fechaInicio = moment(t.fechaInicio.get());
            var fechaFin = fechaInicio.add(horas, 'hours');

            t.fechaFin.set(fechaFin.format());
            console.log(t.fechaFin.get());
        } else {
            alert('Selecciona una hora de inicio!');
        }

    },

    'change #barras': function (e, t) {

        $('#hora-inicio').find('option:not(:first)').remove();
        $('select').material_select();
        var barra = $('#barras').find(":selected").attr('value');
        console.log(barra);
        t.barra.set(barra.toString());
        console.log(t.barra.get());

        var count= Dias.find({ fecha:t.fechaReserva.get(), idBarra: t.barra.get()}).count();
        console.log("count:" + count);

        if(count == 0){
            var datosDia = {
                fecha: t.fechaReserva.get(),
                barra: t.barra.get()
            };
            Meteor.call("crearDia", datosDia, function (error, result) {
                
                if(!error){
                    var dia = Dias.findOne({ fecha:t.fechaReserva.get(), idBarra: t.barra.get()});
                    $.each(dia.horas, function (i, item) {
                        if(item.libre == true){
                            console.log(item.libre + item.hora);

                            $('#hora-inicio').append('<option id="'+i+'"val="'+ item.hora +'">'+item.hora+'</option>');
                        }

                    });

                }else{
                    console.log(error);
                }
            });

        }else{
            var dia2 = Dias.findOne({ fecha:t.fechaReserva.get(), idBarra: t.barra.get()});
            $.each(dia2.horas, function (o, item2) {
                if(item2.libre == true){
                    console.log(item2.libre + item2.hora);

                    $('#hora-inicio').append('<option id="'+o+'"val="'+ item2.hora +'">'+item2.hora+'</option>');
                }

            });
            $('select').material_select();
        }

    },

    'submit #nueva-reserva': function (e, t) {
        e.preventDefault();
        console.log(

            'fecha'+t.fechaInicio.get()
            +'\nfecha ini'+t.fechaReserva.get()

        );



        var datosReserva = {

            fechaInicio: t.fechaInicio.get(),
            fechaFin: t.fechaFin.get(),
            fecha: moment(t.fechaInicio.get()).format('DD-MM-YYYY'),
            horaIni: moment(t.fechaInicio.get()).format('hh:mm'),
            horaFin: moment(t.fechaFin.get()).format('hh:mm'),
            barra: t.barra.get(),
            id_user: Meteor.userId()
        };

        if (!datosReserva.fechaInicio) {
            return alert('Ingresa una fecha de inicio');
        } else if (!datosReserva.fechaFin) {
            return alert('Ingresa una fecha final');
        } else if (!datosReserva.barra) {
            return alert('Ingresa una barra a reservar');
        }

        Meteor.call('crearReserva', datosReserva, function (error, result) {

            if (!error) {
                Router.go('listaReservas');
            } else {
                return console.log(error.reason);
            }



            var datos = {
                idReserva: result.idReserva,
                barra: t.barra.get(),
                pos: $('#hora-inicio').find(':selected').attr('id'),
                horas: $('#numero-horas').find(":selected").attr('id')
            };

            var fec = t.fechaReserva.get();

            Meteor.call('updateDia',fec,datos);


        });

    }
});


Template.nuevaReserva.helpers({

    activarHoraInicio: function () {

        if(Template.instance().barra.get()){
            return '';
        }else{
            return 'hidden';
        }

    },
    activarHoras: function () {

        if(Template.instance().fechaInicio.get()){
            return '';
        }else{
            return 'hidden';
        }

    },
    activarBarras: function () {

        if(Template.instance().fechaReserva.get()){
            return '';
        }else{
            return 'hidden';
        }

    }

});


Template.nuevaReserva.onRendered(function () {

    $('select').material_select();

    var $input = $('.datepicker').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        showMonthsShort: true,
        selectYears: false,
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar',
        format: 'dddd d mmmm, yyyy',
        editable: false,
        min: true,
        max: +13,
        onSet: function( event ) {
            if(event.select){
                this.close();
            }
        }
    });

    picker = $input.pickadate('picker')

});

