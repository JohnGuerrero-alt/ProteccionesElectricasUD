//Declaramos las variables globales


//Defino las variables para poder imprimirlas en la tabla
var tabla_Isc_ReleA = document.getElementById("Isc_0");
var tabla_Isc_ReleB = document.getElementById("Isc_1");
var tabla_Isc_ReleC = document.getElementById("Isc_2");
var tabla_Ic_ReleA = document.getElementById("Ic_0");
var tabla_Ic_ReleB = document.getElementById("Ic_1");
var tabla_Ic_ReleC = document.getElementById("Ic_2");
var tabla_Margen_Ic_A = document.getElementById("Margen_Ic_0");
var tabla_Margen_Ic_B = document.getElementById("Margen_Ic_1");
var tabla_Margen_Ic_C = document.getElementById("Margen_Ic_2");
var tabla_familiaCurva_A = document.getElementById("FamiliaC_0");
var tabla_familiaCurva_B = document.getElementById("FamiliaC_1");
var tabla_familiaCurva_C = document.getElementById("FamiliaC_2");
var tabla_TMS_A = document.getElementById("TMS_0");
var tabla_TMS_B = document.getElementById("TMS_1");
var tabla_TMS_C = document.getElementById("TMS_2");
var tabla_Tiempo_A = document.getElementById("Tiempo_0");
var tabla_Tiempo_B = document.getElementById("Tiempo_1");
var tabla_Tiempo_C = document.getElementById("Tiempo_2");
var tabla_TiempoInstantaneo_A = document.getElementById("Tiempo_instantaneo_0");
var tabla_TiempoInstantaneo_B = document.getElementById("Tiempo_instantaneo_1");
var tabla_TiempoInstantaneo_C = document.getElementById("Tiempo_instantaneo_2");

var tabla_DialCalculado_A = document.getElementById("Dial_calculado_0");
var tabla_DialCalculado_B = document.getElementById("Dial_calculado_1");
var tabla_DialCalculado_C = document.getElementById("Dial_calculado_2");


//Declarar variable para graficar la curva
//var ctx = document.getElementById('myChart').getContext('2d');
var TMSparteIEC_C, TMSparteANSI_C, TMSparteIEC_B, TMSparteANSI_B, TMSparteIEC_A, TMSparteANSI_A;
var  tLocalparteIEC_C, tLocalparteANSI_C, tLocalparteANSI_B, tLocalparteIEC_B, tRemotoparteIEC_B, tRemotoparteANSI_B, tLocalparteANSI_A, tLocalparteIEC_A, tRemotoparteANSI_A, tRemotoparteIEC_A;



//Declaramos un json que tendrá el esquema para ajustar y guardar los valores para cada Relé
const modeloRele = {
    0: {
        nombreRele: "A",
        urlImagenRele: './assets/images/Topologia_bus/releA.svg',
        tituloModal: "Configuración Relé A",
        Isc: tabla_Isc_ReleA,
        Ic: tabla_Ic_ReleA,
        margenIc: tabla_Margen_Ic_A,
        familiaCurva: tabla_familiaCurva_A,
        TMS: tabla_TMS_A,
        tiempo: tabla_Tiempo_A,
        tiempoInstantaneo: tabla_TiempoInstantaneo_A,
    },
    1: {
        nombreRele: "B",
        urlImagenRele: './assets/images/Topologia_bus/releB.svg',
        tituloModal: "Configuración Relé B",
        Isc: tabla_Isc_ReleB,
        Ic: tabla_Ic_ReleB,
        margenIc: tabla_Margen_Ic_B,
        familiaCurva: tabla_familiaCurva_B,
        TMS: tabla_TMS_B,
        tiempo: tabla_Tiempo_B,
        tiempoInstantaneo: tabla_TiempoInstantaneo_B,
    },
    2: {
        nombreRele: "C",
        urlImagenRele: './assets/images/Topologia_bus/releC.svg',
        tituloModal: "Configuración Relé C",
        Isc: tabla_Isc_ReleC,
        Ic: tabla_Ic_ReleC,
        margenIc: tabla_Margen_Ic_C,
        familiaCurva: tabla_familiaCurva_C,
        TMS: tabla_TMS_C,
        tiempo: tabla_Tiempo_C,
        tiempoInstantaneo: tabla_TiempoInstantaneo_C,
    }
}

