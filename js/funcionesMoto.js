function guardarMoto() {
    var datos = {
        id: $('#MotoId').val(),
        brand: $('#MotoMarca').val(),
        model: $('#MotoModelo').val(),
        category_id: $('#MotoCategoria').val(),
        name: $('#MotoNombre').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/moto/moto',
        data: datosEnviar,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Dato Almacenado ' + xhr.status);
            limpiarFormularioMoto();
        }
    });
}

function editarMoto() {
    var datos = {
        id: $('#MotoId').val(),
        brand: $('#MotoMarca').val(),
        model: $('#MotoModelo').val(),
        category_id: $('#MotoCategoria').val(),
        name: $('#MotoNombre').val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/moto/moto',
        data: datosEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Registro editado ' + xhr.status);
            limpiarFormularioMoto();
        }
    });
}

function eliminarMoto() {
    var datos = {
        id: $("#MotoId").val()
    }

    var datosEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/moto/moto',
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
            limpiarFormularioMoto();
        }
    });
}

function consultarMotoTodo() {
    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/moto/moto',
        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('Problema encontrado' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Consulta realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#tablaMoto").empty();
            $("#tablaMoto").append("<tr>");
            $("#tablaMoto").append("<th>Id</th>");
            $("#tablaMoto").append("<th>Marca</th>");
            $("#tablaMoto").append("<th>Modelo</th>");
            $("#tablaMoto").append("<th>Categoria</th>>");
            $("#tablaMoto").append("<th>Nombre</th>>");
            $("#tablaMoto").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#tablaMoto").append("<tr>");
                $("#tablaMoto").append("<td>" + json.items[i].id + "</td>");
                $("#tablaMoto").append("<td>" + json.items[i].brand + "</td>");
                $("#tablaMoto").append("<td>" + json.items[i].model + "</td>");
                $("#tablaMoto").append("<td>" + json.items[i].category_id + "</td>");
                $("#tablaMoto").append("<td>" + json.items[i].name + "</td>");
                $("#tablaMoto").append("</tr>");
            }
            console.log(json)
        }
    });
}

function consultarMotoId(quaIdConsulta) {
    $.ajax({
        url: 'https://g9d5bd8716ca2bc-bdciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/moto/moto' + quaIdConsulta.val(),
        dataType: 'json',
        type: 'GET',
        success: function (json) {
            $("#tablaMoto").empty();
            $("#tablaMoto").append("<tr>");
            $("#tablaMoto").append("<th>Id</th>");
            $("#tablaMoto").append("<th>Marca</th>");
            $("#tablaMoto").append("<th>Modelo</th>");
            $("#tablaMoto").append("<th>Categoria</th>>");
            $("#tablaMoto").append("<th>Nombre</th>>");
            $("#tablaMoto").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#tablaMoto").append("<tr>");
                $("#tablaMoto").append("<td>" + json.items[i].id + "</td>");
                $("#tablaMoto").append("<td>" + json.items[i].brand + "</td>");
                $("#tablaMoto").append("<td>" + json.items[i].model + "</td>");
                $("#tablaMoto").append("<td>" + json.items[i].category_id + "</td>");
                $("#tablaMoto").append("<td>" + json.items[i].name + "</td>");
                $("#tablaMoto").append("</tr>");
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

function limpiarFormularioMoto() {
    $("#MotoId").val("");
    $("#MotoMarca").val("");
    $("#MotoModelo").val("");
    $("#MotoCategoria").val("");
    $("#MotoNombre").val("");
}