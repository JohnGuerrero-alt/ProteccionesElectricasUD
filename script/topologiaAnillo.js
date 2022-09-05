// Definimos objetos que tendrán variables guardadas especificas
const modeloAnillo = {
    0: {
        nombre: "Generador",
        urlImagen: "./assets/images/Anillo/3_1.svg",
        tipo: "Generador",
        etiqueta1: "Voltaje",
        etiqueta2: "[kV]",
        voltaje: "",
        potencia: "",
        rele1: "",
        rele2: "",

    },
    1: {
        nombre: "Barra I-II",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/2_2.svg",
        reactancia: '',
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: "",
        rele1: "1",
        rele2: "2",
    },
    2: {
        nombre: "Barra IV-I",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/2_4.svg",
        reactancia: "",
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: "",
        rele1: "7",
        rele2: "8",
    },
    3: {
        nombre: "Carga",
        tipo: "Carga",
        urlImagen: "./assets/images/Anillo/load_left.svg",
        potencia: "",
        etiqueta1: "S",
        etiqueta2: "[MVA]",
        rele1: "",
        rele2: "",
    },
    4: {
        nombre: "Carga",
        tipo: "Carga",
        urlImagen: "./assets/images/Anillo/load_right.svg",
        potencia: "",
        etiqueta1: "S",
        etiqueta2: "[MVA]",
        rele1: "",
        rele2: "",
    },
    5: {
        nombre: "Barra II-III",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/4_2.svg",
        reactancia: "",
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: "",
        rele1: "3",
        rele2: "4",
    },
    6: {
        nombre: "Barra III-IV",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/4_4.svg",
        reactancia: "",
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: "",
        rele1: "5",
        rele2: "6",
    },
    7: {
        nombre: "Carga",
        tipo: "Carga",
        urlImagen: "./assets/images/Anillo/load_bottom.svg",
        potencia: "",
        etiqueta1: "S",
        etiqueta2: "[MVA]",
        potencia: "",
        rele1: "",
        rele2: "",
    }

}

const modeloReleAnillo = {
    0: {
        nombre: "-",
        Isc: "",
        Ic: "",
        IncrementoIc: "",
        familiaCurva: "",
        TMS: "",
        tiempo: "",
        tiempoCoordinacion: "",
        tiempoInstantaneo: "",
    },
    1: {
        nombre: "Rele 1",
        Isc: tabla_Isc_Rele1,
        Ic: "",
        IncrementoIc: tabla_Incremento_Ic_1,
        familiaCurva: tabla_familiaCurva_1,
        TMS: tabla_TMS_1,
        tiempo: tabla_Tiempo_1,
        tiempoCoordinacion: tabla_TiempoCoordinacion_1,
        tiempoInstantaneo: "",
    },
    2: {
        nombre: "Rele 2",
        Isc: tabla_Isc_Rele2,
        Ic: "",
        IncrementoIc: tabla_Incremento_Ic_2,
        familiaCurva: tabla_familiaCurva_2,
        TMS: tabla_TMS_2,
        tiempo: tabla_Tiempo_2,
        tiempoCoordinacion: tabla_TiempoCoordinacion_2,
        tiempoInstantaneo: "",
    },
    3: {
        nombre: "Rele 3",
        Isc: tabla_Isc_Rele3,
        Ic: "",
        IncrementoIc: tabla_Incremento_Ic_3,
        familiaCurva: tabla_familiaCurva_3,
        TMS: tabla_TMS_3,
        tiempo: tabla_Tiempo_3,
        tiempoCoordinacion: tabla_TiempoCoordinacion_3,
        tiempoInstantaneo: "",
    },
    4: {
        nombre: "Rele 4",
        Isc: tabla_Isc_Rele4,
        Ic: "",
        IncrementoIc: tabla_Incremento_Ic_4,
        familiaCurva: tabla_familiaCurva_4,
        TMS: tabla_TMS_4,
        tiempo: tabla_Tiempo_4,
        tiempoCoordinacion: tabla_TiempoCoordinacion_4,
        tiempoInstantaneo: "",
    },
    5: {
        nombre: "Rele 5",
        Isc: tabla_Isc_Rele5,
        Ic: "",
        IncrementoIc: tabla_Incremento_Ic_5,
        familiaCurva: tabla_familiaCurva_5,
        TMS: tabla_TMS_5,
        tiempo: tabla_Tiempo_5,
        tiempoCoordinacion: tabla_TiempoCoordinacion_5,
        tiempoInstantaneo: "",
    },
    6: {
        nombre: "Rele 6",
        Isc: tabla_Isc_Rele6,
        Ic: "",
        IncrementoIc: tabla_Incremento_Ic_6,
        familiaCurva: tabla_familiaCurva_6,
        TMS: tabla_TMS_6,
        tiempo: tabla_Tiempo_6,
        tiempoCoordinacion: tabla_TiempoCoordinacion_6,
        tiempoInstantaneo: "",
    },
    7: {
        nombre: "Rele 7",
        Isc: tabla_Isc_Rele7,
        Ic: "",
        IncrementoIc: tabla_Incremento_Ic_7,
        familiaCurva: tabla_familiaCurva_7,
        TMS: tabla_TMS_7,
        tiempo: tabla_Tiempo_7,
        tiempoCoordinacion: tabla_TiempoCoordinacion_7,
        tiempoInstantaneo: "",
    },
    8: {
        nombre: "Rele 8",
        Isc: tabla_Isc_Rele8,
        Ic: "",
        IncrementoIc: tabla_Incremento_Ic_8,
        familiaCurva: tabla_familiaCurva_8,
        TMS: tabla_TMS_8,
        tiempo: tabla_Tiempo_8,
        tiempoCoordinacion: tabla_TiempoCoordinacion_8,
        tiempoInstantaneo: "",
    }
}

const parametrosCurvaAnillo = {
    "Normal Inversa - IEC": {
        alfa: 0.02,
        beta: 0.14,
        lambda: 0,
        B: 1,
        D: 1,
        E: 1,
        A: 1,
        C: 1,
        IEC: 1,
        ANSI: 0

    },
    "Muy Inversa - IEC": {
        alfa: 1,
        beta: 13.5,
        lambda: 0,
        B: 1,
        D: 1,
        E: 1,
        A: 1,
        C: 1,
        IEC: 1,
        ANSI: 0
    },
    "Extremadamente Inversa - IEC": {
        alfa: 2.1,
        beta: 80,
        lambda: 0,
        B: 1,
        D: 1,
        E: 1,
        A: 1,
        C: 1,
        IEC: 1,
        ANSI: 0
    },
    "Normal Inversa - ANSI": {
        alfa: 1,
        beta: 1,
        lambda: 0,
        B: 2.2614,
        D: -4.1899,
        E: 9.1272,
        A: 0.0274,
        C: 0.30,
        IEC: 0,
        ANSI: 1

    },
    "Muy Inversa - ANSI": {
        alfa: 1,
        beta: 1,
        lambda: 0,
        B: 0.7989,
        D: -0.2840,
        E: 4.0505,
        A: 0.0615,
        C: 0.34,
        ANSI: 1,
        IEC: 0
    },
    "Extremadamente Inversa - ANSI": {
        alfa: 1,
        beta: 1,
        lambda: 0,
        B: 0.2294,
        D: 3.0094,
        E: 0.7222,
        A: 0.0399,
        C: 0.50,
        IEC: 0,
        ANSI: 1
    }


}

//Inicializa las variables y agregando campos vacios por defecto
document.getElementById('anillo-tab-pane').style.display = "none";

var S1 = "", S2 = "", S3 = "", S4 = "", Z12 = "", Z23 = "", Z34 = "", Z41 = "", VAnillo = "";
var Isc_Rele1, Isc_Rele2, Isc_Rele3, Isc_Rele4, Isc_Rele5, Isc_Rele6, Isc_Rele7, Isc_Rele8;
var Ic_Rele1, Ic_Rele2, Ic_Rele3, Ic_Rele4, Ic_Rele5, Ic_Rele6, Ic_Rele7, Ic_Rele8;
var Incremento_Ic_r1, Incremento_Ic_r2, Incremento_Ic_r3, Incremento_Ic_r4, Incremento_Ic_r5, Incremento_Ic_r6, Incremento_Ic_r7, Incremento_Ic_r8;
var familiaCurvaR1, familiaCurvaR2, familiaCurvaR3, familiaCurvaR4, familiaCurvaR5, familiaCurvaR6, familiaCurvaR7, familiaCurvaR8;
var TMS_r1, TMS_r2, TMS_r3, TMS_r4, TMS_r5, TMS_r6, TMS_r7, TMS_r8;
var TMS_calculado_r1, TMS_calculado_r2, TMS_calculado_r3, TMS_calculado_r4, TMS_calculado_r5, TMS_calculado_r6, TMS_calculado_r7, TMS_calculado_r8;
var tiempo_r1, tiempo_r2, tiempo_r3, tiempo_r4, tiempo_r5, tiempo_r6, tiempo_r7, tiempo_r8;
var tiempo_coordinacion_r1, tiempo_coordinacion_r2, tiempo_coordinacion_r3, tiempo_coordinacion_r4, tiempo_coordinacion_r5, tiempo_coordinacion_r6, tiempo_coordinacion_r7, tiempo_coordinacion_r8;
var Ic_1_con_Incremento, Ic_2_con_Incremento, Ic_3_con_Incremento, Ic_4_con_Incremento, Ic_5_con_Incremento, Ic_6_con_Incremento, Ic_7_con_Incremento, Ic_8_con_Incremento;
var tmsAnilloOpcion1, tmsAnilloOpcion2;
var swal_Anillo_tms;
var guardarAnilloOpcionTMS1 = "display:none";
var guardarAnilloOpcionTMS2 = "display:none";
var TMSparteIEC_1, TMSparteIEC_2, TMSparteIEC_3, TMSparteIEC_4, TMSparteIEC_5, TMSparteIEC_6, TMSparteIEC_7, TMSparteIEC_8;
var TMSparteANSI_1, TMSparteANSI_2, TMSparteANSI_3, TMSparteANSI_4, TMSparteANSI_5, TMSparteANSI_6, TMSparteANSI_7, TMSparteANSI_8;

var ajusteR1,  ajusteR2, ajusteR3, ajusteR4, ajusteR5, ajusteR6, ajusteR7, ajusteR8;

//Estos son utilizados para la segunda metodología (Falla 50%) para hallar las corrientes de Isc
var Isc2_Rele1_50, Isc2_Rele2_50, Isc2_Rele3_50, Isc2_Rele4_50, Isc2_Rele5_50, Isc2_Rele6_50, Isc2_Rele7_50, Isc2_Rele8_50;
var Isc2_Rele1_1, Isc2_Rele1_2, Isc2_Rele2_1, Isc2_Rele2_2, Isc2_Rele3_1, Isc2_Rele_2, Isc2_Rele4_1, Isc2_Rele4_2, Isc2_Rele5_1, Isc2_Rele5_2, Isc2_Rele6_1, Isc2_Rele6_2, Isc2_Rele7_1, Isc2_Rele7_2, Isc2_Rele8_1, Isc2_Rele8_2;
var Isc2_Rele1, Isc2_Rele2, Isc2_Rele3, Isc2_Rele4, Isc2_Rele5, Isc2_Rele6, Isc2_Rele7, Isc2_Rele8;
//-----------------------------------------------------------------------------------//

var displayVoltaje = "display:none";
var displayReactancia = "display:none";
var displayPotencia = "display:none";
var displayRele = "display:none";

tabla_Incremento_Ic_1 = ""; tabla_Incremento_Ic_2 = ""; tabla_Incremento_Ic_3 = ""; tabla_Incremento_Ic_4 = ""; tabla_Incremento_Ic_5 = ""; tabla_Incremento_Ic_6 = ""; tabla_Incremento_Ic_7 = ""; tabla_Incremento_Ic_8 = "";

var Ic_A, Ic_B, Ic_43, Ic_32, Ic_2;
var Ic_23, Ic_34, Ic_4;
var Ic_78, Ic_56, Ic_34, Ic_12;
var Ic_r12, Ic_r34, Ic_r56, Ic_r78;
var Zfalla;
var Isc_2I, Isc_2D, Isc_2A, Isc_2B;
var Isc_3I, Isc_3D, Isc_3A, Isc_3B;
var Isc_4I, Isc_4D, Isc_4A, Isc_4B;
var Isc_1, Isc_2, Isc_3, Isc_4;

var swalAnilloTMS1, swalAnilloTMS2;
var swal_Anillo_tms = "swal-AnilloTMS0";
var guardarOpcionAnilloTMS1 = "display:none";
var guardarOpcionAnilloTMS2 = "display:none";

ajusteR1 = 1.25;
ajusteR2 = 1.5;
ajusteR3 = 1.25;
ajusteR4 = 1.25;
ajusteR5 = 1.25;
ajusteR6 = 1.25;
ajusteR7 = 1.5;
ajusteR8 = 1.25;

modeloReleAnillo[0].familiaCurva = "-";
modeloReleAnillo[1].familiaCurva = "-";
modeloReleAnillo[2].familiaCurva = "-";
modeloReleAnillo[3].familiaCurva = "-";
modeloReleAnillo[4].familiaCurva = "-";
modeloReleAnillo[5].familiaCurva = "-";
modeloReleAnillo[6].familiaCurva = "-";
modeloReleAnillo[7].familiaCurva = "-";
modeloReleAnillo[8].familiaCurva = "-";

modeloReleAnillo[0].TMS = "-";
modeloReleAnillo[1].TMS = "-";
modeloReleAnillo[2].TMS = "-";
modeloReleAnillo[3].TMS = "-";
modeloReleAnillo[4].TMS = "-";
modeloReleAnillo[5].TMS = "-";
modeloReleAnillo[6].TMS = "-";
modeloReleAnillo[7].TMS = "-";
modeloReleAnillo[8].TMS = "-";



//Defino las variables para poder imprimirlas en la tabla de los relés
var tabla_Isc_Rele1 = document.getElementById("Isc_r1");
var tabla_Isc_Rele2 = document.getElementById("Isc_r2");
var tabla_Isc_Rele3 = document.getElementById("Isc_r3");
var tabla_Isc_Rele4 = document.getElementById("Isc_r4");
var tabla_Isc_Rele5 = document.getElementById("Isc_r5");
var tabla_Isc_Rele6 = document.getElementById("Isc_r6");
var tabla_Isc_Rele7 = document.getElementById("Isc_r7");
var tabla_Isc_Rele8 = document.getElementById("Isc_r8");
var tabla_Ic_Rele1 = document.getElementById("Ic_r1");
var tabla_Ic_Rele2 = document.getElementById("Ic_r2");
var tabla_Ic_Rele3 = document.getElementById("Ic_r3");
var tabla_Ic_Rele4 = document.getElementById("Ic_r4");
var tabla_Ic_Rele5 = document.getElementById("Ic_r5");
var tabla_Ic_Rele6 = document.getElementById("Ic_r6");
var tabla_Ic_Rele7 = document.getElementById("Ic_r7");
var tabla_Ic_Rele8 = document.getElementById("Ic_r8");
var tabla_Incremento_Ic_1 = document.getElementById("Incremento_Ic_r1");
var tabla_Incremento_Ic_2 = document.getElementById("Incremento_Ic_r2");
var tabla_Incremento_Ic_3 = document.getElementById("Incremento_Ic_r3");
var tabla_Incremento_Ic_4 = document.getElementById("Incremento_Ic_r4");
var tabla_Incremento_Ic_5 = document.getElementById("Incremento_Ic_r5");
var tabla_Incremento_Ic_6 = document.getElementById("Incremento_Ic_r6");
var tabla_Incremento_Ic_7 = document.getElementById("Incremento_Ic_r7");
var tabla_Incremento_Ic_8 = document.getElementById("Incremento_Ic_r8");
var tabla_familiaCurva_1 = document.getElementById("FamiliaC_r1");
var tabla_familiaCurva_2 = document.getElementById("FamiliaC_r2");
var tabla_familiaCurva_3 = document.getElementById("FamiliaC_r3");
var tabla_familiaCurva_4 = document.getElementById("FamiliaC_r4");
var tabla_familiaCurva_5 = document.getElementById("FamiliaC_r5");
var tabla_familiaCurva_6 = document.getElementById("FamiliaC_r6");
var tabla_familiaCurva_7 = document.getElementById("FamiliaC_r7");
var tabla_familiaCurva_8 = document.getElementById("FamiliaC_r8");
var tabla_TMS_1 = document.getElementById("TMS_r1");
var tabla_TMS_2 = document.getElementById("TMS_r2");
var tabla_TMS_3 = document.getElementById("TMS_r3");
var tabla_TMS_4 = document.getElementById("TMS_r4");
var tabla_TMS_5 = document.getElementById("TMS_r5");
var tabla_TMS_6 = document.getElementById("TMS_r6");
var tabla_TMS_7 = document.getElementById("TMS_r7");
var tabla_TMS_8 = document.getElementById("TMS_r8");
var tabla_Tiempo_1 = document.getElementById("Tiempo_r1");
var tabla_Tiempo_2 = document.getElementById("Tiempo_r2");
var tabla_Tiempo_3 = document.getElementById("Tiempo_r3");
var tabla_Tiempo_4 = document.getElementById("Tiempo_r4");
var tabla_Tiempo_5 = document.getElementById("Tiempo_r5");
var tabla_Tiempo_6 = document.getElementById("Tiempo_r6");
var tabla_Tiempo_7 = document.getElementById("Tiempo_r7");
var tabla_Tiempo_8 = document.getElementById("Tiempo_r8");
var tabla_TiempoCoordinacion_1 = document.getElementById("Tiempo_coordinacion_r1");
var tabla_TiempoCoordinacion_2 = document.getElementById("Tiempo_coordinacion_r2");
var tabla_TiempoCoordinacion_3 = document.getElementById("Tiempo_coordinacion_r3");
var tabla_TiempoCoordinacion_4 = document.getElementById("Tiempo_coordinacion_r4");
var tabla_TiempoCoordinacion_5 = document.getElementById("Tiempo_coordinacion_r5");
var tabla_TiempoCoordinacion_6 = document.getElementById("Tiempo_coordinacion_r6");
var tabla_TiempoCoordinacion_7 = document.getElementById("Tiempo_coordinacion_r7");
var tabla_TiempoCoordinacion_8 = document.getElementById("Tiempo_coordinacion_r8");
var tabla_DialCalculado_1 = document.getElementById("TMS_r1");
var tabla_DialCalculado_2 = document.getElementById("TMS_r2");
var tabla_DialCalculado_3 = document.getElementById("TMS_r3");
var tabla_DialCalculado_4 = document.getElementById("TMS_r4");
var tabla_DialCalculado_5 = document.getElementById("TMS_r5");
var tabla_DialCalculado_6 = document.getElementById("TMS_r6");
var tabla_DialCalculado_7 = document.getElementById("TMS_r7");
var tabla_DialCalculado_8 = document.getElementById("TMS_r8");
var tabla_tiempoInstantaneo50_1 = document.getElementById("Tiempo_prot50_1");
var tabla_tiempoInstantaneo50_2 = document.getElementById("Tiempo_prot50_2");
var tabla_tiempoInstantaneo50_3 = document.getElementById("Tiempo_prot50_3");
var tabla_tiempoInstantaneo50_4 = document.getElementById("Tiempo_prot50_4");
var tabla_tiempoInstantaneo50_5 = document.getElementById("Tiempo_prot50_5");
var tabla_tiempoInstantaneo50_6 = document.getElementById("Tiempo_prot50_6");
var tabla_tiempoInstantaneo50_7 = document.getElementById("Tiempo_prot50_7");
var tabla_tiempoInstantaneo50_8 = document.getElementById("Tiempo_prot50_8");

