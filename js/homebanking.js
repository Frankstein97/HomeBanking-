


//Declaración de variables

let nombreUsuario = "Dr. Fate!" ;
let saldoCuenta = 2500 ;
let limiteExtraccion = 1000 ;

let servicioAgua = 350 
let servicioTelefono = 425
let servicioLuz = 210
let servicioInternet = 570

let cuentaAmiga1 = 1234567
let cuentaAmiga2 = 7654321

let codigoSeguridad = 6699 

iniciarSesion()

function sumarDinero (dinero) {
   let sumar = ( saldoCuenta + dinero)
   return sumar;
}


function restarDinero (dinero) {
    let restar = ( saldoCuenta - dinero)
    return restar;
 
 }

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    let dinero = prompt ('¿Ingrese el nuevo limite de extraccion?', 1000)
    if (dinero !== null) {  
    limiteExtraccion = parseInt (dinero)
    actualizarLimiteEnPantalla() 
    alert (`Tu nuevo limite es de ${limiteExtraccion}`)
    } else { alert ("Operacion cancelada. Se esperaba que ingrese un valor")}
}

function extraerDinero() {
    let dineroExtraido = prompt ('¿Cuántos dinero desea extraer?', 1000);
    if (dineroExtraido !== null) { 
        if (dineroExtraido <= saldoCuenta){
        if ( dineroExtraido > limiteExtraccion){
            alert('EL dinero que desea extraer supera el limite de extraccion')
        } 
            if (dineroExtraido % 100 / 100 !== 0) {
                alert('Este cajero solo entrega billetes de 100')
            } else {
                let ahoraTenes = (saldoCuenta - parseInt(dineroExtraido))
                
                alert(`Elegiste extraer ${dineroExtraido} 
                Antes tenias ${saldoCuenta}!
                Ahora tenes ${ahoraTenes}`);

                saldoCuenta = ahoraTenes ;
                actualizarSaldoEnPantalla(ahoraTenes);
            }
        } else {
            alert('EL saldo disponible no es suficiente para realizar esta operacion')
        }
    }else  {alert ("Operacion cancelada. Se esperaba que ingrese un valor")}
}




function depositarDinero() {

    let dineroDepositado = prompt ('¿Cuántos dinero desea depositar?', 1000)
    if (dineroDepositado !== null) { 
    let ahoraTenes = (saldoCuenta + parseInt(dineroDepositado))
    

    alert(`Elegiste depositar ${dineroDepositado} 
            Antes tenias ${saldoCuenta}!
            Ahora tenes ${ahoraTenes}`);

    saldoCuenta = ahoraTenes ;
     actualizarSaldoEnPantalla(ahoraTenes);
    } else {alert ("Operacion cancelada. Se esperaba que ingrese un valor")}
}

function pagarServicio() {
let pagoServicio = prompt (`Ingresa el numero que corresponda con el servicio que quieras pagar:
    1: Agua $ ${servicioAgua}
    2: Luz  $ ${servicioLuz}
    3: Internet  $ ${servicioInternet}
    4: Telefono  $ ${servicioTelefono}`)

    switch (pagoServicio) {
        case "1":
            if (servicioAgua <= saldoCuenta){
                ahoraTenes = (saldoCuenta - parseInt(servicioAgua));             
                  alert (`El pago del Agua se realizo correctamente
                  Saldo anterior ${saldoCuenta}
                  Dinero descontado ${servicioAgua}
                  Saldo actual ${ahoraTenes}`)
                  saldoCuenta = ahoraTenes;
                actualizarSaldoEnPantalla(saldoCuenta);
                    } else { alert ("No contas con dinero suficiente para realizar el pago")}
                
                  break;
        case "2":
            if (servicioLuz <= saldoCuenta){
                ahoraTenes = (saldoCuenta - parseInt(servicioLuz));             
                  alert (`El pago de Luz se realizo correctamente
                  Saldo anterior ${saldoCuenta}
                  Dinero descontado ${servicioLuz}
                  Saldo actual ${ahoraTenes}`)
                  saldoCuenta = ahoraTenes;
                actualizarSaldoEnPantalla(saldoCuenta);
                    } else { alert ("No contas con dinero suficiente para realizar el pago")}
                
                  break;
        case "3":
            if (servicioInternet <= saldoCuenta){
                ahoraTenes = (saldoCuenta - parseInt(servicioInternet));             
                  alert (`El pago del Internet se realizo correctamente
                  Saldo anterior ${saldoCuenta}
                  Dinero descontado ${servicioInternet}
                  Saldo actual ${ahoraTenes}`)
                  saldoCuenta = ahoraTenes;
                actualizarSaldoEnPantalla(saldoCuenta);
                    } else { alert ("No contas con dinero suficiente para realizar el pago")}
                
                  break;
         
        case "4":
            if (servicioTelefono <= saldoCuenta){
                ahoraTenes = (saldoCuenta - parseInt(servicioTelefono));             
                  alert (`El pago del Telefono se realizo correctamente
                  Saldo anterior ${saldoCuenta}
                  Dinero descontado ${servicioTelefono}
                  Saldo actual ${ahoraTenes}`)
                  saldoCuenta = ahoraTenes;
                actualizarSaldoEnPantalla(saldoCuenta);
                    } else { alert ("No contas con dinero suficiente para realizar el pago")}
                
                  break;
        default:
          alert ("El valor ingresado no es valido para esta operacion.")
          break;
      }
}

function transferirDinero() {
MontoTransferido = prompt (`Ingrese la cantidad de dinero que desea transferir`)
if (MontoTransferido !== null) { 
    if (MontoTransferido <= saldoCuenta){
    cuentaAmiga = prompt (`Ingrese el numero de la Cuenta Amiga a la que va a transferir`)
        if (cuentaAmiga == cuentaAmiga1 || cuentaAmiga == cuentaAmiga2) {
            ahoraTenes = ( saldoCuenta - parseInt(MontoTransferido));
            alert (`transferiste $ ${MontoTransferido} a tu Cuenta Amiga Nro ${cuentaAmiga}`);
            saldoCuenta = ahoraTenes ;
            actualizarSaldoEnPantalla(saldoCuenta);
                
        } else {alert ("Esta no es una cuenta amiga, tene cuidado!")}
    
    } else { alert ("El saldo en cuenta no es suficiente para realizar esta operación")}
} else { alert ("El valor ingresado no es valido para esta operacion.")}
 
}

function iniciarSesion() {

    verificarUsuario = prompt ("Ingrese su codigo de seguridad para empezar a operar. (Es 6699, pero shhh)")
    if (codigoSeguridad == verificarUsuario) {
        alert ("Bienvenido Dr. Fate! ya puede operar.");
        } else {
        saldoCuenta = 0 ;
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}