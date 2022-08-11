// Declaramos las variables globales
const modeloAnillo = {
    0: {
        nombre: "Generador",
        urlImagen: "./assets/images/Anillo/3_1.svg",
        tipo: "Generador",
        etiqueta1: "Voltaje",
        etiqueta2: "[kV]",
        voltaje: "",
        potencia: ""
    },
    1: {
        nombre: "Barra I-II",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/2_2.svg",
        impedancia: '',
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: ""
    },
    2: {
        nombre: "Barra IV-I",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/2_4.svg",
        impedancia: "",
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: ""
    },
    3: {
        nombre: "Carga",
        tipo: "Carga",
        urlImagen: "./assets/images/Anillo/load_left.svg",
        potencia: "",
        etiqueta1: "S",
        etiqueta2: "[MVA]",
    },
    4: {
        nombre: "Carga",
        tipo: "Carga",
        urlImagen: "./assets/images/Anillo/load_right.svg",
        potencia: "",
        etiqueta1: "S",
        etiqueta2: "[MVA]",
    },
    5: {
        nombre: "Barra II-III",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/4_2.svg",
        impedancia: "",
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: ""
    },
    6: {
        nombre: "Barra III-IV",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/4_4.svg",
        impedancia: "",
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: ""
    },
    7: {
        nombre: "Carga",
        tipo: "Carga",
        urlImagen: "./assets/images/Anillo/load_bottom.svg",
        potencia: "",
        etiqueta1: "S",
        etiqueta2: "[MVA]",
        potencia: ""
    }

}

const modeloReleAnillo = {
    0: {
        nombre: "-",
        Isc: "",
        Ic: "",
        margenIc: "",
        familiaCurva: "",
        TMS: "",
        tiempo: "",
        tiempoInstantaneo: "",
    },
    1: {
        nombre: "Rele 1",
        Isc: tabla_Isc_Rele1,
        Ic: "",
        margenIc: tabla_Margen_Ic_1,
        familiaCurva: tabla_familiaCurva_1,
        TMS: tabla_TMS_1,
        tiempo: tabla_Tiempo_1,
        tiempoInstantaneo: tabla_TiempoInstantaneo_1,
    },
    2: {
        nombre: "Rele 2",
        Isc: tabla_Isc_Rele2,
        Ic: "",
        margenIc: tabla_Margen_Ic_2,
        familiaCurva: tabla_familiaCurva_2,
        TMS: tabla_TMS_2,
        tiempo: tabla_Tiempo_2,
        tiempoInstantaneo: tabla_TiempoInstantaneo_2,
    },
    3: {
        nombre: "Rele 3",
        Isc: tabla_Isc_Rele3,
        Ic: "",
        margenIc: tabla_Margen_Ic_3,
        familiaCurva: tabla_familiaCurva_3,
        TMS: tabla_TMS_3,
        tiempo: tabla_Tiempo_3,
        tiempoInstantaneo: tabla_TiempoInstantaneo_3,
    },
    4: {
        nombre: "Rele 4",
        Isc: tabla_Isc_Rele4,
        Ic: "",
        margenIc: tabla_Margen_Ic_4,
        familiaCurva: tabla_familiaCurva_4,
        TMS: tabla_TMS_4,
        tiempo: tabla_Tiempo_4,
        tiempoInstantaneo: tabla_TiempoInstantaneo_4,
    },
    5: {
        nombre: "Rele 5",
        Isc: tabla_Isc_Rele5,
        Ic: "",
        margenIc: tabla_Margen_Ic_5,
        familiaCurva: tabla_familiaCurva_5,
        TMS: tabla_TMS_5,
        tiempo: tabla_Tiempo_5,
        tiempoInstantaneo: tabla_TiempoInstantaneo_5,
    },
    6: {
        nombre: "Rele 6",
        Isc: tabla_Isc_Rele6,
        Ic: "",
        margenIc: tabla_Margen_Ic_6,
        familiaCurva: tabla_familiaCurva_6,
        TMS: tabla_TMS_6,
        tiempo: tabla_Tiempo_6,
        tiempoInstantaneo: tabla_TiempoInstantaneo_6,
    },
    7: {
        nombre: "Rele 7",
        Isc: tabla_Isc_Rele7,
        Ic: "",
        margenIc: tabla_Margen_Ic_7,
        familiaCurva: tabla_familiaCurva_7,
        TMS: tabla_TMS_7,
        tiempo: tabla_Tiempo_7,
        tiempoInstantaneo: tabla_TiempoInstantaneo_7,
    },
    8: {
        nombre: "Rele 8",
        Isc: tabla_Isc_Rele8,
        Ic: "",
        margenIc: tabla_Margen_Ic_8,
        familiaCurva: tabla_familiaCurva_8,
        TMS: tabla_TMS_8,
        tiempo: tabla_Tiempo_8,
        tiempoInstantaneo: tabla_TiempoInstantaneo_8,
    }
}