//Defino las variables para ajustar los valores generales del anillo
var valor_diagrama_Generador = document.getElementById("1_4");
var valor_barra_1_2 = document.getElementById("Barra1_2");
var valor_barra_4_1 = document.getElementById("Barra4_1");
var valor_carga_izquierda = document.getElementById("cargaIzquierda");
var valor_carga_derecha = document.getElementById("cargaDerecha");
var valor_barra_2_3 = document.getElementById("Barra2_3");
var valor_barra_3_4 = document.getElementById("Barra3_4");
var valor_carga_abajo = document.getElementById("cargaAbajo");

var pillsResultadosGrafica2tab = document.getElementById("pills-resultadosGrafica-2-tab");
var pillsResultadosCalculos2_2tab = document.getElementById("pills-resultadosCalculos2-2-tab");


//FUNCIONES QUE SE UTILIZARÁN
function escogerSegunTipo(tipo) {
    console.log("tipo nodo: ", tipo)

    try {
        if (tipo == "Generador") {
            displayVoltaje = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayPotencia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayReactancia = "display:none";
            displayRele = "display:none";
        }
        if (tipo == "Barra") {
            displayVoltaje = "display:none";
            displayPotencia = "display:none";
            displayReactancia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayRele = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr 1fr; ";
        }
        if (tipo == "Carga") {
            displayVoltaje = "display:none";
            displayPotencia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayReactancia = "display:none";
            displayRele = "display:none";
        }

    } catch (error) {

    }


}

async function establecerValoresAnillo(valores, tipo) {

    escogerSegunTipo(tipo);

    const { value: formValues } = await Swal.fire({
        allowOutsideClick: false,
        title: modeloAnillo[valores].nombre,
        imageUrl: modeloAnillo[valores].urlImagen,
        imageWidth: 100,
        imageHeight: 100,
        width: 800,
        background: '#fefefe',
        html: `<div class="table-responsive">
        <table class="table align-middle" style="font-size:13px"> 
        <tr style="${displayVoltaje}; ">
            <th scope="row"  >Voltaje</th>    
            <td ><input type="number" id="swal-Anillo-Voltaje" value="${modeloAnillo[0].voltaje}" class="swal2-input" min="0" max="9999999"></td>
            <td >[kV]</td>
            
           
        </tr>

        <tr style="${displayPotencia};">
            <th scope="row">Potencia</th>    
            <td ><input type="number" id="swal-Anillo-potencia" value="${modeloAnillo[valores].potencia}" class="swal2-input" min="0" max="999999"></td>
            <td >[MVA]</td>
        </tr>

        <tr style="${displayReactancia};">
            <th scope="row">Reactancia</th>    
            <td ><input type="number" id="swal-Anillo-reactancia" value="${modeloAnillo[valores].reactancia}" class="swal2-input" min="0" max="9999999"></td>
            <td >[Ω]</td>
        </tr>

        <tr class="table-secondary">
            <th></th>
            <td></td>
        </tr>


        <tr style="${displayRele}">
            <th scope="row" style="color:#1b31ffff">Rele ${modeloAnillo[valores].rele1}</th>
            <td>
                <img  onclick="guardarValoresReles(${modeloAnillo[valores].rele1})" class="seleccionReleAnillo" src="assets/images/Anillo/edit1.svg" width="20" height="20">
            </td>
            <th scope="row" style="color:#29b561ff">Rele ${modeloAnillo[valores].rele2}</th>
            <td>
                <img  onclick="guardarValoresReles(${modeloAnillo[valores].rele2})" class="seleccionReleAnillo" src="assets/images/Anillo/edit2.svg" width="20" height="20">
            </td>
        </tr>

        </table>
        
        
        </div>
        `,
        showConfirmButton: true,
        confirmButtonText: "Guardar",
        showCloseButton: true,
        showCancelButton: false,
        customClass: {
            confirmButton: 'botonGuardar hoverButton',
        },
        preConfirm: () => {
            return [

                document.getElementById('swal-Anillo-Voltaje').value,
                document.getElementById('swal-Anillo-potencia').value,
                document.getElementById('swal-Anillo-reactancia').value,

            ]
        },


    })

    if (formValues) {
        //Swal.fire(JSON.stringify(formValues))
        console.log("resultado: ", formValues)
        guardarAnilloGeneral(valores, formValues)
    }

}


function guardarAnilloGeneral(elemento, datos) {
    console.log("datos pasados: ", datos);
    console.log("modeloAnillo[1].reactancia: ", modeloAnillo[1].reactancia)
    modeloAnillo[elemento].voltaje = parseFloat(datos[0]);
    modeloAnillo[elemento].potencia = parseFloat(datos[1]);
    modeloAnillo[elemento].reactancia = parseFloat(datos[2]);

    if (!isNaN(modeloAnillo[0].voltaje)) {
        valor_diagrama_Generador.innerHTML = modeloAnillo[0].voltaje + " kV" + "<br>";
    } else { valor_diagrama_Generador.innerHTML = " kV" + "<br>"; }
    if (!isNaN(modeloAnillo[0].potencia)) { valor_diagrama_Generador.innerHTML = valor_diagrama_Generador.innerHTML + modeloAnillo[0].potencia + " MVA" + "<br>" }

    if (!isNaN(modeloAnillo[1].reactancia)) {

        if (modeloAnillo[1].reactancia < 1000) {
            valor_barra_1_2.innerHTML = modeloAnillo[1].reactancia + " Ω";
        }

        if (modeloAnillo[1].reactancia >= 1000 && modeloAnillo[1].reactancia <= 999999) {
            valor_barra_1_2.innerHTML = (modeloAnillo[1].reactancia / 1000).toFixed(2) + " kΩ"
        }
        if (modeloAnillo[1].reactancia >= 1000000 && modeloAnillo[1].reactancia <= 9999999) {
            valor_barra_1_2.innerHTML = (modeloAnillo[1].reactancia / 1000000).toFixed(2) + " MΩ"
        }
    } else { valor_barra_1_2.innerText = " Ω"; }

    if (!isNaN(modeloAnillo[2].reactancia)) {

        if (modeloAnillo[2].reactancia < 1000) {
            valor_barra_4_1.innerText = modeloAnillo[2].reactancia + " Ω";
        }

        if (modeloAnillo[2].reactancia >= 1000 && modeloAnillo[2].reactancia <= 999999) {
            valor_barra_4_1.innerText = (modeloAnillo[2].reactancia / 1000).toFixed(2) + " kΩ"
        }
        if (modeloAnillo[2].reactancia >= 1000000 && modeloAnillo[2].reactancia <= 9999999) {
            valor_barra_4_1.innerText = (modeloAnillo[2].reactancia / 1000000).toFixed(2) + " MΩ"
        }

    } else { valor_barra_4_1.innerText = " Ω"; }

    if (!isNaN(modeloAnillo[3].potencia)) { valor_carga_izquierda.innerText = modeloAnillo[3].potencia + " MVA"; } else { valor_carga_izquierda.innerText = " MVA"; }

    if (!isNaN(modeloAnillo[4].potencia)) { valor_carga_derecha.innerText = modeloAnillo[4].potencia + " MVA"; } else { valor_carga_derecha.innerText = " MVA"; }

    if (!isNaN(modeloAnillo[5].reactancia)) {

        if (modeloAnillo[5].reactancia < 1000) {
            valor_barra_2_3.innerHTML = "<br>" + modeloAnillo[5].reactancia + " Ω";
        }

        if (modeloAnillo[5].reactancia >= 1000 && modeloAnillo[5].reactancia <= 999999) {
            valor_barra_2_3.innerHTML = "<br>" + (modeloAnillo[5].reactancia / 1000).toFixed(2) + " kΩ"
        }
        if (modeloAnillo[5].reactancia >= 1000000 && modeloAnillo[5].reactancia <= 9999999) {
            valor_barra_2_3.innerHTML = "<br>" + (modeloAnillo[5].reactancia / 1000000).toFixed(2) + " MΩ"
        }

    } else { valor_barra_2_3.innerHTML = "<br>" + " Ω"; }

    if (!isNaN(modeloAnillo[6].reactancia)) {

        if (modeloAnillo[6].reactancia < 1000) {
            valor_barra_3_4.innerHTML = "<br>"+ modeloAnillo[6].reactancia + " Ω";
        }

        if (modeloAnillo[6].reactancia >= 1000 && modeloAnillo[6].reactancia <= 999999) {
            valor_barra_3_4.innerHTML = "<br>" + (modeloAnillo[6].reactancia / 1000).toFixed(2) + " kΩ"
        }
        if (modeloAnillo[6].reactancia >= 1000000 && modeloAnillo[6].reactancia <= 9999999) {
            valor_barra_3_4.innerHTML = "<br>" + (modeloAnillo[6].reactancia / 1000000).toFixed(2) + " MΩ"
        }

    } else { valor_barra_3_4.innerHTML = "<br>" + " Ω"; }

    if (!isNaN(modeloAnillo[7].potencia)) { valor_carga_abajo.innerHTML = "<br>" + modeloAnillo[7].potencia + " MVA"; } else { valor_carga_abajo.innerHTML = "<br>" + " MVA"; }

}


function ejemploAnillo() {
    guardarOpcionAnilloTMS1 = "display:block";
    guardarOpcionAnilloTMS2 = "display:none";
    swal_Anillo_tms = "swal-AnilloTMS1";


    modeloAnillo[0].voltaje = parseFloat(13.2);
    modeloAnillo[0].potencia = parseFloat(150);
    modeloAnillo[1].reactancia = parseFloat(2);
    modeloAnillo[2].reactancia = parseFloat(3);
    modeloAnillo[3].potencia = parseFloat(5);
    modeloAnillo[4].potencia = parseFloat(7);
    modeloAnillo[5].reactancia = parseFloat(2);
    modeloAnillo[6].reactancia = parseFloat(4);
    modeloAnillo[7].potencia = parseFloat(3);
    valor_diagrama_Generador.innerHTML = modeloAnillo[0].voltaje + " kV" + "<br>";
    valor_diagrama_Generador.innerHTML = valor_diagrama_Generador.innerHTML + modeloAnillo[0].potencia + " MVA" + "<br>";
    valor_barra_1_2.innerHTML = modeloAnillo[1].reactancia + " Ω";
    valor_barra_4_1.innerText = modeloAnillo[2].reactancia + " Ω";
    valor_carga_izquierda.innerText = modeloAnillo[3].potencia + " MVA";
    valor_carga_derecha.innerText = modeloAnillo[4].potencia + " MVA";
    valor_barra_2_3.innerHTML = "<br>" + modeloAnillo[5].reactancia + " Ω";
    valor_barra_2_3.innerHTML = "<br>" + modeloAnillo[5].reactancia + " Ω";
    valor_barra_3_4.innerHTML = "<br>" + modeloAnillo[6].reactancia + " Ω";
    valor_carga_abajo.innerHTML = "<br>" + modeloAnillo[7].potencia + " MVA";


    tabla_Incremento_Ic_1.innerText = 20; tabla_Incremento_Ic_2.innerText = 20; tabla_Incremento_Ic_3.innerText = 20;
    tabla_Incremento_Ic_4.innerText = 20; tabla_Incremento_Ic_5.innerText = 20; tabla_Incremento_Ic_6.innerText = 20;
    tabla_Incremento_Ic_7.innerText = 20; tabla_Incremento_Ic_8.innerText = 20;

    modeloReleAnillo[1].IncrementoIc = parseFloat(20); modeloReleAnillo[2].IncrementoIc = parseFloat(20); modeloReleAnillo[3].IncrementoIc = parseFloat(20);
    modeloReleAnillo[4].IncrementoIc = parseFloat(20); modeloReleAnillo[5].IncrementoIc = parseFloat(20); modeloReleAnillo[6].IncrementoIc = parseFloat(20);
    modeloReleAnillo[7].IncrementoIc = parseFloat(20); modeloReleAnillo[8].IncrementoIc = parseFloat(20);

    tabla_familiaCurva_1.innerText = "Normal Inversa - IEC"; tabla_familiaCurva_2.innerText = "Normal Inversa - IEC";
    tabla_familiaCurva_3.innerText = "Normal Inversa - IEC"; tabla_familiaCurva_4.innerText = "Normal Inversa - IEC";
    tabla_familiaCurva_5.innerText = "Normal Inversa - IEC"; tabla_familiaCurva_6.innerText = "Normal Inversa - IEC";
    tabla_familiaCurva_7.innerText = "Normal Inversa - IEC"; tabla_familiaCurva_8.innerText = "Normal Inversa - IEC";

    modeloReleAnillo[1].familiaCurva = "Normal Inversa - IEC"; modeloReleAnillo[2].familiaCurva = "Normal Inversa - IEC";
    modeloReleAnillo[3].familiaCurva = "Normal Inversa - IEC"; modeloReleAnillo[4].familiaCurva = "Normal Inversa - IEC";
    modeloReleAnillo[5].familiaCurva = "Normal Inversa - IEC"; modeloReleAnillo[6].familiaCurva = "Normal Inversa - IEC";
    modeloReleAnillo[7].familiaCurva = "Normal Inversa - IEC"; modeloReleAnillo[8].familiaCurva = "Normal Inversa - IEC";

    tabla_Tiempo_1.innerText = 200; tabla_Tiempo_2.innerText = 200; tabla_Tiempo_3.innerText = 200;
    tabla_Tiempo_4.innerText = 200; tabla_Tiempo_5.innerText = 200; tabla_Tiempo_6.innerText = 200;
    tabla_Tiempo_7.innerText = 200; tabla_Tiempo_8.innerText = 200;

    modeloReleAnillo[1].tiempo = parseFloat(200); modeloReleAnillo[2].tiempo = parseFloat(200); modeloReleAnillo[3].tiempo = parseFloat(200);
    modeloReleAnillo[4].tiempo = parseFloat(200); modeloReleAnillo[5].tiempo = parseFloat(200); modeloReleAnillo[6].tiempo = parseFloat(200);
    modeloReleAnillo[7].tiempo = parseFloat(200); modeloReleAnillo[8].tiempo = parseFloat(200);

    tabla_TiempoCoordinacion_1.innerText = 200; tabla_TiempoCoordinacion_2.innerText = 200; tabla_TiempoCoordinacion_3.innerText = 200;
    tabla_TiempoCoordinacion_4.innerText = 200; tabla_TiempoCoordinacion_5.innerText = 200; tabla_TiempoCoordinacion_6.innerText = 200;
    tabla_TiempoCoordinacion_7.innerText = 200; tabla_TiempoCoordinacion_8.innerText = 200;

    modeloReleAnillo[1].tiempoCoordinacion = parseFloat(200); modeloReleAnillo[2].tiempoCoordinacion = parseFloat(200); modeloReleAnillo[3].tiempocoordinacion = parseFloat(200);
    modeloReleAnillo[4].tiempoCoordinacion = parseFloat(200); modeloReleAnillo[5].tiempoCoordinacion = parseFloat(200); modeloReleAnillo[6].tiempocoordinacion = parseFloat(200);
    modeloReleAnillo[7].tiempoCoordinacion = parseFloat(200); modeloReleAnillo[8].tiempoCoordinacion = parseFloat(200);


    tabla_DialCalculado_1.innerText = 0.04; tabla_DialCalculado_2.innerText = 0.01; tabla_DialCalculado_3.innerText = 0.02;
    tabla_DialCalculado_4.innerText = 0.01; tabla_DialCalculado_5.innerText = 0.01; tabla_DialCalculado_6.innerText = 0.02;
    tabla_DialCalculado_7.innerText = 0.01; tabla_DialCalculado_8.innerText = 0.03;

    modeloReleAnillo[1].TMS = parseFloat(0.04); modeloReleAnillo[2].TMS = parseFloat(0.01); modeloReleAnillo[3].TMS = parseFloat(0.02); modeloReleAnillo[4].TMS = parseFloat(0.01);
    modeloReleAnillo[5].TMS = parseFloat(0.01); modeloReleAnillo[6].TMS = parseFloat(0.02); modeloReleAnillo[7].TMS = parseFloat(0.01); modeloReleAnillo[8].TMS = parseFloat(0.03);

    tabla_tiempoInstantaneo50_1.innerText = 50; tabla_tiempoInstantaneo50_2.innerText = 50; tabla_tiempoInstantaneo50_3.innerText = 50;
    tabla_tiempoInstantaneo50_4.innerText = 50; tabla_tiempoInstantaneo50_5.innerText = 50; tabla_tiempoInstantaneo50_6.innerText = 50;
    tabla_tiempoInstantaneo50_7.innerText = 50; tabla_tiempoInstantaneo50_8.innerText = 50;

    modeloReleAnillo[1].tiempoInstantaneo = 50; modeloReleAnillo[2].tiempoInstantaneo = 50; modeloReleAnillo[3].tiempoInstantaneo = 50;
    modeloReleAnillo[4].tiempoInstantaneo = 50; modeloReleAnillo[5].tiempoInstantaneo = 50; modeloReleAnillo[6].tiempoInstantaneo = 50;
    modeloReleAnillo[7].tiempoInstantaneo = 50; modeloReleAnillo[8].tiempoInstantaneo = 50;




}





