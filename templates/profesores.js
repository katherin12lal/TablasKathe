$(document).ready(function(){

    //s("#conten-crear").hide();

    $("abnCrear").click(function(){
        $("#aconten-crear").show("fast");
        $("#btnCrear").hide();
    })
    $("abnCancelarCrear").click(function(){
        $("#aconten-crear").hide("fast");
        $("#btnCrear").show();
    })
    $("#frmCrear").submit(function(){
        a=$("staticEmail").val();
        b=$("#inputsexo").val();

        $("table tbody").append(
            `<tr>
                <th>4</th>
                <td>$(a)</td>
                <td>$(b)</td>
                <td>
                    <a href="#" class="ElimiarRow">Eliminar</a>
                </td>
            </tr>`
        );
     $("#respuesta").html("Tu email es" + a +"");
     
     event.preventDefault();
    })
})