//Inicializa las variables y agregando campos vacios por defecto

var S1 = "", S2 = "", S3 = "", S4 = "", Z1 = "", Z2 = "", Z3 = "", Z4 = "", VAnillo = "";
var Isc_Rele1, Isc_Rele2, Isc_Rele3, Isc_Rele4, Isc_Rele5, Isc_Rele6, Isc_Rele7, Isc_Rele8;
var Ic_Rele1, Ic_Rele2, Ic_Rele3, Ic_Rele4, Ic_Rele5, Ic_Rele6, Ic_Rele7, Ic_Rele8;
var margen_Ic_r1, margen_Ic_r2, margen_Ic_r3, margen_Ic_r4, margen_Ic_r5, margen_Ic_r6, margen_Ic_r7, margen_Ic_r8;
var familiaCurvaR1, familiaCurvaR2, familiaCurvaR3, familiaCurvaR4, familiaCurvaR5, familiaCurvaR6, familiaCurvaR7, familiaCurvaR8;
var TMS_r1, TMS_r2, TMS_r3, TMS_r4, TMS_r5, TMS_r6, TMS_r7, TMS_r8;
var TMS_calculado_r1, TMS_calculado_r2, TMS_calculado_r3, TMS_calculado_r4, TMS_calculado_r5, TMS_calculado_r6, TMS_calculado_r7, TMS_calculado_r8;
var tiempo_instantaneo_r1, tiempo_instantaneo_r2, tiempo_instantaneo_r3, tiempo_instantaneo_r4, tiempo_instantaneo_r5, tiempo_instantaneo_r6, tiempo_instantaneo_r7, tiempo_instantaneo_r8;
var Ic_1_con_margen, Ic_2_con_margen, Ic_3_con_margen, Ic_4_con_margen, Ic_5_con_margen, Ic_6_con_margen, Ic_7_con_margen, Ic_8_con_margen;
var tmsAnilloOpcion1, tmsAnilloOpcion2;
var swal_Anillo_tms;
var guardarAnilloOpcionTMS1 = "display:none";
var guardarAnilloOpcionTMS2 = "display:none";
var TMSparteIEC_1, TMSparteIEC_2, TMSparteIEC_3, TMSparteIEC_4, TMSparteIEC_5, TMSparteIEC_6, TMSparteIEC_7, TMSparteIEC_8;
var TMSparteANSI_1, TMSparteANSI_2, TMSparteANSI_3, TMSparteANSI_4, TMSparteANSI_5, TMSparteANSI_6, TMSparteANSI_7, TMSparteANSI_8;

var displayVoltaje = "display:none";
var displayImpedancia = "display:none";
var displayPotencia = "display:none";

tabla_Margen_Ic_1 = ""; tabla_Margen_Ic_2 = ""; tabla_Margen_Ic_3 = ""; tabla_Margen_Ic_4 = ""; tabla_Margen_Ic_5 = ""; tabla_Margen_Ic_6 = ""; tabla_Margen_Ic_7 = ""; tabla_Margen_Ic_8 = "";