function calcularValoresRelesAnillo() {

    S1 = modeloAnillo[0].potencia; S2 = modeloAnillo[3].potencia, S3 = modeloAnillo[4].potencia; S4 = modeloAnillo[7].potencia; Z12 = modeloAnillo[1].reactancia; Z23 = modeloAnillo[5].reactancia; Z34 = modeloAnillo[6].reactancia; Z41 = modeloAnillo[2].reactancia; VAnillo = modeloAnillo[0].voltaje;


    //Método 1 --------------------------------------------------------------------------------------------------

    //Cuando tenemos abierto en  el Relé 1 (A)
    Ic_B = (((S3 * (1000000)) + (S4 * (1000000)) + (S2) * (1000000)) / ((Math.sqrt(3)) * (VAnillo) * (1000)));
    Ic_43 = (((S4 * (1000000)) + (S2) * (1000000)) / ((Math.sqrt(3)) * (VAnillo) * (1000)));
    Ic_32 = (((S2) * (1000000)) / ((Math.sqrt(3)) * (VAnillo) * (1000)));
    Ic_2 = 0;


    //Cuando tenemos abierto en el Relé 8 (B)
    Ic_A = (((S2 * (1000000)) + (S4 * (1000000)) + (S3) * (1000000)) / ((Math.sqrt(3)) * (VAnillo) * (1000)));
    Ic_23 = (((S4 * (1000000)) + (S3) * (1000000)) / ((Math.sqrt(3)) * (VAnillo) * (1000)));
    Ic_34 = (((S3) * (1000000)) / ((Math.sqrt(3)) * (VAnillo) * (1000)));
    Ic_4 = 0;

    //Determinamos cuales son las corriente de carga comparando el mayor valor
    Ic_r78 = Math.max(Ic_B, Ic_2).toFixed(2);
    Ic_r78 = parseFloat(Ic_r78);
    Ic_r56 = Math.max(Ic_43, Ic_34).toFixed(2);
    Ic_r56 = parseFloat(Ic_r56);
    Ic_r34 = Math.max(Ic_32, Ic_23).toFixed(2);
    Ic_r34 = parseFloat(Ic_r34);
    Ic_r12 = Math.max(Ic_2, Ic_A).toFixed(2);
    Ic_r12 = parseFloat(Ic_r12);



    tabla_Ic_Rele1.innerText = Ic_r12;
    tabla_Ic_Rele2.innerText = Ic_r12;
    tabla_Ic_Rele3.innerText = Ic_r34;
    tabla_Ic_Rele4.innerText = Ic_r34;
    tabla_Ic_Rele5.innerText = Ic_r56;
    tabla_Ic_Rele6.innerText = Ic_r56;
    tabla_Ic_Rele7.innerText = Ic_r78;
    tabla_Ic_Rele8.innerText = Ic_r78;

    modeloReleAnillo[1].Ic = Ic_r12;
    modeloReleAnillo[2].Ic = Ic_r12;
    modeloReleAnillo[3].Ic = Ic_r34;
    modeloReleAnillo[4].Ic = Ic_r34;
    modeloReleAnillo[5].Ic = Ic_r56;
    modeloReleAnillo[6].Ic = Ic_r56;
    modeloReleAnillo[7].Ic = Ic_r78;
    modeloReleAnillo[8].Ic = Ic_r78;

    Zfalla = ((Math.pow((VAnillo) * (1000), 2))) / (S1 * (1000000));

    //Anillo cerrado

    Isc_2 = ((VAnillo) * (1000)) / (((Math.sqrt(3))) * (Zfalla + (1 / ((1 / Z12) + (1 / (Z23 + Z34 + Z41))))));
    Isc_2D = Isc_2 * ((Z12) / (Z12 + Z23 + Z34 + Z41));
    Isc_2I = Isc_2 * ((Z23 + Z34 + Z41) / (Z12 + Z23 + Z34 + Z41));
    Isc_2A = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z23 + Z34 + Z41));
    Isc_2B = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z12));

    Isc_3 = ((VAnillo) * (1000)) / (((Math.sqrt(3))) * (Zfalla + (1 / ((1 / (Z12 + Z23)) + (1 / (Z34 + Z41))))));
    Isc_3D = Isc_3 * ((Z12 + Z23) / (Z12 + Z23 + Z34 + Z41));
    Isc_3I = Isc_3 * ((Z34 + Z41) / (Z12 + Z23 + Z34 + Z41));
    Isc_3A = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z34 + Z41));
    Isc_3B = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z12 + Z23));

    Isc_4 = ((VAnillo) * (1000)) / (((Math.sqrt(3))) * (Zfalla + (1 / ((1 / (Z12 + Z23 + Z34)) + (1 / (Z41))))));
    Isc_4D = Isc_4 * ((Z12 + Z23 + Z34) / (Z12 + Z23 + Z34 + Z41));
    Isc_4I = Isc_4 * ((Z41) / (Z12 + Z23 + Z34 + Z41));
    Isc_4A = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z41));
    Isc_4B = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z12 + Z23 + Z34));


    Isc_Rele1 = parseFloat(Math.max(Isc_2I, Isc_2B, Isc_3I, Isc_3B, Isc_4I, Isc_4B));
    // console.log("Isc_2 ", Isc_2)
    // console.log("Isc_2D ", Isc_2D)
    // console.log("Isc_2I  ", Isc_2I )
    // console.log("Isc_2A ", Isc_2A)
    // console.log("Isc_2B ", Isc_2B)



    // console.log("Isc_2I ", Isc_2I)
    // console.log("Isc_2B ", Isc_2B)
    // console.log("Isc_3I ", Isc_3I)
    // console.log("Isc_3B ", Isc_3B)
    // console.log("Isc_4I ", Isc_4I)
    // console.log("Isc_4B ", Isc_4B)
    // console.log("Isc_Rele1: ", Isc_Rele1)


    Isc_Rele3 = parseFloat(Math.max(Isc_3I, Isc_3B, Isc_4I, Isc_4B));
    Isc_Rele4 = parseFloat(Math.max(Isc_2D, Isc_2A));
    Isc_Rele5 = parseFloat(Math.max(Isc_4I, Isc_4B));
    Isc_Rele6 = parseFloat(Math.max(Isc_2D, Isc_2A, Isc_3D, Isc_3A));
    Isc_Rele8 = parseFloat(Math.max(Isc_2D, Isc_2A, Isc_3D, Isc_3A, Isc_4D, Isc_4A));
    console.log("Isc_2D ", Isc_2D)
    console.log("Isc_2A ", Isc_2A)
    console.log("Isc_3D  ", Isc_3D)
    console.log("Isc_3A ", Isc_3A)
    console.log("Isc_4D", Isc_4D)
    console.log("Isc_4A", Isc_4A)


    console.log("Z12: ", Z12)
    console.log("Z23: ", Z23)
    console.log("Z34: ", Z34)
    console.log("Z41: ", Z41)
    console.log("Zfalla: ", Zfalla)

    console.log("Vanillo: ", VAnillo)
    console.log("S1: ", S1)

    console.log("v78 ", Ic_r78)
    console.log("v56 ", Ic_r56)
    console.log("v34 ", Ic_r34)
    console.log("v12 ", Ic_r12)
    // console.log("Isc_Rele1", Isc_Rele1 * 1.25)
    // console.log("Isc_Rele2", Ic_A * 1.5)
    // console.log("Isc_Rele3", Isc_Rele3 * 1.25)
    // console.log("Isc_Rele4", Isc_Rele4 * 1.25)
    // console.log("Isc_Rele5", Isc_Rele5 * 1.25)
    // console.log("Isc_Rele6", Isc_Rele6 * 1.25)
    // console.log("Isc_Rele7", Ic_B * 1.5)
    // console.log("Isc_Rele8", Isc_Rele8 * 1.25)
    console.log("Isc_Rele1", Isc_Rele1)
    console.log("Isc_Rele2", Ic_A)
    console.log("Isc_Rele3", Isc_Rele3)
    console.log("Isc_Rele4", Isc_Rele4)
    console.log("Isc_Rele5", Isc_Rele5)
    console.log("Isc_Rele6", Isc_Rele6)
    console.log("Isc_Rele7", Ic_B)
    console.log("Isc_Rele8", Isc_Rele8)


    //Método 2 - coordinación de protecciones
    //Relé 7 : 50%, luego escoger el menor de los dos valores 
    Isc2_Rele7_50 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (((Z41 / 2) * (Z12 + Z23 + Z34 + (Z41 / 2))) / ((Z41 / 2) + (Z12 + Z23 + Z34 + (Z41 / 2))))));
    Isc2_Rele7_1 = (Isc2_Rele7_50 * (Z41 / 2)) / (Z12 + Z23 + Z34 + Z41);
    Isc2_Rele7_2 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (Z12 + Z23 + Z34 + Z41)));
    Isc2_Rele7 = Math.min(Isc2_Rele7_1, Isc2_Rele7_2).toFixed(2);
    Isc2_Rele7 = parseFloat(Isc2_Rele7);

    //Relé 5: Se ajusta con el  mayor de los dos valores
    Isc2_Rele5_1 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (((Z41) * (Z12 + Z23 + Z34)) / ((Z41) + (Z12 + Z23 + Z34)))));
    Isc2_Rele5_1 = (Isc2_Rele5_1 * Z41) / (Z12 + Z23 + Z34 + Z41);
    Isc2_Rele5_50 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (Z12 + Z23 + Z34 + (Z41 / 2))));
    Isc2_Rele5_2 = Isc2_Rele5_50;
    Isc2_Rele5 = Math.max(Isc2_Rele5_1, Isc2_Rele5_2).toFixed(2);
    Isc2_Rele5 = parseFloat(Isc2_Rele5);

    //Relé 3: Se ajusta con el  mayor de los dos valores
    Isc2_Rele3_1 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (((Z41 + Z34) * (Z12 + Z23)) / ((Z41 + Z34) + (Z12 + Z23)))));
    Isc2_Rele3_1 = (Isc2_Rele3_1 * (Z34 + Z41)) / (Z12 + Z23 + Z34 + Z41);
    Isc2_Rele3_50 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (Z12 + Z23 + (Z34 / 2))));
    Isc2_Rele3_2 = Isc2_Rele3_50;
    Isc2_Rele3 = Math.max(Isc2_Rele3_1, Isc2_Rele3_2).toFixed(2);
    Isc2_Rele3 = parseFloat(Isc2_Rele3);

    //Relé 1: Se ajusta con el  mayor de los dos valores
    Isc2_Rele1_1 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (((Z12) * (Z23 + Z34 + Z41)) / ((Z12) + (Z23 + Z34 + Z41)))));
    Isc2_Rele1_1 = (Isc2_Rele1_1 * (Z23 + Z34 + Z41)) / (Z12 + Z23 + Z34 + Z41);
    Isc2_Rele1_50 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (Z12 + (Z23 / 2))));
    Isc2_Rele1_2 = Isc2_Rele1_50;
    Isc2_Rele1 = Math.max(Isc2_Rele1_1, Isc2_Rele1_2).toFixed(2);
    Isc2_Rele1 = parseFloat(Isc2_Rele1);

    //Relé 2: 50%, luego escoger el menor de los dos valores 
    Isc2_Rele2_50 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (((Z12 / 2) * (Z23 + Z34 + Z41 + (Z12 / 2))) / ((Z12 / 2) + (Z23 + Z34 + Z41 + (Z12 / 2))))));
    Isc2_Rele2_1 = (Isc2_Rele2_50 * (Z12 / 2)) / (Z12 + Z23 + Z34 + Z41);
    Isc2_Rele2_2 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (Z12 + Z23 + Z34 + Z41)));
    Isc2_Rele2 = Math.min(Isc2_Rele2_1, Isc2_Rele2_2).toFixed(2);
    Isc2_Rele2 = parseFloat(Isc2_Rele2);

    //Relé 4: Se ajusta con el  mayor de los dos valores
    Isc2_Rele4_1 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (((Z12) * (Z23 + Z34 + Z41)) / ((Z12) + (Z23 + Z34 + Z41)))));
    Isc2_Rele4_1 = (Isc2_Rele4_1 * Z12) / (Z12 + Z23 + Z34 + Z41);
    Isc2_Rele4_50 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (Z41 + Z34 + Z23 + (Z12 / 2))));
    Isc2_Rele4_2 = Isc2_Rele4_50;
    Isc2_Rele4 = Math.max(Isc2_Rele4_1, Isc2_Rele4_2).toFixed(2);
    Isc2_Rele4 = parseFloat(Isc2_Rele4);

    //Relé 6: Se ajusta con el  mayor de los dos valores
    Isc2_Rele6_1 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (((Z12 + Z23) * (Z34 + Z41)) / ((Z12 + Z23) + (Z34 + Z41)))));
    Isc2_Rele6_1 = (Isc2_Rele6_1 * Z34) / (Z12 + Z23 + Z34 + Z41);
    Isc2_Rele6_50 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (Z41 + Z34 + (Z23 / 2))));
    Isc2_Rele6_2 = Isc2_Rele6_50;
    Isc2_Rele6 = Math.max(Isc2_Rele6_1, Isc2_Rele6_2).toFixed(2);
    Isc2_Rele6 = parseFloat(Isc2_Rele6);

    //Relé 8: Se ajusta con el  mayor de los dos valores
    Isc2_Rele8_1 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (((Z41) * (Z12 + Z23 + Z34)) / ((Z41) + (Z12 + Z23 + Z34)))));
    Isc2_Rele8_1 = (Isc2_Rele8_1 * (Z12 + Z23 + Z34)) / (Z12 + Z23 + Z34 + Z41);
    Isc2_Rele8_50 = (VAnillo * 1000) / (Math.sqrt(3) * (Zfalla + (Z41 + (Z34 / 2))));
    Isc2_Rele8_2 = Isc2_Rele8_50;
    Isc2_Rele8 = Math.max(Isc2_Rele8_1, Isc2_Rele8_2).toFixed(2);
    Isc2_Rele8 = parseFloat(Isc2_Rele8);



    console.log("Relé 7 50%: ", Isc2_Rele7_50)
    console.log("Rele 5 O1 ", Isc2_Rele5_1)
    console.log("Rele 7 O2 ", Isc2_Rele7_2)

    console.log("Relé 7 Método 2: ", Isc2_Rele7)
    console.log("Relé 5 Método 2: ", Isc2_Rele5)
    console.log("Relé 3 Método 2: ", Isc2_Rele3)
    console.log("Relé 1 Método 2: ", Isc2_Rele1)
    console.log("Relé 2 Método 2: ", Isc2_Rele2)
    console.log("Relé 4 Método 2: ", Isc2_Rele4)
    console.log("Relé 6 Método 2: ", Isc2_Rele6)
    console.log("Relé 8 Método 2: ", Isc2_Rele8)




    //Se imprime los valores, aplicando su factor de ajuste
    tabla_Isc_Rele1.innerText = parseFloat((Isc_Rele1).toFixed(2));
    tabla_Isc_Rele2.innerText = parseFloat((Ic_A).toFixed(2));
    tabla_Isc_Rele3.innerText = parseFloat((Isc_Rele3 ).toFixed(2));
    tabla_Isc_Rele4.innerText = parseFloat((Isc_Rele4 ).toFixed(2));
    tabla_Isc_Rele5.innerText = parseFloat((Isc_Rele5 ).toFixed(2));
    tabla_Isc_Rele6.innerText = parseFloat((Isc_Rele6 ).toFixed(2));
    tabla_Isc_Rele7.innerText = parseFloat((Ic_B ).toFixed(2));
    tabla_Isc_Rele8.innerText = parseFloat((Isc_Rele8 ).toFixed(2));

    modeloReleAnillo[1].Isc = parseFloat((Isc_Rele1 * ajusteR1).toFixed(2));
    modeloReleAnillo[2].Isc = parseFloat((Ic_A * ajusteR2).toFixed(2));
    modeloReleAnillo[3].Isc = parseFloat((Isc_Rele3 * ajusteR3).toFixed(2));
    modeloReleAnillo[4].Isc = parseFloat((Isc_Rele4 * ajusteR4).toFixed(2));
    modeloReleAnillo[5].Isc = parseFloat((Isc_Rele5 * ajusteR5).toFixed(2));
    modeloReleAnillo[6].Isc = parseFloat((Isc_Rele6 * ajusteR6).toFixed(2));
    modeloReleAnillo[7].Isc = parseFloat((Ic_B * ajusteR7).toFixed(2));
    modeloReleAnillo[8].Isc = parseFloat((Isc_Rele8 * ajusteR8).toFixed(2));


    imprimirResultados();
    quitarNaNValoresAnillo();
    pillsResultadosCalculos2_2tab.style.display = "block";

}