//Inicializamos valores para los select y option al escoger el tipo de relé
modeloRele[0].familiaCurva = "-";
modeloRele[0].TMS = "-";
modeloRele[1].familiaCurva = "-";
modeloRele[1].TMS = "-";
modeloRele[2].familiaCurva = "-";
modeloRele[2].TMS = "-";

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

var Isc_ReleA = 0.00;
var Isc_ReleB = 0.00;
var Isc_ReleC = 0.00;

var Ic_ReleA = 0.00;
var Ic_ReleB = 0.00;
var Ic_ReleC = 0.00;

var Margen_Ic_A = 0;
var margen_Ic_B = 0;
var Margen_Ic_C = 0;

var familiaCurva_A;
var familiaCurva_B;
var familiaCurva_C;

var TMS_A = 0.00;
var TMS_B = 0.00;
var TMS_C = 0.00;

var TMS_calculado_A = 0.00;
var TMS_calculado_B = 0.00;
var TMS_calculado_C = 0.00;

var tiempo_A;
var tiempo_B;
var tiempo_C;

var tiempo_instantaneo_A;
var tiempo_instantaneo_B;
var tiempo_instantaneo_C;

var tiempo_local_C;
var tiempo_local_B;
var tiempo_local_A;

var tiempo_remoto_B;
var tiempo_remoto_A;

var Ic_a_con_margen;
var Ic_b_con_margen;
var Ic_c_con_margen;

var alpha = 0.02;
var beta = 0.14;
var lambda = 0;

var tmsOpcion1;
var tmsOpcion2;
var swal_tms;
var guardarOpcionTMS1 = "display:none";
var guardarOpcionTMS2 = "display:none";

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

console.log(modeloRele[0].Isc);

