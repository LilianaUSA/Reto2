function guardarMensaje() {
    var datos = {
        id: $('#menId').val(),
        messagetext: $("#menMensaje").val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        data: datosEnviar,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro guardado ' + xhr.status);
            limpiarFormularioMensaje();
        }
    });
}

function editarMensaje() {
    var datos = {
        id: $('#menId').val(),
        messagetext: $("#menMensaje").val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        data: datosEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro editado ' + xhr.status);
            limpiarFormularioMensaje();
        }
    });
}

function eliminarMensaje() {
    var datos = {
        id: $("#menId").val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        data: datosEnviar,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('Problema encontrado ' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Registro eliminado ' + xhr.status);
            limpiarFormularioMensaje();
        }
    });
}

function consultarMensajeTotal() {
    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('Problema encontrado ' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada ' + xhr.status);
        },
        success: function (json) {
            $("#TablaMensajes").empty();
            $("#TablaMensajes").append("<tr>");
            $("#TablaMensajes").append("<th>Id</th>");
            $("#TablaMensajes").append("<th>Mensaje</th>");
            $("#TablaMensajes").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#TablaMensajes").append("<tr>");
                $("#TablaMensajes").append("<td>" + json.items[i].id + "</td>");
                $("#TablaMensajes").append("<td>" + json.items[i].messagetext + "</td>");
                $("#TablaMensajes").append("</tr>");
            }
            console.log(json)
        }
    });
}

function consultarMensajeId(menConsultaId) {
    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message' + menConsultaId.val(),
        dataType: 'json',
        type: 'GET',
        success: function (json) {
            $("#TablaMensajes").empty();
            $("#TablaMensajes").append("<tr>");
            $("#TablaMensajes").append("<th>ID</th>");
            $("#TablaMensajes").append("<th>MENSAJE</th>");
            $("#TablaMensajes").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#TablaMensajes").append("<tr>");
                $("#TablaMensajes").append("<td>" + json.items[i].id + "</td>");
                $("#TablaMensajes").append("<td>" + json.items[i].messagetext + "</td>");
                $("#TablaMensajes").append("</tr>");
            }
            console.log(json)
        },
        error: function (xhr, status) {
            alert('Problema encontrado ' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada ' + xhr.status);
        }
    });
}

function limpiarFormularioMensaje() {
    $("#menId").val("");
    $("#menMensaje").val("");
}