Template.nuevaReserva.onCreated(function () {

    var instance = this;

    instance.fechaReserva = new ReactiveVar(false);
    instance.fechaInicio = new ReactiveVar(false);
    instance.fechaFin = new ReactiveVar(false);


});


Template.nuevaReserva.events({


    'change #datepicker': function (e,t) {

        var fecha = picker.get('select', 'dd-mm-yyyy');
        t.fechaReserva.set(fecha);
        console.log(t.fechaReserva.get());

    },

    'change #hora-inicio': function (e,t) {

        if(t.fechaReserva.get()){
            console.log($('#hora-inicio').find(":selected").text());
            var horaInicio = $('#hora-inicio').find(":selected").text();
            var string = t.fechaReserva.get() + " " + horaInicio;
            var fechaInicio = moment(string, "DD-MM-YYYY HH:mm");

            t.fechaInicio.set(fechaInicio.format());
            console.log(t.fechaInicio.get());
        }else{
            alert('Seleccciona una fecha!');
        }

    },

    'change #numero-horas': function (e,t) {


        if(t.fechaInicio.get()){
            var horas = $('#numero-horas').find(":selected").attr('value');
            var fechaInicio = moment(Session.get('fecha-inicio'));
            var fechaFin = fechaInicio.add(horas, 'hours');

            t.fechaFin.set(fechaFin.format());
            console.log(t.fechaFin.get());
        }else {
            alert('Seleccciona una hora de inicio!');
        }

    }

});


Template.nuevaReserva.helpers({

    activarHoraInicio: function () {

        if(Template.instance().fechaReserva.get()){
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

