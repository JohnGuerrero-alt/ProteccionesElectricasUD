//Declaramos las variables globales
//Declaramos un json que tendrá el esquema para ajustar y guardar los valores para cada Relé
const modeloRele = {
    0: {
        nombreRele: "A",
        urlImagenRele: './assets/images/Topologia_bus/releA.svg',
        tituloModal: "Configuración Relé A",
        Isc: null,
        Ic: null,
        IncrementoIc: null,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoCoordinacion: tabla_tiempoCoordinacion_A,
        tiempoLocal: 0,
        TMS_calculado: "",
        tiempoInstantaneo: 50
    },
    1: {
        nombreRele: "B",
        urlImagenRele: './assets/images/Topologia_bus/releB.svg',
        tituloModal: "Configuración Relé B",
        Isc: null,
        Ic: null,
        IncrementoIc: null,
        familiaCurva: tabla_familiaCurva_B,
        TMS: tabla_TMS_B,
        tiempo: tabla_Tiempo_B,
        tiempoCoordinacion: tabla_tiempoCoordinacion_B,
        tiempoLocal: 0,
        TMS_calculado: "",
        tiempoInstantaneo: 50
    },
    2: {
        nombreRele: "C",
        urlImagenRele: './assets/images/Topologia_bus/releC.svg',
        tituloModal: "Configuración Relé C",
        Isc: null,
        Ic: null,
        IncrementoIc: null,
        familiaCurva: tabla_familiaCurva_C,
        TMS: tabla_TMS_C,
        tiempo: tabla_Tiempo_C,
        tiempoCoordinacion: tabla_tiempoCoordinacion_C,
        tiempoLocal: 0,
        TMS_calculado: "",
        tiempoInstantaneo: 50
    }
}

const parametrosCurva = {
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


//Defino las variables para poder imprimirlas en la tabla
var tabla_Isc_ReleA = document.getElementById("Isc_0");
var tabla_Isc_ReleB = document.getElementById("Isc_1");
var tabla_Isc_ReleC = document.getElementById("Isc_2");
var tabla_Ic_ReleA = document.getElementById("Ic_0");
var tabla_Ic_ReleB = document.getElementById("Ic_1");
var tabla_Ic_ReleC = document.getElementById("Ic_2");
var tabla_Incremento_Ic_A = document.getElementById("Incremento_Ic_0");
var tabla_Incremento_Ic_B = document.getElementById("Incremento_Ic_1");
var tabla_Incremento_Ic_C = document.getElementById("Incremento_Ic_2");
var tabla_familiaCurva_A = document.getElementById("FamiliaC_0");
var tabla_familiaCurva_B = document.getElementById("FamiliaC_1");
var tabla_familiaCurva_C = document.getElementById("FamiliaC_2");
var tabla_TMS_A = document.getElementById("TMS_0");
var tabla_TMS_B = document.getElementById("TMS_1");
var tabla_TMS_C = document.getElementById("TMS_2");
var tabla_Tiempo_A = document.getElementById("Tiempo_0");
var tabla_Tiempo_B = document.getElementById("Tiempo_1");
var tabla_Tiempo_C = document.getElementById("Tiempo_2");
var tabla_tiempoCoordinacion_A = document.getElementById("Tiempo_coordinacion_0");
var tabla_tiempoCoordinacion_B = document.getElementById("Tiempo_coordinacion_1");
var tabla_tiempoCoordinacion_C = document.getElementById("Tiempo_coordinacion_2");

var tabla_DialCalculado_A = document.getElementById("Dial_calculado_0");
var tabla_DialCalculado_B = document.getElementById("Dial_calculado_1");
var tabla_DialCalculado_C = document.getElementById("Dial_calculado_2");

var tablaVariableTiempo = document.getElementById("tablaVariableTiempo");
var tablaVariableDial = document.getElementById("tablaVariableDial");

var estadoReleA = document.getElementById("estadoReleA");
var estadoReleB = document.getElementById("estadoReleB");
var estadoReleC = document.getElementById("estadoReleC");

var CoordinacionCporTiempo = document.getElementById("CoordinacionCporTiempo");
var CoordinacionCporDial = document.getElementById("CoordinacionCporDial");
var CoordinacionBporTiempo = document.getElementById("CoordinacionBporTiempo");
var CoordinacionBporDial = document.getElementById("CoordinacionBporDial");
var CoordinacionAporTiempo = document.getElementById("CoordinacionAporTiempo");
var CoordinacionAporDial = document.getElementById("CoordinacionAporDial");

var botonCalcularBus = document.getElementById("botonCalcularBus");


//Variables para el proceso de la coordinación --------------------------------------------------------------------
var estado = document.getElementById("Estado");
var tabGraficaBus = document.getElementById("pills-resultados-grafica-1-tab");
var ReleA_Coordinacion = document.getElementById("ReleA_Coordinacion");
var ReleB_Coordinacion = document.getElementById("ReleB_Coordinacion");
var ReleC_Coordinacion = document.getElementById("ReleC_Coordinacion");

var Paso1 = document.getElementById("Paso1");
var Paso2 = document.getElementById("Paso2");
var ajustarTiempoA = document.getElementById("ajustarTiempoA");
var ajustarTiempoB = document.getElementById("ajustarTiempoB");
var ajustarTiempoA_dial = document.getElementById("ajustarTiempoA_dial");
var ajustarTiempoB_dial = document.getElementById("ajustarTiempoB_dial");

var tabla_umbral_tiempo_B = document.getElementById("umbral_tiempo_B");
var tabla_umbral_tiempoRemoto_B = document.getElementById("umbral_tiempoRemoto_B");
var tabla_umbral_tiempo_C = document.getElementById("umbral_tiempo_C");
var tabla_nuevoumbral_tiempo_B = document.getElementById("nuevoumbral_tiempo_B");
var tabla_nuevoumbral_tiempoRemoto_B = document.getElementById("nuevoumbral_tiempoRemoto_B");
var tabla_umbral_tiempoRemoto_A = document.getElementById("umbral_tiempoRemoto_A");
var tabla_nuevoumbral_tiempoRemoto_A = document.getElementById("nuevoumbral_tiempoRemoto_A");
var tabla_umbral_tiempo_A = document.getElementById("umbral_tiempo_A");
var tabla_nuevoumbral_tiempo_A = document.getElementById("nuevoumbral_tiempo_A");

var PanelCoordinacionBus = document.getElementById("PanelCoordinacionBus");
var divcoordinacionBus = document.getElementById("divcoordinacionBus");

//----------------------------------------------------------------------------------------------------------------//

var TMSparteIEC_C, TMSparteANSI_C, TMSparteIEC_B, TMSparteANSI_B, TMSparteIEC_A, TMSparteANSI_A;
var tLocalparteIEC_C, tLocalparteANSI_C, tLocalparteANSI_B, tLocalparteIEC_B, tRemotoparteIEC_B, tRemotoparteANSI_B, tLocalparteANSI_A, tLocalparteIEC_A, tRemotoparteANSI_A, tRemotoparteIEC_A;

var valor_umbral_tiempo_A, valor_umbral_tiempo_B, valor_umbral_tiempo_C, valor_umbral_tiempoRemoto_A, valor_umbral_tiempoRemoto_B;

var ListaVariablesPrincipales = [modeloRele[0].Isc, modeloRele[0].Ic, modeloRele[0].IncrementoIc, modeloRele[1].Isc, modeloRele[1].Ic, modeloRele[1].IncrementoIc, modeloRele[2].Isc, modeloRele[2].Ic, modeloRele[2].IncrementoIc]
var ListaVariablesTotales = []
var ListaVariablesCurva = []

var tiempoOperacionCalculado_C, tiempoOperacionCalculado_B;
var tiempoRemotoCalculado_B, tiempoRemotoCalculado_A;
var tiempoRemotoEsperado_B, tiempoRemotoEsperado_A;
var umbral_tiempo_B, umbral_tiempo_C;
var umbral_tiempoRemoto_B, umbral_tiempoRemoto_A;



//Inicializamos valores para los select y option al escoger el tipo de relé
modeloRele[0].familiaCurva = "-";
modeloRele[0].TMS = "-";
modeloRele[1].familiaCurva = "-";
modeloRele[1].TMS = "-";
modeloRele[2].familiaCurva = "-";
modeloRele[2].TMS = "-";

valor_umbral_tiempo_A = 10;
valor_umbral_tiempo_B = 10;
valor_umbral_tiempo_C = 10;
valor_umbral_tiempoRemoto_A = 10;
valor_umbral_tiempoRemoto_B = 10;

estadoReleA.style.display = "none";
estadoReleB.style.display = "none";
estadoReleC.style.display = "none";

var Isc_ReleA = 0.00;
var Isc_ReleB = 0.00;
var Isc_ReleC = 0.00;

var Ic_ReleA = 0.00;
var Ic_ReleB = 0.00;
var Ic_ReleC = 0.00;

var Incremento_Ic_A = 0;
var Incremento_Ic_B = 0;
var Incremento_Ic_C = 0;

var familiaCurva_A;
var familiaCurva_B;
var familiaCurva_C;

var TMS_A = 0.00;
var TMS_B = 0.00;
var TMS_C = 0.00;

var TMS_calculado_A = 0.00;
var TMS_calculado_B = 0.00;
var TMS_calculado_C = 0.00;

var tiempo_A = 0;
var tiempo_B = 0;
var tiempo_C = 0;

var tiempo_coordinacion_A;
var tiempo_coordinacion_B;
var tiempo_coordincion_C;

var tiempo_local_C = 0;
var tiempo_local_B = 0;
var tiempo_local_A = 0;

var tiempo_remoto_B;
var tiempo_remoto_A;

var Ic_a_con_Incremento;
var Ic_b_con_Incremento;
var Ic_c_con_Incremento;

var alpha = 0.02;
var beta = 0.14;
var lambda = 0;


var swal_tms = "swal-TMS0";
var guardarOpcionTMS1 = "display:none";
var guardarOpcionTMS2 = "display:none";


var opcionVariable = "";

function habilitarTMS() {

    try {
        var selectBox = document.getElementById("swal-curva");
        var swalTMS1 = document.getElementById("swal-TMS1");
        var swalTMS2 = document.getElementById("swal-TMS2");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log("selectValue: ", selectedValue)
        if (selectedValue == "Normal Inversa - IEC" || selectedValue == "Muy Inversa - IEC" || selectedValue == "Extremadamente Inversa - IEC") {
            console.log("cumple");
            swalTMS1.style.display = "block";
            guardarOpcionTMS1 = "display:block";
            guardarOpcionTMS2 = "display:none";
            swalTMS2.style.display = "none";
            swal_tms = "swal-TMS1";
        }
        if (selectedValue == "Normal Inversa - ANSI" || selectedValue == "Muy Inversa - ANSI" || selectedValue == "Extremadamente Inversa - ANSI") {
            console.log("cumple 0");
            swalTMS1.style.display = "none";
            guardarOpcionTMS1 = "display:none";
            guardarOpcionTMS2 = "display:block";
            swalTMS2.style.display = "block";
            swal_tms = "swal-TMS2";
        }

    } catch (error) {

    }


}


//Declaramos las funciones que se utilizarán en la topología Bus
async function valoresRele(nombreRele) {

    habilitarTMS()

    //Evitar el NaN en el TMS
    try {
        if (isNaN(modeloRele[nombreRele].TMS)) { modeloRele[nombreRele].TMS = "" }
    } catch (error) {

    }

    const { value: formValues } = await Swal.fire({
        allowOutsideClick: false,
        title: modeloRele[nombreRele].tituloModal,
        imageUrl: modeloRele[nombreRele].urlImagenRele,
        imageWidth: 100,
        imageHeight: 100,
        width: 800,
        background: '#fefefe',
        html: ` 
        
        <div class="table-responsive" >
            <table class="table align-middle" style="font-size:13px">               
            <tr>
                <th scope="row">Isc</th>
                <td>
                    <input type="number" id="swal-Isc" value="${modeloRele[nombreRele].Isc}" class="swal2-input" min="0">
                </td> 
                <td>[A]</td> 
                <th scope="row" colspan="1">Ic</th>
                <td>
                    <input type="number" class="swal2-input" id="swal-Ic" value="${modeloRele[nombreRele].Ic}" min="0">
                </td>
                <td>[A]</td>
            </tr>
            <tr>
                <th scope="row">Incremento Ic</th>
                <td>
                    <input type="number" class="swal2-input" value="${modeloRele[nombreRele].IncrementoIc}" min="0" id="swal-IncrementoIc">
                </td>
                <td>%</td>
        
                <th scope="row">Familia de curva</th>
                <td colspan="2">
                    <select class="form-select" id="swal-curva" onchange="habilitarTMS()">
                        <option selected hidden>${modeloRele[nombreRele].familiaCurva}</option>
                        <option>Normal Inversa - IEC</option>
                        <option >Muy Inversa - IEC</option>
                        <option >Extremadamente Inversa - IEC</option>
                        <option>Normal Inversa - ANSI</option>
                        <option >Muy Inversa - ANSI</option><option >Extremadamente Inversa - ANSI</option>
                    </select>
                </td>
                
            </tr>
            <tr class="table-secondary">
                <th scope="row"></th>
                <td colspan="6"></td>
            </tr>
            <tr>
                <th scope="row">Tiempo <br> Operación</th>
                <td>
                    <input type="number" class="swal2-input" id="swal-tiempo" value="${modeloRele[nombreRele].tiempo}" min="0">
                </td>
                <td>[ms]</td>
                <td></td>
                <th scope="row">TMS(Dial)</th>
                <td>
                    <select class="form-select selectSwal"  id="swal-TMS0" style="display:none"></select>
                    <select class="form-select selectSwal"  id="swal-TMS1" style="${guardarOpcionTMS1}">
                        <option selected id="option-seleccionada" hidden>${modeloRele[nombreRele].TMS}</option>
                        <option value=""></option>
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
    
                    <select class="form-select selectSwal"  id="swal-TMS2" style="${guardarOpcionTMS2}">
                        <option selected id="option-seleccionada" hidden>${modeloRele[nombreRele].TMS}</option>
                        <option value="1">1</option><option value="1.1">1.1</option><option value="1.2">1.2</option>
                        <option value="1.3">1.3</option><option value="1.4">1.4</option><option value="1.5">1.5</option>
                        <option value="1.6">1.6</option><option value="1.7">1.7</option><option value="1.8">1.8</option>
                        <option value="1.9">1.9</option><option value="2">2</option><option value="2.1">2.1</option>
                        <option value="2.2">2.2</option><option value="2.3">2.3</option><option value="2.4">2.4</option>
                        <option value="2.5">2.5</option><option value="2.6">2.6</option><option value="2.7">2.7</option>
                        <option value="2.8">2.8</option><option value="2.9">2.9</option><option value="3">3</option>
                        <option value="3.1">3.1</option><option value="3.2">3.2</option><option value="3.3">3.3</option>
                        <option value="3.4">3.4</option><option value="3.5">3.5</option><option value="3.6">3.6</option>
                        <option value="3.7">3.7</option><option value="3.8">3.8</option><option value="3.9">3.9</option>
                        <option value="4">4</option><option value="4.1">4.1</option><option value="4.2">4.2</option>
                        <option value="4.3">4.3</option><option value="4.4">4.4</option><option value="4.5">4.5</option>
                        <option value="4.6">4.6</option><option value="4.7">4.7</option><option value="4.8">4.8</option>
                        <option value="4.9">4.9</option><option value="5">5</option><option value="5.1">5.1</option>
                        <option value="5.2">5.2</option><option value="5.3">5.3</option><option value="5.4">5.4</option>
                        <option value="5.5">5.5</option><option value="5.6">5.6</option><option value="5.7">5.7</option>
                        <option value="5.8">5.8</option><option value="5.9">5.9</option><option value="6">6</option>
                        <option value="6.1">6.1</option><option value="6.2">6.2</option><option value="6.3">6.3</option>
                        <option value="6.4">6.4</option><option value="6.5">6.5</option><option value="6.6">6.6</option>
                        <option value="6.7">6.7</option><option value="6.8">6.8</option><option value="6.9">6.9</option>
                        <option value="7">7</option><option value="7.1">7.1</option><option value="7.2">7.2</option>
                        <option value="7.3">7.3</option><option value="7.4">7.4</option><option value="7.5">7.5</option>
                        <option value="7.6">7.6</option><option value="7.7">7.7</option><option value="7.8">7.8</option>
                        <option value="7.9">7.9</option><option value="8">8</option><option value="8.1">8.1</option>
                        <option value="8.2">8.2</option><option value="8.3">8.3</option><option value="8.4">8.4</option>
                        <option value="8.5">8.5</option><option value="8.6">8.6</option><option value="8.7">8.7</option>
                        <option value="8.8">8.8</option><option value="8.9">8.9</option><option value="9">9</option>
                        <option value="9">9</option><option value="9.1">9.1</option><option value="9.2">9.2</option>
                        <option value="9.3">9.3</option><option value="9.4">9.4</option><option value="9.5">9.5</option>
                        <option value="9.6">9.6</option><option value="9.7">9.7</option><option value="9.8">9.8</option>
                        <option value="9.9">9.9</option>
                        <option value="10">10</option>
                    </select>
            
                </td>
            </tr>
            <tr class="table-secondary">
                <td colspan="6"></td>
            </tr>
            <tr>
                <th scope="row">Tiempo <br> Coordinación <br></th>
                <td>
                    <input  id="swal-tInstantaneo" type="number" value="${modeloRele[nombreRele].tiempoCoordinacion}" class="swal2-input" min="0">
                </td>
                <td>[ms]</td>
                
                <th scope="row">Tiempo <br> Instantáneo <br></th>
                <td>
                    <input  id="swal-tInstantaneo50" type="number" value="${modeloRele[nombreRele].tiempoInstantaneo}" class="swal2-input" min="0" max="50">
                </td>
                <td>[ms]</td>
               

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
                document.getElementById('swal-Isc').value,
                document.getElementById('swal-Ic').value,
                document.getElementById('swal-IncrementoIc').value,
                document.getElementById('swal-tiempo').value,
                document.getElementById('swal-curva').value,
                document.getElementById(swal_tms).value,
                document.getElementById('swal-tInstantaneo').value,
                document.getElementById("swal-tInstantaneo50").value
            ]
        },

    })

    if (formValues) {
        //Swal.fire(JSON.stringify(formValues))
        guardarInformacion(nombreRele, formValues)
    }

}


//Ajustar toast 
function guardarInformacion(Rele, datos) {
    console.log("formValues: ", datos)

    document.getElementById("Isc_" + Rele).innerText = datos[0];
    document.getElementById("Ic_" + Rele).innerText = datos[1];
    document.getElementById("Incremento_Ic_" + Rele).innerText = datos[2];
    document.getElementById("Tiempo_" + Rele).innerText = datos[3];
    document.getElementById("FamiliaC_" + Rele).innerText = datos[4];
    document.getElementById("TMS_" + Rele).innerText = datos[5];
    document.getElementById("Tiempo_coordinacion_" + Rele).innerText = datos[6];
    document.getElementById("Tiempo_rele50_"+ Rele).innerText = datos[7];

    if (isNaN(datos[5])) { datos[5] = "__" }

    if(parseFloat(datos[7])<=0 ) { datos[7] = "0"; }  if(parseFloat(datos[7])>=50 ) { datos[7] = "50"; } 

    //Almacenar los datos en las variables
    modeloRele[Rele].Isc = parseFloat(datos[0]);
    modeloRele[Rele].Ic = parseFloat(datos[1]);
    modeloRele[Rele].IncrementoIc = parseFloat(datos[2]);
    modeloRele[Rele].tiempo = parseFloat(datos[3]);
    modeloRele[Rele].familiaCurva = datos[4];
    modeloRele[Rele].TMS = parseFloat(datos[5]);
    modeloRele[Rele].tiempoCoordinacion = parseFloat(datos[6]);
    modeloRele[Rele].tiempoInstantaneo = parseFloat(datos[7]);

    //Cuando guarde el valor también quite el icono de warning si está en el background
    console.log("isNaN(datos[0])? : ", isNaN(datos[0]))
    isNaN(parseFloat(modeloRele[0].Isc)) == false ? tabla_Isc_ReleA.style.background = "" : "";
    isNaN(parseFloat(modeloRele[1].Isc)) == false ? tabla_Isc_ReleB.style.background = "" : "";
    isNaN(parseFloat(modeloRele[2].Isc)) == false ? tabla_Isc_ReleC.style.background = "" : "";
    isNaN(parseFloat(modeloRele[0].Ic)) == false ? tabla_Ic_ReleA.style.background = "" : "";
    isNaN(parseFloat(modeloRele[1].Ic)) == false ? tabla_Ic_ReleB.style.background = "" : "";
    isNaN(parseFloat(modeloRele[2].Ic)) == false ? tabla_Ic_ReleC.style.background = "" : "";
    isNaN(parseFloat(modeloRele[0].IncrementoIc)) == false ? tabla_Incremento_Ic_A.style.background = "" : "";
    isNaN(parseFloat(modeloRele[1].IncrementoIc)) == false ? tabla_Incremento_Ic_B.style.background = "" : "";
    isNaN(parseFloat(modeloRele[2].IncrementoIc)) == false ? tabla_Incremento_Ic_C.style.background = "" : "";
    (modeloRele[0].familiaCurva).length > 10 ? tabla_familiaCurva_A.style.background = "" : "";
    (modeloRele[1].familiaCurva).length > 10 ? tabla_familiaCurva_B.style.background = "" : "";
    (modeloRele[2].familiaCurva).length > 10 ? tabla_familiaCurva_C.style.background = "" : "";


    ListaVariablesPrincipales = [modeloRele[0].Isc, modeloRele[0].Ic, modeloRele[0].IncrementoIc, modeloRele[1].Isc, modeloRele[1].Ic, modeloRele[1].IncrementoIc, modeloRele[2].Isc, modeloRele[2].Ic, modeloRele[2].IncrementoIc]

    Swal.fire({
        title: "Guardado configuración <p style='color: gray'>Relé " + modeloRele[Rele].nombreRele + "</p>",
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


async function ajustarValoresCoordinacion(Rele) {
    const { value: formValues } = await Swal.fire({
        allowOutsideClick: false,
        title: "Coordinación " + modeloRele[Rele].nombreRele,
        // imageWidth: 100,
        // imageHeight: 100,
        width: 800,
        background: '#fefefe',
        html: `
            <div class="table-responsive" >
                <table class="table align-middle" style="font-size:13px">
                    <tr>
                        <th scope="col">Tiempo local <br> (seg)</th>
                        <td><input type="number" class="swal2-input" id="swal-tiempoLocal"  value="${modeloRele[Rele].tiempoLocal}" min="0"/> </td>
                        <td><div class="botonGuardar hoverButton" style="height:50px; width: 100px" onclick="calcularNuevoDial(${Rele})">Calcular nuevo Dial</div></td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row"></th>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <th scope="col">Dial <br> Calculado</th>
                        <td colspan="2" id="swal-tmsCalculado">${modeloRele[Rele].TMS_calculado}</td>
                        
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
                document.getElementById('swal-tiempoLocal').value,
                document.getElementById('swal-tmsCalculado').innerText

            ]
        },

    })

    if (formValues) {
        document.getElementById("Tiempo_local_" + Rele).innerText = parseFloat(formValues[0]);
        modeloRele[Rele].tiempo = parseFloat(formValues[0]);
        document.getElementById("Dial_calculado_" + Rele).innerText = parseFloat(formValues[1]);

    }


}

