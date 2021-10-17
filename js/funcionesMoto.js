function guardarQuadbike() {
    var datos = {
        id: $('#quaId').val(),
        brand: $('#quaMarca').val(),
        model: $('#quaModelo').val(),
        category_id: $('#quaCategoria').val(),
        name: $('#quaNombre').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://ge301a5c054b859-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        data: datosEnviar,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro guardado ' + xhr.status);
            limpiarFormularioQuadbike();
        }
    });
}

function editarQuadbike() {
    var datos = {
        id: $('#quaId').val(),
        brand: $('#quaMarca').val(),
        model: $('#quaModelo').val(),
        category_id: $('#quaCategoria').val(),
        name: $('#quaNombre').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://ge301a5c054b859-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        data: datosEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro editado ' + xhr.status);
            limpiarFormularioQuadbike();
        }
    });
}

function eliminarQuadbike() {
    var datos = {
        id: $("#quaId").val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://ge301a5c054b859-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
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
            limpiarFormularioQuadbike();
        }
    });
}

function consultarQuadbikeTodo() {
    $.ajax({
        url: 'https://ge301a5c054b859-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#tablaQuadbike").empty();
            $("#tablaQuadbike").append("<tr>");
            $("#tablaQuadbike").append("<th>Id</th>");
            $("#tablaQuadbike").append("<th>Marca</th>");
            $("#tablaQuadbike").append("<th>Modelo</th>");
            $("#tablaQuadbike").append("<th>Categoria</th>>");
            $("#tablaQuadbike").append("<th>Nombre</th>>");
            $("#tablaQuadbike").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#tablaQuadbike").append("<tr>");
                $("#tablaQuadbike").append("<td>" + json.items[i].id + "</td>");
                $("#tablaQuadbike").append("<td>" + json.items[i].brand + "</td>");
                $("#tablaQuadbike").append("<td>" + json.items[i].model + "</td>");
                $("#tablaQuadbike").append("<td>" + json.items[i].category_id + "</td>");
                $("#tablaQuadbike").append("<td>" + json.items[i].name + "</td>");
                $("#tablaQuadbike").append("</tr>");
            }
            console.log(json)
        }
    });
}

function consultarQuadbikeId(quaIdConsulta) {
    $.ajax({
        url: 'https://ge301a5c054b859-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike/:id' + quaIdConsulta.val(),
        dataType: 'json',
        type: 'GET',
        success: function (json) {
            $("#tablaQuadbike").empty();
            $("#tablaQuadbike").append("<tr>");
            $("#tablaQuadbike").append("<th>Id</th>");
            $("#tablaQuadbike").append("<th>Marca</th>");
            $("#tablaQuadbike").append("<th>Modelo</th>");
            $("#tablaQuadbike").append("<th>Categoria</th>>");
            $("#tablaQuadbike").append("<th>Nombre</th>>");
            $("#tablaQuadbike").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#tablaQuadbike").append("<tr>");
                $("#tablaQuadbike").append("<td>" + json.items[i].id + "</td>");
                $("#tablaQuadbike").append("<td>" + json.items[i].brand + "</td>");
                $("#tablaQuadbike").append("<td>" + json.items[i].model + "</td>");
                $("#tablaQuadbike").append("<td>" + json.items[i].category_id + "</td>");
                $("#tablaQuadbike").append("<td>" + json.items[i].name + "</td>");
                $("#tablaQuadbike").append("</tr>");
            }
            console.log(json)
        },
        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada ' + xhr.status);
        }
    });
}

function limpiarFormularioQuadbike() {
    $("#quaId").val("");
    $("#quaMarca").val("");
    $("#quaModelo").val("");
    $("#quaCategoria").val("");
    $("#quaNombre").val("");
}