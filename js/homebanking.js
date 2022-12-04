
//Primero siempre declarar variables
let codigoSeguridad = 6699 

let nombreUsuario = "Dr. Frog!" ;
let saldoCuenta = 2500 ;
let limiteExtraccion = 1000 ;

let servicioAgua = 350 
let servicioTelefono = 425
let servicioLuz = 210
let servicioInternet = 570

let cuentaAmiga1 = 1234567
let cuentaAmiga2 = 7654321

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


//Funciones que cambian el limite de extracion
function cambiarLimiteDeExtraccion() {

    (async () =>{	
        let  { value: dinero } = await Swal.fire({
            input: 'text',
            inputLabel: 'Solo admite numeros',
            icon:'question',
            title: 'Ingrese el nuevo limite de extraccion',
            inputPlaceholder: 'Ingrese un monto',
            showCancelButton: true,
          });

    if (dinero !== NaN && dinero !== undefined && dinero !== "") {  
    limiteExtraccion = parseInt(dinero);
    actualizarLimiteEnPantalla() 
    Swal.fire ({icon:'success', text:`Operacion exitosa.\n El nuevo limite es de ${limiteExtraccion}`})
    } else { Swal.fire ({ icon:'error', text:"Operacion cancelada. Se esperaba que ingrese un valor"})}

})();
}

function extraerDinero() {
    (async () =>{	
            let  { value: dineroExtraido } = await Swal.fire({
                input: 'text',
                inputLabel: 'Solo admite números',
                icon: 'question',
                title: '¿Cuánto dinero desea extraer?',
                inputPlaceholder: 'Ingrese un monto',
                showCancelButton: true,
              });

    if (dineroExtraido !== NaN && dineroExtraido !== undefined && dineroExtraido !== "") { 
        if (dineroExtraido <= saldoCuenta){
        if ( dineroExtraido > limiteExtraccion){
            Swal.fire({icon: 'error', text:'EL dinero que desea extraer supera el limite de extraccion'})
        } 
            if (dineroExtraido % 100 / 100 !== 0) {
                Swal.fire({icon: 'error', text:'Este cajero solo entrega billetes de $100'})
            } else {
                let ahoraTenes = (saldoCuenta - parseInt(dineroExtraido))
                
                Swal.fire({icon: 'success', text: `Elegiste extraer $ ${dineroExtraido}\n 
                Antes tenias $ ${saldoCuenta}\n
                Ahora tenes $ ${ahoraTenes} !`});

                saldoCuenta = ahoraTenes ;
                actualizarSaldoEnPantalla(saldoCuenta);
            }
        } else {
            Swal.fire({icon: 'error', text:'EL saldo disponible no es suficiente para realizar la operacion'})
        }
    } else  {Swal.fire ({icon: 'error', text:"Operacion cancelada. Se esperaba que ingrese un valor"})}
})()
}