//Ajustar el ejemplo1
function ejemplo1() {
    tabla_Isc_ReleA.innerText = 14000;
    tabla_Isc_ReleB.innerText = 2500;
    tabla_Isc_ReleC.innerText = 650;
    tabla_Ic_ReleA.innerText = 800;
    tabla_Ic_ReleB.innerText = 100;
    tabla_Ic_ReleC.innerText = 50;
    tabla_Incremento_Ic_A.innerText = 20;
    tabla_Incremento_Ic_B.innerText = 20;
    tabla_Incremento_Ic_C.innerText = 20;
    tabla_TMS_A.innerText = "-";
    tabla_TMS_B.innerText = "-";
    tabla_TMS_C.innerText = "-";
    tabla_Tiempo_A.innerText = 200;
    tabla_Tiempo_B.innerText = 200;
    tabla_Tiempo_C.innerText = 200;
    tabla_tiempoCoordinacion_A.innerText = 200;
    tabla_tiempoCoordinacion_B.innerText = 200;
    tabla_tiempoCoordinacion_C.innerText = 200;

    //Almacenar datos en las variables
    modeloRele[0].Isc = 14000;
    modeloRele[1].Isc = 2500;
    modeloRele[2].Isc = 650;
    modeloRele[0].Ic = 800;
    modeloRele[1].Ic = 100;
    modeloRele[2].Ic = 50;
    modeloRele[0].IncrementoIc = 20;
    modeloRele[1].IncrementoIc = 20;
    modeloRele[2].IncrementoIc = 20;
    modeloRele[0].tiempo = 200;
    modeloRele[1].tiempo = 200;
    modeloRele[2].tiempo = 200;
    modeloRele[0].TMS = "-";
    modeloRele[1].TMS = "-";
    modeloRele[2].TMS = "-";
    modeloRele[0].tiempoCoordinacion = 200;
    modeloRele[1].tiempoCoordinacion = 200;
    modeloRele[2].tiempoCoordinacion = 200;
    modeloRele[0].tiempoInstantaneo = 50;
    modeloRele[1].tiempoInstantaneo = 50;
    modeloRele[2].tiempoInstantaneo = 50;

    ListaVariablesPrincipales = [modeloRele[0].Isc, modeloRele[0].Ic, modeloRele[0].IncrementoIc, modeloRele[1].Isc, modeloRele[1].Ic, modeloRele[1].IncrementoIc, modeloRele[2].Isc, modeloRele[2].Ic, modeloRele[2].IncrementoIc]

    //console.log("variables : ", ListaVariablesPrincipales)

}

function borrarTiemposBus() {
    tabla_Tiempo_A.innerText = "";
    tabla_Tiempo_B.innerText = "";
    tabla_Tiempo_C.innerText = "";

    modeloRele[0].tiempo = "-";
    modeloRele[1].tiempo = "-";
    modeloRele[2].tiempo = "-";
}

function borrarTMSBus() {
    tabla_TMS_A.innerText = "";
    tabla_TMS_B.innerText = "";
    tabla_TMS_C.innerText = "";

    modeloRele[0].TMS = "-";
    modeloRele[1].TMS = "-";
    modeloRele[2].TMS = "-";

}

//Calcular el DIAL
function calcularPasoaPaso() {

    //Para mejor comprensión en el diseño del código se inicializa valores con nombres más reconocidos
    Isc_ReleA = modeloRele[0].Isc;
    Isc_ReleB = modeloRele[1].Isc;
    Isc_ReleC = modeloRele[2].Isc;
    Ic_ReleA = modeloRele[0].Ic;
    Ic_ReleB = modeloRele[1].Ic;
    Ic_ReleC = modeloRele[2].Ic;
    Incremento_Ic_A = modeloRele[0].IncrementoIc;
    Incremento_Ic_B = modeloRele[1].IncrementoIc;
    Incremento_Ic_C = modeloRele[2].IncrementoIc;
    familiaCurva_A = modeloRele[0].familiaCurva;
    familiaCurva_B = modeloRele[1].familiaCurva;
    familiaCurva_C = modeloRele[2].familiaCurva;
    TMS_A = modeloRele[0].TMS;
    TMS_B = modeloRele[1].TMS;
    TMS_C = modeloRele[2].TMS;
    tiempo_A = modeloRele[0].tiempo;
    tiempo_B = modeloRele[1].tiempo;
    tiempo_C = modeloRele[2].tiempo;
    tiempo_coordionacion_A = modeloRele[0].tiempoCoordinacion;
    tiempo_coordinacion_B = modeloRele[1].tiempoCoordinacion;
    tiempo_coordinacion_C = modeloRele[2].tiempoCoordinacion;

    try {
        Ic_c_con_Incremento = Ic_ReleC + (Ic_ReleC) * (Incremento_Ic_C / 100)

        //DIAL en el relé C
        TMSparteIEC_C = parametrosCurva[familiaCurva_C].IEC * ((tiempo_C / 1000) * (((Math.pow(Isc_ReleC / Ic_c_con_Incremento, parametrosCurva[familiaCurva_C].alfa)) - 1) / (parametrosCurva[familiaCurva_C].beta)));
        console.log("nuevo tiempo: ", tiempo_C)

        TMSparteANSI_C = parametrosCurva[familiaCurva_C].ANSI * ((tiempo_C / 1000) * 1 / ((parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B / ((Isc_ReleC / Ic_c_con_Incremento) - parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - parametrosCurva[familiaCurva_C].C, 2))) + (parametrosCurva[familiaCurva_C].E / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - parametrosCurva[familiaCurva_C].C, 3)))));

        console.log("parteIEC C: ", TMSparteIEC_C);
        console.log("parteANSI C: ", TMSparteANSI_C)


        TMS_calculado_C = (TMSparteIEC_C + TMSparteANSI_C).toFixed(4);
        modeloRele[2].TMS_calculado = TMS_calculado_C;

        if (isNaN(TMS_calculado_C)) { TMS_calculado_C = "-" }
        document.getElementById("Dial_calculado_2").innerText = TMS_calculado_C;

        tLocalparteIEC_C = (parametrosCurva[familiaCurva_C].IEC * TMS_C * ((parametrosCurva[familiaCurva_C].beta) / ((Math.pow(Isc_ReleC / Ic_c_con_Incremento, parametrosCurva[familiaCurva_C].alfa)) - 1)));

        tLocalparteANSI_C = (parametrosCurva[familiaCurva_C].ANSI * TMS_C * ((parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B / ((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C), 2))) + (parametrosCurva[familiaCurva_C].E / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C), 3))))));

        //Hallar tiempo Local en C
        tiempo_local_C = (tLocalparteIEC_C + tLocalparteANSI_C).toFixed(4);
        modeloRele[2].tiempoLocal = tiempo_local_C;
        console.log("tiempo local C: ", tiempo_local_C)

        if (isNaN(tiempo_local_C)) { tiempo_local_C = "__" }
        document.getElementById("Tiempo_local_2").innerHTML = tiempo_local_C;


    } catch (error) {

    }

    try {
        Ic_b_con_Incremento = Ic_ReleB + (Ic_ReleB) * (Incremento_Ic_B / 100)

        //DIAL en el relé B
        TMSparteIEC_B = parametrosCurva[familiaCurva_B].IEC * ((tiempo_B / 1000) * (((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1) / (parametrosCurva[familiaCurva_B].beta)));

        TMSparteANSI_B = parametrosCurva[familiaCurva_B].ANSI * ((tiempo_B / 1000) * 1 / ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 3)))));


        TMS_calculado_B = (TMSparteIEC_B + TMSparteANSI_B).toFixed(4);
        modeloRele[1].TMS_calculado = TMS_calculado_B;
        if (isNaN(TMS_calculado_B)) { TMS_calculado_B = "-" }
        document.getElementById("Dial_calculado_1").innerText = TMS_calculado_B;

        tLocalparteIEC_B = (parametrosCurva[familiaCurva_B].IEC * TMS_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        tLocalparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI * TMS_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));


        //Hallar tiempo local en B
        tiempo_local_B = (tLocalparteIEC_B + tLocalparteANSI_B).toFixed(4);
        modeloRele[1].tiempoLocal = tiempo_local_B;
        if (isNaN(tiempo_local_B)) { tiempo_local_B = "__" }
        document.getElementById("Tiempo_local_1").innerHTML = tiempo_local_B;


        //Hallar tiempo remoto en B
        tRemotoparteIEC_B = (parametrosCurva[familiaCurva_B].IEC * TMS_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleC / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        tRemotoparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI * TMS_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));


        tiempo_remoto_B = (tRemotoparteIEC_B + tRemotoparteANSI_B).toFixed(4);
        if (isNaN(tiempo_remoto_B)) { tiempo_remoto_B = "__" }
        document.getElementById("Tiempo_remoto_1").innerHTML = tiempo_remoto_B;

    } catch (error) {

    }

    try {

        //DIAL en el relé A
        Ic_a_con_Incremento = Ic_ReleA + (Ic_ReleA) * (Incremento_Ic_A / 100)

        TMSparteIEC_A = parametrosCurva[familiaCurva_A].IEC * ((tiempo_A / 1000) * (((Math.pow(Isc_ReleA / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1) / (parametrosCurva[familiaCurva_A].beta)));

        TMSparteANSI_A = parametrosCurva[familiaCurva_A].ANSI * ((tiempo_A / 1000) * 1 / ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 3)))));


        TMS_calculado_A = (TMSparteANSI_A + TMSparteIEC_A).toFixed(4);
        modeloRele[0].TMS_calculado = TMS_calculado_A;
        if (isNaN(TMS_calculado_A)) { TMS_calculado_A = "-" }
        document.getElementById("Dial_calculado_0").innerText = TMS_calculado_A;

        //Hallar tiempo local en A
        tLocalparteIEC_A = (parametrosCurva[familiaCurva_A].IEC * TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleA / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));


        tLocalparteANSI_A = (parametrosCurva[familiaCurva_A].ANSI * TMS_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

        tiempo_local_A = (tLocalparteANSI_A + tLocalparteIEC_A).toFixed(4);
        modeloRele[0].tiempoLocal = tiempo_local_A;

        if (isNaN(tiempo_local_A)) { tiempo_local_A = "__" }
        document.getElementById("Tiempo_local_0").innerHTML = tiempo_local_A;


        //Hallar tiempo remoto en A
        tRemotoparteIEC_A = (parametrosCurva[familiaCurva_A].IEC * TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleB / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));

        tRemotoparteANSI_A = (parametrosCurva[familiaCurva_A].ANSI * TMS_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

        tiempo_remoto_A = (tRemotoparteIEC_A + tRemotoparteANSI_A).toFixed(4);

        if (isNaN(tiempo_remoto_A)) { tiempo_remoto_A = "__" }
        document.getElementById("Tiempo_remoto_0").innerHTML = tiempo_remoto_A;


    } catch (error) {
        //document.getElementById("Dial_calculado_0").innerText = "";
    }

    console.log("Incremento con a: ", Ic_a_con_Incremento)


}