function imprimirResultados() {

    //Imprimir resultados para la tabla de la subpestaña "Método 1" y con pestaña principal "Conexión" 
    //Imprimir valores de Icarga: (Ic_metodo1_r(numeroDelRele)) 
    document.getElementById("Ic_metodo1_r1").innerText = (Ic_r12);
    document.getElementById("Ic_metodo1_r2").innerText = (Ic_r12);
    document.getElementById("Ic_metodo1_r3").innerText = (Ic_r34);
    document.getElementById("Ic_metodo1_r4").innerText = (Ic_r34);
    document.getElementById("Ic_metodo1_r5").innerText = (Ic_r56);
    document.getElementById("Ic_metodo1_r6").innerText = (Ic_r56);
    document.getElementById("Ic_metodo1_r7").innerText = (Ic_r78);
    document.getElementById("Ic_metodo1_r8").innerText = (Ic_r78);


    //Imprimir valores de Isc Anillo Cerrado (ac)  : (Isc_ac_metodo1_r(numeroDelRele))
    document.getElementById("Isc_aC_metodo1_r1").innerText = (Isc_2I).toFixed(2);
    document.getElementById("Isc_aC_metodo1_r2").innerText = "-";
    document.getElementById("Isc_aC_metodo1_r3").innerText = (Isc_3I).toFixed(2);
    document.getElementById("Isc_aC_metodo1_r4").innerText = (Isc_2D).toFixed(2);
    document.getElementById("Isc_aC_metodo1_r5").innerText = (Isc_4I).toFixed(2)
    document.getElementById("Isc_aC_metodo1_r6").innerText = (Isc_3D).toFixed(2);
    document.getElementById("Isc_aC_metodo1_r7").innerText = "-";
    document.getElementById("Isc_aC_metodo1_r8").innerText = (Isc_4D).toFixed(2);

    //Imprimir valores de Isc Anillo Abierto  en A (aaA) : (Isc_aaA_metodo1_r(numeroDelRele)) id="Isc_aa_metodo1_r1"
    document.getElementById("Isc_aaA_metodo1_r1").innerText = "-";
    document.getElementById("Isc_aaA_metodo1_r2").innerText = "-";
    document.getElementById("Isc_aaA_metodo1_r3").innerText = "-";
    document.getElementById("Isc_aaA_metodo1_r4").innerText = (Isc_2A).toFixed(2);
    document.getElementById("Isc_aaA_metodo1_r5").innerText = "-";
    document.getElementById("Isc_aaA_metodo1_r6").innerText = (Isc_3A).toFixed(2);
    document.getElementById("Isc_aaA_metodo1_r7").innerText = "-";
    document.getElementById("Isc_aaA_metodo1_r8").innerText = (Isc_4A).toFixed(2);

    //Imprimir valores de Isc Anillo Abierto en B (aaB) : (Isc_aaB_metodo1_r(numeroDelRele)) 
    document.getElementById("Isc_aaB_metodo1_r1").innerText = (Isc_2B).toFixed(2);
    document.getElementById("Isc_aaB_metodo1_r2").innerText = "-";
    document.getElementById("Isc_aaB_metodo1_r3").innerText = (Isc_3B).toFixed(2);
    document.getElementById("Isc_aaB_metodo1_r4").innerText = "-";
    document.getElementById("Isc_aaB_metodo1_r5").innerText = (Isc_4B).toFixed(2);
    document.getElementById("Isc_aaB_metodo1_r6").innerText = "-";
    document.getElementById("Isc_aaB_metodo1_r7").innerText = "-";
    document.getElementById("Isc_aaB_metodo1_r8").innerText = "-";

    //Imprimir valores de Isc máx   :  (Isc_maxMetodo1_r(numeroDelRele))   id="Isc_maxMetodo1_r1"
    document.getElementById("Isc_maxMetodo1_r1").innerText = Isc_Rele1.toFixed(2);
    document.getElementById("Isc_maxMetodo1_r2").innerText = "-";
    document.getElementById("Isc_maxMetodo1_r3").innerText = Isc_Rele3.toFixed(2);
    document.getElementById("Isc_maxMetodo1_r4").innerText = Isc_Rele4.toFixed(2);
    document.getElementById("Isc_maxMetodo1_r5").innerText = Isc_Rele5.toFixed(2);
    document.getElementById("Isc_maxMetodo1_r6").innerText = Isc_Rele6.toFixed(2);
    document.getElementById("Isc_maxMetodo1_r7").innerText = "-";
    document.getElementById("Isc_maxMetodo1_r8").innerText = Isc_Rele8.toFixed(2);

    //Imprimir valores ajuste unidad : (Ajuste_Metodo1_r(numeroDelRele))
    document.getElementById("Ajuste_Metodo1_r1").innerText = ajusteR1.toFixed(2);
    document.getElementById("Ajuste_Metodo1_r2").innerText = ajusteR2.toFixed(2);
    document.getElementById("Ajuste_Metodo1_r3").innerText = ajusteR3.toFixed(2);
    document.getElementById("Ajuste_Metodo1_r4").innerText = ajusteR4.toFixed(2);
    document.getElementById("Ajuste_Metodo1_r5").innerText = ajusteR5.toFixed(2);
    document.getElementById("Ajuste_Metodo1_r6").innerText = ajusteR6.toFixed(2);
    document.getElementById("Ajuste_Metodo1_r7").innerText = ajusteR7.toFixed(2);
    document.getElementById("Ajuste_Metodo1_r8").innerText = ajusteR8.toFixed(2);

    //Imprimir valores Ipickup : (Ipickup_metodo1_r(numeroDelRele))
    document.getElementById("Ipickup_metodo1_r1").innerText = (Isc_Rele1 * ajusteR1).toFixed(2);
    document.getElementById("Ipickup_metodo1_r2").innerText = (Ic_A *ajusteR2).toFixed(2);
    document.getElementById("Ipickup_metodo1_r3").innerText = (Isc_Rele3 * ajusteR3).toFixed(2);
    document.getElementById("Ipickup_metodo1_r4").innerText = (Isc_Rele4 * ajusteR4).toFixed(2);
    document.getElementById("Ipickup_metodo1_r5").innerText = (Isc_Rele5 * ajusteR5).toFixed(2);
    document.getElementById("Ipickup_metodo1_r6").innerText = (Isc_Rele6 * ajusteR6).toFixed(2);
    document.getElementById("Ipickup_metodo1_r7").innerText = (Ic_B * ajusteR7).toFixed(2);
    document.getElementById("Ipickup_metodo1_r8").innerText = (Isc_Rele8 * ajusteR8).toFixed(2);

    //-----------------------------------------------------------------------------------------------------------------------------------

    //Imprimir resultados para la tabla de la subpestaña "Método 2" y con pestaña principal "Conexión"
    //Imprimir valores de Icarga: (Ic_metodo2_r(numeroDelRele)) 
    document.getElementById("Ic_metodo2_r1").innerText = (Ic_r12);
    document.getElementById("Ic_metodo2_r2").innerText = (Ic_r12);
    document.getElementById("Ic_metodo2_r3").innerText = (Ic_r34);
    document.getElementById("Ic_metodo2_r4").innerText = (Ic_r34);
    document.getElementById("Ic_metodo2_r5").innerText = (Ic_r56);
    document.getElementById("Ic_metodo2_r6").innerText = (Ic_r56);
    document.getElementById("Ic_metodo2_r7").innerText = (Ic_r78);
    document.getElementById("Ic_metodo2_r8").innerText = (Ic_r78);

    //Imprimir valores de Isc Anillo Cerrado (ac)  : (Isc_aC_metodo2_r(numeroDelRele))
    document.getElementById("Isc_aC_metodo2_r1").innerText = (Isc2_Rele1_1).toFixed(2);
    document.getElementById("Isc_aC_metodo2_r2").innerText = (Isc2_Rele2_1).toFixed(2);
    document.getElementById("Isc_aC_metodo2_r3").innerText = (Isc2_Rele3_1).toFixed(2);
    document.getElementById("Isc_aC_metodo2_r4").innerText = (Isc2_Rele4_1).toFixed(2);
    document.getElementById("Isc_aC_metodo2_r5").innerText = (Isc2_Rele5_1).toFixed(2);
    document.getElementById("Isc_aC_metodo2_r6").innerText = (Isc2_Rele6_1).toFixed(2);
    document.getElementById("Isc_aC_metodo2_r7").innerText = (Isc2_Rele7_1).toFixed(2);
    document.getElementById("Isc_aC_metodo2_r8").innerText = (Isc2_Rele8_1).toFixed(2);

    //Imprimir valores de Isc Anillo Abierto (aA) : (Isc_aA_metodo2_r(numeroDelRele))
    document.getElementById("Isc_aA_metodo2_r1").innerText = (Isc2_Rele1_2).toFixed(2);
    document.getElementById("Isc_aA_metodo2_r2").innerText = (Isc2_Rele2_2).toFixed(2);
    document.getElementById("Isc_aA_metodo2_r3").innerText = (Isc2_Rele3_2).toFixed(2);
    document.getElementById("Isc_aA_metodo2_r4").innerText = (Isc2_Rele4_2).toFixed(2);
    document.getElementById("Isc_aA_metodo2_r5").innerText = (Isc2_Rele5_2).toFixed(2);
    document.getElementById("Isc_aA_metodo2_r6").innerText = (Isc2_Rele6_2).toFixed(2);
    document.getElementById("Isc_aA_metodo2_r7").innerText = (Isc2_Rele7_2).toFixed(2);
    document.getElementById("Isc_aA_metodo2_r8").innerText = (Isc2_Rele8_2).toFixed(2);

    //Imprimir valores de Isc máx y mín (según el tipo de relé) : (Isc_criterio_metodo2_r(numeroDelRele))
    document.getElementById("Isc_criterio_metodo2_r1").innerText = Isc2_Rele1;
    document.getElementById("Isc_criterio_metodo2_r2").innerText = Isc2_Rele2;
    document.getElementById("Isc_criterio_metodo2_r3").innerText = Isc2_Rele3;
    document.getElementById("Isc_criterio_metodo2_r4").innerText = Isc2_Rele4;
    document.getElementById("Isc_criterio_metodo2_r5").innerText = Isc2_Rele5;
    document.getElementById("Isc_criterio_metodo2_r6").innerText = Isc2_Rele6;
    document.getElementById("Isc_criterio_metodo2_r7").innerText = Isc2_Rele7;
    document.getElementById("Isc_criterio_metodo2_r8").innerText = Isc2_Rele8;

    //Imprimir valores Ipickup :  (Ajuste_criterio_metodo2_r(numeroDelRele))
    document.getElementById("Ajuste_criterio_metodo2_r1").innerText = ajusteR1.toFixed(2);
    document.getElementById("Ajuste_criterio_metodo2_r2").innerText = ajusteR2.toFixed(2);
    document.getElementById("Ajuste_criterio_metodo2_r3").innerText = ajusteR3.toFixed(2);
    document.getElementById("Ajuste_criterio_metodo2_r4").innerText = ajusteR4.toFixed(2);
    document.getElementById("Ajuste_criterio_metodo2_r5").innerText = ajusteR5.toFixed(2);
    document.getElementById("Ajuste_criterio_metodo2_r6").innerText = ajusteR6.toFixed(2);
    document.getElementById("Ajuste_criterio_metodo2_r7").innerText = ajusteR7.toFixed(2);
    document.getElementById("Ajuste_criterio_metodo2_r8").innerText = ajusteR8.toFixed(2);

    //Imprimir valores Ipickup :  (Ipickup_criterio_metodo2_r(numeroDelRele))
    document.getElementById("Ipickup_criterio_metodo2_r1").innerText = (Isc2_Rele1 * ajusteR1).toFixed(2);
    document.getElementById("Ipickup_criterio_metodo2_r2").innerText = (Isc2_Rele2 * 1.5).toFixed(2);
    document.getElementById("Ipickup_criterio_metodo2_r3").innerText = (Isc2_Rele3 * ajusteR3).toFixed(2);
    document.getElementById("Ipickup_criterio_metodo2_r4").innerText = (Isc2_Rele4 * ajusteR4).toFixed(2);
    document.getElementById("Ipickup_criterio_metodo2_r5").innerText = (Isc2_Rele5 * ajusteR5).toFixed(2);
    document.getElementById("Ipickup_criterio_metodo2_r6").innerText = (Isc2_Rele6 * ajusteR6).toFixed(2);
    document.getElementById("Ipickup_criterio_metodo2_r7").innerText = (Isc2_Rele7 * 1.5).toFixed(2);
    document.getElementById("Ipickup_criterio_metodo2_r8").innerText = (Isc2_Rele8 * ajusteR8).toFixed(2);




    //----------------------------------------------------------------------------------------------------------------------

    //Imprimir resultados para la tabla de la subpestaña "Resumen" y con pestaña principal "Conexión"
    //Imprimir valores de Icarga
    document.getElementById("resumen_Icarga1").innerText = Ic_r12;
    document.getElementById("resumen_Icarga2").innerText = Ic_r12;
    document.getElementById("resumen_Icarga3").innerText = Ic_r34;
    document.getElementById("resumen_Icarga4").innerText = Ic_r34;
    document.getElementById("resumen_Icarga5").innerText = Ic_r56;
    document.getElementById("resumen_Icarga6").innerText = Ic_r56;
    document.getElementById("resumen_Icarga7").innerText = Ic_r78;
    document.getElementById("resumen_Icarga8").innerText = Ic_r78;

    //Imprimir valores de Isc máx usando el método 1
    document.getElementById("Isc_metodo1_r1").innerText = Isc_Rele1.toFixed(2);
    document.getElementById("Isc_metodo1_r2").innerText = Ic_A.toFixed(2);
    document.getElementById("Isc_metodo1_r3").innerText = Isc_Rele3.toFixed(2);
    document.getElementById("Isc_metodo1_r4").innerText = Isc_Rele4.toFixed(2);
    document.getElementById("Isc_metodo1_r5").innerText = Isc_Rele5.toFixed(2);
    document.getElementById("Isc_metodo1_r6").innerText = Isc_Rele6.toFixed(2);
    document.getElementById("Isc_metodo1_r7").innerText = Ic_B.toFixed(2);
    document.getElementById("Isc_metodo1_r8").innerText = Isc_Rele8.toFixed(2);

    //Imprimir valores de Isc máx usando el método 2
    document.getElementById("Isc_metodo2_r1").innerText = Isc2_Rele1;
    document.getElementById("Isc_metodo2_r2").innerText = Isc2_Rele2;
    document.getElementById("Isc_metodo2_r3").innerText = Isc2_Rele3;
    document.getElementById("Isc_metodo2_r4").innerText = Isc2_Rele4;
    document.getElementById("Isc_metodo2_r5").innerText = Isc2_Rele5;
    document.getElementById("Isc_metodo2_r6").innerText = Isc2_Rele6;
    document.getElementById("Isc_metodo2_r7").innerText = Isc2_Rele7;
    document.getElementById("Isc_metodo2_r8").innerText = Isc2_Rele8;

    //Imprimir valores ajuste resumen
    document.getElementById("Ajuste_resumen_r1").innerText = ajusteR1.toFixed(2);
    document.getElementById("Ajuste_resumen_r2").innerText = ajusteR2.toFixed(2);
    document.getElementById("Ajuste_resumen_r3").innerText = ajusteR3.toFixed(2);
    document.getElementById("Ajuste_resumen_r4").innerText = ajusteR4.toFixed(2);
    document.getElementById("Ajuste_resumen_r5").innerText = ajusteR5.toFixed(2);
    document.getElementById("Ajuste_resumen_r6").innerText = ajusteR6.toFixed(2);
    document.getElementById("Ajuste_resumen_r7").innerText = ajusteR7.toFixed(2);
    document.getElementById("Ajuste_resumen_r8").innerText = ajusteR8.toFixed(2);


    //Imprimir  valores Ipickup usando el método 1 
    document.getElementById("IpickupR_metodo1_r1").innerText = (Isc_Rele1 * ajusteR1).toFixed(2);
    document.getElementById("IpickupR_metodo1_r2").innerText = (Ic_A * ajusteR2).toFixed(2);
    document.getElementById("IpickupR_metodo1_r3").innerText = (Isc_Rele3 * ajusteR3).toFixed(2);
    document.getElementById("IpickupR_metodo1_r4").innerText = (Isc_Rele4 * ajusteR4).toFixed(2);
    document.getElementById("IpickupR_metodo1_r5").innerText = (Isc_Rele5 * ajusteR5).toFixed(2);
    document.getElementById("IpickupR_metodo1_r6").innerText = (Isc_Rele6 * ajusteR6).toFixed(2);
    document.getElementById("IpickupR_metodo1_r7").innerText = (Ic_B * ajusteR7).toFixed(2);
    document.getElementById("IpickupR_metodo1_r8").innerText = (Isc_Rele8 * ajusteR8).toFixed(2);

    //Imprimir valores Ipickyp usando el método 2
    document.getElementById("Ipickup_metodo2_r1").innerText = (Isc2_Rele1 * ajusteR1).toFixed(2);
    document.getElementById("Ipickup_metodo2_r2").innerText = (Isc2_Rele2 * 1.5).toFixed(2);
    document.getElementById("Ipickup_metodo2_r3").innerText = (Isc2_Rele3 * ajusteR3).toFixed(2);
    document.getElementById("Ipickup_metodo2_r4").innerText = (Isc2_Rele4 * ajusteR4).toFixed(2);
    document.getElementById("Ipickup_metodo2_r5").innerText = (Isc2_Rele5 * ajusteR5).toFixed(2);
    document.getElementById("Ipickup_metodo2_r6").innerText = (Isc2_Rele6 * ajusteR6).toFixed(2);
    document.getElementById("Ipickup_metodo2_r7").innerText = (Isc2_Rele7 * 1.5).toFixed(2);
    document.getElementById("Ipickup_metodo2_r8").innerText = (Isc2_Rele8 * ajusteR8).toFixed(2);

    //Imprimir delta Isc max
    document.getElementById("deltaIsc_r1").innerText = ((Math.abs(Isc_Rele1 - Isc2_Rele1) / Isc_Rele1) * 100).toFixed(2);
    //document.getElementById("deltaIsc_r2").innerText = ((Math.abs(Isc_Rele2 - Isc2_Rele2) / Isc_Rele2) * 100).toFixed(2);
    document.getElementById("deltaIsc_r2").innerText = "-";
    document.getElementById("deltaIsc_r3").innerText = ((Math.abs(Isc_Rele3 - Isc2_Rele3) / Isc_Rele3) * 100).toFixed(2);
    document.getElementById("deltaIsc_r4").innerText = ((Math.abs(Isc_Rele4 - Isc2_Rele4) / Isc_Rele4) * 100).toFixed(2);
    document.getElementById("deltaIsc_r5").innerText = ((Math.abs(Isc_Rele5 - Isc2_Rele5) / Isc_Rele5) * 100).toFixed(2);
    document.getElementById("deltaIsc_r6").innerText = ((Math.abs(Isc_Rele6 - Isc2_Rele6) / Isc_Rele6) * 100).toFixed(2);
    //document.getElementById("deltaIsc_r7").innerText = ((Math.abs(Isc_Rele7 - Isc2_Rele7) / Isc_Rele7) * 100).toFixed(2);
    document.getElementById("deltaIsc_r7").innerText = "-";
    document.getElementById("deltaIsc_r8").innerText = ((Math.abs(Isc_Rele8 - Isc2_Rele8) / Isc_Rele8) * 100).toFixed(2);

    //Imprimir delta Ipickup 
    document.getElementById("deltaIpickup_r1").innerText = ((Math.abs((Isc_Rele1 * ajusteR1) - (Isc2_Rele1 * ajusteR1)) / (Isc_Rele1 * ajusteR1)) * 100).toFixed(2);
    //document.getElementById("deltaIpickup_r2").innerText = ((Math.abs((Isc_Rele2 * 1.5) - (Isc2_Rele2 * 1.5)) / (Isc_Rele2 * 1.5)) * 100).toFixed(2);
    document.getElementById("deltaIpickup_r2").innerText = "-";
    document.getElementById("deltaIpickup_r3").innerText = ((Math.abs((Isc_Rele3 * ajusteR3) - (Isc2_Rele3 * ajusteR3)) / (Isc_Rele3 * ajusteR3)) * 100).toFixed(2);
    document.getElementById("deltaIpickup_r4").innerText = ((Math.abs((Isc_Rele4 * ajusteR4) - (Isc2_Rele4 * ajusteR4)) / (Isc_Rele4 * ajusteR4)) * 100).toFixed(2);
    document.getElementById("deltaIpickup_r5").innerText = ((Math.abs((Isc_Rele5 * ajusteR5) - (Isc2_Rele5 * ajusteR5)) / (Isc_Rele5 * ajusteR5)) * 100).toFixed(2);
    document.getElementById("deltaIpickup_r6").innerText = ((Math.abs((Isc_Rele6 * ajusteR6) - (Isc2_Rele6 * ajusteR6)) / (Isc_Rele6 * ajusteR6)) * 100).toFixed(2);
    // document.getElementById("deltaIpickup_r7").innerText = ((Math.abs((Isc_Rele7 * 1.5) - (Isc2_Rele7 * 1.5)) / (Isc_Rele7 * 1.5)) * 100).toFixed(2);
    document.getElementById("deltaIpickup_r7").innerText = "-";
    document.getElementById("deltaIpickup_r8").innerText = ((Math.abs((Isc_Rele8 * ajusteR8) - (Isc2_Rele8 * ajusteR8)) / (Isc_Rele8 * ajusteR8)) * 100).toFixed(2);
    //-----------------------------------------------------------------------------------------------------------------------------------



}


