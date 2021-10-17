function guardarCliente() {
    var datos = {
        id: $('#cliId').val(),
        name: $("#cliNombre").val(),
        email: $("#cliCorreo").val(),
        age: $('#cliEdad').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: datosEnviar,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro guardado ' + xhr.status);
            limpiarFormularioCliente();
        }
    });
}

function editarCliente() {
    var datos = {
        id: $('#cliId').val(),
        name: $("#cliNombre").val(),
        email: $("#cliCorreo").val(),
        age: $('#cliEdad').val()
    }

    var datosaEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: datosaEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro editado ' + xhr.status);
            limpiarFormularioCliente();
        }
    });
}

function eliminarCliente() {
    var datos = {
        id: $("#cliId").val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: datosEnviar,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Registro eliminado ' + xhr.status);
            limpiarFormularioCliente();
        }
    });
}

function consultarClienteTodo() {
    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('Problema encontrado, ' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#tablaClientes").empty();
            $("#tablaClientes").append("<tr>");
            $("#tablaClientes").append("<th>Id</th>");
            $("#tablaClientes").append("<th>Nombre</th>");
            $("#tablaClientes").append("<th>Correo</th>");
            $("#tablaClientes").append("<th>Edad</th>>");
            $("#tablaClientes").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#tablaClientes").append("<tr>");
                $("#tablaClientes").append("<td>" + json.items[i].id + "</td>");
                $("#tablaClientes").append("<td>" + json.items[i].name + "</td>");
                $("#tablaClientes").append("<td>" + json.items[i].email + "</td>");
                $("#tablaClientes").append("<td>" + json.items[i].age + "</td>");
                $("#tablaClientes").append("</tr>");
            }
            console.log(json)
        }
    });
}

function consultarClienteId(cliConsultaId) {
    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/' + cliConsultaId.val(),
        dataType: 'json',
        type: 'GET',
        success: function (json) {
            $("#tablaClientes").empty();
            $("#tablaClientes").append("<tr>");
            $("#tablaClientes").append("<th>ID</th>");
            $("#tablaClientes").append("<th>Nombre</th>");
            $("#tablaClientes").append("<th>Correo</th>");
            $("#tablaClientes").append("<th>Edad</th>>");
            $("#tablaClientes").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#tablaClientes").append("<tr>");
                $("#tablaClientes").append("<td>" + json.items[i].id + "</td>");
                $("#tablaClientes").append("<td>" + json.items[i].name + "</td>");
                $("#tablaClientes").append("<td>" + json.items[i].email + "</td>");
                $("#tablaClientes").append("<td>" + json.items[i].age + "</td>");
                $("#tablaClientes").append("</tr>");
            }
        },
        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada ' + xhr.status);
        }
    });
}

function limpiarFormularioCliente() {
    $("#cliId").val("");
    $("#cliNombre").val("");
    $("#cliCorreo").val("");
    $("#cliEdad").val("");
}