//Inicializar los tooltips
const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
})


function graficarCurvaTopologiaBus() {
    TMS_A = modeloRele[0].TMS
    TMS_B = modeloRele[1].TMS
    TMS_C = modeloRele[2].TMS

    tiempo_coordinacion_A = modeloRele[0].tiempoCoordinacion;
    tiempo_coordinacion_B = modeloRele[1].tiempoCoordinacion;
    tiempo_coordinacion_C = modeloRele[2].tiempoCoordinacion;



    console.log("W1: ", tiempoOperacionCalculado_A)
    console.log("W2: ", tiempoOperacionCalculado_B)
    console.log("W3: ", parseFloat(tiempoOperacionCalculado_C))

    console.log("Que paso: ", TMS_C)

    //calcularPasoaPaso();

    console.log("entro")
    functionPlot({
        target: "#myChart",
        width: 500,
        height: 500,
        // disableZoom: true,
        xAxis: { type: 'log', domain: [10, 100000], label: 'Corriente [A] ' },
        yAxis: { type: 'log', domain: [0.01, 10], label: 'Tiempo [Segundos]' },
        grid: true,
        data: [
            //Relé A
            {
                range: [10, Isc_ReleA],
                graphType: 'polyline',

                fn: function (scope) {
                    // scope.x = {lo: Number, hi: number}
                    // simulate a line e.g. y = x
                    var x = scope.x

                    //console.log('(TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x, parametrosCurva[familiaCurva_A].alfa)) - 1))) ', (TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1))))

                    //console.log("x: ", x)
                    //console.log("x / Ic_a_con_Incremento: ", x / Ic_a_con_Incremento)
                    //console.log("Ic con Incremento a: ", Ic_a_con_Incremento)
                    //console.log("valor compl: ", (TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1))))


                    return ((parametrosCurva[familiaCurva_A].IEC * TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1))) + (parametrosCurva[familiaCurva_A].ANSI * TMS_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((x / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((x / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((x / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3)))))))
                },
                color: 'rgba(255, 179, 128, 1)',

            },
            //Relé B
            {

                graphType: 'polyline',
                range: [10, Isc_ReleB],
                fn: function (scope) {
                    // scope.x = {lo: Number, hi: number}
                    // simulate a line e.g. y = x
                    var x = scope.x

                    //console.log("x: ", x)

                    return ((parametrosCurva[familiaCurva_B].IEC * TMS_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(x / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1))) + (parametrosCurva[familiaCurva_B].ANSI * TMS_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((x / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((x / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((x / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3)))))))
                },
                color: 'rgba(85, 153, 255, 1)',

            },
            //Rele C
            {

                graphType: 'polyline',
                range: [10, Isc_ReleC],
                fn: function (scope) {
                    // scope.x = {lo: Number, hi: number}
                    // simulate a line e.g. y = x
                    var x = scope.x


                    return ((parametrosCurva[familiaCurva_C].IEC * TMS_C * ((parametrosCurva[familiaCurva_C].beta) / ((Math.pow(x / Ic_c_con_Incremento, parametrosCurva[familiaCurva_C].alfa)) - 1))) + (parametrosCurva[familiaCurva_C].ANSI * TMS_C * ((parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B / ((x / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D / (Math.pow((x / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C), 2))) + (parametrosCurva[familiaCurva_C].E / (Math.pow((x / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C), 3)))))))
                },
                color: 'rgba(113, 200, 55, 1)',

            },
            //Linea corte Relé A - Punto actuación relé 50
            {
                points: [
                    [Isc_ReleA, tiempoOperacionCalculado_A],
                    //[Isc_ReleA, tiempo_local_A],
                    //Punto relé 50 instantáneo: 50ms
                    [Isc_ReleA, modeloRele[0].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(255, 179, 128, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            //Linea corte Relé B - Punto actuación relé 50
            {
                points: [
                    [Isc_ReleB, tiempoOperacionCalculado_B],
                    //[Isc_ReleB, tiempo_local_B],
                    //Punto relé 50 , instantáneo 50ms
                    [Isc_ReleB, modeloRele[1].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(85, 153, 255, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            //Linea corte Relé C - Punto actuación relé 50
            {
                points: [
                    [Isc_ReleC, parseFloat(tiempoOperacionCalculado_C)],
                    //[Isc_ReleC, tiempo_local_C],
                    //Punto relé 50  : instantáneo 50mS
                    [Isc_ReleC, modeloRele[2].tiempoInstantaneo/1000]

                ],
                fnType: 'points',
                color: 'rgba(113, 200, 55, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },

        ],
    });

    //Reestablecer variables para una nueva gráfica
    if (opcionVariable == "Tiempo") {
        borrarTMSBus()
    }
    if (opcionVariable == "Dial") {
        ""
    }


}

function CoordinacionBus() {

    console.log("valor_umbral_tiempo_A ", valor_umbral_tiempo_A)

    tabla_Isc_ReleA.style.background = ""; tabla_Isc_ReleB.style.background = ""; tabla_Isc_ReleC.style.background = "";
    tabla_Ic_ReleA.style.background = ""; tabla_Ic_ReleB.style.background = ""; tabla_Ic_ReleC.style.background = "";
    tabla_Incremento_Ic_A.style.background = ""; tabla_Incremento_Ic_B.style.background = ""; tabla_Incremento_Ic_C.style.background = "";
    tabla_familiaCurva_A.style.background = ""; tabla_familiaCurva_B.style.background = ""; tabla_familiaCurva_C.style.background = "";
    divcoordinacionBus.scrollTo({
        top: 0,
        behavior: "smooth"
    })


    Paso1.style.display = "none";
    Paso2.style.display = "none";
    tabGraficaBus.style.display = "none";
    ReleA_Coordinacion.style.display = "none";
    ReleB_Coordinacion.style.display = "none";
    ReleC_Coordinacion.style.display = "none";

    estadoReleA.style.display = "none";
    estadoReleB.style.display = "none";
    estadoReleC.style.display = "none";
    estado.innerText = "Estado";
    estado.style.background = "#7ba9ee";

    CoordinacionCporTiempo.style.display = "none";
    CoordinacionCporDial.style.display = "none";
    CoordinacionBporTiempo.style.display = "none";
    CoordinacionBporDial.style.display = "none";
    CoordinacionAporTiempo.style.display = "none";
    CoordinacionAporDial.style.display = "none";

    tablaVariableDial.style.background = "#fefefe";
    tablaVariableTiempo.style.background = "#fefefe";

    tabla_umbral_tiempo_C.style.background = "#fefefe";
    tabla_umbral_tiempo_B.style.background = "#fefefe";
    tabla_umbral_tiempoRemoto_B.style.background = "#fefefe";
    tabla_nuevoumbral_tiempo_B.style.background = "#fefefe";
    tabla_nuevoumbral_tiempoRemoto_B.style.background = "#fefefe";
    tabla_umbral_tiempo_A.style.background = "#fefefe";
    tabla_umbral_tiempoRemoto_A.style.background = "#fefefe";
    tabla_nuevoumbral_tiempoRemoto_A.style.background = "#fefefe";
    tabla_nuevoumbral_tiempo_A.style.background = "#fefefe";

    ajustarTiempoB_dial.style.display = "none";

    document.getElementById("nuevoTMS_calculado_A").style.background = "#fefefe";
    document.getElementById("nuevoumbral_tiempo_A").style.background = "#fefefe";
    document.getElementById("nuevoumbral_tiempoRemoto_A").style.background = "#fefefe";
    document.getElementById("umbral_tiempoRemoto_B_dial").style.background = "#fefefe";

    //Comprobar que las variables principales si tienen un valor asignado
    var ComprobacionDatos;// Variable interna para hacer la comprobación de campos
    var ListaCamposFaltantes = [];

    ListaVariablesPrincipales = [modeloRele[0].Isc, modeloRele[0].Ic, modeloRele[0].IncrementoIc, modeloRele[1].Isc, modeloRele[1].Ic, modeloRele[1].IncrementoIc, modeloRele[2].Isc, modeloRele[2].Ic, modeloRele[2].IncrementoIc];
    ListaVariablesCurva = [modeloRele[0].familiaCurva, modeloRele[1].familiaCurva, modeloRele[2].familiaCurva]

    console.log("Lista: ", ListaVariablesPrincipales)

    var i = 0
    ListaVariablesPrincipales.forEach(element => {
        console.log(element)
        if (element == null || isNaN(element) || element == undefined) {
            ComprobacionDatos = false;
            ListaCamposFaltantes[i] = false;
        } else { ListaCamposFaltantes[i] = true; }
        i++
    });
    console.log(
        "Lista campos faltantes: ", ListaCamposFaltantes
    )

    console.log((modeloRele[0].familiaCurva).length)
    console.log((modeloRele[1].familiaCurva).length)
    console.log((modeloRele[2].familiaCurva).length)

    if ((modeloRele[0].familiaCurva).length < 10 || (modeloRele[1].familiaCurva).length <= 10 || (modeloRele[2].familiaCurva).length <= 10) {
        console.log("entro")
        ComprobacionDatos = false
    }

    console.log("fC: ", (modeloRele[0].familiaCurva).length)
    console.log("comprobacion: ", ComprobacionDatos)

    ComprobacionDatos == false ? (Swal.fire({
        title: "Datos incompletos", html: `
    <div style="text-align: justify">
        Ingrese los campos faltantes señalados con el icono <img src="./assets/images/warning.svg" height="20px" width="20px">
    </div>` }), camposFaltantes(ListaCamposFaltantes)) : (estado.innerText = "Primer paso completado", console.log("funciona?"), paso1());

}


//Avise al usuario cuando campo es faltante
function camposFaltantes(ListaCamposFaltantes) {
    var rutaImagen = "url('./assets/images/warning.svg') no-repeat ";
    console.log("Lista campos faltantes exportados: ", ListaCamposFaltantes)

    estado.innerText = "Datos incompletos";
    estado.style.background = "#fa1e4e";

    //Notificar Variables relé A
    ListaCamposFaltantes[0] == false ? (tabla_Isc_ReleA.style.background = rutaImagen, tabla_Isc_ReleA.style.backgroundPosition = "center left", tabla_Isc_ReleA.style.backgroundSize = "20px 20px") : "";
    ListaCamposFaltantes[1] == false ? (tabla_Ic_ReleA.style.background = rutaImagen, tabla_Ic_ReleA.style.backgroundPosition = "center left", tabla_Ic_ReleA.style.backgroundSize = "20px 20px") : "";
    ListaCamposFaltantes[2] == false ? (tabla_Incremento_Ic_A.style.background = rutaImagen, tabla_Incremento_Ic_A.style.backgroundPosition = "center left", tabla_Incremento_Ic_A.style.backgroundSize = "20px 20px") : "";
    (modeloRele[0].familiaCurva).length < 10 ? (tabla_familiaCurva_A.style.background = rutaImagen, tabla_familiaCurva_A.style.backgroundPosition = "center left", tabla_familiaCurva_A.style.backgroundSize = "20px 20px") : "";

    //Notificar Variables relé B
    ListaCamposFaltantes[3] == false ? (tabla_Isc_ReleB.style.background = rutaImagen, tabla_Isc_ReleB.style.backgroundPosition = "center left", tabla_Isc_ReleB.style.backgroundSize = "20px 20px") : "";
    ListaCamposFaltantes[4] == false ? (tabla_Ic_ReleB.style.background = rutaImagen, tabla_Ic_ReleB.style.backgroundPosition = "center left", tabla_Ic_ReleB.style.backgroundSize = "20px 20px") : "";
    ListaCamposFaltantes[5] == false ? (tabla_Incremento_Ic_B.style.background = rutaImagen, tabla_Incremento_Ic_B.style.backgroundPosition = "center left", tabla_Incremento_Ic_B.style.backgroundSize = "20px 20px") : "";
    (modeloRele[1].familiaCurva).length < 10 ? (tabla_familiaCurva_B.style.background = rutaImagen, tabla_familiaCurva_B.style.backgroundPosition = "center left", tabla_familiaCurva_B.style.backgroundSize = "20px 20px") : "";

    //Notificar Variables relé C
    ListaCamposFaltantes[6] == false ? (tabla_Isc_ReleC.style.background = rutaImagen, tabla_Isc_ReleC.style.backgroundPosition = "center left", tabla_Isc_ReleC.style.backgroundSize = "20px 20px") : "";
    ListaCamposFaltantes[7] == false ? (tabla_Ic_ReleC.style.background = rutaImagen, tabla_Ic_ReleC.style.backgroundPosition = "center left", tabla_Ic_ReleC.style.backgroundSize = "20px 20px") : "";
    ListaCamposFaltantes[8] == false ? (tabla_Incremento_Ic_C.style.background = rutaImagen, tabla_Incremento_Ic_C.style.backgroundPosition = "center left", tabla_Incremento_Ic_C.style.backgroundSize = "20px 20px") : "";
    (modeloRele[2].familiaCurva).length < 10 ? (tabla_familiaCurva_C.style.background = rutaImagen, tabla_familiaCurva_C.style.backgroundPosition = "center left", tabla_familiaCurva_C.style.backgroundSize = "20px 20px") : "";

}


function paso1() {
    //Inicializo variables para comprobar si hay valor asignado en los tiempos o en los dial
    var ListaTiempo = [modeloRele[0].tiempo, modeloRele[1].tiempo, modeloRele[2].tiempo];
    var ListaDIAL = [modeloRele[2].TMS];
    var ComprobarTiempo;
    var ComprobarDial;

    ListaTiempo.forEach(element => {
        if (element == null || isNaN(element) || element == undefined) { ComprobarTiempo = false }
    });

    ListaDIAL.forEach(element => {
        if (element == null || isNaN(element) || element == undefined) { ComprobarDial = false } else { ComprobarDial = true }
    });

    console.log("modeloRele[0].tiempo ", modeloRele[0].tiempo)
    console.log("modeloRele[1].tiempo ", modeloRele[1].tiempo)
    console.log("modeloRele[2].tiempo ", modeloRele[2].tiempo)

    console.log("Lista Tiempo: ", ListaTiempo)
    console.log("Lista Dial: ", ListaDIAL)
    console.log("ComprobarTiempo: ", ComprobarTiempo)
    console.log("ComprobarDial: ", ComprobarDial)

    if (ComprobarTiempo == false && ComprobarDial == false) {
        Paso1.style.display = "block";
    } else {
        if (ComprobarTiempo !== false && ComprobarDial == false) {
            opcionVariable = "Tiempo"
            paso2('Tiempo')

        }
        if (ComprobarDial == true) {
            opcionVariable = "Dial"
            paso2('Dial')
        }
    }

}


//Cálculo según la variable 
function paso2(tipoDeVaribleUtilizar) {


    if (tipoDeVaribleUtilizar == "Tiempo") {
        Paso2.style.display = "block";
        Paso2.innerText = "La variable predominante para la siguiente coordinación son los valores de los tiempos de operación para los relés A, B y C.";
        tablaVariableTiempo.style.background = "#bde0fe"
        CalcularConTiempoReleC();

    }
    if (tipoDeVaribleUtilizar == "Dial") {
        Paso2.style.display = "block";
        Paso2.innerText = "La variable predominante para la siguiente coordinación es el valor del TMS presente en el relé C y si están almacenados, los del relé B y relé A.";
        tablaVariableDial.style.background = "#bde0fe";
        CalcularConDialReleC();
    }


}

function CalcularConTiempoReleC() {
    Isc_ReleA = modeloRele[0].Isc;
    Isc_ReleB = modeloRele[1].Isc;
    Isc_ReleC = modeloRele[2].Isc;
    Ic_ReleA = modeloRele[0].Ic;
    Ic_ReleB = modeloRele[1].Ic;
    Ic_ReleC = modeloRele[2].Ic;
    Incremento_Ic_A = modeloRele[0].IncrementoIc;
    Incremento_Ic_B = modeloRele[1].IncrementoIc;
    Incremento_Ic_C = modeloRele[2].IncrementoIc;
    familiaCurva_A = modeloRele[0].familiaCurva;
    familiaCurva_B = modeloRele[1].familiaCurva;
    familiaCurva_C = modeloRele[2].familiaCurva;
    TMS_A = modeloRele[0].TMS;
    TMS_B = modeloRele[1].TMS;
    TMS_C = modeloRele[2].TMS;
    tiempo_coordinacion_A = modeloRele[0].tiempoCoordinacion;
    tiempo_coordinacion_B = modeloRele[1].tiempoCoordinacion;
    tiempo_coordinacion_C = modeloRele[2].tiempoCoordinacion;


    //Cálculo de la corriente con el Incremento
    Ic_c_con_Incremento = Ic_ReleC + (Ic_ReleC) * (Incremento_Ic_C / 100)
    tiempo_C = modeloRele[2].tiempo;

    //DIAL en el relé C
    TMSparteIEC_C = parametrosCurva[familiaCurva_C].IEC * ((tiempo_C / 1000) * (((Math.pow(Isc_ReleC / Ic_c_con_Incremento, parametrosCurva[familiaCurva_C].alfa)) - 1) / (parametrosCurva[familiaCurva_C].beta)));
    TMSparteIEC_C = TMSparteIEC_C.toFixed(2);


    TMSparteANSI_C = parametrosCurva[familiaCurva_C].ANSI * ((tiempo_C / 1000) * 1 / ((parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B / ((Isc_ReleC / Ic_c_con_Incremento) - parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - parametrosCurva[familiaCurva_C].C, 2))) + (parametrosCurva[familiaCurva_C].E / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - parametrosCurva[familiaCurva_C].C, 3)))));

    TMSparteANSI_C = TMSparteANSI_C.toFixed(1);

    TMSparteANSI_C = parseFloat(TMSparteANSI_C)
    console.log("TMSparteANSI_C antes ", TMSparteANSI_C)

    //Condición para ampliar el margen cuando la curva es ANSI y valor por debajo de 1 pero igual o mayor a 0.8
    if ((TMSparteANSI_C >= 0.8 && TMSparteANSI_C < 1) && TMSparteANSI_C !== 0) {
        console.log("cumple el no")
        TMSparteANSI_C = 1;
    }
    console.log("TMSparteANSI_C", TMSparteANSI_C)
    if (TMSparteANSI_C >= 1 || TMSparteANSI_C == 0) {

        //valor del Dial Total teniendo en cuenta el tipo de curva con el que se trabajo
        TMS_calculado_C = parseFloat(TMSparteIEC_C) + parseFloat(TMSparteANSI_C);

        console.log("parteIEC C: ", TMSparteIEC_C);
        console.log("TMSparteANSI_C", TMSparteANSI_C)


        //Comprobar tiempo calculado con el tiempo dado - tiempoOperacionCalculado_C
        tLocalparteIEC_C = (parametrosCurva[familiaCurva_C].IEC * parseFloat(TMSparteIEC_C) * ((parametrosCurva[familiaCurva_C].beta) / ((Math.pow(Isc_ReleC / Ic_c_con_Incremento, parametrosCurva[familiaCurva_C].alfa)) - 1)));

        tLocalparteANSI_C = (parametrosCurva[familiaCurva_C].ANSI * parseFloat(TMSparteANSI_C) * ((parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B / ((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C), 2))) + (parametrosCurva[familiaCurva_C].E / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C), 3))))));



        tiempoOperacionCalculado_C = tLocalparteIEC_C + tLocalparteANSI_C
        tiempoOperacionCalculado_C = tiempoOperacionCalculado_C.toFixed(4);

        //Mirar el Umbral del tiempo para verificar
        umbral_tiempo_C = (Math.abs((tiempo_C / 1000) - parseFloat(tiempoOperacionCalculado_C)) / (tiempo_C / 1000)) * 100;
        console.log(Math.abs((tiempo_C / 1000) - parseFloat(tiempoOperacionCalculado_C)))
        console.log(tiempo_C)

        modeloRele[2].TMS = TMS_calculado_C;

        //------------------------------------------------------------------------------------Imprimir datos--------
        ReleC_Coordinacion.style.display = "block";
        CoordinacionCporTiempo.style.display = "block";
        //
        document.getElementById("TMS_calculado_C").innerText = TMS_calculado_C;
        document.getElementById("tiempoOperacionSuministrado_C").innerText = (tiempo_C / 1000).toFixed(4);
        document.getElementById("tiempoOperacionCalculado_C").innerText = tiempoOperacionCalculado_C
        document.getElementById("umbral_tiempo_C").innerText = umbral_tiempo_C.toFixed(4);


        umbral_tiempo_C > valor_umbral_tiempo_C ? (
            estado.style.backgroundColor = "#fa1e4e",
            estado.innerText = "El tiempo local C superó el umbral aceptable",
            estadoReleC.style.display = "block",
            estadoReleC.innerText = "Con el tiempo suministrado, no es posible ajustar el Relé C.",
            //Restablecer los valores
            modeloRele[0].TMS = "-",
            modeloRele[1].TMS = "-",
            modeloRele[2].TMS = "-",
            tabla_umbral_tiempo_C.style.background = "#ffc8dd",

            console.log("ELLLLLLl ", modeloRele[2].TMS)

        ) : (
            estadoReleC.style.display = "block",
            estadoReleC.innerText = "Con este DIAL, esta dentro del umbral aceptable.",
            tabla_umbral_tiempo_C.style.background = "#d0f4de",
            CalcularTiempoReleB_usandoTiempo()
        );


    }


    else {

        TMS_calculado_C = parseFloat(TMSparteIEC_C) + parseFloat(TMSparteANSI_C);
        estado.innerText = "Con la familia de curva seleccionada no es posible el ajuste, no cumple con el mínimo valor disponible para esta curva.";
        estado.style.backgroundColor = "#fa1e4e";
        ReleC_Coordinacion.style.display = "block";
        CoordinacionCporTiempo.style.display = "block";
        //
        document.getElementById("TMS_calculado_C").innerText = TMS_calculado_C;
        //Restablecer las variables por si vuelven a presionar el botón "Calcular"
        modeloRele[0].TMS = "-";
        modeloRele[1].TMS = "-";
        modeloRele[2].TMS = "-";
    }



}

function CalcularTiempoReleB_usandoTiempo() {

    Isc_ReleA = modeloRele[0].Isc;
    Isc_ReleB = modeloRele[1].Isc;
    Isc_ReleC = modeloRele[2].Isc;
    Ic_ReleA = modeloRele[0].Ic;
    Ic_ReleB = modeloRele[1].Ic;
    Ic_ReleC = modeloRele[2].Ic;
    Incremento_Ic_A = modeloRele[0].IncrementoIc;
    Incremento_Ic_B = modeloRele[1].IncrementoIc;
    Incremento_Ic_C = modeloRele[2].IncrementoIc;
    familiaCurva_A = modeloRele[0].familiaCurva;
    familiaCurva_B = modeloRele[1].familiaCurva;
    familiaCurva_C = modeloRele[2].familiaCurva;
    TMS_A = modeloRele[0].TMS;
    TMS_B = modeloRele[1].TMS;
    TMS_C = modeloRele[2].TMS;
    tiempo_coordinacion_A = modeloRele[0].tiempoCoordinacion;
    tiempo_coordinacion_B = modeloRele[1].tiempoCoordinacion;
    tiempo_coordinacion_C = modeloRele[2].tiempoCoordinacion;


    //Cálculo de la corriente con el Incremento
    Ic_b_con_Incremento = Ic_ReleB + (Ic_ReleB) * (Incremento_Ic_B / 100);
    tiempo_B = modeloRele[1].tiempo;
    console.log("Ic_b_con_Incremento", Ic_b_con_Incremento)

    //DIAL en el relé B
    TMSparteIEC_B = parametrosCurva[familiaCurva_B].IEC * ((tiempo_B / 1000) * (((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1) / (parametrosCurva[familiaCurva_B].beta)));
    TMSparteIEC_B = TMSparteIEC_B.toFixed(2);

    TMSparteANSI_B = parametrosCurva[familiaCurva_B].ANSI * ((tiempo_B / 1000) * 1 / ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 3)))));
    TMSparteANSI_B = TMSparteANSI_B.toFixed(1);

    //valor del Dial Total teniendo en cuenta el tipo de curva con el que se trabajo
    TMS_calculado_B = parseFloat(TMSparteIEC_B) + parseFloat(TMSparteANSI_B);

    //Comprobar tiempo calculado con el tiempo dado - tiempoOperacionCalculado_B
    tLocalparteIEC_B = (parametrosCurva[familiaCurva_B].IEC * TMS_calculado_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

    tLocalparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI * TMS_calculado_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));

    tiempoOperacionCalculado_B = tLocalparteIEC_B + tLocalparteANSI_B;

    //Mirar el Umbral del tiempo para verificar
    umbral_tiempo_B = (Math.abs((tiempo_B / 1000) - parseFloat(tiempoOperacionCalculado_B)) / (tiempo_B / 1000)) * 100;
    console.log(Math.abs((tiempo_B / 1000) - parseFloat(tiempoOperacionCalculado_B)))

    if (umbral_tiempo_B > valor_umbral_tiempo_B) {
        tabla_umbral_tiempo_B.style.background = "#ffc8dd";
        estado.innerText = "El valor del tiempo local B supera el umbral.";
        ReleB_Coordinacion.style.display = "block";
        estado.style.backgroundColor = "#fa1e4e";
        CoordinacionBporTiempo.style.display = "block";
        estadoReleB.innerText = "El valor del tiempo local B supera el umbral suministrado, modifique el parámetro del umbral del tiempo local o el valor del tiempo de operación. ";
        estadoReleB.style.display = "block";

        modeloRele[0].TMS = "-";
        modeloRele[1].TMS = "-";
        modeloRele[2].TMS = "-";


    } else {
        tabla_umbral_tiempo_B.style.background = "#d0f4de";

        console.log("tiempo cooooo: ", tiempo_coordinacion_B)

        isNaN(tiempo_coordinacion_B) ? tiempo_coordinacion_B = tiempoOperacionCalculado_C * 1000 : "";


        //Tiempo en operación en tiempo remoto
        tiempoRemotoEsperado_B = parseFloat(tiempoOperacionCalculado_C) + (tiempo_coordinacion_B / 1000);
        console.log("tiempoRemotoEsperado_B", tiempoRemotoEsperado_B)



        //Hallar tiempo remoto en B
        tRemotoparteIEC_B = (parametrosCurva[familiaCurva_B].IEC * TMS_calculado_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleC / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        tRemotoparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI * TMS_calculado_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));

        tiempoRemotoCalculado_B = tRemotoparteIEC_B + tRemotoparteANSI_B;
        console.log("tiempoRemotoCalculado_B ", tiempoRemotoCalculado_B)


        //Hallar umbral del tiempo remoto en B
        umbral_tiempoRemoto_B = ((Math.abs((parseFloat(tiempoOperacionCalculado_C) + (tiempo_coordinacion_B / 1000)) - tiempoRemotoCalculado_B) / (parseFloat(tiempoOperacionCalculado_C) + (tiempo_coordinacion_B / 1000))) * 100);

        console.log("umbral remoto B ", umbral_tiempoRemoto_B)
        //tiempoRemotoCalculado_B = tiempoRemotoCalculado_B.toFixed(4);

        if (parseFloat(umbral_tiempoRemoto_B) > valor_umbral_tiempoRemoto_B) {
            console.log("entro al umbral B")
            estado.innerText = "El tiempo de operación remoto B no se ajusta";
            estado.style.backgroundColor = "#fa1e4e";
            tabla_umbral_tiempoRemoto_B.style.background = "#ffc8dd";

            //-------------------------------------------------------------Imprimir datos-------------------------
            ReleB_Coordinacion.style.display = "block";
            CoordinacionBporTiempo.style.display = "block";
            //
            document.getElementById("TMS_calculado_B").innerText = TMS_calculado_B;
            document.getElementById("umbral_tiempo_B").innerText = umbral_tiempo_B.toFixed(4);
            document.getElementById("tiempoOperacionSuministrado_B").innerText = (tiempo_B / 1000).toFixed(4);
            document.getElementById("tiempoOperacionCalculado_B").innerText = tiempoOperacionCalculado_B.toFixed(4);
            //document.getElementById("umbral_tiempo_C").innerText = umbral_tiempo_C.toFixed(4);
            document.getElementById("tiempoCoordinacionSuministrado_B").innerHTML = (tiempo_coordinacion_B / 1000).toFixed(4);
            document.getElementById("tiempoRemotoEsperado_B").innerText = tiempoRemotoEsperado_B.toFixed(4);
            document.getElementById("tiempoRemotoCalculado_B").innerText = tiempoRemotoCalculado_B.toFixed(4);
            document.getElementById("umbral_tiempoRemoto_B").innerText = umbral_tiempoRemoto_B.toFixed(4);


            //Cuadro resultado
            ajustarTiempoB.style.display = "block";

            ajustarTiempoB_usandoTiempo()

        } else {

            estado.innerText = "El tiempo de operación remoto  B se ajusta ";
            estado.style.backgroundColor = "green";
            estadoReleB.style.display = "block";
            estadoReleB.innerText = "Con el DIAL presente, se ajusta el relé B.";
            tabla_umbral_tiempoRemoto_B.style.background = "#d0f4de";




            //Imprimir valores para el cuadro B
            ReleB_Coordinacion.style.display = "block";
            CoordinacionBporTiempo.style.display = "block";
            document.getElementById("TMS_calculado_B").innerText = TMS_calculado_B;
            document.getElementById("tiempoOperacionSuministrado_B").innerText = (tiempo_B / 1000).toFixed(4);
            document.getElementById("umbral_tiempo_B").innerText = umbral_tiempo_B.toFixed(4);
            document.getElementById("tiempoOperacionSuministrado_B").innerText = (tiempo_B / 1000).toFixed(4);
            document.getElementById("tiempoOperacionCalculado_B").innerText = tiempoOperacionCalculado_B.toFixed(4);
            //document.getElementById("umbral_tiempo_C").innerText = umbral_tiempo_C.toFixed(4);
            document.getElementById("tiempoCoordinacionSuministrado_B").innerHTML = (tiempo_coordinacion_B / 1000).toFixed(4);
            document.getElementById("tiempoRemotoEsperado_B").innerText = tiempoRemotoEsperado_B.toFixed(4);
            document.getElementById("tiempoRemotoCalculado_B").innerText = tiempoRemotoCalculado_B.toFixed(4);
            document.getElementById("umbral_tiempoRemoto_B").innerText = umbral_tiempoRemoto_B.toFixed(4);

            //Cuadro resultado
            ajustarTiempoB.style.display = "none";


            modeloRele[1].TMS = TMS_calculado_B;
            CalcularTiempoReleA()


        }



    }












}