function depositarDinero() {

    (async () =>{	
    let  { value: dineroDepositado } = await Swal.fire({
        input: 'text',
        inputLabel: 'Solo admite numeros',
        icon: 'question',
        title: '¿Cuántos dinero desea depositar?',
        inputPlaceholder: 'Ingrese un monto',
        showCancelButton: true,
      });
      
      if (dineroDepositado !== NaN && dineroDepositado !== undefined && dineroDepositado !== "") {
        let ahoraTenes = (saldoCuenta + parseInt(dineroDepositado))
            Swal.fire({ icon: 'success', text:`Elegiste depositar $ ${dineroDepositado}\n 
                    Antes tenias $ ${saldoCuenta}\n
                    Ahora tenes $ ${ahoraTenes}`});
                    saldoCuenta = ahoraTenes ;
                    actualizarSaldoEnPantalla(saldoCuenta);
      } else { Swal.fire({ icon: 'error', text:`Operacion cancelada. Se esperaba que ingrese un valor`})}
      
    })();
}
function pagarServicio() {
    (async () =>{	
        const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            '#Agua': 'Agua',
            '#Luz': 'Luz',
            '#Internet': 'Internet',
            '#Telefono': 'Telefono'
          })
        }, 1000)
        });

      const { value: pagoServicio } = await Swal.fire({
        title: 'Seleccione el servicio que desea pagar',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (pagoServicio) => {
          if (!pagoServicio) {
            return 'No se detectan selecciones'
          }
        }
      })
      
    switch (pagoServicio) {
        case "#Agua":
            if (servicioAgua <= saldoCuenta){
                ahoraTenes = (saldoCuenta - parseInt(servicioAgua));             
                Swal.fire ({ icon: 'success', text: `El pago del Agua se realizo correctamente
                    Saldo anterior ${saldoCuenta}\n 
                    Dinero descontado ${servicioAgua}\n 
                    Saldo actual ${ahoraTenes}`})
                  saldoCuenta = ahoraTenes;
                actualizarSaldoEnPantalla(saldoCuenta);
                    } else { Swal.fire ({icon:'error', text:"No contas con dinero suficiente para realizar el pago"})}
                
                  break;
        case "#Luz":
            if (servicioLuz <= saldoCuenta){
                ahoraTenes = (saldoCuenta - parseInt(servicioLuz));             
                  Swal.fire ({ icon: 'success', text: `El pago de Luz se realizo correctamente
                    Saldo anterior ${saldoCuenta}\n 
                    Dinero descontado ${servicioLuz}\n 
                    Saldo actual ${ahoraTenes}`})
                saldoCuenta = ahoraTenes;
                actualizarSaldoEnPantalla(saldoCuenta);
                    } else { Swal.fire ({icon:'error', text:"No contas con dinero suficiente para realizar el pago"})}
                
                  break;
        case "#Internet":
            if (servicioInternet <= saldoCuenta){
                ahoraTenes = (saldoCuenta - parseInt(servicioInternet));             
                Swal.fire ({ icon: 'success', text: `El pago de Internet se realizo correctamente
                Saldo anterior ${saldoCuenta}\n 
                Dinero descontado ${servicioInternet}\n 
                Saldo actual ${ahoraTenes}`})
                  saldoCuenta = ahoraTenes;
                actualizarSaldoEnPantalla(saldoCuenta);
                    } else { Swal.fire ({icon:'error', text:"No contas con dinero suficiente para realizar el pago"})}
                
                  break;
         
        case "#Telefono":
            if (servicioTelefono <= saldoCuenta){
                ahoraTenes = (saldoCuenta - parseInt(servicioTelefono));             
                Swal.fire ({ icon: 'success', text: `El pago de Telefono se realizo correctamente
                Saldo anterior ${saldoCuenta}\n 
                Dinero descontado ${servicioTelefono}\n 
                Saldo actual ${ahoraTenes}`})
                  saldoCuenta = ahoraTenes;
                actualizarSaldoEnPantalla(saldoCuenta);
                    } else { Swal.fire ({icon:'error', text:"No contas con dinero suficiente para realizar el pago"})}
                  break;
        default:
            Swal.fire ({icon:'error', text:"Tu dinero en cuenta no es suficiente para realizar el pago"})
          break;
      }
    })();
}

function transferirDinero() {

    (async () =>{	
        let  { value: MontoTransferido } = await Swal.fire({
        input: 'text',
        inputLabel: 'Solo admite números',
        icon:'question',
        title: 'Ingrese la cantidad de dinero que desea transferir',
        inputPlaceholder: 'Ingrese un monto',
        showCancelButton: true,
    });
if (MontoTransferido !== null) { 
    if (MontoTransferido <= saldoCuenta){
        let  { value: cuentaAmiga } = await Swal.fire({
            input: 'text',
            inputLabel: 'Tus cuentas amigas son:\n Nro: 1234567 \n Nro: 7654321',
            icon:'question',
            title: 'Ingrese el número de Cuenta Amiga',
            inputPlaceholder: 'Ingrese un monto',
            showCancelButton: true,
        });
        if (cuentaAmiga == cuentaAmiga1 || cuentaAmiga == cuentaAmiga2) {
            ahoraTenes = ( saldoCuenta - parseInt(MontoTransferido));
            Swal.fire({icon:'success', text:`Transferiste $ ${MontoTransferido} a tu Cuenta Amiga Nro: ${cuentaAmiga}`});
            saldoCuenta = ahoraTenes ;
            actualizarSaldoEnPantalla(saldoCuenta);
                
        } else {Swal.fire ({icon:'error', text:"No has ingresado una Cuenta Amiga\n Tene cuidado!"})}
    
    } else { Swal.fire ({icon:'error', text:"El saldo en cuenta no es suficiente para realizar esta operación"})}
} else { Swal.fire ({icon: 'error', text:"El valor ingresado no es valido para esta operacion."})}
 })();

}

function iniciarSesion() {
(async () =>{
    const { value: verificarUsuario } = await Swal.fire({
      // grow: 'fullscreen',
        icon: 'question',
            imageUrl: 'img/init.gif',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        title: 'Ingrese su codigo de seguridad para comenzar a operar.',
        input: 'password',
        inputLabel: '(Es 6699, pero shhh)',
        inputPlaceholder: 'Codigo de seguridad',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      });
      
      if (codigoSeguridad == verificarUsuario) {
        Swal.fire({ icon: 'success', text:`Bienvenido ${nombreUsuario}\n ya puede comenzar a operar`})
      } else {
        nombreUsuario = "Usuario invalido";
        saldoCuenta = 0 ;
        cargarNombreEnPantalla(nombreUsuario)
        actualizarSaldoEnPantalla(saldoCuenta);
        Swal.fire({icon: 'error',text: `El codigo de seguridad es incorrecto. No podras seguir operando`})
        
      }
})(1000)

  
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