function habilitarTMSanillo() {
    try {
        var selectBox1 = document.getElementById("swal-Anillo-curva");
        var swalAnilloTMS1 = document.getElementById("swal-AnilloTMS1");
        var swalAnilloTMS2 = document.getElementById("swal-AnilloTMS2");
        var selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;
        console.log("selectValue: ", selectedValue1)
        if (selectedValue1 == "Normal Inversa - IEC" || selectedValue1 == "Muy Inversa - IEC" || selectedValue1 == "Extremadamente Inversa - IEC") {
            console.log("cumple");
            swalAnilloTMS1.style.display = "block";
            guardarOpcionAnilloTMS1 = "display:block";
            guardarOpcionAnilloTMS2 = "display:none";
            swalAnilloTMS2.style.display = "none";
            swal_Anillo_tms = "swal-AnilloTMS1";
        }
        if (selectedValue1 == "Normal Inversa - ANSI" || selectedValue1 == "Muy Inversa - ANSI" || selectedValue1 == "Extremadamente Inversa - ANSI") {
            console.log("cumple 0");
            swalAnilloTMS1.style.display = "none";
            guardarOpcionAnilloTMS1 = "display:none";
            guardarOpcionAnilloTMS2 = "display:block";
            swalAnilloTMS2.style.display = "block";
            swal_Anillo_tms = "swal-AnilloTMS2";
        }

    } catch (error) {

    }

}


async function guardarValoresReles(valores) {

    habilitarTMSanillo();

    const { value: formValues } = await Swal.fire({
        allowOutsideClick: false,
        title: modeloReleAnillo[valores].nombre,
        width: 800,
        background: '#fefefe',
        html: `
        <div class="table-responsive">
            <table class="table align-middle" style="font-size:13px">
            <tr>
                <th scope="row">Isc</th>
                <td>
                    <input type="number" id="swal-Anillo-Isc" value="${modeloReleAnillo[valores].Isc}" class="swal2-input" min="0">
                </td> 
                <td>[A]</td> 
                <th scope="row" colspan="1">Ic</th>
                <td>
                    <input type="number" class="swal2-input" id="swal-Anillo-Ic" value="${modeloReleAnillo[valores].Ic}" min="0">
                </td>
                <td>[A]</td>
            </tr>
        <tr>
            <th scope="row">Incremento Ic</th>
            <td>
                <input type="number" class="swal2-input" value="${modeloReleAnillo[valores].IncrementoIc}" min="0" id="swal-Anillo-IncrementoIc">
            </td>
            <td>%</td>
            <th scope="row">Tiempo <br> Operación</th>
            <td>
                <input type="number" class="swal2-input" id="swal-Anillo-tiempo" value="${modeloReleAnillo[valores].tiempo}" min="0">
            </td>
            <td>[ms]</td>
        </tr>
        <tr>
            <th scope="row">Familia de curva</th>
            <td colspan="2">      
                <select class="form-select" id="swal-Anillo-curva" onchange="habilitarTMSanillo()">  
                    <option selected hidden>${modeloReleAnillo[valores].familiaCurva}</option> 
                    <option>Normal Inversa - IEC</option>
                    <option>Muy Inversa - IEC</option>
                    <option >Extremadamente Inversa - IEC</option>
                    <option>Normal Inversa - ANSI</option>
                    <option >Muy Inversa - ANSI</option>
                    <option >Extremadamente Inversa - ANSI</option>
                </select>
            </td>
        </tr>
        <tr class="table-secondary">
            <th scope="row"></th>
            <td colspan="5"></td>
        </tr>
        <tr>
            <th scope="row">TMS(Dial)</th>
            <td>
                <select class="form-select selectSwal"  id="swal-AnilloTMS0" style="display:none"></select>
                <select class="form-select selectSwal"  id="swal-AnilloTMS1" style="${guardarOpcionAnilloTMS1}">
                    <option selected id="option-seleccionada" hidden>${modeloReleAnillo[valores].TMS}</option>
                    <option value="0.01">0.01</option>
                    <option value="0.02">0.02</option><option value="0.03">0.03</option><option value="0.04">0.04</option>
                    <option value="0.05">0.05</option><option value="0.06">0.06</option><option value="0.07">0.07</option>
                    <option value="0.08">0.08</option><option value="0.09">0.09</option><option value="0.10">0.10</option>
                    <option value="0.11">0.11</option><option value="0.12">0.12</option><option value="0.13">0.13</option>
                    <option value="0.14">0.14</option><option value="0.15">0.15</option><option value="0.16">0.16</option>
                    <option value="0.17">0.17</option><option value="0.18">0.18</option><option value="0.19">0.19</option>
                    <option value="0.20">0.20</option><option value="0.21">0.21</option><option value="0.22">0.22</option>
                    <option value="0.23">0.23</option><option value="0.24">0.24</option><option value="0.25">0.25</option>
                    <option value="0.26">0.26</option><option value="0.27">0.27</option><option value="0.28">0.28</option>
                    <option value="0.29">0.29</option><option value="0.30">0.30</option><option value="0.31">0.31</option>
                    <option value="0.32">0.32</option><option value="0.33">0.33</option><option value="0.34">0.34</option>
                    <option value="0.35">0.35</option><option value="0.36">0.36</option><option value="0.37">0.37</option>
                    <option value="0.38">0.38</option><option value="0.39">0.39</option><option value="0.40">0.40</option>
                    <option value="0.41">0.41</option><option value="0.42">0.42</option><option value="0.43">0.43</option>
                    <option value="0.44">0.44</option><option value="0.45">0.45</option><option value="0.46">0.46</option>
                    <option value="0.47">0.47</option><option value="0.48">0.48</option><option value="0.49">0.49</option>
                    <option value="0.50">0.50</option><option value="0.51">0.51</option><option value="0.52">0.52</option>
                    <option value="0.53">0.53</option><option value="0.54">0.54</option><option value="0.55">0.55</option>
                    <option value="0.56">0.56</option><option value="0.57">0.57</option><option value="0.58">0.58</option>
                    <option value="0.59">0.59</option><option value="0.60">0.60</option><option value="0.61">0.61</option>
                    <option value="0.62">0.62</option><option value="0.63">0.63</option><option value="0.64">0.64</option>
                    <option value="0.65">0.65</option><option value="0.66">0.66</option><option value="0.67">0.67</option>
                    <option value="0.68">0.68</option><option value="0.69">0.69</option><option value="0.70">0.70</option>
                    <option value="0.71">0.71</option><option value="0.72">0.72</option><option value="0.73">0.73</option>
                    <option value="0.74">0.74</option><option value="0.75">0.75</option><option value="0.76">0.76</option>
                    <option value="0.77">0.77</option><option value="0.78">0.78</option><option value="0.79">0.79</option>
                    <option value="0.80">0.80</option><option value="0.81">0.81</option><option value="0.82">0.82</option>
                    <option value="0.83">0.83</option><option value="0.84">0.84</option><option value="0.85">0.85</option>
                    <option value="0.86">0.86</option><option value="0.87">0.87</option><option value="0.88">0.88</option>
                    <option value="0.89">0.89</option><option value="0.90">0.90</option><option value="0.91">0.91</option>
                    <option value="0.92">0.92</option><option value="0.93">0.93</option><option value="0.94">0.94</option>
                    <option value="0.95">0.95</option><option value="0.96">0.96</option><option value="0.99">0.99</option>
                    <option value="1">1</option>
                </select>
        
                <select class="form-select selectSwal"  id="swal-AnilloTMS2" style="${guardarOpcionAnilloTMS2}">
                    <option selected id="option-seleccionada" hidden>${modeloReleAnillo[valores].TMS}</option>
                    <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                        <option value="5">5</option>
                        <option value="5.5">5.5</option>
                        <option value="6">6</option>
                        <option value="6.5">6.5</option>
                        <option value="7">7</option>
                        <option value="7.5">7.5</option>
                        <option value="8">8</option>
                        <option value="8.5">8.5</option>
                        <option value="9">9</option>
                        <option value="9.5">9.5</option>
                        <option value="10">10</option>
                </select>

                <th scope="row">Tiempo <br> Coordinación <br> </th>
                <td>
                    <input  id="swal-Anillo-tInstantaneo" type="number" value="${modeloReleAnillo[valores].tiempoCoordinacion}" class="swal2-input" min="0">
                </td>
                <td>[ms]</td>

        </tr>
        <tr class="table-secondary">
            <td colspan="6"></td>
        </tr>
        <tr>
            <th scope="row">Tiempo <br> Coordinación <br> </th>
            <td>
                <input  id="swal-Anillo-tInstantaneo50" type="number" value="${modeloReleAnillo[valores].tiempoInstantaneo}" class="swal2-input" min="0" max="50">
            </td>
            <td>[ms]</td>
        </tr>
        </table>
        </div>
         `
        ,
        showConfirmButton: true,
        confirmButtonText: "Guardar",
        showCloseButton: true,
        showCancelButton: false,
        customClass: {
            confirmButton: 'botonGuardar hoverButton',
        },
        preConfirm: () => {
            return [

                document.getElementById('swal-Anillo-Isc').value,
                document.getElementById('swal-Anillo-Ic').value,
                document.getElementById('swal-Anillo-IncrementoIc').value,
                document.getElementById('swal-Anillo-tiempo').value,
                document.getElementById('swal-Anillo-curva').value,
                document.getElementById(swal_Anillo_tms).value,
                document.getElementById('swal-Anillo-tInstantaneo').value,
                document.getElementById('swal-Anillo-tInstantaneo50').value

                //document.getElementById('swal-Anillo-reactancia').value,

            ]
        },


    })


    if (formValues) {
        //Swal.fire(JSON.stringify(formValues))
        console.log("resultado: ", formValues)
        guardarAnilloReleGeneral(valores, formValues)
    }

    function guardarAnilloReleGeneral(valores, datos) {


        console.log("valores :", valores);



        modeloReleAnillo[valores].Isc = parseFloat(datos[0]);
        modeloReleAnillo[valores].Ic = parseFloat(datos[1]);
        modeloReleAnillo[valores].IncrementoIc = parseFloat(datos[2]);
        modeloReleAnillo[valores].tiempo = parseFloat(datos[3]);
        modeloReleAnillo[valores].familiaCurva = datos[4];
        modeloReleAnillo[valores].TMS = parseFloat(datos[5]);
        modeloReleAnillo[valores].tiempoCoordinacion = parseFloat(datos[6]);

        if (isNaN(datos[5])) { datos[5] = "__" }

        if(parseFloat(datos[7])<=0 ) { datos[7] = "0"; }  if(parseFloat(datos[7])>=50 ) { datos[7] = "50"; } 
        // Se ajusta el mismo valor para los 8 Relés
        modeloReleAnillo[1].tiempoInstantaneo = parseFloat(datos[7]);
        modeloReleAnillo[2].tiempoInstantaneo = parseFloat(datos[7]);
        modeloReleAnillo[3].tiempoInstantaneo = parseFloat(datos[7]);
        modeloReleAnillo[4].tiempoInstantaneo = parseFloat(datos[7]);
        modeloReleAnillo[5].tiempoInstantaneo = parseFloat(datos[7]);
        modeloReleAnillo[6].tiempoInstantaneo = parseFloat(datos[7]);
        modeloReleAnillo[7].tiempoInstantaneo = parseFloat(datos[7]);
        modeloReleAnillo[8].tiempoInstantaneo = parseFloat(datos[7]);


        document.getElementById("Isc_r" + valores).innerText = datos[0];
        document.getElementById("Ic_r" + valores).innerText = datos[1];
        document.getElementById("Incremento_Ic_r" + valores).innerText = datos[2];
        document.getElementById("Tiempo_r" + valores).innerText = datos[3];
        document.getElementById("FamiliaC_r" + valores).innerText = datos[4];
        document.getElementById("TMS_r" + valores).innerText = datos[5];
        document.getElementById("Tiempo_coordinacion_r" + valores).innerText = datos[6];

        //Todos los relés van a tener el mismo tiempo de coordinación en la prot. 50
        document.getElementById("Tiempo_prot50_1").innerText = datos[7];
        document.getElementById("Tiempo_prot50_2").innerText = datos[7];
        document.getElementById("Tiempo_prot50_3").innerText = datos[7];
        document.getElementById("Tiempo_prot50_4").innerText = datos[7];
        document.getElementById("Tiempo_prot50_5").innerText = datos[7];
        document.getElementById("Tiempo_prot50_6").innerText = datos[7];
        document.getElementById("Tiempo_prot50_7").innerText = datos[7];
        document.getElementById("Tiempo_prot50_8").innerText = datos[7];



        Swal.fire({
            title: "Guardado configuración <p style='color: gray'> " + modeloReleAnillo[valores].nombre + "</p>",
            toast: true,
            position: 'top-right',
            icon: 'success',
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })

    }

}

function graficarCurvaTopologiaAnillo() {

    pillsResultadosGrafica2tab.style.display = "none";

    console.log("entro gráfica Lados Izquierdo - Derecho");

    try {
        calculosGraficaAnillo();
        graficarCurvaLadoIzquierdo();

    } catch (error) {
        console.log("error graficarCurvaLadoIzquierdo()");
    }
    try {
        graficarCurvaLadoDerecho();
    } catch (error) {
        console.log("error graficarCurvaLadoDerecho()");
    }


}