var nuevotiempoRemotoCalculado_B, nuevotiempoRemotoEsperado_B, nuevoTMS_calculado_B;
var nuevotiempoLocalCalculado_B
var nuevotRemoto_B, nuevoumbral_tiempoRemoto_B, nuevotiempoOperacionCalculado_B, nuevoumbral_tiempoOperacion_B



function ajustarTiempoB_usandoTiempo() {

    //Se halla el nuevo Dial con el tiempo remoto esperado

    // nuevotiempoLocalCalculado_A = nuevotiempoRemotoCalculado_A - (tiempo_A / 1000);

    // console.log("nuevotiempoLocalCalculado_A", nuevotiempoLocalCalculado_A)

    console.log("parametrosCurva[familiaCurva_B].IEC", parametrosCurva[familiaCurva_B].IEC)

    //Si se esta trabajando con curva IEC
    if (parametrosCurva[familiaCurva_B].IEC == 1) {

        //TMS B calculandolo con el tiempo remoto esperado
        nuevoTMS_calculado_B = parametrosCurva[familiaCurva_B].IEC * ((tiempoRemotoEsperado_B) * (((Math.pow(Isc_ReleC / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1) / (parametrosCurva[familiaCurva_B].beta)));
        nuevoTMS_calculado_B = nuevoTMS_calculado_B.toFixed(2);
        nuevoTMS_calculado_B = parseFloat(nuevoTMS_calculado_B);

        console.log("TMS_calculado_B", nuevoTMS_calculado_B)
        console.log("tiempoRemotoEsperado_B", tiempoRemotoEsperado_B)

        nuevotiempoOperacionCalculado_B = (parametrosCurva[familiaCurva_B].IEC * nuevoTMS_calculado_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        console.log("nuevotiempoOperacionCalculado_B", parseFloat(nuevotiempoOperacionCalculado_B))

        nuevotiempoRemotoEsperado_B = parseFloat(tiempoOperacionCalculado_C) + (tiempo_B / 1000)
        nuevotiempoRemotoEsperado_B = nuevotiempoRemotoEsperado_B.toFixed(4);
        nuevotiempoRemotoEsperado_B = parseFloat(nuevotiempoRemotoEsperado_B);

        nuevotiempoRemotoCalculado_B = (parametrosCurva[familiaCurva_B].IEC * nuevoTMS_calculado_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleC / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));


        console.log("nuevotiempoRemotoCalculado_B ", nuevotiempoRemotoCalculado_B)

        nuevoumbral_tiempoOperacion_B = (Math.abs(tiempoOperacionCalculado_B - nuevotiempoOperacionCalculado_B) / ((tiempoOperacionCalculado_B)) * 100);



        console.log("tiempoOperacionCalculado_B", tiempoOperacionCalculado_B)
        console.log("nuevoumbral_tiempoOperacion_B", nuevoumbral_tiempoOperacion_B)

        nuevoumbral_tiempoRemoto_B = (Math.abs(nuevotiempoRemotoEsperado_B - nuevotiempoRemotoCalculado_B) / ((nuevotiempoRemotoEsperado_B)) * 100);


        console.log("nuevotiempoRemotoEsperado_B: ", nuevotiempoRemotoEsperado_B)
        console.log("nuevotiempoRemotoCalculado_B: ", nuevotiempoRemotoCalculado_B)

        console.log(" nuevoumbral_tiempoRemoto_B nuevoumbral_tiempoRemoto_B nuevoumbral_tiempoRemoto_B nuevoumbral_tiempoRemoto_B: ", nuevoumbral_tiempoRemoto_B)

        document.getElementById("nuevoTMS_calculado_B").innerText = nuevoTMS_calculado_B.toFixed(2);
        document.getElementById("nuevotiempoOperacionCalculado_B").innerText = parseFloat(nuevotiempoOperacionCalculado_B).toFixed(4);
        document.getElementById("nuevoumbral_tiempo_B").innerText = nuevoumbral_tiempoOperacion_B.toFixed(4);
        document.getElementById("nuevotiempoRemotoEsperado_B").innerText = parseFloat(nuevotiempoRemotoEsperado_B).toFixed(4);
        document.getElementById("nuevotiempoRemotoCalculado_B").innerText = nuevotiempoRemotoCalculado_B.toFixed(4);
        document.getElementById("nuevoumbral_tiempoRemoto_B").innerText = parseFloat(nuevoumbral_tiempoRemoto_B).toFixed(4);


        if (nuevoumbral_tiempoOperacion_B > valor_umbral_tiempo_B) {
            tabla_nuevoumbral_tiempo_B.style.background = "#ffc8dd";
            modeloRele[0].TMS = "-";
            modeloRele[1].TMS = "-";
            modeloRele[2].TMS = "-";
            estadoReleB.style.display = "El tiempo de operació no esta dentro del umbral asignado. Modifique el parámetro";
            estado.innerText = "No se pudo ajustar el valor de tiempo de operación local en B. ";
            estado.style.background = "#fa1e4e";


        } else {
            tabla_nuevoumbral_tiempo_B.style.background = "#d0f4de";



            if (nuevoumbral_tiempoRemoto_B > valor_umbral_tiempoRemoto_B) {

                //Restablecer los valores
                modeloRele[0].TMS = "-";
                modeloRele[1].TMS = "-";
                modeloRele[2].TMS = "-";

                estadoReleB.style.display = "block";
                estadoReleB.innerText = "No es posible realizar el ajuste con los datos suministrados.";
                tabla_nuevoumbral_tiempoRemoto_B.style.background = "#ffc8dd";
            }

            else {
                //estado.innerText = "Se realizo ajuste del Dial, disminuyendo el valor del tiempo local";
                //estado.style.background = "green";

                //Establecer valores para la gráfica topología bus
                modeloRele[1].TMS = nuevoTMS_calculado_B;
                tabGraficaBus.style.display = "block";
                tabla_nuevoumbral_tiempoRemoto_B.style.background = "#d0f4de";

                CalcularTiempoReleA();
            }
        }

    }
    //Si se estra trabajando con curva ANSI 
    if (parametrosCurva[familiaCurva_B].ANSI == 1) {

        nuevoTMS_calculado_B = parametrosCurva[familiaCurva_B].ANSI * (((tiempoRemotoEsperado_B)) * 1 / ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleC / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 3)))));
        nuevoTMS_calculado_B = nuevoTMS_calculado_B.toFixed(1);
        nuevoTMS_calculado_B = parseFloat(nuevoTMS_calculado_B);

        nuevotiempoOperacionCalculado_B = (parametrosCurva[familiaCurva_B].ANSI * nuevoTMS_calculado_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));
        nuevotiempoOperacionCalculado_B = parseFloat(nuevotiempoOperacionCalculado_B);

        nuevotiempoRemotoEsperado_B = parseFloat(tiempoOperacionCalculado_C) + (tiempo_B / 1000)


        console.log("tiempoOperacionCalculado_C", tiempoOperacionCalculado_C)
        console.log("en que formato ", nuevotiempoRemotoEsperado_B)


        nuevotiempoRemotoCalculado_B = (parametrosCurva[familiaCurva_B].ANSI * nuevoTMS_calculado_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));

        nuevoumbral_tiempoOperacion_B = (Math.abs(tiempoOperacionCalculado_B - nuevotiempoOperacionCalculado_B) / ((tiempoOperacionCalculado_B)) * 100);

        nuevoumbral_tiempoRemoto_B = (Math.abs(nuevotiempoRemotoEsperado_B - nuevotiempoRemotoCalculado_B) / ((nuevotiempoRemotoEsperado_B)) * 100);

        document.getElementById("nuevoTMS_calculado_B").innerText = nuevoTMS_calculado_B.toFixed(2);
        document.getElementById("nuevotiempoOperacionCalculado_B").innerText = parseFloat(nuevotiempoOperacionCalculado_B).toFixed(4);
        document.getElementById("nuevoumbral_tiempo_B").innerText = nuevoumbral_tiempoOperacion_B.toFixed(4);

        document.getElementById("nuevotiempoRemotoEsperado_B").innerText = (nuevotiempoRemotoEsperado_B).toFixed(4);
        document.getElementById("nuevotiempoRemotoCalculado_B").innerText = nuevotiempoRemotoCalculado_B.toFixed(4);
        document.getElementById("nuevoumbral_tiempoRemoto_B").innerText = nuevoumbral_tiempoRemoto_B.toFixed(4);

        if (nuevoumbral_tiempoOperacion_B > valor_umbral_tiempo_B) {
            tabla_nuevoumbral_tiempo_B.style.background = "#ffc8dd";
        }
        else {
            tabla_nuevoumbral_tiempo_B.style.background = "#d0f4de";

            if (nuevoumbral_tiempoRemoto_B > valor_umbral_tiempoRemoto_B) {

                //Restablecer los valores
                modeloRele[0].TMS = "-";
                modeloRele[1].TMS = "-";
                modeloRele[2].TMS = "-";

                estadoReleB.style.display = "block";
                estadoReleB.innerText = "No es posible realizar el ajuste con los datos suministrados.";
                tabla_nuevoumbral_tiempoRemoto_B.style.background = "#ffc8dd";
            }
            else {
                //estado.innerText = "Se realizo ajuste del Dial, disminuyendo el valor del tiempo local";
                //estado.style.background = "green";

                //Establecer valores para la gráfica topología bus
                modeloRele[1].TMS = nuevoTMS_calculado_B;
                tabGraficaBus.style.display = "block";
                tabla_nuevoumbral_tiempoRemoto_B.style.background = "#d0f4de";

                CalcularTiempoReleA();
            }

        }

    }


}