var Ic_A, Ic_B, Ic_43, Ic_32, Ic_2;
var Ic_23, Ic_34, Ic_4;
var Ic_78, Ic_56, Ic_34, Ic_12;
var Zfalla;
var Isc_2I, Isc_2D, Isc_2A, Isc_2B;
var Isc_3I, Isc_3D, Isc_3A, Isc_3B;
var Isc_4I, Isc_4D, Isc_4A, Isc_4B;
var Isc_1, Isc_2, Isc_3, Isc_4;

var swalAnilloTMS1, swalAnilloTMS2;
var swal_Anillo_tms = "swal-AnilloTMS0";
var guardarOpcionAnilloTMS1 = "display:none";
var guardarOpcionAnilloTMS2 = "display:none";

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
var tabla_Margen_Ic_1 = document.getElementById("Margen_Ic_r1");
var tabla_Margen_Ic_2 = document.getElementById("Margen_Ic_r2");
var tabla_Margen_Ic_3 = document.getElementById("Margen_Ic_r3");
var tabla_Margen_Ic_4 = document.getElementById("Margen_Ic_r4");
var tabla_Margen_Ic_5 = document.getElementById("Margen_Ic_r5");
var tabla_Margen_Ic_6 = document.getElementById("Margen_Ic_r6");
var tabla_Margen_Ic_7 = document.getElementById("Margen_Ic_r7");
var tabla_Margen_Ic_8 = document.getElementById("Margen_Ic_r8");
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
var tabla_TiempoInstantaneo_1 = document.getElementById("Tiempo_instantaneo_r1");
var tabla_TiempoInstantaneo_2 = document.getElementById("Tiempo_instantaneo_r2");
var tabla_TiempoInstantaneo_3 = document.getElementById("Tiempo_instantaneo_r3");
var tabla_TiempoInstantaneo_4 = document.getElementById("Tiempo_instantaneo_r4");
var tabla_TiempoInstantaneo_5 = document.getElementById("Tiempo_instantaneo_r5");
var tabla_TiempoInstantaneo_6 = document.getElementById("Tiempo_instantaneo_r6");
var tabla_TiempoInstantaneo_7 = document.getElementById("Tiempo_instantaneo_r7");
var tabla_TiempoInstantaneo_8 = document.getElementById("Tiempo_instantaneo_r8");
var tabla_DialCalculado_1 = document.getElementById("Dial_calculado_r1");
var tabla_DialCalculado_2 = document.getElementById("Dial_calculado_r2");
var tabla_DialCalculado_3 = document.getElementById("Dial_calculado_r3");
var tabla_DialCalculado_4 = document.getElementById("Dial_calculado_r4");
var tabla_DialCalculado_5 = document.getElementById("Dial_calculado_r5");
var tabla_DialCalculado_6 = document.getElementById("Dial_calculado_r6");
var tabla_DialCalculado_7 = document.getElementById("Dial_calculado_r7");
var tabla_DialCalculado_8 = document.getElementById("Dial_calculado_r8");

//Defino las variables para ajustar los valores generales del anillo
var valor_diagrama_Generador = document.getElementById("1_4");
var valor_barra_1_2 = document.getElementById("Barra1_2");
var valor_barra_4_1 = document.getElementById("Barra4_1");
var valor_carga_izquierda = document.getElementById("cargaIzquierda");
var valor_carga_derecha = document.getElementById("cargaDerecha");
var valor_barra_2_3 = document.getElementById("Barra2_3");
var valor_barra_3_4 = document.getElementById("Barra3_4");
var valor_carga_abajo = document.getElementById("cargaAbajo");



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