//Declaramos las funciones que se utilizarán en la topología Bus
async function valoresRele(nombreRele) {


    habilitarTMS()

    const { value: formValues } = await Swal.fire({
        allowOutsideClick: false,
        title: modeloRele[nombreRele].tituloModal,
        imageUrl: modeloRele[nombreRele].urlImagenRele,
        imageWidth: 100,
        imageHeight: 100,
        width: 700,
        html: ` <div class="table-responsive" >
        <table class="table align-middle" style="font-size:13px">               
        <tr>
        <th scope="row">Isc</th>
        <td><input type="number" id="swal-Isc" value="${modeloRele[nombreRele].Isc}" class="swal2-input" min="0"></td> 
        <td>[A]</td> 
        <th scope="row" colspan="1">Ic</th>
        <td><input type="number" class="swal2-input" id="swal-Ic" value="${modeloRele[nombreRele].Ic}" min="0"></td>
        <td>[A]</td>
        </tr>
        <tr>
        <th scope="row">Margen Ic</th><td><input type="number" class="swal2-input" value="${modeloRele[nombreRele].margenIc}" min="0" id="swal-margenIc"></td><td>%</td><th scope="row">Tiempo</th><td><input type="number" class="swal2-input" id="swal-tiempo" value="${modeloRele[nombreRele].tiempo}" min="0"></td><td>[ms]</td></tr>         <tr><th scope="row">Familia de curva</th><td colspan="2">      <select class="form-select" id="swal-curva" onchange="habilitarTMS()">  <option selected hidden>${modeloRele[nombreRele].familiaCurva}</option> <option>Normal Inversa - IEC</option><option >Muy Inversa - IEC</option><option >Extremadamente Inversa - IEC</option><option>Normal Inversa - ANSI</option><option >Muy Inversa - ANSI</option><option >Extremadamente Inversa - ANSI</option>     </select></td>          </tr>   <tr class="table-secondary"><th scope="row"></th><td colspan="5"></td></tr>             <tr><th scope="row">TMS(Dial)</th><td>
        <select class="form-select selectSwal"  id="swal-TMS1" style="${guardarOpcionTMS1}">
        <option selected id="option-seleccionada" hidden>${modeloRele[nombreRele].TMS}</option>
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
        
        </td> <th scope="row">Tiempo(instantaneo)</th><td><input  id="swal-tInstantaneo" type="number" value="${modeloRele[nombreRele].tiempoInstantaneo}" class="swal2-input" min="0"></td><td>[ms]</td></tr>   </table></div>
        

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
                document.getElementById('swal-margenIc').value,
                document.getElementById('swal-tiempo').value,
                document.getElementById('swal-curva').value,
                document.getElementById(swal_tms).value,
                document.getElementById('swal-tInstantaneo').value
            ]
        },
        // footer: '<div style="display:grid; grid-template-columns: 1fr; grid-template-row:1fr;"><p style="color: #fe6d73">*Nota para colocar decimales utilizar coma.</p></div>',


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
    //console.log("Isc_"+ Rele+ ": "+ modeloRele[Rele].Isc.innerText)
    document.getElementById("Ic_" + Rele).innerText = datos[1];
    document.getElementById("Margen_Ic_" + Rele).innerText = datos[2];
    document.getElementById("Tiempo_" + Rele).innerText = datos[3];
    document.getElementById("FamiliaC_" + Rele).innerText = datos[4];
    document.getElementById("TMS_" + Rele).innerText = datos[5];
    document.getElementById("Tiempo_instantaneo_" + Rele).innerText = datos[6];

    if(isNaN(datos[5])) { datos[5] = "__"}

    document.getElementById("Dial_escogido_" + Rele).innerText = datos[5];

    //Almacenar los datos en las variables
    Isc_Rele = document.getElementById("Isc_" + Rele).innerText


    modeloRele[Rele].Isc = parseFloat(datos[0]);
    modeloRele[Rele].Ic = parseFloat(datos[1]);
    modeloRele[Rele].margenIc = parseFloat(datos[2]);
    modeloRele[Rele].tiempo = parseFloat(datos[3]);
    modeloRele[Rele].familiaCurva = datos[4];
    modeloRele[Rele].TMS = parseFloat(datos[5]);
    modeloRele[Rele].tiempoInstantaneo[6];

    // Isc_ReleB = 2500;
    // Isc_ReleC = 650;
    // Ic_ReleA = 800;
    // Ic_ReleB = 100;
    // Ic_ReleC = 50;
    // Margen_Ic_A = 20;
    // Margen_Ic_B = 20;
    // Margen_Ic_C = 20;
    // familiaCurva_A = "Normal Inversa";
    // familiaCurva_B = "Normal Inversa";
    // familiaCurva_C = "Normal Inversa";
    // TMS_A = 0.08;
    // TMS_B = 0.09;
    // TMS_C = 0.07;
    // tiempo_A = 200;
    // tiempo_B = 200;
    // tiempo_C = 200;
    // tiempo_instantaneo_A = 200;
    // tiempo_instantaneo_B = 200;
    // tiempo_instantaneo_C = 200;



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


//Ajustar el ejemplo1
function ejemplo1() {
    tabla_Isc_ReleA.innerText = 14000;
    tabla_Isc_ReleB.innerText = 2500;
    tabla_Isc_ReleC.innerText = 650;
    tabla_Ic_ReleA.innerText = 800;
    tabla_Ic_ReleB.innerText = 100;
    tabla_Ic_ReleC.innerText = 50;
    tabla_Margen_Ic_A.innerText = 20;
    tabla_Margen_Ic_B.innerText = 20;
    tabla_Margen_Ic_C.innerText = 20;
    tabla_TMS_A.innerText = "-";
    tabla_TMS_B.innerText = "-";
    tabla_TMS_C.innerText = "-";
    tabla_Tiempo_A.innerText = 200;
    tabla_Tiempo_B.innerText = 200;
    tabla_Tiempo_C.innerText = 200;
    tabla_TiempoInstantaneo_A.innerText = 200;
    tabla_TiempoInstantaneo_B.innerText = 200;
    tabla_TiempoInstantaneo_C.innerText = 200;

    //Almacenar datos en las variables
    modeloRele[0].Isc = 14000;
    modeloRele[1].Isc = 2500;
    modeloRele[2].Isc = 650;
    modeloRele[0].Ic = 800;
    modeloRele[1].Ic = 100;
    modeloRele[2].Ic = 50;
    modeloRele[0].margenIc = 20;
    modeloRele[1].margenIc = 20;
    modeloRele[2].margenIc = 20;
    modeloRele[0].tiempo = 200;
    modeloRele[1].tiempo = 200;
    modeloRele[2].tiempo = 200;
    modeloRele[0].TMS = "";
    modeloRele[1].TMS = "";
    modeloRele[2].TMS = "";
    modeloRele[0].tiempoInstantaneo = 200;
    modeloRele[1].tiempoInstantaneo = 200;
    modeloRele[2].tiempoInstantaneo = 200;

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
    Margen_Ic_A = modeloRele[0].margenIc;
    Margen_Ic_B = modeloRele[1].margenIc;
    Margen_Ic_C = modeloRele[2].margenIc;
    familiaCurva_A = modeloRele[0].familiaCurva;
    familiaCurva_B = modeloRele[1].familiaCurva;
    familiaCurva_C = modeloRele[2].familiaCurva;
    TMS_A = modeloRele[0].TMS;
    TMS_B = modeloRele[1].TMS;
    TMS_C = modeloRele[2].TMS;
    tiempo_A = modeloRele[0].tiempo;
    tiempo_B = modeloRele[1].tiempo;
    tiempo_C = modeloRele[2].tiempo;
    tiempo_instantaneo_A = modeloRele[0].tiempoInstantaneo;
    tiempo_instantaneo_B = modeloRele[1].tiempoInstantaneo;
    tiempo_instantaneo_C = modeloRele[2].tiempoInstantaneo;

    try {
        Ic_c_con_margen = Ic_ReleC + (Ic_ReleC) * (Margen_Ic_C / 100)

        //DIAL en el relé C
        TMSparteIEC_C = parametrosCurva[familiaCurva_C].IEC * ((tiempo_C / 1000) * (((Math.pow(Isc_ReleC / Ic_c_con_margen, parametrosCurva[familiaCurva_C].alfa)) - 1) / (parametrosCurva[familiaCurva_C].beta)));

        TMSparteANSI_C = parametrosCurva[familiaCurva_C].ANSI * ((tiempo_C / 1000) * 1 / ((parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B / ((Isc_ReleC / Ic_c_con_margen) - parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D / (Math.pow((Isc_ReleC / Ic_c_con_margen) - parametrosCurva[familiaCurva_C].C, 2))) + (parametrosCurva[familiaCurva_C].E / (Math.pow((Isc_ReleC / Ic_c_con_margen) - parametrosCurva[familiaCurva_C].C, 3)))));

        console.log("parteIEC C: ", TMSparteIEC_C);
        console.log("parteANSI C: ", TMSparteANSI_C)


        TMS_calculado_C = (TMSparteIEC_C + TMSparteANSI_C).toFixed(4);

        if ( isNaN(TMS_calculado_C)  ) { TMS_calculado_C = "-" }
        document.getElementById("Dial_calculado_2").innerText = TMS_calculado_C;

        tLocalparteIEC_C =  (parametrosCurva[familiaCurva_C].IEC*TMS_C * ((parametrosCurva[familiaCurva_C].beta) / ((Math.pow(Isc_ReleC / Ic_c_con_margen, parametrosCurva[familiaCurva_C].alfa)) - 1)));
        
        tLocalparteANSI_C = (parametrosCurva[familiaCurva_C].ANSI* TMS_C* ( (parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B/((Isc_ReleC / Ic_c_con_margen) - (parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D/(Math.pow(  (Isc_ReleC / Ic_c_con_margen) - (parametrosCurva[familiaCurva_C].C) ,2))) + (parametrosCurva[familiaCurva_C].E/(Math.pow(  (Isc_ReleC / Ic_c_con_margen) - (parametrosCurva[familiaCurva_C].C) , 3))) )) );

        

        //Hallar tiempo Local en C
        tiempo_local_C = (  tLocalparteIEC_C +   tLocalparteANSI_C ).toFixed(4);
        console.log("tiempo local C: ", tiempo_local_C)

        if ( isNaN(tiempo_local_C)  ) { tiempo_local_C = "__" }
        document.getElementById("Tiempo_local_2").innerHTML = tiempo_local_C;





    } catch (error) {

    }

    try {
        Ic_b_con_margen = Ic_ReleB + (Ic_ReleB) * (Margen_Ic_B / 100)

        //DIAL en el relé B
        TMSparteIEC_B = parametrosCurva[familiaCurva_B].IEC * ((tiempo_B / 1000) * (((Math.pow(Isc_ReleB / Ic_b_con_margen, parametrosCurva[familiaCurva_B].alfa)) - 1) / (parametrosCurva[familiaCurva_B].beta)));

        TMSparteANSI_B = parametrosCurva[familiaCurva_B].ANSI * ((tiempo_B / 1000) * 1 / ((parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B / ((Isc_ReleB / Ic_b_con_margen) - parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D / (Math.pow((Isc_ReleB / Ic_b_con_margen) - parametrosCurva[familiaCurva_B].C, 2))) + (parametrosCurva[familiaCurva_B].E / (Math.pow((Isc_ReleB / Ic_b_con_margen) - parametrosCurva[familiaCurva_B].C, 3)))));


        TMS_calculado_B = ( TMSparteIEC_B + TMSparteANSI_B ).toFixed(4);
        if ( isNaN(TMS_calculado_B)  ) { TMS_calculado_B = "-" }
        document.getElementById("Dial_calculado_1").innerText = TMS_calculado_B;

        tLocalparteIEC_B =  (parametrosCurva[familiaCurva_B].IEC*TMS_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleB / Ic_b_con_margen, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        tLocalparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI* TMS_B* ( (parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B/((Isc_ReleB / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D/(Math.pow(  (Isc_ReleB / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C) ,2))) + (parametrosCurva[familiaCurva_B].E/(Math.pow(  (Isc_ReleB / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C) , 3))) )) );


        //Hallar tiempo local en B
        tiempo_local_B = ( tLocalparteIEC_B + tLocalparteANSI_B ).toFixed(4);
        if ( isNaN(tiempo_local_B)  ) { tiempo_local_B = "__" }
        document.getElementById("Tiempo_local_1").innerHTML = tiempo_local_B;


        //Hallar tiempo remoto en B
        tRemotoparteIEC_B = (parametrosCurva[familiaCurva_B].IEC*TMS_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(Isc_ReleC / Ic_b_con_margen, parametrosCurva[familiaCurva_B].alfa)) - 1)));

        tRemotoparteANSI_B = (parametrosCurva[familiaCurva_B].ANSI* TMS_B* ( (parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B/((Isc_ReleC / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D/(Math.pow(  (Isc_ReleC / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C) ,2))) + (parametrosCurva[familiaCurva_B].E/(Math.pow(  (Isc_ReleC / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C) , 3))) )) );


        tiempo_remoto_B = ( tRemotoparteIEC_B + tRemotoparteANSI_B ).toFixed(4);
        if ( isNaN(tiempo_remoto_B)  ) { tiempo_remoto_B = "__" }
        document.getElementById("Tiempo_remoto_1").innerHTML = tiempo_remoto_B;

    } catch (error) {

    }

    try {

        //DIAL en el relé A
        Ic_a_con_margen = Ic_ReleA + (Ic_ReleA) * (Margen_Ic_A / 100)

        TMSparteIEC_A = parametrosCurva[familiaCurva_A].IEC * ((tiempo_A / 1000) * (((Math.pow(Isc_ReleA / Ic_a_con_margen, parametrosCurva[familiaCurva_A].alfa)) - 1) / (parametrosCurva[familiaCurva_A].beta)));

        TMSparteANSI_A = parametrosCurva[familiaCurva_A].ANSI * ((tiempo_A / 1000) * 1 / ((parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B / ((Isc_ReleA / Ic_a_con_margen) - parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D / (Math.pow((Isc_ReleA / Ic_a_con_margen) - parametrosCurva[familiaCurva_A].C, 2))) + (parametrosCurva[familiaCurva_A].E / (Math.pow((Isc_ReleA / Ic_a_con_margen) - parametrosCurva[familiaCurva_A].C, 3)))));


        TMS_calculado_A = ( TMSparteANSI_A + TMSparteIEC_A ).toFixed(4);
        if ( isNaN(TMS_calculado_A)  ) { TMS_calculado_A = "-" }
        document.getElementById("Dial_calculado_0").innerText = TMS_calculado_A;

        //Hallar tiempo local en A
        tLocalparteIEC_A = (parametrosCurva[familiaCurva_A].IEC  *TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleA / Ic_a_con_margen, parametrosCurva[familiaCurva_A].alfa)) - 1)) );


        tLocalparteANSI_A = (parametrosCurva[familiaCurva_A].ANSI* TMS_A* ( (parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B/((Isc_ReleA / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D/(Math.pow(  (Isc_ReleA / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C) ,2))) + (parametrosCurva[familiaCurva_A].E/(Math.pow(  (Isc_ReleA / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C) , 3))) )) );

        tiempo_local_A = ( tLocalparteANSI_A + tLocalparteIEC_A).toFixed(4);

        if ( isNaN(tiempo_local_A)  ) { tiempo_local_A = "__" }
        document.getElementById("Tiempo_local_0").innerHTML = tiempo_local_A;


        //Hallar tiempo remoto en A
        tRemotoparteIEC_A = (parametrosCurva[familiaCurva_A].IEC*TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(Isc_ReleB / Ic_a_con_margen, parametrosCurva[familiaCurva_A].alfa)) - 1)));

        tRemotoparteANSI_A = (parametrosCurva[familiaCurva_A].ANSI* TMS_A* ( (parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B/((Isc_ReleB / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D/(Math.pow(  (Isc_ReleB / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C) ,2))) + (parametrosCurva[familiaCurva_A].E/(Math.pow(  (Isc_ReleB / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C) , 3))) )) );

        tiempo_remoto_A = ( tRemotoparteIEC_A+ tRemotoparteANSI_A ).toFixed(4);

        if ( isNaN(tiempo_remoto_A)  ) { tiempo_remoto_A = "__" }
        document.getElementById("Tiempo_remoto_0").innerHTML = tiempo_remoto_A;


    } catch (error) {
        document.getElementById("Dial_calculado_0").innerText = "";
    }

    console.log("margen con a: ", Ic_a_con_margen)

}









var select = document.getElementById("swal-TMS");
const arraySelect = ["0.05", "0.06", "0.07", "0.08", "0.09", "0.10", "0.11", "0.12", "0.13", "0.14", "0.15", "0.16", "0.17", "0.18", "0.19", "0.20", "0.21", "0.22", "0.23", "0.24", "0.25", "0.26", "0.27", "0.28", "0.29", "0.30", "0.31", "0.32", "0.33", "0.34", "0.35", "0.36", "0.37", "0.38", "0.39", "0.40", "0.41", "0.42", "0.43", "0.44", "0.45", "0.46", "0.47", "0.48", "0.49", "0.50", "0.51", "0.52", "0.53", "0.54", "0.55", "0.56", "0.57", "0.58", "0.59", "0.60", "0.61", "0.62", "0.63", "0.64", "0.65", "0.66", "0.67", "0.68", "0.69", "0.70", "0.71", "0.72", "0.73", "0.74", "0.75", "0.76", "0.77", "0.78", "0.79", "0.80", "0.81", "0.82", "0.83", "0.84", "0.85", "0.86", "0.87", "0.88", "0.89", "0.90", "0.91", "0.92", "0.93", "0.94", "0.95", "0.96", "0.97", "0.98", "0.99", "1"]
arraySelect.forEach(arr => {
    // console.log("arr:  yoyoyoyo")
    var option = document.createElement("OPTION")
    var txt = document.createTextNode(arr.valueOf);
    option.appendChild(txt);
    option.setAttribute("value", arr);

})


//Inicializar los tooltips
const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
})




// function graficarCurvaTopologiaBus(){
//     const myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//             datasets: [{
//                 label: 'Rele A',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                     'rgba(255, 179, 128, 1)',
//                 ],
//                 borderColor: [
//                     'rgba(255, 179, 128, 1)',

//                 ],
//                 borderWidth: 1
//             },
//             {
//                 label: 'Rele B',
//                 data: [12, 10, 10, 5, 9, 11],
//                 backgroundColor: [
//                     'rgba(85, 153, 255, 1)',
//                 ],
//                 borderColor: [
//                     'rgba(85, 153, 255, 1)',

//                 ],
//                 borderWidth: 1
//             },
//             {
//                 label: 'Rele C',
//                 data: [1, 15, 5, 7, 2, 2],
//                 backgroundColor: [
//                     'rgba(113, 200, 55, 1)',

//                 ],
//                 borderColor: [
//                     'rgba(113, 200, 55, 1)',

//                 ],
//                 borderWidth: 1
//             }



//         ]
//         },
//         options: {
//             scales: {
//                 y: {
//                     display: true,
//                     type: 'logarithmic',
//                 }
//             }
//         }
//     });
// }
// let contentsBounds = document.body.getBoundingClientRect();
// let ratio = contentsBounds.width / width;
// width *= ratio;
// height *= ratio;


function graficarCurvaTopologiaBus() {
    calcularPasoaPaso();

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
            {
                range: [10, 100000],
                graphType: 'polyline',

                fn: function (scope) {
                    // scope.x = {lo: Number, hi: number}
                    // simulate a line e.g. y = x
                    var x = scope.x

                    // return  (TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x, parametrosCurva[familiaCurva_A].alfa)) - 1))

                    console.log('(TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x, parametrosCurva[familiaCurva_A].alfa)) - 1))) ', (TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x / Ic_a_con_margen, parametrosCurva[familiaCurva_A].alfa)) - 1))))

                    console.log("x: ", x)
                    console.log("x / Ic_a_con_margen: ", x / Ic_a_con_margen)
                    console.log("Ic con margen a: ", Ic_a_con_margen)
                    console.log("valor compl: ", (TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x / Ic_a_con_margen, parametrosCurva[familiaCurva_A].alfa)) - 1))))


                    return (  (parametrosCurva[familiaCurva_A].IEC  *TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x / Ic_a_con_margen, parametrosCurva[familiaCurva_A].alfa)) - 1)) )  +      (parametrosCurva[familiaCurva_A].ANSI* TMS_A* ( (parametrosCurva[familiaCurva_A].A) + (parametrosCurva[familiaCurva_A].B/((x / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C)) + (parametrosCurva[familiaCurva_A].D/(Math.pow(  (x / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C) ,2))) + (parametrosCurva[familiaCurva_A].E/(Math.pow(  (x / Ic_a_con_margen) - (parametrosCurva[familiaCurva_A].C) , 3))) )) )   ) 
                },
                color: 'rgba(255, 179, 128, 1)',

            },
            {

                graphType: 'polyline',
                range: [10, 100000],
                fn: function (scope) {
                    // scope.x = {lo: Number, hi: number}
                    // simulate a line e.g. y = x
                    var x = scope.x

                    // return  (TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x, parametrosCurva[familiaCurva_A].alfa)) - 1))


                    console.log("x: ", x)



                    return (   (parametrosCurva[familiaCurva_B].IEC*TMS_B * ((parametrosCurva[familiaCurva_B].beta) / ((Math.pow(x / Ic_b_con_margen, parametrosCurva[familiaCurva_B].alfa)) - 1)))  +    (parametrosCurva[familiaCurva_B].ANSI* TMS_B* ( (parametrosCurva[familiaCurva_B].A) + (parametrosCurva[familiaCurva_B].B/((x / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C)) + (parametrosCurva[familiaCurva_B].D/(Math.pow(  (x / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C) ,2))) + (parametrosCurva[familiaCurva_B].E/(Math.pow(  (x / Ic_b_con_margen) - (parametrosCurva[familiaCurva_B].C) , 3))) )) ) )
                },
                color: 'rgba(85, 153, 255, 1)',

            },
            {

                graphType: 'polyline',
                range: [10, 100000],
                fn: function (scope) {
                    // scope.x = {lo: Number, hi: number}
                    // simulate a line e.g. y = x
                    var x = scope.x

                    // return  (TMS_A * ((parametrosCurva[familiaCurva_A].beta) / ((Math.pow(x, parametrosCurva[familiaCurva_A].alfa)) - 1))

                    // console.log("x: ",   (TMS_C * ((parametrosCurva[familiaCurva_C].beta) / ((Math.pow(x / Ic_c_con_margen, parametrosCurva[familiaCurva_C].alfa)) - 1))).toFixed(4) )




                    return (  (parametrosCurva[familiaCurva_C].IEC*TMS_C * ((parametrosCurva[familiaCurva_C].beta) / ((Math.pow(x / Ic_c_con_margen, parametrosCurva[familiaCurva_C].alfa)) - 1)))  +  (parametrosCurva[familiaCurva_C].ANSI* TMS_C* ( (parametrosCurva[familiaCurva_C].A) + (parametrosCurva[familiaCurva_C].B/((x / Ic_c_con_margen) - (parametrosCurva[familiaCurva_C].C)) + (parametrosCurva[familiaCurva_C].D/(Math.pow(  (x / Ic_c_con_margen) - (parametrosCurva[familiaCurva_C].C) ,2))) + (parametrosCurva[familiaCurva_C].E/(Math.pow(  (x / Ic_c_con_margen) - (parametrosCurva[familiaCurva_C].C) , 3))) )) ) )
                },
                color: 'rgba(113, 200, 55, 1)',

            },
            {
                points: [
                    [Isc_ReleA, 0.001],
                    [Isc_ReleA, 10000000],
                    [Isc_ReleA, tiempo_instantaneo_A / 1000]

                ],
                fnType: 'points',
                color: 'rgba(255, 179, 128, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            {
                points: [
                    [Isc_ReleB, 0.001],
                    [Isc_ReleB, 10000000],
                    [Isc_ReleB, tiempo_instantaneo_B / 1000]

                ],
                fnType: 'points',
                color: 'rgba(85, 153, 255, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            },
            {
                points: [
                    [Isc_ReleC, 0.001],
                    [Isc_ReleC, 10000000],
                    [Isc_ReleC, tiempo_instantaneo_C / 1000]

                ],
                fnType: 'points',
                color: 'rgba(113, 200, 55, 1)',
                graphType: 'polyline',
                updateOnMouseMove: true
            }
        ],
    });
}