function CalcularTiempoReleA() {

    Isc_ReleA = modeloRele[0].Isc;
    Isc_ReleB = modeloRele[1].Isc;
    Isc_ReleC = modeloRele[2].Isc;
    Ic_ReleA = modeloRele[0].Ic;
    Ic_ReleB = modeloRele[1].Ic;
    Ic_ReleC = modeloRele[2].Ic;
    Incremento_Ic_A = modeloRele[0].IncrementoIc;
    Incremento_Ic_B = modeloRele[1].IncrementoIc;
    Incremento_Ic_C = modeloRele[2].IncrementoIc;
    familiaCurva_A = modeloRele[0].familiaCurva;
    familiaCurva_B = modeloRele[1].familiaCurva;
    familiaCurva_C = modeloRele[2].familiaCurva;
    TMS_A = modeloRele[0].TMS;
    TMS_B = modeloRele[1].TMS;
    TMS_C = modeloRele[2].TMS;

    //Cálculo de la corriente con el Incremento
    Ic_a_con_Incremento = Ic_ReleA + (Ic_ReleA) * (Incremento_Ic_A / 100)
    tiempo_A = modeloRele[0].tiempo;

    TMSparteIEC_A = parametrosCurva[familiaCurva_A].IEC * ((tiempo_A / 1000) * (((Math.pow(Isc_ReleA / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1) / (parametrosCurva[familiaCurva_A].beta)));
    TMSparteIEC_A = TMSparteIEC_A.toFixed(2);

    TMSparteANSI_A = parametrosCurva[familiaCurva_A].ANSI * ((tiempo_A / 1000) * 1 / ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 3)))));
    TMSparteANSI_A = TMSparteANSI_A.toFixed(1);

    TMS_calculado_A = parseFloat(TMSparteIEC_A) + parseFloat(TMSparteANSI_A);


    //Comprobar tiempo calculado con el tiempo dado - tiempoOperacionCalculado_A
    tLocalparteIEC_A = (parametrosCurva[familiaCurva_A].IEC * TMS_calculado_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleA / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));


    tLocalparteANSI_A = (parametrosCurva[familiaCurva_A].ANSI * TMS_calculado_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

    tiempoOperacionCalculado_A = tLocalparteIEC_A + tLocalparteANSI_A;


    //Mirar el Umbral del tiempo para verificar
    umbral_tiempo_A = (Math.abs((tiempo_A / 1000) - parseFloat(tiempoOperacionCalculado_A)) / (tiempo_A / 1000)) * 100;
    console.log(Math.abs((tiempo_A / 1000) - parseFloat(tiempoOperacionCalculado_A)))

    if (umbral_tiempo_A > valor_umbral_tiempo_A) {
        tabla_umbral_tiempo_A.style.background = "#ffc8dd";
        estado.innerText = "El tiempo local A no está dentro del umbral establecido.";
        estado.style.background = "#fa1e4e"
        modeloRele[0].TMS = "-";
        modeloRele[1].TMS = "-";
        modeloRele[2].TMS = "-";
    }
    else {
        tabla_umbral_tiempo_A.style.background = "#d0f4de";

        isNaN(tiempo_coordinacion_A) ? tiempo_coordinacion_A = tiempoOperacionCalculado_B * 1000 : "";

        //Tiempo en operación en tiempo remoto A
        tiempoRemotoEsperado_A = parseFloat(tiempoOperacionCalculado_B) + (tiempo_coordinacion_A / 1000);
        console.log("tiempoRemotoEsperado_A", tiempoRemotoEsperado_A)



        //Hallar tiempo remoto en B
        tRemotoparteIEC_A = (parametrosCurva[familiaCurva_A].IEC * TMS_calculado_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleB / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));

        tRemotoparteANSI_A = (parametrosCurva[familiaCurva_A].ANSI * TMS_calculado_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

        tiempoRemotoCalculado_A = tRemotoparteIEC_A + tRemotoparteANSI_A;

        //Hallar umbral del tiempo remoto en A
        umbral_tiempoRemoto_A = ((Math.abs((parseFloat(tiempoOperacionCalculado_B) + (tiempo_coordinacion_A / 1000)) - tiempoRemotoCalculado_A) / (parseFloat(tiempoOperacionCalculado_B) + (tiempo_coordinacion_A / 1000))) * 100);



        //Caso en el que se supere el umbral en el tiempo remoto
        if (parseFloat(umbral_tiempoRemoto_A) > valor_umbral_tiempoRemoto_A) {

            estado.innerText = "El tiempo de operación remoto A no se ajusta.";
            estado.style.backgroundColor = "#fa1e4e";
            tabla_umbral_tiempoRemoto_A.style.background = "#ffc8dd";
            



            //-------------------------------------------------------------Imprimir datos-------------------------
            ReleA_Coordinacion.style.display = "block";
            CoordinacionAporTiempo.style.display = "block";
            document.getElementById("TMS_calculado_A").innerText = TMS_calculado_A;
            document.getElementById("tiempoOperacionSuministrado_A").innerText = (tiempo_A / 1000).toFixed(4);
            document.getElementById("tiempoOperacionCalculado_A").innerText = tiempoOperacionCalculado_A.toFixed(4);
            document.getElementById("umbral_tiempo_A").innerText = umbral_tiempo_A.toFixed(4);
            document.getElementById("tiempoCoordinacionSuministrado_A").innerHTML = (tiempo_coordinacion_A / 1000).toFixed(4);
            document.getElementById("tiempoRemotoEsperado_A").innerText = tiempoRemotoEsperado_A.toFixed(4);
            document.getElementById("tiempoRemotoCalculado_A").innerText = tiempoRemotoCalculado_A.toFixed(4);
            document.getElementById("umbral_tiempoRemoto_A").innerText = umbral_tiempoRemoto_A.toFixed(4);
            document.getElementById("nuevoumbral_tiempoRemoto_A").style.background = "rgb(208, 244, 222)";

            //Cuadro resultado
            ajustarTiempoA.style.display = "block";

            ajustarTiempoA_usandoTiempo()

        } else {

            estado.innerText = "El tiempo de operación remoto A se ajusta.";
            estado.style.backgroundColor = "green";
            tabla_umbral_tiempoRemoto_A.style.background = "#d0f4de";

            modeloRele[0].TMS = TMS_calculado_A;
            ReleA_Coordinacion.style.display = "block";
            CoordinacionAporTiempo.style.display = "block";

            //Imprimir los valores
            document.getElementById("TMS_calculado_A").innerText = TMS_calculado_A;
            document.getElementById("tiempoOperacionCalculado_A").innerText = tiempoOperacionCalculado_A.toFixed(4);
            document.getElementById("umbral_tiempo_A").innerText = umbral_tiempo_A.toFixed(4);
            document.getElementById("tiempoCoordinacionSuministrado_A").innerHTML = (tiempo_coordinacion_A / 1000).toFixed(4);
            document.getElementById("tiempoRemotoEsperado_A").innerText = tiempoRemotoEsperado_A.toFixed(4);
            document.getElementById("tiempoRemotoCalculado_A").innerText = tiempoRemotoCalculado_A.toFixed(4);
            document.getElementById("umbral_tiempoRemoto_A").innerText = umbral_tiempoRemoto_A.toFixed(4);

            graficarCurvaTopologiaBus();

        }


    }




}

