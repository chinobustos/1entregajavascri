
/*console.log(verificarDNI);
console.log(turnosDisponibles);
console.log(turnosAtendidos);
console.log(solicitarTurno);*/
let nombre= prompt("ingrese su nombre");
alert(nombre);
let turnosDisponibles = prompt("turnos disponibles");
alert(10)
let turnosAtendidos = prompt("turnos atendidos");
alert(5)
let miTurno = prompt ("mi turno reservado");
alert(0)
let correoTurnos = prompt("reserva un turno con tu correo");
alert(correo)
function verificarDNI() {
    for (let i = 0; i < correoTurnosTurnos.length; i++) {
        if (correoTurnosTurnos[i] === dni) {
            return true;
        } 
    }
    return false;
}


function solicitarTurno(){
    if (turnosAtendidos < turnosDisponibles) {
        let dni = prompt("Ingrese su dni");

        if (!verificarDNI(dni)) {
            turnosAtendidos++;
            correoTurnos.push(correo);
            miTurno = turnosAtendidos;
            alert(`tu numero de turno es:${miTurno}`);
        } else {
            alert(`este dni ya fue utilizado antes`);
        }
    } else {
        alert(`lo sentimos, ya no quedan turnos disponibles`);
    }
}

function consultarTurnos() {
    if (miTurno===0) {
        alert(`Aun no has solicitado tu turno`);
    } else{
        let encontrado = false;

        for (let i = 0; i < dniTurnos.length; i++) {
            if (dniTurnos[i] === dniConsulta) {  
                let turnoConsulta = i + 1;
                alert(`tu numero de turno es ${turnoConsulta}`);
                encontrado = true;
                break;
            }
            
        }
        if(!encontrado){
            alert("no hay ningun turno reservado con este dni") ;
        }
    }
}
function turnosDisponiblesFunc() {
    let disponibles=turnosDisponibles-turnosAtendidos;
    alert (`Quedan ${disponibles} turnos disponibles para la semana que viene.`);
}
function simuladorTurnoEspera() {
    let continuar = true
    while (continuar) {
        let opcion = prompt("selecciona una opcion:\n1. solicitar turno\n2. consulta sobre mi turno\n3. turnos disponibles\n4 salir");
        switch (opcion) {
            case "1":
                solicitarTurno();
                break;
            case "2":
                consultarTurnos();
                break;
            case "3":
                turnosDisponiblesFunc()
                break;
            case "4":
                continuar= false;
                break    
            default:
                alert("Por favor elija una opcion valida");
                break;
        }
    }
}