function calculosGraficaAnillo() {

    pillsResultadosCalculos2_2tab.style.display = "none";

    Isc_Rele1 = modeloReleAnillo[1].Isc;
    Isc_Rele2 = modeloReleAnillo[2].Isc;
    Isc_Rele3 = modeloReleAnillo[3].Isc;
    Isc_Rele4 = modeloReleAnillo[4].Isc;
    Isc_Rele5 = modeloReleAnillo[5].Isc;
    Isc_Rele6 = modeloReleAnillo[6].Isc;
    Isc_Rele7 = modeloReleAnillo[7].Isc;
    Isc_Rele8 = modeloReleAnillo[8].Isc;


    Ic_Rele1 = modeloReleAnillo[1].Ic;
    Ic_Rele2 = modeloReleAnillo[2].Ic;
    Ic_Rele3 = modeloReleAnillo[3].Ic;
    Ic_Rele4 = modeloReleAnillo[4].Ic;
    Ic_Rele5 = modeloReleAnillo[5].Ic;
    Ic_Rele6 = modeloReleAnillo[6].Ic;
    Ic_Rele7 = modeloReleAnillo[7].Ic;
    Ic_Rele8 = modeloReleAnillo[8].Ic;


    Incremento_Ic_r1 = modeloReleAnillo[1].IncrementoIc;
    Incremento_Ic_r2 = modeloReleAnillo[2].IncrementoIc;
    Incremento_Ic_r3 = modeloReleAnillo[3].IncrementoIc;
    Incremento_Ic_r4 = modeloReleAnillo[4].IncrementoIc;
    Incremento_Ic_r5 = modeloReleAnillo[5].IncrementoIc;
    Incremento_Ic_r6 = modeloReleAnillo[6].IncrementoIc;
    Incremento_Ic_r7 = modeloReleAnillo[7].IncrementoIc;
    Incremento_Ic_r8 = modeloReleAnillo[8].IncrementoIc;

    familiaCurvaR1 = modeloReleAnillo[1].familiaCurva;
    familiaCurvaR2 = modeloReleAnillo[2].familiaCurva;
    familiaCurvaR3 = modeloReleAnillo[3].familiaCurva;
    familiaCurvaR4 = modeloReleAnillo[4].familiaCurva;
    familiaCurvaR5 = modeloReleAnillo[5].familiaCurva;
    familiaCurvaR6 = modeloReleAnillo[6].familiaCurva;
    familiaCurvaR7 = modeloReleAnillo[7].familiaCurva;
    familiaCurvaR8 = modeloReleAnillo[8].familiaCurva;

    TMS_r1 = modeloReleAnillo[1].TMS;
    TMS_r2 = modeloReleAnillo[2].TMS;
    TMS_r3 = modeloReleAnillo[3].TMS;
    TMS_r4 = modeloReleAnillo[4].TMS;
    TMS_r5 = modeloReleAnillo[5].TMS;
    TMS_r6 = modeloReleAnillo[6].TMS;
    TMS_r7 = modeloReleAnillo[7].TMS;
    TMS_r8 = modeloReleAnillo[8].TMS;

    tiempo_r1 = modeloReleAnillo[1].tiempo;
    tiempo_r2 = modeloReleAnillo[2].tiempo;
    tiempo_r3 = modeloReleAnillo[3].tiempo;
    tiempo_r4 = modeloReleAnillo[4].tiempo;
    tiempo_r5 = modeloReleAnillo[5].tiempo;
    tiempo_r6 = modeloReleAnillo[6].tiempo;
    tiempo_r7 = modeloReleAnillo[7].tiempo;
    tiempo_r8 = modeloReleAnillo[8].tiempo;

    tiempo_coordinacion_r1 = modeloReleAnillo[1].tiempoCoordinacion;
    tiempo_coordinacion_r2 = modeloReleAnillo[2].tiempoCoordinacion;
    tiempo_coordinacion_r3 = modeloReleAnillo[3].tiempoCoordinacion;
    tiempo_coordinacion_r4 = modeloReleAnillo[4].tiempoCoordinacion;
    tiempo_coordinacion_r5 = modeloReleAnillo[5].tiempoCoordinacion;
    tiempo_coordinacion_r6 = modeloReleAnillo[6].tiempoCoordinacion;
    tiempo_coordinacion_r7 = modeloReleAnillo[7].tiempoCoordinacion;
    tiempo_coordinacion_r8 = modeloReleAnillo[8].tiempoCoordinacion;


    //Relé 1
    try {
        Ic_1_con_Incremento = Ic_Rele1 + Ic_Rele1 * (Incremento_Ic_r1 / 100);
        //DIAL
        TMSparteIEC_1 = parametrosCurvaAnillo[familiaCurvaR1].IEC * ((tiempo_r1 / 1000) * (((Math.pow(Isc_Rele1 / Ic_1_con_Incremento, parametrosCurvaAnillo[familiaCurvaR1].alfa)) - 1) / (parametrosCurvaAnillo[familiaCurvaR1].beta)));

        TMSparteANSI_1 = parametrosCurvaAnillo[familiaCurvaR1].ANSI * ((tiempo_r1 / 1000) * 1 / ((parametrosCurvaAnillo[familiaCurvaR1].A) + (parametrosCurvaAnillo[familiaCurvaR1].B / ((Isc_Rele1 / Ic_1_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR1].C)) + (parametrosCurvaAnillo[familiaCurvaR1].D / (Math.pow((Isc_Rele1 / Ic_1_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR1].C, 2))) + (parametrosCurvaAnillo[familiaCurvaR1].E / (Math.pow((Isc_Rele1 / Ic_1_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR1].C, 3)))));

        TMS_calculado_r1 = (TMSparteIEC_1 + TMSparteANSI_1).toFixed(4);

        //Hallar el tiempo 

    } catch (error) {
        console.log("error para Relé 1 - calculosGraficaAnillo()")

    }
    //Relé 2
    try {
        Ic_2_con_Incremento = Ic_Rele2 + Ic_Rele2 * (Incremento_Ic_r2 / 100);
        //DIAL
        TMSparteIEC_2 = parametrosCurvaAnillo[familiaCurvaR2].IEC * ((tiempo_r2 / 1000) * (((Math.pow(Isc_Rele2 / Ic_2_con_Incremento, parametrosCurvaAnillo[familiaCurvaR2].alfa)) - 1) / (parametrosCurvaAnillo[familiaCurvaR2].beta)));

        TMSparteANSI_2 = parametrosCurvaAnillo[familiaCurvaR2].ANSI * ((tiempo_r2 / 1000) * 1 / ((parametrosCurvaAnillo[familiaCurvaR2].A) + (parametrosCurvaAnillo[familiaCurvaR2].B / ((Isc_Rele2 / Ic_2_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR2].C)) + (parametrosCurvaAnillo[familiaCurvaR2].D / (Math.pow((Isc_Rele2 / Ic_2_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR2].C, 2))) + (parametrosCurvaAnillo[familiaCurvaR2].E / (Math.pow((Isc_Rele2 / Ic_2_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR2].C, 3)))));

        TMS_calculado_r2 = (TMSparteIEC_2 + TMSparteANSI_2).toFixed(4);

    } catch (error) {
        console.log("error para Relé 2 - calculosGraficaAnillo()")
    }
    //Relé 3
    try {
        Ic_3_con_Incremento = Ic_Rele3 + Ic_Rele3 * (Incremento_Ic_r3 / 100);
        //DIAL
        TMSparteIEC_3 = parametrosCurvaAnillo[familiaCurvaR3].IEC * ((tiempo_r3 / 1000) * (((Math.pow(Isc_Rele3 / Ic_3_con_Incremento, parametrosCurvaAnillo[familiaCurvaR3].alfa)) - 1) / (parametrosCurvaAnillo[familiaCurvaR3].beta)));

        TMSparteANSI_3 = parametrosCurvaAnillo[familiaCurvaR3].ANSI * ((tiempo_r3 / 1000) * 1 / ((parametrosCurvaAnillo[familiaCurvaR3].A) + (parametrosCurvaAnillo[familiaCurvaR3].B / ((Isc_Rele3 / Ic_3_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR3].C)) + (parametrosCurvaAnillo[familiaCurvaR3].D / (Math.pow((Isc_Rele3 / Ic_3_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR3].C, 2))) + (parametrosCurvaAnillo[familiaCurvaR3].E / (Math.pow((Isc_Rele3 / Ic_3_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR3].C, 3)))));

        TMS_calculado_r3 = (TMSparteIEC_3 + TMSparteANSI_3).toFixed(4);

    } catch (error) {
        console.log("error para Relé 3 - calculosGraficaAnillo()")
    }
    //Relé 4
    try {
        Ic_4_con_Incremento = Ic_Rele4 + Ic_Rele4 * (Incremento_Ic_r4 / 100);
        //DIAL
        TMSparteIEC_4 = parametrosCurvaAnillo[familiaCurvaR4].IEC * ((tiempo_r4 / 1000) * (((Math.pow(Isc_Rele4 / Ic_4_con_Incremento, parametrosCurvaAnillo[familiaCurvaR4].alfa)) - 1) / (parametrosCurvaAnillo[familiaCurvaR4].beta)));

        TMSparteANSI_4 = parametrosCurvaAnillo[familiaCurvaR4].ANSI * ((tiempo_r4 / 1000) * 1 / ((parametrosCurvaAnillo[familiaCurvaR4].A) + (parametrosCurvaAnillo[familiaCurvaR4].B / ((Isc_Rele4 / Ic_4_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR4].C)) + (parametrosCurvaAnillo[familiaCurvaR4].D / (Math.pow((Isc_Rele4 / Ic_4_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR4].C, 2))) + (parametrosCurvaAnillo[familiaCurvaR4].E / (Math.pow((Isc_Rele4 / Ic_4_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR4].C, 3)))));

        TMS_calculado_r4 = (TMSparteIEC_4 + TMSparteANSI_4).toFixed(4);

    } catch (error) {
        console.log("error para Relé 4 - calculosGraficaAnillo()")
    }
    //Relé 5
    try {
        Ic_5_con_Incremento = Ic_Rele5 + Ic_Rele5 * (Incremento_Ic_r5 / 100);
        //DIAL
        TMSparteIEC_5 = parametrosCurvaAnillo[familiaCurvaR5].IEC * ((tiempo_r5 / 1000) * (((Math.pow(Isc_Rele5 / Ic_5_con_Incremento, parametrosCurvaAnillo[familiaCurvaR5].alfa)) - 1) / (parametrosCurvaAnillo[familiaCurvaR5].beta)));

        TMSparteANSI_5 = parametrosCurvaAnillo[familiaCurvaR5].ANSI * ((tiempo_r5 / 1000) * 1 / ((parametrosCurvaAnillo[familiaCurvaR5].A) + (parametrosCurvaAnillo[familiaCurvaR5].B / ((Isc_Rele5 / Ic_5_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR5].C)) + (parametrosCurvaAnillo[familiaCurvaR5].D / (Math.pow((Isc_Rele5 / Ic_5_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR5].C, 2))) + (parametrosCurvaAnillo[familiaCurvaR5].E / (Math.pow((Isc_Rele5 / Ic_5_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR5].C, 3)))));

        TMS_calculado_r5 = (TMSparteIEC_5 + TMSparteANSI_5).toFixed(4);

    } catch (error) {
        console.log("error para Relé 5 - calculosGraficaAnillo()")
    }
    //Relé 6
    try {
        Ic_6_con_Incremento = Ic_Rele6 + Ic_Rele6 * (Incremento_Ic_r6 / 100);
        //DIAL
        TMSparteIEC_6 = parametrosCurvaAnillo[familiaCurvaR6].IEC * ((tiempo_r6 / 1000) * (((Math.pow(Isc_Rele6 / Ic_6_con_Incremento, parametrosCurvaAnillo[familiaCurvaR6].alfa)) - 1) / (parametrosCurvaAnillo[familiaCurvaR6].beta)));

        TMSparteANSI_6 = parametrosCurvaAnillo[familiaCurvaR6].ANSI * ((tiempo_r6 / 1000) * 1 / ((parametrosCurvaAnillo[familiaCurvaR6].A) + (parametrosCurvaAnillo[familiaCurvaR6].B / ((Isc_Rele6 / Ic_6_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR6].C)) + (parametrosCurvaAnillo[familiaCurvaR6].D / (Math.pow((Isc_Rele6 / Ic_6_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR6].C, 2))) + (parametrosCurvaAnillo[familiaCurvaR6].E / (Math.pow((Isc_Rele6 / Ic_6_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR6].C, 3)))));

        TMS_calculado_r6 = (TMSparteIEC_6 + TMSparteANSI_6).toFixed(4);

    } catch (error) {
        console.log("error para Relé 6 - calculosGraficaAnillo()")
    }
    //Relé 7
    try {
        Ic_7_con_Incremento = Ic_Rele7 + Ic_Rele7 * (Incremento_Ic_r7 / 100);
        //DIAL
        TMSparteIEC_7 = parametrosCurvaAnillo[familiaCurvaR7].IEC * ((tiempo_r7 / 1000) * (((Math.pow(Isc_Rele7 / Ic_7_con_Incremento, parametrosCurvaAnillo[familiaCurvaR7].alfa)) - 1) / (parametrosCurvaAnillo[familiaCurvaR7].beta)));

        TMSparteANSI_7 = parametrosCurvaAnillo[familiaCurvaR7].ANSI * ((tiempo_r7 / 1000) * 1 / ((parametrosCurvaAnillo[familiaCurvaR7].A) + (parametrosCurvaAnillo[familiaCurvaR7].B / ((Isc_Rele7 / Ic_7_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR7].C)) + (parametrosCurvaAnillo[familiaCurvaR7].D / (Math.pow((Isc_Rele7 / Ic_7_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR7].C, 2))) + (parametrosCurvaAnillo[familiaCurvaR7].E / (Math.pow((Isc_Rele7 / Ic_7_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR7].C, 3)))));

        TMS_calculado_r7 = (TMSparteIEC_7 + TMSparteANSI_7).toFixed(4);

    } catch (error) {
        console.log("error para Relé 7 - calculosGraficaAnillo()")
    }
    //Relé 8
    try {
        Ic_8_con_Incremento = Ic_Rele8 + Ic_Rele8 * (Incremento_Ic_r8 / 100);
        //DIAL
        TMSparteIEC_8 = parametrosCurvaAnillo[familiaCurvaR8].IEC * ((tiempo_r8 / 1000) * (((Math.pow(Isc_Rele8 / Ic_8_con_Incremento, parametrosCurvaAnillo[familiaCurvaR8].alfa)) - 1) / (parametrosCurvaAnillo[familiaCurvaR8].beta)));

        TMSparteANSI_8 = parametrosCurvaAnillo[familiaCurvaR8].ANSI * ((tiempo_r8 / 1000) * 1 / ((parametrosCurvaAnillo[familiaCurvaR8].A) + (parametrosCurvaAnillo[familiaCurvaR8].B / ((Isc_Rele8 / Ic_8_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR8].C)) + (parametrosCurvaAnillo[familiaCurvaR8].D / (Math.pow((Isc_Rele8 / Ic_8_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR8].C, 2))) + (parametrosCurvaAnillo[familiaCurvaR8].E / (Math.pow((Isc_Rele8 / Ic_8_con_Incremento) - parametrosCurvaAnillo[familiaCurvaR8].C, 3)))));

        TMS_calculado_r8 = (TMSparteIEC_8 + TMSparteANSI_8).toFixed(4);

    } catch (error) {
        console.log("error para Relé 8 - calculosGraficaAnillo()")
    }

    pillsResultadosCalculos2_2tab.style.display = "block";

}