var nuevotiempoRemotoCalculado_A, nuevotiempoRemotoEsperado_A, nuevoTMS_calculado_A;
var nuevotiempoLocalCalculado_A
var nuevotRemoto_A, nuevoumbral_tiempoRemoto_A, nuevotiempoOperacionCalculado_A, nuevoumbral_tiempoOperacion_A

function ajustarTiempoA_usandoTiempo() {

    //Se halla el nuevo Dial con el tiempo remoto esperado

    console.log("parametrosCurva[familiaCurva_A].IEC", parametrosCurva[familiaCurva_A].IEC)

    //Si se esta trabajando con curva IEC
    if (parametrosCurva[familiaCurva_A].IEC == 1) {

        nuevoTMS_calculado_A = parametrosCurva[familiaCurva_A].IEC * ((tiempoRemotoEsperado_A) * (((Math.pow(Isc_ReleB / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1) / (parametrosCurva[familiaCurva_A].beta)));
        nuevoTMS_calculado_A = nuevoTMS_calculado_A.toFixed(3);
        nuevoTMS_calculado_A = parseFloat(nuevoTMS_calculado_A);

        if (nuevoTMS_calculado_A <= 0.007) {


            estado.innerText = "No se encuentra un valor del Dial perteneciente al rango de la curva suministrada.";
            estado.style.background = "#fa1e4e";
            tabGraficaBus.style.display = "none";


            document.getElementById("nuevoTMS_calculado_A").innerText = nuevoTMS_calculado_A;
            document.getElementById("nuevoTMS_calculado_A").style.background = "#ffc8dd";

            document.getElementById("nuevotiempoOperacionCalculado_A").innerText = "-----";
            document.getElementById("nuevoumbral_tiempo_A").innerText = "-----";
            document.getElementById("nuevotiempoRemotoEsperado_A").innerText = "------";
            document.getElementById("nuevotiempoRemotoCalculado_A").innerText = "------";
            document.getElementById("nuevoumbral_tiempoRemoto_A").innerText = "------";

            borrarTMSBus();
        }
        else {

            //Volver a reajustar el valor
            nuevoTMS_calculado_A = nuevoTMS_calculado_A.toFixed(2);
            nuevoTMS_calculado_A = parseFloat(nuevoTMS_calculado_A);





            console.log("complemento tms A: ", ((tiempoRemotoEsperado_A) * (((Math.pow(Isc_ReleB / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1) / (parametrosCurva[familiaCurva_A].beta))))

            console.log("TMS_calculado_A", nuevoTMS_calculado_A)
            console.log("tiempoRemotoEsperado_A", tiempoRemotoEsperado_A)

            nuevotiempoOperacionCalculado_A = (parametrosCurva[familiaCurva_A].IEC * nuevoTMS_calculado_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleA / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));

            console.log("nuevotiempoOperacionCalculado_A", parseFloat(nuevotiempoOperacionCalculado_A))

            nuevotiempoRemotoEsperado_A = tiempoOperacionCalculado_B + (tiempo_A / 1000)

            nuevotiempoRemotoCalculado_A = (parametrosCurva[familiaCurva_A].IEC * nuevoTMS_calculado_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleB / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));


            console.log("nuevotiempoRemotoCalculado_A ", nuevotiempoRemotoCalculado_A)

            nuevoumbral_tiempoOperacion_A = (Math.abs(tiempoOperacionCalculado_A - nuevotiempoOperacionCalculado_A) / ((tiempoOperacionCalculado_A)) * 100);

            nuevoumbral_tiempoRemoto_A = (Math.abs(nuevotiempoRemotoEsperado_A - nuevotiempoRemotoCalculado_A) / ((nuevotiempoRemotoEsperado_A)) * 100);

            console.log("tiempoOperacionCalculado_A", tiempoOperacionCalculado_A)
            console.log("nuevoumbral_tiempoOperacion_A", nuevoumbral_tiempoOperacion_A)

            document.getElementById("nuevoTMS_calculado_A").innerText = nuevoTMS_calculado_A.toFixed(2);
            document.getElementById("nuevotiempoOperacionCalculado_A").innerText = parseFloat(nuevotiempoOperacionCalculado_A).toFixed(4);
            document.getElementById("nuevoumbral_tiempo_A").innerText = nuevoumbral_tiempoOperacion_A.toFixed(4);
            document.getElementById("nuevotiempoRemotoEsperado_A").innerText = nuevotiempoRemotoEsperado_A.toFixed(4);
            document.getElementById("nuevotiempoRemotoCalculado_A").innerText = nuevotiempoRemotoCalculado_A.toFixed(4);
            document.getElementById("nuevoumbral_tiempoRemoto_A").innerText = nuevoumbral_tiempoRemoto_A.toFixed(4);

            if (nuevoumbral_tiempoOperacion_A > valor_umbral_tiempo_A) {
                document.getElementById("nuevoumbral_tiempo_A").style.background = "#ffc8dd";
                estadoReleA.innerText = "Con este DIAL, supera el valor del umbral en el tiempo local A. ";
                modeloRele[0].TMS = "-";
                modeloRele[1].TMS = "-";
                modeloRele[2].TMS = "-";
            }



            if (nuevoumbral_tiempoOperacion_A >= 0 && nuevoumbral_tiempoOperacion_A <= valor_umbral_tiempo_A) {
                document.getElementById("nuevoumbral_tiempo_A").style.background = "#d0f4de";
                estadoReleA.innerText = "Con este DIAL, está dentro del rango aceptable en el tiempo local. ";

                

                if (nuevoumbral_tiempoRemoto_A > valor_umbral_tiempoRemoto_A) {
                    tabla_nuevoumbral_tiempoRemoto_A.style.background = "#ffc8dd";
                    estadoReleA.innerText = estadoReleA.innerText + " No cumple para que el relé A sea respaldo del relé B."

                } else {
                    tabla_nuevoumbral_tiempoRemoto_A.style.background = "#d0f4de";
                    estadoReleA.innerText = estadoReleA.innerText + "Aunque permite ajustar el relé A como respaldo del relé B."
                }

                estadoReleA.style.display = "block";

                //Comprobar si son las mismas curvas
                if ((modeloRele[0].familiaCurva == modeloRele[1].familiaCurva) && (modeloRele[0].familiaCurva == modeloRele[2].familiaCurva)) {
                    console.log("modeloRele[0].familiaCurva: ", modeloRele[0].familiaCurva)
                    console.log("modeloRele[1].familiaCurva: ", modeloRele[1].familiaCurva)
                    console.log("modeloRele[2].familiaCurva: ", modeloRele[2].familiaCurva)
                    estado.innerText = "Ajustes completados";
                    estado.style.background = "green";

                } else {
                    console.log("modeloRele[0].familiaCurva: ", modeloRele[0].familiaCurva)
                    console.log("modeloRele[1].familiaCurva: ", modeloRele[1].familiaCurva)
                    console.log("modeloRele[2].familiaCurva: ", modeloRele[2].familiaCurva)
                    estado.innerText = "No se recomienda utilizar diferentes familias de curva.";
                    estado.style.background = "#fee440"
                }

                //Establecer valores para la gráfica topología bus
                modeloRele[0].TMS = nuevoTMS_calculado_A;
                tabGraficaBus.style.display = "block";


                console.log("nuevoTMS_calculado_A nuevoTMS_calculado_A: ", nuevoTMS_calculado_A)
                graficarCurvaTopologiaBus();

            }

        }

    }

    //Si se estra trabajando con curva ANSI 
    if (parametrosCurva[familiaCurva_A].ANSI == 1) {
        nuevoTMS_calculado_A = parametrosCurva[familiaCurva_A].ANSI * ((tiempoRemotoEsperado_A) * 1 / ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleB / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 3)))));
        nuevoTMS_calculado_A = nuevoTMS_calculado_A.toFixed(1);
        nuevoTMS_calculado_A = parseFloat(nuevoTMS_calculado_A);

        if (nuevoTMS_calculado_A < 0.8) {

            estado.innerText = "No se encuentra un valor del Dial perteneciente al rango de la curva suministrada.";
            estado.style.background = "#fa1e4e";
            tabGraficaBus.style.display = "none";

            document.getElementById("nuevoTMS_calculado_A").innerText = nuevoTMS_calculado_A;
            document.getElementById("nuevoTMS_calculado_A").style.background = "#ffc8dd";

            document.getElementById("nuevotiempoOperacionCalculado_A").innerText = "-----";
            document.getElementById("nuevoumbral_tiempo_A").innerText = "-----";
            document.getElementById("nuevotiempoRemotoEsperado_A").innerText = "------";
            document.getElementById("nuevotiempoRemotoCalculado_A").innerText = "------";
            document.getElementById("nuevoumbral_tiempoRemoto_A").innerText = "------";

            borrarTMSBus();

        }
        else {


            nuevotiempoOperacionCalculado_A = (parametrosCurva[familiaCurva_A].ANSI * nuevoTMS_calculado_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

            nuevotiempoRemotoEsperado_A = tiempoOperacionCalculado_B + (tiempo_A / 1000)


            nuevotiempoRemotoCalculado_A = (parametrosCurva[familiaCurva_A].ANSI * nuevoTMS_calculado_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

            nuevoumbral_tiempoOperacion_A = (Math.abs(tiempoOperacionCalculado_A - nuevotiempoOperacionCalculado_A) / ((tiempoOperacionCalculado_A)) * 100);

            nuevoumbral_tiempoRemoto_A = (Math.abs(nuevotiempoRemotoEsperado_A - nuevotiempoRemotoCalculado_A) / ((nuevotiempoRemotoEsperado_A)) * 100);

            document.getElementById("nuevoTMS_calculado_A").innerText = nuevoTMS_calculado_A.toFixed(2);
            document.getElementById("nuevotiempoOperacionCalculado_A").innerText = parseFloat(nuevotiempoOperacionCalculado_A).toFixed(4);
            document.getElementById("nuevoumbral_tiempo_A").innerText = nuevoumbral_tiempoOperacion_A.toFixed(4);
            document.getElementById("nuevotiempoRemotoEsperado_A").innerText = nuevotiempoRemotoEsperado_A.toFixed(4);
            document.getElementById("nuevotiempoRemotoCalculado_A").innerText = nuevotiempoRemotoCalculado_A.toFixed(4);
            document.getElementById("nuevoumbral_tiempoRemoto_A").innerText = nuevoumbral_tiempoRemoto_A.toFixed(4);

            //Comprobar si son las mismas curvas
            if ((modeloRele[0].familiaCurva == modeloRele[1].familiaCurva) && (modeloRele[0].familiaCurva == modeloRele[2].familiaCurva)) {
                console.log("modeloRele[0].familiaCurva: ", modeloRele[0].familiaCurva)
                console.log("modeloRele[1].familiaCurva: ", modeloRele[1].familiaCurva)
                console.log("modeloRele[2].familiaCurva: ", modeloRele[2].familiaCurva)
                estado.innerText = "Ajustes completados";
                estado.style.background = "green";

            } else {
                console.log("modeloRele[0].familiaCurva: ", modeloRele[0].familiaCurva)
                console.log("modeloRele[1].familiaCurva: ", modeloRele[1].familiaCurva)
                console.log("modeloRele[2].familiaCurva: ", modeloRele[2].familiaCurva)
                estado.innerText = "No se recomienda utilizar diferentes familias de curva.";
                estado.style.background = "#fee440"
            }


            //Establecer valores para la gráfica topología bus
            console.log("nuevoTMS_calculado_A nuevoTMS_calculado_A: ", nuevoTMS_calculado_A)


            modeloRele[0].TMS = nuevoTMS_calculado_A;
            tabGraficaBus.style.display = "block";

            graficarCurvaTopologiaBus();
        }

    }

}


//PROCEDIMIENTO CUANDO EL USUARIO COLOCA EL TMS ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function CalcularConDialReleC() {
    Isc_ReleA = modeloRele[0].Isc;
    Isc_ReleB = modeloRele[1].Isc;
    Isc_ReleC = modeloRele[2].Isc;
    Ic_ReleA = modeloRele[0].Ic;
    Ic_ReleB = modeloRele[1].Ic;
    Ic_ReleC = modeloRele[2].Ic;
    Incremento_Ic_A = modeloRele[0].IncrementoIc;
    Incremento_Ic_B = modeloRele[1].IncrementoIc;
    Incremento_Ic_C = modeloRele[2].IncrementoIc;
    familiaCurva_A = modeloRele[0].familiaCurva;
    familiaCurva_B = modeloRele[1].familiaCurva;
    familiaCurva_C = modeloRele[2].familiaCurva;
    TMS_A = modeloRele[0].TMS;
    TMS_B = modeloRele[1].TMS;
    TMS_C = modeloRele[2].TMS;

    // ---- Hallar el tiempo C utilizando el TMS_C

    //Cálculo de la corriente con el Incremento
    Ic_c_con_Incremento = Ic_ReleC + (Ic_ReleC) * (Incremento_Ic_C / 100)

    //Calcular el  tiempo C
    tLocalparteIEC_C = (parametrosCurva[familiaCurva_C].IEC * TMS_C * ((parametrosCurva[familiaCurva_C].beta) / ((Math.pow(Isc_ReleC / Ic_c_con_Incremento, parametrosCurva[familiaCurva_C].alfa)) - 1)));

    tLocalparteANSI_C = (parametrosCurva[familiaCurva_C].ANSI * TMS_C * ((parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B / ((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C), 2))) + (parametrosCurva[familiaCurva_C].E / (Math.pow((Isc_ReleC / Ic_c_con_Incremento) - (parametrosCurva[familiaCurva_C].C), 3))))));

    tiempoOperacionCalculado_C = tLocalparteIEC_C + tLocalparteANSI_C
    //tiempoOperacionCalculado_C = tiempoOperacionCalculado_C.toFixed(4);

    ReleC_Coordinacion.style.display = "block";
    CoordinacionCporDial.style.display = "block";
    document.getElementById("TMS_escogido_C").innerText = TMS_C;
    console.log("tiempoOperacionCalculado_C 1: ", tiempoOperacionCalculado_C)
    console.log("tiempoOperacionCalculado_C 2: ", tiempoOperacionCalculado_C.toFixed(4))
    document.getElementById("tiempoOperacionCalculado_C_dial").innerText = tiempoOperacionCalculado_C.toFixed(4);

    if (tiempoOperacionCalculado_C > 0.7) {
        estado.innerText = "Se superó el valor permitido para el tiempo de operación.";
        estado.style.background = "#fa1e4e";
        estadoReleC.style.display = "block";
        document.getElementById("tiempoOperacionCalculado_C_dial").style.background = "#d0f4de";
        estadoReleC.innerText = "Con el DIAL suministrado, supera el valor permitido (700 ms). Cambie el valor del DIAL para el relé C."
    }

    else {
        estadoReleC.style.display = "block";
        estadoReleC.innerText = "Con el DIAL suministrado, se encuentra dentro del valor permitido (700 ms).";
        document.getElementById("tiempoOperacionCalculado_C_dial").style.background = "#d0f4de";
        CalcularTiempoReleB_usandoDial();
    }

}


