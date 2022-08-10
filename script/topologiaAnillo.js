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
        nombre: "Barra 1-2",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/2_2.svg",
        impedancia: '',
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: ""
    },
    2: {
        nombre: "Barra 4-1",
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
        nombre: "Barra 2-3",
        tipo: "Barra",
        urlImagen: "./assets/images/Anillo/4_2.svg",
        impedancia: "",
        etiqueta1: "Z",
        etiqueta2: "[Ohmios]",
        potencia: ""
    },
    6: {
        nombre: "Barra 3-4",
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
    1: {
        nombre: "Rele 1",
        Isc: "",
        Ic: "",
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    },
    2: {
        nombre: "Rele 2",
        Isc: "",
        Ic: "",
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    },
    3: {
        nombre: "Rele 3",
        Isc: "",
        Ic: "",
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    },
    4: {
        nombre: "Rele 4",
        Isc: "",
        Ic: "",
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    },
    5: {
        nombre: "Rele 5",
        Isc: "",
        Ic: "",
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    },
    6: {
        nombre: "Rele 6",
        Isc: "",
        Ic: "",
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    },
    7: {
        nombre: "Rele 7",
        Isc: "",
        Ic: "",
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    },
    8: {
        nombre: "Rele 8",
        Isc: "",
        Ic: "",
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    }
}


var S1 ="", S2 ="", S3 ="", S4 = "", Z1 ="", Z2 ="", Z3 ="", Z4 = "", VAnillo ="";
var Isc_Rele1, Isc_Rele2, Isc_Rele3, Isc_Rele4, Isc_Rele5, Isc_Rele6, Isc_Rele7, Isc_Rele8;
var Ic_Rele1, Ic_Rele2, Ic_Rele3, Ic_Rele4, Ic_Rele5, Ic_Rele6, Ic_Rele7, Ic_Rele8;
var margen_Ic_r1, margen_Ic_r2, margen_Ic_r3, margen_Ic_r4, margen_Ic_r5, margen_Ic_r6, margen_Ic_r7, margen_Ic_r8;
var familiaCurvaR1, familiaCurvaR2, familiaCurvaR3, familiaCurvaR4, familiaCurvaR5, familiaCurvaR6, familiaCurvaR7, familiaCurvaR8;
var TMS_r1, TMS_r2, TMS_r3, TMS_r4, TMS_r5, TMS_r6, TMS_r7, TMS_r8;
var TMS_calculado_r1, TMS_calculado_r2, TMS_calculado_r3, TMS_calculado_r4, TMS_calculado_r5, TMS_calculado_r6, TMS_calculado_r7, TMS_calculado_r8;
var tiempo_instantaneo_r1, tiempo_instantaneo_r2, tiempo_instantaneo_r3, tiempo_instantaneo_r4, tiempo_instantaneo_r5, tiempo_instantaneo_r6, tiempo_instantaneo_r7, tiempo_instantaneo_r8;
var Ic_1_con_margen, Ic_2_con_margen, Ic_3_con_margen, Ic_4_con_margen, Ic_5_con_margen, Ic_6_con_margen, Ic_7_con_margen, Ic_8_con_margen;
var tmsAnilloOpcion1, tmsAnilloOpcion2;
var swal_anillo_tms;
var guardarAnilloOpcionTMS1 = "display:none";
var guardarAnilloOpcionTMS2 = "display:none";
var TMSparteIEC_1, TMSparteIEC_2, TMSparteIEC_3, TMSparteIEC_4, TMSparteIEC_5, TMSparteIEC_6, TMSparteIEC_7, TMSparteIEC_8;
var TMSparteANSI_1, TMSparteANSI_2, TMSparteANSI_3, TMSparteANSI_4, TMSparteANSI_5, TMSparteANSI_6, TMSparteANSI_7, TMSparteANSI_8;

var displayVoltaje = "display:none";
var displayImpedancia = "display:none";
var displayPotencia = "display:none"; 



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
var tabla_Tiempo_A = document.getElementById("Tiempo_r1");
var tabla_Tiempo_B = document.getElementById("Tiempo_r2");
var tabla_Tiempo_C = document.getElementById("Tiempo_r3");
var tabla_Tiempo_A = document.getElementById("Tiempo_r4");
var tabla_Tiempo_A = document.getElementById("Tiempo_r5");
var tabla_Tiempo_A = document.getElementById("Tiempo_r6");
var tabla_Tiempo_A = document.getElementById("Tiempo_r7");
var tabla_Tiempo_A = document.getElementById("Tiempo_r8");
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