function graficarCurvaLadoIzquierdo() {

    functionPlot({
        target: "#Grafica-Lizquierdo",
        width: 460,
        height: 430,
        xAxis: { type: 'log', domain: [10, 100000], label: 'Corriente [A] ' },
        yAxis: { type: 'log', domain: [0.01, 10], label: 'Tiempo [Segundos]' },
        grid: true,
        data: [
            // Graficar curva tiempo relé 2
            {
                range: [10, Ic_Rele2*ajusteR2],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                    return ((parametrosCurvaAnillo[familiaCurvaR2].IEC * TMS_r2 * ((parametrosCurvaAnillo[familiaCurvaR2].beta) / ((Math.pow(x / Ic_2_con_Incremento, parametrosCurvaAnillo[familiaCurvaR2].alfa)) - 1))) + (parametrosCurvaAnillo[familiaCurvaR2].ANSI * TMS_r2 * ((parametrosCurvaAnillo[familiaCurvaR2].A) + (parametrosCurvaAnillo[familiaCurvaR2].B / ((x / Ic_2_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR2].C)) + (parametrosCurvaAnillo[familiaCurvaR2].D / (Math.pow((x / Ic_2_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR2].C), 2))) + (parametrosCurvaAnillo[familiaCurvaR2].E / (Math.pow((x / Ic_2_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR2].C), 3)))))))

                },
                color: 'rgba(255, 209, 102, 1)',
            },
            // Graficar curva tiempo relé 4
            {
                range: [10, Isc_Rele4*ajusteR4],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                    return ((parametrosCurvaAnillo[familiaCurvaR4].IEC * TMS_r4 * ((parametrosCurvaAnillo[familiaCurvaR4].beta) / ((Math.pow(x / Ic_4_con_Incremento, parametrosCurvaAnillo[familiaCurvaR4].alfa)) - 1))) + (parametrosCurvaAnillo[familiaCurvaR4].ANSI * TMS_r4 * ((parametrosCurvaAnillo[familiaCurvaR4].A) + (parametrosCurvaAnillo[familiaCurvaR4].B / ((x / Ic_4_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR4].C)) + (parametrosCurvaAnillo[familiaCurvaR4].D / (Math.pow((x / Ic_4_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR4].C), 2))) + (parametrosCurvaAnillo[familiaCurvaR4].E / (Math.pow((x / Ic_4_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR4].C), 3)))))))

                }
                ,
                color: 'rgba(17, 138, 178, 1)',
            },
            // Graficar curva tiempo relé 6
            {
                range: [10, Isc_Rele6*ajusteR6],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                    return ((parametrosCurvaAnillo[familiaCurvaR6].IEC * TMS_r6 * ((parametrosCurvaAnillo[familiaCurvaR6].beta) / ((Math.pow(x / Ic_6_con_Incremento, parametrosCurvaAnillo[familiaCurvaR6].alfa)) - 1))) + (parametrosCurvaAnillo[familiaCurvaR6].ANSI * TMS_r6 * ((parametrosCurvaAnillo[familiaCurvaR6].A) + (parametrosCurvaAnillo[familiaCurvaR6].B / ((x / Ic_6_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR6].C)) + (parametrosCurvaAnillo[familiaCurvaR6].D / (Math.pow((x / Ic_6_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR6].C), 2))) + (parametrosCurvaAnillo[familiaCurvaR6].E / (Math.pow((x / Ic_6_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR6].C), 3)))))))

                },
                color: 'rgba(155, 93, 229, 1)',
            },
            // Graficar curva tiempo relé 8
            {
                range: [10, Isc_Rele8*ajusteR8],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                    return ((parametrosCurvaAnillo[familiaCurvaR8].IEC * TMS_r8 * ((parametrosCurvaAnillo[familiaCurvaR8].beta) / ((Math.pow(x / Ic_8_con_Incremento, parametrosCurvaAnillo[familiaCurvaR8].alfa)) - 1))) + (parametrosCurvaAnillo[familiaCurvaR8].ANSI * TMS_r8 * ((parametrosCurvaAnillo[familiaCurvaR8].A) + (parametrosCurvaAnillo[familiaCurvaR8].B / ((x / Ic_8_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR8].C)) + (parametrosCurvaAnillo[familiaCurvaR8].D / (Math.pow((x / Ic_8_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR8].C), 2))) + (parametrosCurvaAnillo[familiaCurvaR8].E / (Math.pow((x / Ic_8_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR8].C), 3)))))))
                },
                color: 'rgba(37, 8, 228, 1)',
            },
            //Linea corte Graficar curva tiempo relé 2
            {
                points: [
                    [Ic_Rele2*ajusteR2, 100000],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Ic_Rele2*ajusteR2, modeloReleAnillo[2].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(255, 209, 102, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
             //Linea corte Graficar curva tiempo relé 4
             {
                points: [
                    [Isc_Rele4*ajusteR4, 100000],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Isc_Rele4*ajusteR4, modeloReleAnillo[4].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(17, 138, 178, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
             //Linea corte Graficar curva tiempo relé 6
             {
                points: [
                    [Isc_Rele6*ajusteR6, 100000],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Isc_Rele6*ajusteR6, modeloReleAnillo[6].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(155, 93, 229, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
             //Linea corte Graficar curva tiempo relé 8
             {
                points: [
                    [Isc_Rele8*ajusteR8, 100000],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Isc_Rele8*ajusteR8, modeloReleAnillo[8].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(37, 8, 228, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            //Linea recorte de los relés de actuación Protección 50
            {
                points: [
                    [10, modeloReleAnillo[1].tiempoInstantaneo/1000],
                    [100000, modeloReleAnillo[1].tiempoInstantaneo/1000]
                    

                ],
                fnType: 'points',
                color: 'rgba(0, 0, 0, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },

        ]
    })


}

function graficarCurvaLadoDerecho() {

//Si el usuario no administro tiempo actuación del relé 50, detectar asignar el valor máximo, como los ocho campos tienen el mismo valor y se actualizan entre si, solo se necesita hacer la comprobación con una variable
    if(modeloReleAnillo[0].tiempoInstantaneo == null || modeloReleAnillo[0].tiempoInstantaneo == undefined  || modeloReleAnillo[0].tiempoInstantaneo == "" || isNaN(modeloReleAnillo[0].tiempoInstantaneo)) {
        modeloReleAnillo[1].tiempoInstantaneo = 50;
        modeloReleAnillo[1].tiempoInstantaneo = 50;
        modeloReleAnillo[1].tiempoInstantaneo = 50;
        modeloReleAnillo[1].tiempoInstantaneo = 50;
        modeloReleAnillo[1].tiempoInstantaneo = 50;
        modeloReleAnillo[1].tiempoInstantaneo = 50;
        modeloReleAnillo[1].tiempoInstantaneo = 50;
        modeloReleAnillo[1].tiempoInstantaneo = 50;

        tabla_tiempoInstantaneo50_1.innerText = 50;
        tabla_tiempoInstantaneo50_2.innerText = 50;
        tabla_tiempoInstantaneo50_3.innerText = 50;
        tabla_tiempoInstantaneo50_4.innerText = 50;
        tabla_tiempoInstantaneo50_5.innerText = 50;
        tabla_tiempoInstantaneo50_6.innerText = 50;
        tabla_tiempoInstantaneo50_7.innerText = 50;
        tabla_tiempoInstantaneo50_8.innerText = 50;
4 

    }



    functionPlot({
        target: "#Grafica-Lderecho",
        width: 460,
        height: 430,
        xAxis: { type: 'log', domain: [10, 100000], label: 'Corriente [A] ' },
        yAxis: { type: 'log', domain: [0.01, 10], label: 'Tiempo [Segundos]' },
        grid: true,
        data: [
            //Graficar curva de tiempo relé 1 
            {
                range: [10, Isc_Rele1*ajusteR1],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                    return ((parametrosCurvaAnillo[familiaCurvaR1].IEC * TMS_r1 * ((parametrosCurvaAnillo[familiaCurvaR1].beta) / ((Math.pow(x / Ic_1_con_Incremento, parametrosCurvaAnillo[familiaCurvaR1].alfa)) - 1))) + (parametrosCurvaAnillo[familiaCurvaR1].ANSI * TMS_r1 * ((parametrosCurvaAnillo[familiaCurvaR1].A) + (parametrosCurvaAnillo[familiaCurvaR1].B / ((x / Ic_1_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR1].C)) + (parametrosCurvaAnillo[familiaCurvaR1].D / (Math.pow((x / Ic_1_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR1].C), 2))) + (parametrosCurvaAnillo[familiaCurvaR1].E / (Math.pow((x / Ic_1_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR1].C), 3)))))))
                },
                color: 'rgba(239, 71, 111, 1)',
            },
            // Graficar curva de tiempo relé 3
            {
                range: [10, Isc_Rele3*ajusteR3],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                    return ((parametrosCurvaAnillo[familiaCurvaR3].IEC * TMS_r3 * ((parametrosCurvaAnillo[familiaCurvaR3].beta) / ((Math.pow(x / Ic_3_con_Incremento, parametrosCurvaAnillo[familiaCurvaR3].alfa)) - 1))) + (parametrosCurvaAnillo[familiaCurvaR3].ANSI * TMS_r3 * ((parametrosCurvaAnillo[familiaCurvaR3].A) + (parametrosCurvaAnillo[familiaCurvaR3].B / ((x / Ic_3_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR3].C)) + (parametrosCurvaAnillo[familiaCurvaR3].D / (Math.pow((x / Ic_3_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR3].C), 2))) + (parametrosCurvaAnillo[familiaCurvaR3].E / (Math.pow((x / Ic_3_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR3].C), 3)))))))
                },
                color: 'rgba(6, 214, 160, 1)',
            },
            // Graficar curva de tiempo relé 5
            {
                range: [10, Isc_Rele5*ajusteR5],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                    return ((parametrosCurvaAnillo[familiaCurvaR5].IEC * TMS_r5 * ((parametrosCurvaAnillo[familiaCurvaR5].beta) / ((Math.pow(x / Ic_5_con_Incremento, parametrosCurvaAnillo[familiaCurvaR5].alfa)) - 1))) + (parametrosCurvaAnillo[familiaCurvaR5].ANSI * TMS_r5 * ((parametrosCurvaAnillo[familiaCurvaR5].A) + (parametrosCurvaAnillo[familiaCurvaR5].B / ((x / Ic_5_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR5].C)) + (parametrosCurvaAnillo[familiaCurvaR5].D / (Math.pow((x / Ic_5_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR5].C), 2))) + (parametrosCurvaAnillo[familiaCurvaR5].E / (Math.pow((x / Ic_5_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR5].C), 3)))))))
                },
                color: 'rgba(7, 59, 76, 1)',
            },
            // Graficar curva de tiempo relé 7
            {
                range: [10, Ic_Rele7*ajusteR7],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                    return ((parametrosCurvaAnillo[familiaCurvaR7].IEC * TMS_r7 * ((parametrosCurvaAnillo[familiaCurvaR7].beta) / ((Math.pow(x / Ic_7_con_Incremento, parametrosCurvaAnillo[familiaCurvaR7].alfa)) - 1))) + (parametrosCurvaAnillo[familiaCurvaR7].ANSI * TMS_r7 * ((parametrosCurvaAnillo[familiaCurvaR7].A) + (parametrosCurvaAnillo[familiaCurvaR7].B / ((x / Ic_7_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR7].C)) + (parametrosCurvaAnillo[familiaCurvaR7].D / (Math.pow((x / Ic_7_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR7].C), 2))) + (parametrosCurvaAnillo[familiaCurvaR7].E / (Math.pow((x / Ic_7_con_Incremento) - (parametrosCurvaAnillo[familiaCurvaR7].C), 3)))))))
                },
                color: 'rgba(95, 168, 211, 1)',
            },
            //Linea corte Graficar curva tiempo relé 1
            {
                points: [
                    [Isc_Rele1*ajusteR1, 100000],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Isc_Rele1*ajusteR1, modeloReleAnillo[1].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(239, 71, 111, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            //Linea corte Graficar curva tiempo relé 3
            {
                points: [
                    [Isc_Rele3*ajusteR3, 100000],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Isc_Rele3*ajusteR3, modeloReleAnillo[3].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(6, 214, 160, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            //Linea corte Graficar curva tiempo relé 5
            {
                points: [
                    [Isc_Rele5*ajusteR5, 100000],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Isc_Rele5*ajusteR5, modeloReleAnillo[5].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(7, 59, 76, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            //Linea corte Graficar curva tiempo relé 7
            {
                points: [
                    [Ic_Rele7*ajusteR7, 100000],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Ic_Rele7*ajusteR7, modeloReleAnillo[7].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(95, 168, 211, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            //Linea recorte de los relés de actuación Protección 50
            {
                points: [
                    [10, modeloReleAnillo[1].tiempoInstantaneo/1000],
                    [100000, modeloReleAnillo[1].tiempoInstantaneo/1000]
                    

                ],
                fnType: 'points',
                color: 'rgba(255, 213, 0, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },

        ]
    })

    pillsResultadosGrafica2tab.style.display = "block";

}


//Función para evitar los NaN
function quitarNaNValoresAnillo() {

    if (isNaN(document.getElementById("Ic_metodo1_r1").innerText)) { document.getElementById("Ic_metodo1_r1").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo1_r2").innerText)) { document.getElementById("Ic_metodo1_r2").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo1_r3").innerText)) { document.getElementById("Ic_metodo1_r3").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo1_r4").innerText)) { document.getElementById("Ic_metodo1_r4").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo1_r5").innerText)) { document.getElementById("Ic_metodo1_r5").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo1_r6").innerText)) { document.getElementById("Ic_metodo1_r6").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo1_r7").innerText)) { document.getElementById("Ic_metodo1_r7").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo1_r8").innerText)) { document.getElementById("Ic_metodo1_r8").innerText = "" }

    if (isNaN(document.getElementById("Isc_aC_metodo1_r1").innerText)) { document.getElementById("Isc_aC_metodo1_r1").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo1_r2").innerText)) { document.getElementById("Isc_aC_metodo1_r2").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aC_metodo1_r3").innerText)) { document.getElementById("Isc_aC_metodo1_r3").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo1_r4").innerText)) { document.getElementById("Isc_aC_metodo1_r4").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo1_r5").innerText)) { document.getElementById("Isc_aC_metodo1_r5").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo1_r6").innerText)) { document.getElementById("Isc_aC_metodo1_r6").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo1_r7").innerText)) { document.getElementById("Isc_aC_metodo1_r7").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aC_metodo1_r8").innerText)) { document.getElementById("Isc_aC_metodo1_r8").innerText = "" }

    if (isNaN(document.getElementById("Isc_aaA_metodo1_r1").innerText)) { document.getElementById("Isc_aaA_metodo1_r1").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaA_metodo1_r2").innerText)) { document.getElementById("Isc_aaA_metodo1_r2").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaA_metodo1_r3").innerText)) { document.getElementById("Isc_aaA_metodo1_r3").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaA_metodo1_r4").innerText)) { document.getElementById("Isc_aaA_metodo1_r4").innerText = "" }
    if (isNaN(document.getElementById("Isc_aaA_metodo1_r5").innerText)) { document.getElementById("Isc_aaA_metodo1_r5").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaA_metodo1_r6").innerText)) { document.getElementById("Isc_aaA_metodo1_r6").innerText = "" }
    if (isNaN(document.getElementById("Isc_aaA_metodo1_r7").innerText)) { document.getElementById("Isc_aaA_metodo1_r7").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaA_metodo1_r8").innerText)) { document.getElementById("Isc_aaA_metodo1_r8").innerText = "" }

    if (isNaN(document.getElementById("Isc_aaB_metodo1_r1").innerText)) { document.getElementById("Isc_aaB_metodo1_r1").innerText = "" }
    if (isNaN(document.getElementById("Isc_aaB_metodo1_r2").innerText)) { document.getElementById("Isc_aaB_metodo1_r2").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaB_metodo1_r3").innerText)) { document.getElementById("Isc_aaB_metodo1_r3").innerText = "" }
    if (isNaN(document.getElementById("Isc_aaB_metodo1_r4").innerText)) { document.getElementById("Isc_aaB_metodo1_r4").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaB_metodo1_r5").innerText)) { document.getElementById("Isc_aaB_metodo1_r5").innerText = "" }
    if (isNaN(document.getElementById("Isc_aaB_metodo1_r6").innerText)) { document.getElementById("Isc_aaB_metodo1_r6").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaB_metodo1_r7").innerText)) { document.getElementById("Isc_aaB_metodo1_r7").innerText = "-" }
    if (isNaN(document.getElementById("Isc_aaB_metodo1_r8").innerText)) { document.getElementById("Isc_aaB_metodo1_r8").innerText = "-" }

    if (isNaN(document.getElementById("Isc_maxMetodo1_r1").innerText)) { document.getElementById("Isc_maxMetodo1_r1").innerText = "" }
    if (isNaN(document.getElementById("Isc_maxMetodo1_r2").innerText)) { document.getElementById("Isc_maxMetodo1_r2").innerText = "-" }
    if (isNaN(document.getElementById("Isc_maxMetodo1_r3").innerText)) { document.getElementById("Isc_maxMetodo1_r3").innerText = "" }
    if (isNaN(document.getElementById("Isc_maxMetodo1_r4").innerText)) { document.getElementById("Isc_maxMetodo1_r4").innerText = "" }
    if (isNaN(document.getElementById("Isc_maxMetodo1_r5").innerText)) { document.getElementById("Isc_maxMetodo1_r5").innerText = "" }
    if (isNaN(document.getElementById("Isc_maxMetodo1_r6").innerText)) { document.getElementById("Isc_maxMetodo1_r6").innerText = "" }
    if (isNaN(document.getElementById("Isc_maxMetodo1_r7").innerText)) { document.getElementById("Isc_maxMetodo1_r7").innerText = "-" }
    if (isNaN(document.getElementById("Isc_maxMetodo1_r8").innerText)) { document.getElementById("Isc_maxMetodo1_r8").innerText = "" }

    if (isNaN(document.getElementById("Ipickup_metodo1_r1").innerText)) { document.getElementById("Ipickup_metodo1_r1").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo1_r2").innerText)) { document.getElementById("Ipickup_metodo1_r2").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo1_r3").innerText)) { document.getElementById("Ipickup_metodo1_r3").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo1_r4").innerText)) { document.getElementById("Ipickup_metodo1_r4").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo1_r5").innerText)) { document.getElementById("Ipickup_metodo1_r5").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo1_r6").innerText)) { document.getElementById("Ipickup_metodo1_r6").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo1_r7").innerText)) { document.getElementById("Ipickup_metodo1_r7").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo1_r8").innerText)) { document.getElementById("Ipickup_metodo1_r8").innerText = "" }

    if (isNaN(document.getElementById("Ic_metodo2_r1").innerText)) { document.getElementById("Ic_metodo2_r1").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo2_r2").innerText)) { document.getElementById("Ic_metodo2_r2").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo2_r3").innerText)) { document.getElementById("Ic_metodo2_r3").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo2_r4").innerText)) { document.getElementById("Ic_metodo2_r4").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo2_r5").innerText)) { document.getElementById("Ic_metodo2_r5").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo2_r6").innerText)) { document.getElementById("Ic_metodo2_r6").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo2_r7").innerText)) { document.getElementById("Ic_metodo2_r7").innerText = "" }
    if (isNaN(document.getElementById("Ic_metodo2_r8").innerText)) { document.getElementById("Ic_metodo2_r8").innerText = "" }

    if (isNaN(document.getElementById("Isc_aC_metodo2_r1").innerText)) { document.getElementById("Isc_aC_metodo2_r1").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo2_r2").innerText)) { document.getElementById("Isc_aC_metodo2_r2").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo2_r3").innerText)) { document.getElementById("Isc_aC_metodo2_r3").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo2_r4").innerText)) { document.getElementById("Isc_aC_metodo2_r4").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo2_r5").innerText)) { document.getElementById("Isc_aC_metodo2_r5").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo2_r6").innerText)) { document.getElementById("Isc_aC_metodo2_r6").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo2_r7").innerText)) { document.getElementById("Isc_aC_metodo2_r7").innerText = "" }
    if (isNaN(document.getElementById("Isc_aC_metodo2_r8").innerText)) { document.getElementById("Isc_aC_metodo2_r8").innerText = "" }

    if (isNaN(document.getElementById("Isc_aA_metodo2_r1").innerText)) { document.getElementById("Isc_aA_metodo2_r1").innerText = "" }
    if (isNaN(document.getElementById("Isc_aA_metodo2_r2").innerText)) { document.getElementById("Isc_aA_metodo2_r2").innerText = "" }
    if (isNaN(document.getElementById("Isc_aA_metodo2_r3").innerText)) { document.getElementById("Isc_aA_metodo2_r3").innerText = "" }
    if (isNaN(document.getElementById("Isc_aA_metodo2_r4").innerText)) { document.getElementById("Isc_aA_metodo2_r4").innerText = "" }
    if (isNaN(document.getElementById("Isc_aA_metodo2_r5").innerText)) { document.getElementById("Isc_aA_metodo2_r5").innerText = "" }
    if (isNaN(document.getElementById("Isc_aA_metodo2_r6").innerText)) { document.getElementById("Isc_aA_metodo2_r6").innerText = "" }
    if (isNaN(document.getElementById("Isc_aA_metodo2_r7").innerText)) { document.getElementById("Isc_aA_metodo2_r7").innerText = "" }
    if (isNaN(document.getElementById("Isc_aA_metodo2_r8").innerText)) { document.getElementById("Isc_aA_metodo2_r8").innerText = "" }

    if (isNaN(document.getElementById("Isc_criterio_metodo2_r1").innerText)) { document.getElementById("Isc_criterio_metodo2_r1").innerText = "" }
    if (isNaN(document.getElementById("Isc_criterio_metodo2_r2").innerText)) { document.getElementById("Isc_criterio_metodo2_r2").innerText = "" }
    if (isNaN(document.getElementById("Isc_criterio_metodo2_r3").innerText)) { document.getElementById("Isc_criterio_metodo2_r3").innerText = "" }
    if (isNaN(document.getElementById("Isc_criterio_metodo2_r4").innerText)) { document.getElementById("Isc_criterio_metodo2_r4").innerText = "" }
    if (isNaN(document.getElementById("Isc_criterio_metodo2_r5").innerText)) { document.getElementById("Isc_criterio_metodo2_r5").innerText = "" }
    if (isNaN(document.getElementById("Isc_criterio_metodo2_r6").innerText)) { document.getElementById("Isc_criterio_metodo2_r6").innerText = "" }
    if (isNaN(document.getElementById("Isc_criterio_metodo2_r7").innerText)) { document.getElementById("Isc_criterio_metodo2_r7").innerText = "" }
    if (isNaN(document.getElementById("Isc_criterio_metodo2_r8").innerText)) { document.getElementById("Isc_criterio_metodo2_r8").innerText = "" }

    if (isNaN(document.getElementById("Ipickup_criterio_metodo2_r1").innerText)) { document.getElementById("Ipickup_criterio_metodo2_r1").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_criterio_metodo2_r2").innerText)) { document.getElementById("Ipickup_criterio_metodo2_r2").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_criterio_metodo2_r3").innerText)) { document.getElementById("Ipickup_criterio_metodo2_r3").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_criterio_metodo2_r4").innerText)) { document.getElementById("Ipickup_criterio_metodo2_r4").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_criterio_metodo2_r5").innerText)) { document.getElementById("Ipickup_criterio_metodo2_r5").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_criterio_metodo2_r6").innerText)) { document.getElementById("Ipickup_criterio_metodo2_r6").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_criterio_metodo2_r7").innerText)) { document.getElementById("Ipickup_criterio_metodo2_r7").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_criterio_metodo2_r8").innerText)) { document.getElementById("Ipickup_criterio_metodo2_r8").innerText = "" }

    if (isNaN(document.getElementById("resumen_Icarga1").innerText)) { document.getElementById("resumen_Icarga1").innerText = "" }
    if (isNaN(document.getElementById("resumen_Icarga2").innerText)) { document.getElementById("resumen_Icarga2").innerText = "" }
    if (isNaN(document.getElementById("resumen_Icarga3").innerText)) { document.getElementById("resumen_Icarga3").innerText = "" }
    if (isNaN(document.getElementById("resumen_Icarga4").innerText)) { document.getElementById("resumen_Icarga4").innerText = "" }
    if (isNaN(document.getElementById("resumen_Icarga5").innerText)) { document.getElementById("resumen_Icarga5").innerText = "" }
    if (isNaN(document.getElementById("resumen_Icarga6").innerText)) { document.getElementById("resumen_Icarga6").innerText = "" }
    if (isNaN(document.getElementById("resumen_Icarga7").innerText)) { document.getElementById("resumen_Icarga7").innerText = "" }
    if (isNaN(document.getElementById("resumen_Icarga8").innerText)) { document.getElementById("resumen_Icarga8").innerText = "" }

    if (isNaN(document.getElementById("Isc_metodo1_r1").innerText)) { document.getElementById("Isc_metodo1_r1").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo1_r2").innerText)) { document.getElementById("Isc_metodo1_r2").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo1_r3").innerText)) { document.getElementById("Isc_metodo1_r3").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo1_r4").innerText)) { document.getElementById("Isc_metodo1_r4").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo1_r5").innerText)) { document.getElementById("Isc_metodo1_r5").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo1_r6").innerText)) { document.getElementById("Isc_metodo1_r6").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo1_r7").innerText)) { document.getElementById("Isc_metodo1_r7").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo1_r8").innerText)) { document.getElementById("Isc_metodo1_r8").innerText = "" }

    if (isNaN(document.getElementById("Isc_metodo2_r1").innerText)) { document.getElementById("Isc_metodo2_r1").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo2_r2").innerText)) { document.getElementById("Isc_metodo2_r2").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo2_r3").innerText)) { document.getElementById("Isc_metodo2_r3").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo2_r4").innerText)) { document.getElementById("Isc_metodo2_r4").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo2_r5").innerText)) { document.getElementById("Isc_metodo2_r5").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo2_r6").innerText)) { document.getElementById("Isc_metodo2_r6").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo2_r7").innerText)) { document.getElementById("Isc_metodo2_r7").innerText = "" }
    if (isNaN(document.getElementById("Isc_metodo2_r8").innerText)) { document.getElementById("Isc_metodo2_r8").innerText = "" }

    if (isNaN(document.getElementById("IpickupR_metodo1_r1").innerText)) { document.getElementById("IpickupR_metodo1_r1").innerText = "" }
    if (isNaN(document.getElementById("IpickupR_metodo1_r2").innerText)) { document.getElementById("IpickupR_metodo1_r2").innerText = "" }
    if (isNaN(document.getElementById("IpickupR_metodo1_r3").innerText)) { document.getElementById("IpickupR_metodo1_r3").innerText = "" }
    if (isNaN(document.getElementById("IpickupR_metodo1_r4").innerText)) { document.getElementById("IpickupR_metodo1_r4").innerText = "" }
    if (isNaN(document.getElementById("IpickupR_metodo1_r5").innerText)) { document.getElementById("IpickupR_metodo1_r5").innerText = "" }
    if (isNaN(document.getElementById("IpickupR_metodo1_r6").innerText)) { document.getElementById("IpickupR_metodo1_r6").innerText = "" }
    if (isNaN(document.getElementById("IpickupR_metodo1_r7").innerText)) { document.getElementById("IpickupR_metodo1_r7").innerText = "" }
    if (isNaN(document.getElementById("IpickupR_metodo1_r8").innerText)) { document.getElementById("IpickupR_metodo1_r8").innerText = "" }

    if (isNaN(document.getElementById("Ipickup_metodo2_r1").innerText)) { document.getElementById("Ipickup_metodo2_r1").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo2_r2").innerText)) { document.getElementById("Ipickup_metodo2_r2").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo2_r3").innerText)) { document.getElementById("Ipickup_metodo2_r3").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo2_r4").innerText)) { document.getElementById("Ipickup_metodo2_r4").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo2_r5").innerText)) { document.getElementById("Ipickup_metodo2_r5").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo2_r6").innerText)) { document.getElementById("Ipickup_metodo2_r6").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo2_r7").innerText)) { document.getElementById("Ipickup_metodo2_r7").innerText = "" }
    if (isNaN(document.getElementById("Ipickup_metodo2_r8").innerText)) { document.getElementById("Ipickup_metodo2_r8").innerText = "" }

    if (isNaN(document.getElementById("deltaIsc_r1").innerText)) { document.getElementById("deltaIsc_r1").innerText = "" }
    if (isNaN(document.getElementById("deltaIsc_r2").innerText)) { document.getElementById("deltaIsc_r2").innerText = "-" }
    if (isNaN(document.getElementById("deltaIsc_r3").innerText)) { document.getElementById("deltaIsc_r3").innerText = "" }
    if (isNaN(document.getElementById("deltaIsc_r4").innerText)) { document.getElementById("deltaIsc_r4").innerText = "" }
    if (isNaN(document.getElementById("deltaIsc_r5").innerText)) { document.getElementById("deltaIsc_r5").innerText = "" }
    if (isNaN(document.getElementById("deltaIsc_r6").innerText)) { document.getElementById("deltaIsc_r6").innerText = "" }
    if (isNaN(document.getElementById("deltaIsc_r7").innerText)) { document.getElementById("deltaIsc_r7").innerText = "-" }
    if (isNaN(document.getElementById("deltaIsc_r8").innerText)) { document.getElementById("deltaIsc_r8").innerText = "" }

    if (isNaN(document.getElementById("deltaIpickup_r1").innerText)) { document.getElementById("deltaIpickup_r1").innerText = "" }
    if (isNaN(document.getElementById("deltaIpickup_r2").innerText)) { document.getElementById("deltaIpickup_r2").innerText = "-" }
    if (isNaN(document.getElementById("deltaIpickup_r3").innerText)) { document.getElementById("deltaIpickup_r3").innerText = "" }
    if (isNaN(document.getElementById("deltaIpickup_r4").innerText)) { document.getElementById("deltaIpickup_r4").innerText = "" }
    if (isNaN(document.getElementById("deltaIpickup_r5").innerText)) { document.getElementById("deltaIpickup_r5").innerText = "" }
    if (isNaN(document.getElementById("deltaIpickup_r6").innerText)) { document.getElementById("deltaIpickup_r6").innerText = "" }
    if (isNaN(document.getElementById("deltaIpickup_r7").innerText)) { document.getElementById("deltaIpickup_r7").innerText = "-" }
    if (isNaN(document.getElementById("deltaIpickup_r8").innerText)) { document.getElementById("deltaIpickup_r8").innerText = "" }

    if (isNaN(tabla_Isc_Rele1.innerText)) { tabla_Isc_Rele1.innerText = "-" }
    if (isNaN(tabla_Isc_Rele2.innerText)) { tabla_Isc_Rele2.innerText = "-" }
    if (isNaN(tabla_Isc_Rele3.innerText)) { tabla_Isc_Rele3.innerText = "-" }
    if (isNaN(tabla_Isc_Rele4.innerText)) { tabla_Isc_Rele4.innerText = "-" }
    if (isNaN(tabla_Isc_Rele5.innerText)) { tabla_Isc_Rele5.innerText = "-" }
    if (isNaN(tabla_Isc_Rele6.innerText)) { tabla_Isc_Rele6.innerText = "-" }
    if (isNaN(tabla_Isc_Rele7.innerText)) { tabla_Isc_Rele7.innerText = "-" }
    if (isNaN(tabla_Isc_Rele8.innerText)) { tabla_Isc_Rele8.innerText = "-" }

    if (isNaN(tabla_Ic_Rele1.innerText)) { tabla_Ic_Rele1.innerText = "-" }
    if (isNaN(tabla_Ic_Rele2.innerText)) { tabla_Ic_Rele2.innerText = "-" }
    if (isNaN(tabla_Ic_Rele3.innerText)) { tabla_Ic_Rele3.innerText = "-" }
    if (isNaN(tabla_Ic_Rele4.innerText)) { tabla_Ic_Rele4.innerText = "-" }
    if (isNaN(tabla_Ic_Rele5.innerText)) { tabla_Ic_Rele5.innerText = "-" }
    if (isNaN(tabla_Ic_Rele6.innerText)) { tabla_Ic_Rele6.innerText = "-" }
    if (isNaN(tabla_Ic_Rele7.innerText)) { tabla_Ic_Rele7.innerText = "-" }
    if (isNaN(tabla_Ic_Rele8.innerText)) { tabla_Ic_Rele8.innerText = "-" }



}