function CalcularTiempoReleB_usandoDial() {
    Isc_ReleA = modeloRele[0].Isc;
    Isc_ReleB = modeloRele[1].Isc;
    Isc_ReleC = modeloRele[2].Isc;
    Ic_ReleA = modeloRele[0].Ic;
    Ic_ReleB = modeloRele[1].Ic;
    Ic_ReleC = modeloRele[2].Ic;
    Incremento_Ic_A = modeloRele[0].IncrementoIc;
    Incremento_Ic_B = modeloRele[1].IncrementoIc;
    Incremento_Ic_C = modeloRele[2].IncrementoIc;
    familiaCurva_A = modeloRele[0].familiaCurva;
    familiaCurva_B = modeloRele[1].familiaCurva;
    familiaCurva_C = modeloRele[2].familiaCurva;
    TMS_A = modeloRele[0].TMS;
    TMS_B = modeloRele[1].TMS;
    TMS_C = modeloRele[2].TMS;
    tiempo_coordinacion_A = modeloRele[0].tiempoCoordinacion;
    tiempo_coordinacion_B = modeloRele[1].tiempoCoordinacion;
    tiempo_coordinacion_C = modeloRele[2].tiempoCoordinacion;

    //Cálculo de la corriente con el Incremento
    Ic_b_con_Incremento = Ic_ReleB + (Ic_ReleB) * (Incremento_Ic_B / 100);

    //Comprobar si el Dial está dado o tiene que hallarse
    console.log("modeloRele[1].TMS: ", modeloRele[1].TMS)
    //console.log("modeloRele[1].TMS.tofixed ", (modeloRele[1].TMS).toFixed(4))

    //Si el Dial tiene que hallarse --------------------------------------------------------------------------------------------
    if (isNaN(modeloRele[1].TMS)) {


        //DIAL en el relé B - Utilizar el Tiempo de operación C calculado como tiempo de operación B
        tiempo_B = tiempoOperacionCalculado_C;

        TMSparteIEC_B = parametrosCurva[familiaCurva_B].IEC * (tiempo_B * (((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1) / (parametrosCurva[familiaCurva_B].beta)));
        TMSparteIEC_B = TMSparteIEC_B.toFixed(2);

        TMSparteANSI_B = parametrosCurva[familiaCurva_B].ANSI * (tiempo_B * 1 / ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 3)))));
        TMSparteANSI_B = TMSparteANSI_B.toFixed(1);

        //valor del Dial hallado
        TMS_calculado_B = parseFloat(TMSparteIEC_B) + parseFloat(TMSparteANSI_B);

        //Comprobar tiempo calculado con el tiempo dado - tiempoOperacionCalculado_B
        tLocalparteIEC_B = (parametrosCurva[familiaCurva_B].IEC * TMS_calculado_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        tLocalparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI * TMS_calculado_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));

        tiempoOperacionCalculado_B = tLocalparteIEC_B + tLocalparteANSI_B;

        //Mirar el Umbral del tiempo para verificar
        umbral_tiempo_B = (Math.abs((tiempo_B) - parseFloat(tiempoOperacionCalculado_B)) / (tiempo_B)) * 100;

        console.log("umbral_tiempo_B:  ", umbral_tiempo_B)

        if (umbral_tiempo_B > valor_umbral_tiempo_B) {

            document.getElementById("TMS_B_dial").innerText = TMS_calculado_B;
            document.getElementById("tiempoOperacionCalculado_B_dial").innerText = tiempoOperacionCalculado_B.toFixed(4);
            document.getElementById("umbral_tiempo_B_dial").innerText = umbral_tiempo_B.toFixed(4);

            estadoReleB.innerText = "No es posible calcular un tiempo de operación que cumpla el umbral.";
            document.getElementById("nuevotiempoRemotoEsperado_B_dial").innerText = "-";
            document.getElementById("nuevotiempoRemotoCalculado_B_dial").innerText = "-";
            document.getElementById("nuevoumbral_tiempoRemoto_B_dial").innerText = "-";

            estado.innerText = "El tiempo de operación local B no está dentro del umbral ";

        }
        else {

            console.log("No Entro umbral tiempo>10")

            console.log("TMS_calculado_B", TMS_calculado_B)

            document.getElementById("TMS_B_dial").innerText = TMS_calculado_B;
            document.getElementById("tiempoOperacionCalculado_B_dial").innerText = tiempoOperacionCalculado_B.toFixed(4);
            document.getElementById("umbral_tiempo_B_dial").innerText = umbral_tiempo_B.toFixed(4);

            CalcularTiempoRemotoReleB_usandoDial()


        }


        ReleB_Coordinacion.style.display = "block";
        CoordinacionBporDial.style.display = "block";


    }
    else {
        //Si el dial No tiene que hallarse -----------------------------------------------------------------------------------------

        tLocalparteIEC_B = (parametrosCurva[familiaCurva_B].IEC * TMS_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        tLocalparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI * TMS_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));

        tiempoOperacionCalculado_B = tLocalparteIEC_B + tLocalparteANSI_B;

        console.log("tiempoOperacionCalculado_B :", tiempoOperacionCalculado_B)
        if ((tiempoOperacionCalculado_B <= 1.10 * tiempoOperacionCalculado_C) && (tiempoOperacionCalculado_B >= 0.9 * tiempoOperacionCalculado_C)) {

            //Si el dial está dentro del rango permitido
            document.getElementById("TMS_B_dial").innerText = modeloRele[1].TMS;
            document.getElementById("tiempoOperacionCalculado_B_dial").innerText = tiempoOperacionCalculado_B.toFixed(4);
        }
        else {


        }


        ReleB_Coordinacion.style.display = "block";
        CoordinacionBporDial.style.display = "block";
    }

}


function CalcularTiempoRemotoReleB_usandoDial() {


    //OJO tener en cuenta cuando el tms B lo tenga que reconfigurar
    TMS_B = TMS_calculado_B;

    isNaN(tiempo_coordinacion_B) ? tiempo_coordinacion_B = tiempoOperacionCalculado_C * 1000 : "";

    //Tiempo en operación en tiempo remoto
    tiempoRemotoEsperado_B = parseFloat(tiempoOperacionCalculado_C) + (tiempo_coordinacion_B / 1000);
    console.log("tiempoRemotoEsperado_B", tiempoRemotoEsperado_B);

    //Hallar tiempo remoto en B
    tRemotoparteIEC_B = (parametrosCurva[familiaCurva_B].IEC * TMS_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleC / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

    tRemotoparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI * TMS_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));

    tiempoRemotoCalculado_B = tRemotoparteIEC_B + tRemotoparteANSI_B;
    console.log("tiempoRemotoCalculado_B ", tiempoRemotoCalculado_B)



    //Hallar umbral del tiempo remoto en B
    umbral_tiempoRemoto_B = ((Math.abs((parseFloat(tiempoOperacionCalculado_C) + (tiempo_coordinacion_B / 1000)) - tiempoRemotoCalculado_B) / (parseFloat(tiempoOperacionCalculado_C) + (tiempo_coordinacion_B / 1000))) * 100);
    console.log("umbral remoto B ", umbral_tiempoRemoto_B)

    if (umbral_tiempoRemoto_B > 10) {

        estado.innerText = "El tiempo de operación remoto B no se ajusta";
        estado.style.backgroundColor = "#fa1e4e";
        estadoReleB.style.display = "block";
        estadoReleB.innerText = "Relé B no es respaldo del relé C.";
        document.getElementById("umbral_tiempoRemoto_B_dial").style.background = "#ffc8dd"

        ajustarTiempoB_dial.style.display = "block";

        ajustarTiempoB_usandoDial()

    }
    else {
        CalcularTiempoReleA_usandoDial()
    }

    //Imprimir datos de tiempos remotos en B y el umbral
    document.getElementById("tiempoRemotoEsperado_B_dial").innerText = tiempoRemotoEsperado_B.toFixed(4);
    document.getElementById("tiempoRemotoCalculado_B_dial").innerText = tiempoRemotoCalculado_B.toFixed(4);
    document.getElementById("umbral_tiempoRemoto_B_dial").innerText = umbral_tiempoRemoto_B.toFixed(4);


}

function ajustarTiempoB_usandoDial() {

    if (parametrosCurva[familiaCurva_B].IEC == 1) {

        nuevoTMS_calculado_B = parametrosCurva[familiaCurva_B].IEC * ((tiempoRemotoEsperado_B) * (((Math.pow(Isc_ReleC / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1) / (parametrosCurva[familiaCurva_B].beta)));
        nuevoTMS_calculado_B = nuevoTMS_calculado_B.toFixed(2);
        nuevoTMS_calculado_B = parseFloat(nuevoTMS_calculado_B);


        nuevotiempoOperacionCalculado_B = (parametrosCurva[familiaCurva_B].IEC * nuevoTMS_calculado_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleB / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        nuevotiempoRemotoEsperado_B = parseFloat(tiempoOperacionCalculado_C) + (tiempo_coordinacion_B / 1000)
        nuevotiempoRemotoEsperado_B = nuevotiempoRemotoEsperado_B.toFixed(4);
        nuevotiempoRemotoEsperado_B = parseFloat(nuevotiempoRemotoEsperado_B);

        nuevotiempoRemotoCalculado_B = (parametrosCurva[familiaCurva_B].IEC * nuevoTMS_calculado_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleC / Ic_b_con_Incremento, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        nuevoumbral_tiempoOperacion_B = (Math.abs(tiempoOperacionCalculado_B - nuevotiempoOperacionCalculado_B) / ((tiempoOperacionCalculado_B)) * 100);

        nuevoumbral_tiempoRemoto_B = (Math.abs(nuevotiempoRemotoEsperado_B - nuevotiempoRemotoCalculado_B) / ((nuevotiempoRemotoEsperado_B)) * 100);

        document.getElementById("nuevoTMS_calculado_B_dial").innerText = nuevoTMS_calculado_B.toFixed(2);
        document.getElementById("nuevotiempoOperacionCalculado_B_dial").innerText = nuevotiempoOperacionCalculado_B.toFixed(4);
        document.getElementById("nuevoumbral_tiempo_B_dial").innerText = nuevoumbral_tiempoOperacion_B.toFixed(4);
        document.getElementById("nuevotiempoRemotoEsperado_B_dial").innerText = nuevotiempoRemotoEsperado_B.toFixed(4);
        document.getElementById("nuevotiempoRemotoCalculado_B_dial").innerText = nuevotiempoRemotoCalculado_B.toFixed(4);
        document.getElementById("nuevoumbral_tiempoRemoto_B_dial").innerText = nuevoumbral_tiempoRemoto_B.toFixed(4);


        if (nuevoumbral_tiempoRemoto_B > 10) {

            //Restablecer los valores
            modeloRele[0].TMS = "-";
            modeloRele[1].TMS = "-";
            modeloRele[2].TMS = "-";
            estado.innerText = "No se supero el umbral establecido";
            estado.style.background = "#ffc8dd";
            estadoReleB.style.display = "block";
            estadoReleB.innerText = "No es posible realizar el ajuste con los datos suministrados.";
            document.getElementById("nuevoumbral_tiempoRemoto_B_dial").style.background = "#ffc8dd";
        }

        else {
            //estado.innerText = "Se realizo ajuste del Dial, disminuyendo el valor del tiempo local";
            //estado.style.background = "green";

            //Establecer valores para la gráfica topología bus
            estadoReleB.innerText = "Se comprueba que Relé B también es respaldo del relé C. "
            modeloRele[1].TMS = nuevoTMS_calculado_B;
            tabGraficaBus.style.display = "block";
            document.getElementById("nuevoumbral_tiempoRemoto_B_dial").style.background = "#d0f4de";

            CalcularTiempoReleA_usandoDial()
        }


    }


    if (parametrosCurva[familiaCurva_B].ANSI == 1) {

        nuevoTMS_calculado_B = parametrosCurva[familiaCurva_B].ANSI * (((tiempoRemotoEsperado_B)) * 1 / ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleC / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - parametrosCurva[familiaCurva_B].C, 3)))));
        nuevoTMS_calculado_B = nuevoTMS_calculado_B.toFixed(1);
        nuevoTMS_calculado_B = parseFloat(nuevoTMS_calculado_B);

        nuevotiempoOperacionCalculado_B = (parametrosCurva[familiaCurva_B].ANSI * nuevoTMS_calculado_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));
        nuevotiempoOperacionCalculado_B = parseFloat(nuevotiempoOperacionCalculado_B);

        nuevotiempoRemotoEsperado_B = parseFloat(tiempoOperacionCalculado_C) + (tiempo_coordinacion_B / 1000)


        console.log("tiempoOperacionCalculado_C", tiempoOperacionCalculado_C)
        console.log("en que formato ", nuevotiempoRemotoEsperado_B)


        nuevotiempoRemotoCalculado_B = (parametrosCurva[familiaCurva_B].ANSI * nuevoTMS_calculado_B * ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleC / Ic_b_con_Incremento) - (parametrosCurva[familiaCurva_B].C), 3))))));

        nuevoumbral_tiempoOperacion_B = (Math.abs(tiempoOperacionCalculado_B - nuevotiempoOperacionCalculado_B) / ((tiempoOperacionCalculado_B)) * 100);

        nuevoumbral_tiempoRemoto_B = (Math.abs(nuevotiempoRemotoEsperado_B - nuevotiempoRemotoCalculado_B) / ((nuevotiempoRemotoEsperado_B)) * 100);

        document.getElementById("nuevoTMS_calculado_B_dial").innerText = nuevoTMS_calculado_B.toFixed(2);
        document.getElementById("nuevotiempoOperacionCalculado_B_dial").innerText = nuevotiempoOperacionCalculado_B.toFixed(4);
        document.getElementById("nuevoumbral_tiempo_B_dial").innerText = nuevoumbral_tiempoOperacion_B.toFixed(4);
        document.getElementById("nuevotiempoRemotoEsperado_B_dial").innerText = nuevotiempoRemotoEsperado_B.toFixed(4);
        document.getElementById("nuevotiempoRemotoCalculado_B_dial").innerText = nuevotiempoRemotoCalculado_B.toFixed(4);
        document.getElementById("nuevoumbral_tiempoRemoto_B_dial").innerText = nuevoumbral_tiempoRemoto_B.toFixed(4);

        if (nuevoumbral_tiempoRemoto_B > 10) {

            //Restablecer los valores
            modeloRele[0].TMS = "-";
            modeloRele[1].TMS = "-";
            modeloRele[2].TMS = "-";

            estadoReleB.style.display = "block";
            estadoReleB.innerText = "No es posible realizar el ajuste con los datos suministrados.";
            document.getElementById("nuevoumbral_tiempoRemoto_B_dial").style.background = "#ffc8dd";
        }

        else {
            //estado.innerText = "Se realizo ajuste del Dial, disminuyendo el valor del tiempo local";
            //estado.style.background = "green";

            //Establecer valores para la gráfica topología bus
            estadoReleB.innerText = "Se comprueba que Relé B también es respaldo del relé C. "
            modeloRele[1].TMS = nuevoTMS_calculado_B;
            tabGraficaBus.style.display = "block";
            document.getElementById("nuevoumbral_tiempoRemoto_B_dial").style.background = "#d0f4de";

            CalcularTiempoReleA_usandoDial()
        }

    }


}