//Funciones


function escogerSegunTipo(tipo) {
    console.log("tipo nodo: ", tipo)

    try {
        if(tipo == "Generador"){
            displayVoltaje = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayPotencia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayImpedancia = "display:none";
        }
        if(tipo == "Barra"){
            displayVoltaje = "display:none";
            displayPotencia = "display:none";
            displayImpedancia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
        }
        if(tipo == "Carga" ){
            displayVoltaje = "display:none";
            displayPotencia = "display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; ";
            displayImpedancia = "display:none";
        }

    } catch(error) {

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


function guardarAnilloGeneral(elemento, datos){
    console.log("datos pasados: ", datos);
    console.log("modeloAnillo[1].impedancia: ", modeloAnillo[1].impedancia)
    modeloAnillo[elemento].voltaje = parseFloat(datos[0]);
    modeloAnillo[elemento].potencia = parseFloat(datos[1]);
    modeloAnillo[elemento].impedancia = parseFloat(datos[2]);

    if( !isNaN(modeloAnillo[0].voltaje)   ){
        valor_diagrama_Generador.innerHTML = modeloAnillo[0].voltaje + " kV" + "<br>" ;
    } else { valor_diagrama_Generador.innerHTML = " kV" + "<br>"; }
    if (!isNaN(modeloAnillo[0].potencia) ) { valor_diagrama_Generador.innerHTML =  valor_diagrama_Generador.innerHTML +  modeloAnillo[0].potencia  + " MVA" + "<br>" }
    
    if(!isNaN(modeloAnillo[1].impedancia) ) { valor_barra_1_2.innerHTML = modeloAnillo[1].impedancia + " Ω"; } else { valor_barra_1_2.innerText = " Ω";}

    if(!isNaN(modeloAnillo[2].impedancia)) { valor_barra_4_1.innerText = modeloAnillo[2].impedancia + " Ω"; } else { valor_barra_4_1.innerText = " Ω";}

    if(!isNaN(modeloAnillo[3].potencia)) { valor_carga_izquierda.innerText = modeloAnillo[3].potencia + " MVA"; } else { valor_carga_izquierda.innerText = " MVA";}

    if(!isNaN(modeloAnillo[4].potencia)) { valor_carga_derecha.innerText = modeloAnillo[4].potencia + " MVA"; } else { valor_carga_derecha.innerText = " MVA";}

    if(!isNaN(modeloAnillo[5].impedancia)) { valor_barra_2_3.innerHTML = "<br>"+ modeloAnillo[5].impedancia + " Ω"; } else { valor_barra_2_3.innerHTML = "<br>" + " Ω";}

    if(!isNaN(modeloAnillo[6].impedancia)) { valor_barra_3_4.innerHTML = "<br>" + modeloAnillo[6].impedancia + " Ω"; } else { valor_barra_3_4.innerHTML = "<br>" + " Ω";}
    
    if(!isNaN(modeloAnillo[7].potencia)) { valor_carga_abajo.innerHTML = "<br>" + modeloAnillo[7].potencia   + " MVA"; } else { valor_carga_abajo.innerHTML= "<br>" +  " MVA";}


    
}



async function guardarValoresReles(valores) {

    escogerSegunTipo();

    const { value: formValues } = await Swal.fire({
        title: modeloReleAnillo[valores].nombre,
        html: `
        <div class="table-responsive">
        <table class="table align-middle" style="font-size:13px">
        <tr>
         <th scope="row">Isc</th>
         <td><input type="number" id="swal-Isc" value="${modeloReleAnillo[valores].Isc}" class="swal2-input" min="0"></td> 
         <td>[A]</td> 
         <th scope="row" colspan="1">Ic</th>
         <td><input type="number" class="swal2-input" id="swal-Ic" value="${modeloReleAnillo[valores].Ic}" min="0"></td>
         <td>[A]</td>
         </tr>

        
         </table>
         </div>

         `


        //  <tr>
        //  <th scope="row">Margen Ic</th><td><input type="number" class="swal2-input" value="${modeloRele[nombreRele].margenIc}" min="0" id="swal-margenIc"></td><td>%</td>

        //  <th scope="row">Tiempo</th><td><input type="number" class="swal2-input" id="swal-tiempo" value="${modeloRele[nombreRele].tiempo}" min="0"></td><td>[ms]</td></tr>         <tr><th scope="row">Familia de curva</th><td colspan="2">      <select class="form-select" id="swal-curva">  <option selected hidden>${modeloRele[nombreRele].familiaCurva}</option> <option>Normal Inversa</option><option>Muy Inversa</option><option>Extremadamente Inversa</option>     </select></td>          </tr>   <tr class="table-secondary"><th scope="row"></th><td colspan="5"></td></tr>             <tr><th scope="row">TMS(Dial)</th><td>
        // <select class="form-select selectSwal"  id="swal-TMS" >
        //   <option selected id="option-seleccionada" hidden>${modeloRele[nombreRele].TMS}</option>
        //   <option value="0.05">0.05</option><option value="0.06">0.06</option><option value="0.07">0.07</option>
        //   <option value="0.08">0.08</option><option value="0.09">0.09</option><option value="0.10">0.10</option>
        //   <option value="0.11">0.11</option><option value="0.12">0.12</option><option value="0.13">0.13</option>
        //   <option value="0.14">0.14</option><option value="0.15">0.15</option><option value="0.16">0.16</option>
        //   <option value="0.17">0.17</option><option value="0.18">0.18</option><option value="0.19">0.19</option>
        //   <option value="0.20">0.20</option><option value="0.21">0.21</option><option value="0.22">0.22</option>
        //   <option value="0.23">0.23</option><option value="0.24">0.24</option><option value="0.25">0.25</option>
        //   <option value="0.26">0.26</option><option value="0.27">0.27</option><option value="0.28">0.28</option>
        //   <option value="0.29">0.29</option><option value="0.30">0.30</option><option value="0.31">0.31</option>
        //   <option value="0.32">0.32</option><option value="0.33">0.33</option><option value="0.34">0.34</option>
        //   <option value="0.35">0.35</option><option value="0.36">0.36</option><option value="0.37">0.37</option>
        //   <option value="0.38">0.38</option><option value="0.39">0.39</option><option value="0.40">0.40</option>
        //   <option value="0.41">0.41</option><option value="0.42">0.42</option><option value="0.43">0.43</option>
        //   <option value="0.44">0.44</option><option value="0.45">0.45</option><option value="0.46">0.46</option>
        //   <option value="0.47">0.47</option><option value="0.48">0.48</option><option value="0.49">0.49</option>
        //   <option value="0.50">0.50</option><option value="0.51">0.51</option><option value="0.52">0.52</option>
        //   <option value="0.53">0.53</option><option value="0.54">0.54</option><option value="0.55">0.55</option>
        //   <option value="0.56">0.56</option><option value="0.57">0.57</option><option value="0.58">0.58</option>
        //   <option value="0.59">0.59</option><option value="0.60">0.60</option><option value="0.61">0.61</option>
        //   <option value="0.62">0.62</option><option value="0.63">0.63</option><option value="0.64">0.64</option>
        //   <option value="0.65">0.65</option><option value="0.66">0.66</option><option value="0.67">0.67</option>
        //   <option value="0.68">0.68</option><option value="0.69">0.69</option><option value="0.70">0.70</option>
        //   <option value="0.71">0.71</option><option value="0.72">0.72</option><option value="0.73">0.73</option>
        //   <option value="0.74">0.74</option><option value="0.75">0.75</option><option value="0.76">0.76</option>
        //   <option value="0.77">0.77</option><option value="0.78">0.78</option><option value="0.79">0.79</option>
        //   <option value="0.80">0.80</option><option value="0.81">0.81</option><option value="0.82">0.82</option>
        //   <option value="0.83">0.83</option><option value="0.84">0.84</option><option value="0.85">0.85</option>
        //   <option value="0.86">0.86</option><option value="0.87">0.87</option><option value="0.88">0.88</option>
        //   <option value="0.89">0.89</option><option value="0.90">0.90</option><option value="0.91">0.91</option>
        //   <option value="0.92">0.92</option><option value="0.93">0.93</option><option value="0.94">0.94</option>
        //   <option value="0.95">0.95</option><option value="0.96">0.96</option><option value="0.99">0.99</option>
        //   <option value="1">1</option>
        //   </select>


        //   </td> <th scope="row">Tiempo(instantaneo)</th><td><input  id="swal-tInstantaneo" type="number" value="${modeloReleAnillo[nombreRele].tiempoInstantaneo}" class="swal2-input" min="0"></td><td>[ms]</td></tr>





    })



}