function metodologiaAnillo() {

        Swal.fire({
            title: "Metodología <p style='color: gray'>Protección sobrecorriente 67 </p> ",
            background: '#fefefe',
            width: 700,
            showConfirmButton: false,
            showCloseButton: true,
            html: `
                <div class="divMetodo justify">
                    <h4><b><u>Pasos </u></b></h4>
                    <p>1. Se revisa que datos son los que tengo para trabajar y la topología del sistema.</p>
                    <p>2. Se necesita Isc (máximos y mínimos). Para el caso de un anillo: </p>
                    <p>2.1.1 Observando el anillo abierto, haciendo un recorrido en sentido horario y antihorario en un mismo (Nodo). <b>Se recomienda que ese nodo sea al más cercano del generador (más favorable)</b>.  Determinando una corriente de falla que vería en su debido momento el relé (dependiendo donde la ubique). Cada relé va a estar mirando a su extremo opuesto (genera una dirección).</p>
                    <p>2.1.2 Se halla la corriente de corto circuito con el anillo cerrado (sentido horario y antihorario). </p>
                    <p>Con base en esas corrientes, aplicó el criterio del ajuste del relé de sobrecorriente (para este caso sería el de lineas), <u><b>EXCEPTO</b></u> los relés que están mirando hacia la fuente (en este caso el <b>relé 2 y 7</b>) porque no me interesa que vean fallas fuera de la linea, a ellos aplicó otro criterio aparte. </p>
                    <img src="assets/images/Anillo/esquema_corriente.svg" style="width:100%; height: 100px">
                    <p>
                    <p>3. Determinar corriente de carga máxima que están observando en cada linea:</b> No me interesa la dirección, va circular por la línea.  Se toma el valor máximo que se presenta en cualquier sentido (horario o anti-horario). Con estos datos, voy a determinar las relaciones de CTs.</p>

                    <h4 style="text-align:center; color: green"><u>Método 1</u></h4>
                    <p>Este método consiste en aplicar un factor expresado en porcentaje de la corriente de corto, carga (según se requiera) que vea el relé aguas abajo, es decir, se aplica uno u otro criterio de acuerdo al elemento a proteger (línea, transformador o carga). </p>
                    <p>Para los relés 2 y 7 (los que están mirando el generador), tomar un 50% adicional (1.5) la <b> corriente de carga máxima Icargamáx </b>. Los demás relés, las instantáneas se coordinan con <b>Isc</b>.</p>


                    <h4 style="text-align:center; color: green"><u>Método 2</u></h4>
                    <p>Para el ajuste de las unidades instantáneas: </p>
                    <p>1. Se ajusta primero el  relé de la S/E adyacente a la generadora, correspondiente al interruptor que se considera abierto con el menor de los dos valores siguientes: </p>
                    <p> - Primer valor: El nivel de corriente que ve el interruptor para una falla en la mitad de la línea que con el generadora, <b>estando el anillo cerrado</b> </p>
                    <p> - Segundo valor:  El nivel de la corriente que ve el interruptor para una falla en el extremo de la linea <b>estando abierto el anillo</b>. <span style="color:blue;">(*)</span>  </p> 
                    
                    <p>2. Se ajusta luego el relé siguiente (hacia atrás) con el <b>mayor</b> de los dos valores siguientes: <p>
                    <p> - Primer valor: (1.25-1.5) veces la <u>Isc</u> que ve el interruptor asociado para una falla en la S/E adyacente a la generadora, <b>estando el anillo cerrado</b>. </p>
                    <p> - Segundo valor: (1.25-1.5) veces la  <u>Isc</u> que ve el mismo interruptor para una falla en el 50% de la linea (o en el porcentaje de cubrimiento con el valor de ajuste que se obtuvo en <span style="color:blue">(*)</span> <b>estando el anillo abierto</b>. </p> 
                    
                </div>
            
            `,
        })


}


async function criterioAjuste(rele) {

    var ajusteDelRele;
    var valorAjuste;

    if(rele == "r1"){
        ajusteDelRele = "Ajuste Relé 1";
        valorAjuste = ajusteR1;
    }
    if(rele == "r3"){
        ajusteDelRele = "Ajuste Relé 3";
        valorAjuste = ajusteR3;
    }
    if(rele == "r4"){
        ajusteDelRele = "Ajuste Relé 4";
        valorAjuste = ajusteR4;
    }
    if(rele == "r5"){
        ajusteDelRele = "Ajuste Relé 5";
        valorAjuste = ajusteR5;
    }
    if(rele == "r6"){
        ajusteDelRele = "Ajuste Relé 6";
        valorAjuste = ajusteR6;
        
    }
    if(rele == "r8"){
        ajusteDelRele = "Ajuste Relé 8";
        valorAjuste = ajusteR8;
        
    }

    const { value: formValues } = await Swal.fire({
        title: "Editar  " + ajusteDelRele,
        background: '#fefefe',
        html: `
            <table class="table table-responsive "> 
                <p>Rango: ( 1.25 - 1.50 )</p>
                <tr>
                    <td>${ajusteDelRele}:</td>
                    <td><input type="number" class="swal2-input" id="swal2-InputtAjuste" value="${valorAjuste}" min="1.25" max="1.50"></td>
                    <td>%</td>
                </tr>

            </table>
        `,
        showConfirmButton: true,
        confirmButtonText: "Guardar",
        showCloseButton: true,
        showCancelButton: false,
        customClass: {
            confirmButton: 'botonGuardar hoverButton',
        },
        footer: '<p style="text-align: justify; font-size:13px "> <b>Nota</b>: Si ingresa un valor menor al mínimo del rango, se tomará automaticamente el valor mínimo posible. Igualmente, si ingresa un valor mayor al máximo, se tomará el máximo valor posible. <p>',
        preConfirm: () => {
            return [
                document.getElementById("swal2-InputtAjuste").value
            ]
        }

    })

    if (formValues) {
        //Swal.fire(JSON.stringify(formValues))

        console.log("Valor colocadoooooo: ", formValues[0])

        if (formValues[0] <= 1.25) {
            formValues[0] = "1.25";
            console.log("formValues[0]: ", formValues[0])
        }
        if (formValues[0] > 1.50) {
            formValues[0] = "1.50"
            console.log("formValues[0]: ", formValues[0])
        }

        if(rele == "r1") {
            ajusteR1 = parseFloat(formValues[0]);
            document.getElementById("ajuste_r1").innerText = parseFloat(formValues[0]).toFixed(2);
        }

        if(rele == "r3") {
            ajusteR3 = parseFloat(formValues[0]);
            document.getElementById("ajuste_r3").innerText = parseFloat(formValues[0]).toFixed(2);
        }
        if(rele == "r4") {
            ajusteR4 = parseFloat(formValues[0]);
            document.getElementById("ajuste_r4").innerText = parseFloat(formValues[0]).toFixed(2);
        }

        if(rele == "r5") {
            ajusteR5 = parseFloat(formValues[0]);
            document.getElementById("ajuste_r5").innerText = parseFloat(formValues[0]).toFixed(2);
        }
        if(rele == "r6") {
            ajusteR6 = parseFloat(formValues[0]);
            document.getElementById("ajuste_r6").innerText = parseFloat(formValues[0]).toFixed(2);
        }

        if(rele == "r8") {
            ajusteR8 = parseFloat(formValues[0]);
            document.getElementById("ajuste_r8").innerText = parseFloat(formValues[0]).toFixed(2);
        }

        calcularValoresRelesAnillo()
    }


}

function desparecerAnillo() {
    document.getElementById('anillo-tab-pane').style.display = "none";
}

function aparecerAnillo() {
    document.getElementById('anillo-tab-pane').style.display = "block";
}