function CalcularTiempoReleA_usandoDial() {
    Isc_ReleA = modeloRele[0].Isc;
    Isc_ReleB = modeloRele[1].Isc;
    Isc_ReleC = modeloRele[2].Isc;
    Ic_ReleA = modeloRele[0].Ic;
    Ic_ReleB = modeloRele[1].Ic;
    Ic_ReleC = modeloRele[2].Ic;
    Incremento_Ic_A = modeloRele[0].IncrementoIc;
    Incremento_Ic_B = modeloRele[1].IncrementoIc;
    Incremento_Ic_C = modeloRele[2].IncrementoIc;
    familiaCurva_A = modeloRele[0].familiaCurva;
    familiaCurva_B = modeloRele[1].familiaCurva;
    familiaCurva_C = modeloRele[2].familiaCurva;
    TMS_A = modeloRele[0].TMS;
    TMS_B = modeloRele[1].TMS;
    TMS_C = modeloRele[2].TMS;
    tiempo_coordinacion_A = modeloRele[0].tiempoCoordinacion;
    tiempo_coordinacion_B = modeloRele[1].tiempoCoordinacion;
    tiempo_coordinacion_C = modeloRele[2].tiempoCoordinacion;

    //Cálculo de la corriente con el Incremento
    Ic_a_con_Incremento = Ic_ReleA + (Ic_ReleA) * (Incremento_Ic_A / 100)

    //Comprobar si el Dial está dado o tiene que hallarse
    console.log("modeloRele[0].TMS: ", modeloRele[0].TMS)

    //Si el Dial tiene que hallarse --------------------------------------------------------------------------------------------
    if (isNaN(modeloRele[0].TMS)) {

        //DIAL en el relé A - Utilizar el Tiempo de operación B calculado como tiempo de operación A
        tiempo_A = tiempoOperacionCalculado_B;

        TMSparteIEC_A = parametrosCurva[familiaCurva_A].IEC * (tiempo_A * (((Math.pow(Isc_ReleA / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1) / (parametrosCurva[familiaCurva_A].beta)));
        TMSparteIEC_A = TMSparteIEC_A.toFixed(2);

        TMSparteANSI_A = parametrosCurva[familiaCurva_A].ANSI * (tiempo_A * 1 / ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 3)))));
        TMSparteANSI_A = TMSparteANSI_A.toFixed(1);

        TMS_calculado_A = parseFloat(TMSparteIEC_A) + parseFloat(TMSparteANSI_A);
        console.log("Tms_calculado A: ", TMS_calculado_A)

        //Comprobar tiempo calculado con el tiempo dado - tiempoOperacionCalculado_B
        tLocalparteIEC_A = (parametrosCurva[familiaCurva_A].IEC * TMS_calculado_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleA / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));

        tLocalparteANSI_A = (parametrosCurva[familiaCurva_A].ANSI * TMS_calculado_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

        tiempoOperacionCalculado_A = tLocalparteIEC_A + tLocalparteANSI_A;

        //Mirar el Umbral del tiempo para verificar
        umbral_tiempo_A = (Math.abs((tiempo_A) - parseFloat(tiempoOperacionCalculado_A)) / (tiempo_A)) * 100;

        console.log("umbral_tiempo_B:  ", umbral_tiempo_A)

        if (umbral_tiempo_A > valor_umbral_tiempo_A) {

            console.log("Entro umbral tiempo A>10")

            document.getElementById("TMS_A_dial").innerText = TMS_calculado_B;
            document.getElementById("tiempoOperacionCalculado_A_dial").innerText = tiempoOperacionCalculado_B.toFixed(4);
            document.getElementById("umbral_tiempo_A_dial").innerText = umbral_tiempo_B.toFixed(4);

            estadoReleB.innerText = "No es posible calcular un tiempo de operación que cumpla el umbral.";
            document.getElementById("nuevotiempoRemotoEsperado_A_dial").innerText = "-";
            document.getElementById("nuevotiempoRemotoCalculado_A_dial").innerText = "-";
            document.getElementById("nuevoumbral_tiempoRemoto_A_dial").innerText = "-";

        }
        else {

            console.log("No Entro umbral tiempo>10")

            console.log("TMS_calculado_A", TMS_calculado_A)

            document.getElementById("TMS_A_dial").innerText = TMS_calculado_A;
            document.getElementById("tiempoOperacionCalculado_A_dial").innerText = tiempoOperacionCalculado_A.toFixed(4);
            document.getElementById("umbral_tiempo_A_dial").innerText = umbral_tiempo_A.toFixed(4);

            CalcularTiempoRemotoReleA_usandoDial()

        }

        ReleA_Coordinacion.style.display = "block";
        CoordinacionAporDial.style.display = "block";

    }

}

function CalcularTiempoRemotoReleA_usandoDial() {

    //OJO tener en cuenta cuando el tms A lo tenga que reconfigurar
    TMS_A = TMS_calculado_A;

    isNaN(tiempo_coordinacion_A) ? tiempo_coordinacion_A = tiempoOperacionCalculado_B * 1000 : "";

    tiempoRemotoEsperado_A = parseFloat(tiempoOperacionCalculado_B) + (tiempo_coordinacion_A / 1000);
    console.log("tiempoRemotoEsperado_A", tiempoRemotoEsperado_A);

    //Hallar tiempo remoto en B
    tRemotoparteIEC_A = (parametrosCurva[familiaCurva_A].IEC * TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleB / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));

    tRemotoparteANSI_A = (parametrosCurva[familiaCurva_A].ANSI * TMS_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

    tiempoRemotoCalculado_A = tRemotoparteIEC_A + tRemotoparteANSI_A;

    //Hallar umbral del tiempo remoto en A
    umbral_tiempoRemoto_A = ((Math.abs((parseFloat(tiempoOperacionCalculado_B) + (tiempo_coordinacion_A / 1000)) - tiempoRemotoCalculado_A) / (parseFloat(tiempoOperacionCalculado_B) + (tiempo_coordinacion_A / 1000))) * 100);
    console.log("umbral_tiempoRemoto_A : ", umbral_tiempoRemoto_A)


    if (umbral_tiempoRemoto_A > valor_umbral_tiempoRemoto_A) {

        estado.innerText = "El tiempo de operación remoto A no se ajusta";
        estado.style.backgroundColor = "#fa1e4e";
        estadoReleA.style.display = "block";
        estadoReleA.innerText = "Relé A no es respaldo del relé B.";
        document.getElementById("umbral_tiempoRemoto_A_dial").style.background = "#ffc8dd";


        ajustarTiempoA_dial.style.display = "block";
        ajustarTiempoA_usandoDial()

    } else {

        estado.innerText = "Ajuste realizado";
        estado.style.background = "green";

        //Establecer valores para la gráfica topología bus
        estadoReleA.innerText = "Se comprueba que Relé A también es respaldo del relé B. "
        modeloRele[1].TMS = nuevoTMS_calculado_B;
        tabGraficaBus.style.display = "block";
        document.getElementById("nuevoumbral_tiempoRemoto_A_dial").style.background = "#d0f4de";

        graficarCurvaTopologiaBus()

    }

    //Imprimir datos de tiempos remotos en B y el umbral
    document.getElementById("tiempoRemotoEsperado_A_dial").innerText = tiempoRemotoEsperado_A.toFixed(4);
    document.getElementById("tiempoRemotoCalculado_A_dial").innerText = tiempoRemotoCalculado_A.toFixed(4);
    document.getElementById("umbral_tiempoRemoto_A_dial").innerText = umbral_tiempoRemoto_A.toFixed(4);


}


function ajustarTiempoA_usandoDial() {

    if (parametrosCurva[familiaCurva_A].IEC == 1) {

        console.log("entro en el 2473")

        nuevoTMS_calculado_A = parametrosCurva[familiaCurva_A].IEC * ((tiempoRemotoEsperado_A) * (((Math.pow(Isc_ReleB / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1) / (parametrosCurva[familiaCurva_A].beta)));
        nuevoTMS_calculado_A = nuevoTMS_calculado_A.toFixed(2);
        nuevoTMS_calculado_A = parseFloat(nuevoTMS_calculado_A);

        console.log("TMS_calculado_A", nuevoTMS_calculado_A)
        console.log("tiempoRemotoEsperado_A", tiempoRemotoEsperado_A)

        nuevotiempoOperacionCalculado_A = (parametrosCurva[familiaCurva_A].IEC * nuevoTMS_calculado_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleA / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));

        console.log("nuevotiempoOperacionCalculado_A", parseFloat(nuevotiempoOperacionCalculado_A))

        console.log("tiempoo A: ", tiempo_A)
        nuevotiempoRemotoEsperado_A = tiempoOperacionCalculado_B + (tiempo_coordinacion_A / 1000)

        nuevotiempoRemotoCalculado_A = (parametrosCurva[familiaCurva_A].IEC * nuevoTMS_calculado_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleB / Ic_a_con_Incremento, parametrosCurva[familiaCurva_A].alfa)) - 1)));


        console.log("nuevotiempoRemotoCalculado_A ", nuevotiempoRemotoCalculado_A)

        nuevoumbral_tiempoOperacion_A = (Math.abs(tiempoOperacionCalculado_A - nuevotiempoOperacionCalculado_A) / ((tiempoOperacionCalculado_A)) * 100);

        console.log("tiempoOperacionCalculado_A", tiempoOperacionCalculado_A)
        console.log("nuevoumbral_tiempoOperacion_A", nuevoumbral_tiempoOperacion_A)


        nuevoumbral_tiempoRemoto_A = (Math.abs(nuevotiempoRemotoEsperado_A - nuevotiempoRemotoCalculado_A) / ((nuevotiempoRemotoEsperado_A)) * 100);

        console.log("nuevoumbral_tiempoRemoto_A: ", nuevoumbral_tiempoRemoto_A)

        document.getElementById("nuevoTMS_calculado_A_dial").innerText = nuevoTMS_calculado_A.toFixed(2);
        document.getElementById("nuevotiempoOperacionCalculado_A_dial").innerText = parseFloat(nuevotiempoOperacionCalculado_A).toFixed(4);
        document.getElementById("nuevoumbral_tiempo_A_dial").innerText = nuevoumbral_tiempoOperacion_A.toFixed(4);
        document.getElementById("nuevotiempoRemotoEsperado_A_dial").innerText = nuevotiempoRemotoEsperado_A.toFixed(4);
        document.getElementById("nuevotiempoRemotoCalculado_A_dial").innerText = nuevotiempoRemotoCalculado_A.toFixed(4);
        document.getElementById("nuevoumbral_tiempoRemoto_A_dial").innerText = nuevoumbral_tiempoRemoto_A.toFixed(4);


        if (nuevoumbral_tiempoRemoto_A > valor_umbral_tiempoRemoto_A) {

            //Restablecer los valores
            modeloRele[0].TMS = "-";
            modeloRele[1].TMS = "-";
            modeloRele[2].TMS = "-";

            estadoReleA.style.display = "block";
            estadoReleA.innerText = "No es posible realizar el ajuste con los datos suministrados.";
            document.getElementById("nuevoumbral_tiempoRemoto_A_dial").style.background = "#ffc8dd";
        }

        else {
            estado.innerText = "Ajuste realizado";
            estado.style.background = "green";

            //Establecer valores para la gráfica topología bus
            estadoReleA.innerText = "Se comprueba que Relé A también es respaldo del relé B. "
            modeloRele[0].TMS = nuevoTMS_calculado_A;
            tabGraficaBus.style.display = "block";
            document.getElementById("nuevoumbral_tiempoRemoto_A_dial").style.background = "#d0f4de";

            graficarCurvaTopologiaBus()
        }


    }

    if (parametrosCurva[familiaCurva_B].ANSI == 1) {

        nuevoTMS_calculado_A = parametrosCurva[familiaCurva_A].ANSI * ((tiempoRemotoEsperado_A) * 1 / ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleB / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - parametrosCurva[familiaCurva_A].C, 3)))));
        nuevoTMS_calculado_A = nuevoTMS_calculado_A.toFixed(1);
        nuevoTMS_calculado_A = parseFloat(nuevoTMS_calculado_A);


        if (nuevoTMS_calculado_A < 0.8) {

            estado.innerText = "No se encuentra un valor del Dial perteneciente al rango de la curva suministrada.";
            estado.style.background = "#fa1e4e";
            tabGraficaBus.style.display = "none";

        }

        else {


            nuevotiempoOperacionCalculado_A = (parametrosCurva[familiaCurva_A].ANSI * nuevoTMS_calculado_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

            nuevotiempoRemotoEsperado_A = tiempoOperacionCalculado_B + (tiempo_A / 1000)


            nuevotiempoRemotoCalculado_A = (parametrosCurva[familiaCurva_A].ANSI * nuevoTMS_calculado_A * ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleB / Ic_a_con_Incremento) - (parametrosCurva[familiaCurva_A].C), 3))))));

            nuevoumbral_tiempoOperacion_A = (Math.abs(tiempoOperacionCalculado_A - nuevotiempoOperacionCalculado_A) / ((tiempoOperacionCalculado_A)) * 100);

            nuevoumbral_tiempoRemoto_A = (Math.abs(nuevotiempoRemotoEsperado_A - nuevotiempoRemotoCalculado_A) / ((nuevotiempoRemotoEsperado_A)) * 100);

            document.getElementById("nuevoTMS_calculado_A_dial").innerText = nuevoTMS_calculado_A.toFixed(2);
            document.getElementById("nuevotiempoOperacionCalculado_A_dial").innerText = parseFloat(nuevotiempoOperacionCalculado_A).toFixed(4);
            document.getElementById("nuevoumbral_tiempo_A_dial").innerText = nuevoumbral_tiempoOperacion_A.toFixed(4);
            document.getElementById("nuevotiempoRemotoEsperado_A_dial").innerText = nuevotiempoRemotoEsperado_A.toFixed(4);
            document.getElementById("nuevotiempoRemotoCalculado_A_dial").innerText = nuevotiempoRemotoCalculado_A.toFixed(4);
            document.getElementById("nuevoumbral_tiempoRemoto_A_dial").innerText = nuevoumbral_tiempoRemoto_A.toFixed(4);


            if (nuevoumbral_tiempoRemoto_A > valor_umbral_tiempoRemoto_A) {

                //Restablecer los valores
                modeloRele[0].TMS = "-";
                modeloRele[1].TMS = "-";
                modeloRele[2].TMS = "-";

                estadoReleA.style.display = "block";
                estadoReleA.innerText = "No es posible realizar el ajuste con los datos suministrados.";
                document.getElementById("nuevoumbral_tiempoRemoto_A_dial").style.background = "#ffc8dd";
            }

            else {
                estado.innerText = "Ajuste realizado";
                estado.style.background = "green";

                //Establecer valores para la gráfica topología bus
                estadoReleA.innerText = "Se comprueba que Relé A también es respaldo del relé B. "
                modeloRele[0].TMS = nuevoTMS_calculado_A;
                tabGraficaBus.style.display = "block";
                document.getElementById("nuevoumbral_tiempoRemoto_A_dial").style.background = "#d0f4de";

                graficarCurvaTopologiaBus()
            }

        }



    }

}



async function valorUmbral(umbral) {

    var umbralEscogido;
    var nombreUmbral;
    var valorUmbral;

    if (umbral == "C_local") {
        nombreUmbral = "tiempo local C";
        valorUmbral = valor_umbral_tiempo_C;

    }
    if (umbral == "B_local") {
        nombreUmbral = "tiempo local B";
        valorUmbral = valor_umbral_tiempo_B;

    }
    if (umbral == "A_local") {
        nombreUmbral = "tiempo local A";
        valorUmbral = valor_umbral_tiempo_A;

    }
    if (umbral == "B_remoto") {
        nombreUmbral = "tiempo remoto B";
        valorUmbral = valor_umbral_tiempoRemoto_B;

    }
    if (umbral == "A_remoto") {
        nombreUmbral = "tiempo remoto A";
        valorUmbral = valor_umbral_tiempoRemoto_A;

    }

    const { value: formValues } = await Swal.fire({
        title: "Editar umbral " + nombreUmbral,
        background: '#fefefe',
        html: `
            <table class="table table-responsive "> 
                <tr>
                    <td>${nombreUmbral}:</td>
                    <td><input type="number" class="swal2-input" id="swal2-Inputt" value="${valorUmbral}" min="0" max="28"></td>
                    <td>%</td>
                </tr>
                <p>Rango: 0 - 28 % </p>

            </table>
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
                document.getElementById("swal2-Inputt").value
            ]
        }

    })

    if (formValues) {
        //Swal.fire(JSON.stringify(formValues))

        console.log("Valor colocadoooooo: ", formValues[0])

        if (formValues[0] <= 0) {
            formValues[0] = "0";
            console.log("formValues[0]: ", formValues[0])
        }
        if (formValues[0] > 28) {
            formValues[0] = "28"
            console.log("formValues[0]: ", formValues[0])
        }


        if (umbral == "C_local") {
            valor_umbral_tiempo_C = parseFloat(formValues[0]);
            document.getElementById("valor_umbral_tiempo_C").innerText = formValues[0];

        }
        if (umbral == "B_local") {
            valor_umbral_tiempo_B = parseFloat(formValues[0]);
            document.getElementById("valor_umbral_tiempo_B").innerText = formValues[0];

        }
        if (umbral == "A_local") {
            valor_umbral_tiempo_A = parseFloat(formValues[0]);
            document.getElementById("valor_umbral_tiempo_A").innerText = formValues[0];

        }
        if (umbral == "B_remoto") {
            valor_umbral_tiempoRemoto_B = parseFloat(formValues[0]);
            document.getElementById("valor_umbral_tiempo_B_remoto").innerText = formValues[0];
            

        }
        if (umbral == "A_remoto") {
            valor_umbral_tiempoRemoto_A = parseFloat(formValues[0]);
            document.getElementById("valor_umbral_tiempo_A_remoto").innerText = formValues[0];

        }
    }


}


function ocultarGraficaBus() {
    document.getElementById('myChart').style.display = "none";
}

function mostrarGraficaBus() {
    document.getElementById('myChart').style.display = "block";
}