//FUNCIONES QUE SE UTILIZARÁN
function escogerSegunTipo(tipo) {
    console.log("tipo nodo: ", tipo)

    try {
        if (tipo == "Generador") {
            displayVoltaje = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayPotencia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayImpedancia = "display:none";
        }
        if (tipo == "Barra") {
            displayVoltaje = "display:none";
            displayPotencia = "display:none";
            displayImpedancia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
        }
        if (tipo == "Carga") {
            displayVoltaje = "display:none";
            displayPotencia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayImpedancia = "display:none";
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
        width: 700,
        html: `<div class="table-responsive">
        <table class="table align-middle" style="font-size:13px"> 
        <tr style="${displayVoltaje}; ">
            <th scope="row"  >Voltaje</th>    
            <td ><input type="number" id="swal-Anillo-Voltaje" value="${modeloAnillo[0].voltaje}" class="swal2-input" min="0"></td>
            <td >[kV]</td>
            
           
        </tr>

        <tr style="${displayPotencia};">
            <th scope="row">Potencia</th>    
            <td ><input type="number" id="swal-Anillo-potencia" value="${modeloAnillo[valores].potencia}" class="swal2-input" min="0"></td>
            <td >[MVA]</td>
        </tr>

        <tr style="${displayImpedancia};">
            <th scope="row">Impedancia</th>    
            <td ><input type="number" id="swal-Anillo-impedancia" value="${modeloAnillo[valores].impedancia}" class="swal2-input" min="0"></td>
            <td >[Ω]</td>
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
                document.getElementById('swal-Anillo-impedancia').value,

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
    console.log("modeloAnillo[1].impedancia: ", modeloAnillo[1].impedancia)
    modeloAnillo[elemento].voltaje = parseFloat(datos[0]);
    modeloAnillo[elemento].potencia = parseFloat(datos[1]);
    modeloAnillo[elemento].impedancia = parseFloat(datos[2]);

    if (!isNaN(modeloAnillo[0].voltaje)) {
        valor_diagrama_Generador.innerHTML = modeloAnillo[0].voltaje + " kV" + "<br>";
    } else { valor_diagrama_Generador.innerHTML = " kV" + "<br>"; }
    if (!isNaN(modeloAnillo[0].potencia)) { valor_diagrama_Generador.innerHTML = valor_diagrama_Generador.innerHTML + modeloAnillo[0].potencia + " MVA" + "<br>" }

    if (!isNaN(modeloAnillo[1].impedancia)) { valor_barra_1_2.innerHTML = modeloAnillo[1].impedancia + " Ω"; } else { valor_barra_1_2.innerText = " Ω"; }

    if (!isNaN(modeloAnillo[2].impedancia)) { valor_barra_4_1.innerText = modeloAnillo[2].impedancia + " Ω"; } else { valor_barra_4_1.innerText = " Ω"; }

    if (!isNaN(modeloAnillo[3].potencia)) { valor_carga_izquierda.innerText = modeloAnillo[3].potencia + " MVA"; } else { valor_carga_izquierda.innerText = " MVA"; }

    if (!isNaN(modeloAnillo[4].potencia)) { valor_carga_derecha.innerText = modeloAnillo[4].potencia + " MVA"; } else { valor_carga_derecha.innerText = " MVA"; }

    if (!isNaN(modeloAnillo[5].impedancia)) { valor_barra_2_3.innerHTML = "<br>" + modeloAnillo[5].impedancia + " Ω"; } else { valor_barra_2_3.innerHTML = "<br>" + " Ω"; }

    if (!isNaN(modeloAnillo[6].impedancia)) { valor_barra_3_4.innerHTML = "<br>" + modeloAnillo[6].impedancia + " Ω"; } else { valor_barra_3_4.innerHTML = "<br>" + " Ω"; }

    if (!isNaN(modeloAnillo[7].potencia)) { valor_carga_abajo.innerHTML = "<br>" + modeloAnillo[7].potencia + " MVA"; } else { valor_carga_abajo.innerHTML = "<br>" + " MVA"; }

}


function ejemploAnillo() {
    modeloAnillo[0].voltaje = 13.2;
    modeloAnillo[0].potencia = 150;
    modeloAnillo[1].impedancia = 2;
    modeloAnillo[2].impedancia = 3;
    modeloAnillo[3].potencia = 5;
    modeloAnillo[4].potencia = 7;
    modeloAnillo[5].impedancia = 2;
    modeloAnillo[6].impedancia = 4;
    modeloAnillo[7].potencia = 3;
    valor_diagrama_Generador.innerHTML = modeloAnillo[0].voltaje + " kV" + "<br>";
    valor_diagrama_Generador.innerHTML = valor_diagrama_Generador.innerHTML + modeloAnillo[0].potencia + " MVA" + "<br>";
    valor_barra_1_2.innerHTML = modeloAnillo[1].impedancia + " Ω";
    valor_barra_4_1.innerText = modeloAnillo[2].impedancia + " Ω";
    valor_carga_izquierda.innerText = modeloAnillo[3].potencia + " MVA";
    valor_carga_derecha.innerText = modeloAnillo[4].potencia + " MVA";
    valor_barra_2_3.innerHTML = "<br>" + modeloAnillo[5].impedancia + " Ω";
    valor_barra_2_3.innerHTML = "<br>" + modeloAnillo[5].impedancia + " Ω";
    valor_barra_3_4.innerHTML = "<br>" + modeloAnillo[6].impedancia + " Ω";
    valor_carga_abajo.innerHTML = "<br>" + modeloAnillo[7].potencia + " MVA";

}



function calcularValoresRelesAnillo() {

    S1 = modeloAnillo[0].potencia; S2 = modeloAnillo[3].potencia, S3 = modeloAnillo[4].potencia; S4 = modeloAnillo[7].potencia; Z1 = modeloAnillo[1].impedancia; Z2 = modeloAnillo[2].impedancia; Z3 = modeloAnillo[5].impedancia; Z4 = modeloAnillo[6].impedancia; VAnillo = modeloAnillo[0].voltaje;

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
    Ic_78 = Math.max(Ic_B, Ic_2).toFixed(2);
    Ic_56 = Math.max(Ic_43, Ic_34).toFixed(2);
    Ic_34 = Math.max(Ic_32, Ic_23).toFixed(2);
    Ic_12 = Math.max(Ic_2, Ic_A).toFixed(2);

    tabla_Ic_Rele1.innerText = Ic_12;
    tabla_Ic_Rele2.innerText = Ic_12;
    tabla_Ic_Rele3.innerText = Ic_34;
    tabla_Ic_Rele4.innerText = Ic_34;
    tabla_Ic_Rele5.innerText = Ic_56;
    tabla_Ic_Rele6.innerText = Ic_56;
    tabla_Ic_Rele7.innerText = Ic_78;
    tabla_Ic_Rele8.innerText = Ic_78;

    modeloReleAnillo[1].Ic = Ic_12;
    modeloReleAnillo[2].Ic = Ic_12;
    modeloReleAnillo[3].Ic = Ic_34;
    modeloReleAnillo[4].Ic = Ic_34;
    modeloReleAnillo[5].Ic = Ic_56;
    modeloReleAnillo[6].Ic = Ic_56;
    modeloReleAnillo[7].Ic = Ic_78;
    modeloReleAnillo[8].Ic = Ic_78;

    Zfalla = ((Math.pow((VAnillo) * (1000), 2))) / (S1 * (1000000));

    Isc_2 = ((VAnillo) * (1000)) / (((Math.sqrt(3))) * (Zfalla + (1 / ((1 / Z1) + (1 / (Z3 + Z4 + Z2))))));
    Isc_2D = Isc_2 * ((Z1) / (Z1 + Z3 + Z4 + Z2));
    Isc_2I = Isc_2 * ((Z3 + Z4 + Z2) / (Z1 + Z3 + Z4 + Z2));
    Isc_2A = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z3 + Z4 + Z2));
    Isc_2B = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z1));

    Isc_3 = ((VAnillo) * (1000)) / (((Math.sqrt(3))) * (Zfalla + (1 / ((1 / (Z1 + Z3)) + (1 / (Z4 + Z2))))));
    Isc_3D = Isc_3 * ((Z1 + Z3) / (Z1 + Z3 + Z4 + Z2));
    Isc_3I = Isc_3 * ((Z4 + Z2) / (Z1 + Z3 + Z4 + Z2));
    Isc_3A = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z4 + Z2));
    Isc_3B = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z1 + Z3));

    Isc_4 = ((VAnillo) * (1000)) / (((Math.sqrt(3))) * (Zfalla + (1 / ((1 / (Z1 + Z3 + Z4)) + (1 / (Z2))))));
    Isc_4D = Isc_4 * ((Z1 + Z3 + Z4) / (Z1 + Z3 + Z4 + Z2));
    Isc_4I = Isc_4 * ((Z2) / (Z1 + Z3 + Z4 + Z2));
    Isc_4A = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z2));
    Isc_4B = ((VAnillo) * (1000)) / ((Math.sqrt(3)) * (Zfalla + Z1 + Z3 + Z4));


    Isc_Rele1 = Math.max(Isc_2I, Isc_2B, Isc_3I, Isc_3B, Isc_4I, Isc_4B);
    Isc_Rele3 = Math.max(Isc_3I, Isc_3B, Isc_4I, Isc_4B);
    Isc_Rele4 = Math.max(Isc_2D, Isc_2A);
    Isc_Rele5 = Math.max(Isc_4I, Isc_4B);
    Isc_Rele6 = Math.max(Isc_2D, Isc_2A, Isc_3D, Isc_3A);
    Isc_Rele8 = Math.max(Isc_2D, Isc_2A, Isc_3D, Isc_3A, Isc_4D, Isc_4A)

    console.log("Z1: ", Z1)
    console.log("Z2: ", Z2)
    console.log("Z3: ", Z3)
    console.log("Z4: ", Z4)
    console.log("Zfalla: ", Zfalla)

    console.log("Vanillo: ", VAnillo)
    console.log("S1: ", S1)

    console.log("v78 ", Ic_78)
    console.log("v56 ", Ic_56)
    console.log("v34 ", Ic_34)
    console.log("v12 ", Ic_12)
    console.log("Isc_Rele1", Isc_Rele1 * 1.25)
    console.log("Isc_Rele2", Ic_A * 1.5)
    console.log("Isc_Rele3", Isc_Rele3 * 1.25)
    console.log("Isc_Rele4", Isc_Rele4 * 1.25)
    console.log("Isc_Rele5", Isc_Rele5 * 1.25)
    console.log("Isc_Rele6", Isc_Rele6 * 1.25)
    console.log("Isc_Rele7", Ic_B * 1.5)
    console.log("Isc_Rele8", Isc_Rele8 * 1.25)

    //Se imprime los valores, aplicando su factor de ajuste
    tabla_Isc_Rele1.innerText = (Isc_Rele1 * 1.25).toFixed(2);
    tabla_Isc_Rele2.innerText = (Ic_A * 1.5).toFixed(2);
    tabla_Isc_Rele3.innerText = (Isc_Rele3 * 1.25).toFixed(2);
    tabla_Isc_Rele4.innerText = (Isc_Rele4 * 1.25).toFixed(2);
    tabla_Isc_Rele5.innerText = (Isc_Rele5 * 1.25).toFixed(2);
    tabla_Isc_Rele6.innerText = (Isc_Rele6 * 1.25).toFixed(2);
    tabla_Isc_Rele7.innerText = (Ic_B * 1.5).toFixed(2);
    tabla_Isc_Rele8.innerText = (Isc_Rele8 * 1.25).toFixed(2);

    modeloReleAnillo[1].Isc = (Isc_Rele1 * 1.25).toFixed(2);
    modeloReleAnillo[2].Isc = (Ic_A * 1.5).toFixed(2);
    modeloReleAnillo[3].Isc = (Isc_Rele3 * 1.25).toFixed(2);
    modeloReleAnillo[4].Isc = (Isc_Rele4 * 1.25).toFixed(2);
    modeloReleAnillo[5].Isc = (Isc_Rele5 * 1.25).toFixed(2);
    modeloReleAnillo[6].Isc = (Isc_Rele6 * 1.25).toFixed(2);
    modeloReleAnillo[7].Isc = (Ic_B * 1.5).toFixed(2);
    modeloReleAnillo[8].Isc = (Isc_Rele8 * 1.25).toFixed(2);

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
            <th scope="row">Margen Ic</th>
            <td>
                <input type="number" class="swal2-input" value="${modeloReleAnillo[valores].margenIc}" min="0" id="swal-Anillo-margenIc">
            </td>
            <td>%</td>
            <th scope="row">Tiempo</th>
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
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <th scope="row">Tiempo(instantaneo)</th>
                <td>
                    <input  id="swal-Anillo-tInstantaneo" type="number" value="${modeloReleAnillo[valores].tiempoInstantaneo}" class="swal2-input" min="0">
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
                document.getElementById('swal-Anillo-margenIc').value,
                document.getElementById('swal-Anillo-tiempo').value,
                document.getElementById('swal-Anillo-curva').value,
                document.getElementById(swal_Anillo_tms).value,
                document.getElementById('swal-Anillo-tInstantaneo').value

                //document.getElementById('swal-Anillo-impedancia').value,

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
        modeloReleAnillo[valores].margenIc = parseFloat(datos[2]);
        modeloReleAnillo[valores].tiempo = parseFloat(datos[3]);
        modeloReleAnillo[valores].familiaCurva = datos[4];
        modeloReleAnillo[valores].TMS = parseFloat(datos[5]);
        modeloReleAnillo[valores].tiempoInstantaneo = parseFloat(datos[6]);

        document.getElementById("Isc_r" + valores).innerText = datos[0];
        document.getElementById("Ic_r" + valores).innerText = datos[1];
        document.getElementById("Margen_Ic_r" + valores).innerText = datos[2];
        document.getElementById("Tiempo_r" + valores).innerText = datos[3];
        document.getElementById("FamiliaC_r" + valores).innerText = datos[4];
        document.getElementById("TMS_r" + valores).innerText = datos[5];
        document.getElementById("Tiempo_instantaneo_r" + valores).innerText = datos[6];

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

    console.log("entro gráfica Lados Izquierdo - Derecho")
    graficarCurvaLadoIzquierdo();
    graficarCurvaLadoDerecho();

}

function graficarCurvaLadoIzquierdo() {

    functionPlot({
        target: "#Grafica-Lizquierdo",
        width: 400,
        height: 400,
        xAxis: { type: 'log', domain: [10, 100000], label: 'Corriente [A] ' },
        yAxis: { type: 'log', domain: [0.01, 10], label: 'Tiempo [Segundos]' },
        grid: true,
        data: [
            //Rele 
            {
                range: [10, 100000],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                }
            },
            // Relé
            {
                range: [10, 100000],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                }
            },
            //Relé
            {
                range: [10, 100000],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x

                }
            },
            // Relé
            {
                range: [10, 100000],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x
                }
            }
        ]
    })


}

function graficarCurvaLadoDerecho() {

    functionPlot({
        target: "#Grafica-Lderecho",
        width: 400,
        height: 400,
        xAxis: { type: 'log', domain: [10, 100000], label: 'Corriente [A] ' },
        yAxis: { type: 'log', domain: [0.01, 10], label: 'Tiempo [Segundos]' },
        grid: true,
        data: [
            //Rele 
            {
                range: [10, 100000],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x
                }
            },
            // Relé
            {
                range: [10, 100000],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x
                }
            },
            //Relé
            {
                range: [10, 100000],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x
                }
            },
            // Relé
            {
                range: [10, 100000],
                graphType: 'polyline',
                fn: function (scope) {
                    var x = scope.x
                }
            }

        ]
    })

}