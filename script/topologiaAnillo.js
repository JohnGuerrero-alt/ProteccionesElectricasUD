// Declaramos las variables globales
const modeloAnillo = {
    0: {
        nombre: "Generador",
        urlImagen: "./assets/images/Anillo/3_1.svg",
        voltaje: "",
        potencia: ""
    },
    1: {
        nombre: "Barra 1-2",
        urlImagen: "./assets/images/Anillo/2_2.svg",
        impedancia: ""
    },
    2: {
        nombre: "Barra 4-1",
        urlImagen: "./assets/images/Anillo/2_4.svg",
        impedancia: ""
    },
    3: {
        nombre: "Carga",
        urlImagen: "./assets/images/Anillo/load_left.svg",
        potencia: ""
    },
    4: {
        nombre: "Carga",
        urlImagen: "./assets/images/Anillo/load_right.svg",
        potencia: ""
    },
    5: {
        nombre: "Barra 2-3",
        urlImagen: "./assets/images/Anillo/4_2.svg",
        impedancia: ""
    },
    6: {
        nombre: "Barra 3-4",
        urlImagen: "./assets/images/Anillo/4_4.svg",
        impedancia: ""
    },
    7: {
        nombre: "Carga",
        urlImagen: "./assets/images/Anillo/load_bottom.svg",
        potencia: ""
    }

}



//funciones
async function establecerValoresAnillo(valores) {

    

    const { value: formValues } = await Swal.fire({
        allowOutsideClick: false,
        title: modeloAnillo[valores].nombre,
        imageUrl: modeloAnillo[valores].urlImagen,
        imageWidth: 100,
        imageHeight: 100,
        width: 700,
        // html: ` <div class="table-responsive">
        // <table class="table align-middle" style="font-size:13px">               
        // <tr>
        // <th scope="row">Isc</th>
        // <td><input type="number" id="swal-Isc" value="${modeloRele[nombreRele].Isc}" class="swal2-input" min="0"></td> 
        // <td>[A]</td> 
        // <th scope="row" colspan="1">Ic</th>
        // <td><input type="number" class="swal2-input" id="swal-Ic" value="${modeloRele[nombreRele].Ic}" min="0"></td>
        // <td>[A]</td>
        // </tr>
        // <tr>
        // <th scope="row">Margen Ic</th><td><input type="number" class="swal2-input" value="${modeloRele[nombreRele].margenIc}" min="0" id="swal-margenIc"></td><td>%</td><th scope="row">Tiempo</th><td><input type="number" class="swal2-input" id="swal-tiempo" value="${modeloRele[nombreRele].tiempo}" min="0"></td><td>[ms]</td></tr>         <tr><th scope="row">Familia de curva</th><td colspan="2">      <select class="form-select" id="swal-curva">  <option selected hidden>${modeloRele[nombreRele].familiaCurva}</option> <option>Normal Inversa</option><option>Muy Inversa</option><option>Extremadamente Inversa</option>     </select></td>          </tr>   <tr class="table-secondary"><th scope="row"></th><td colspan="5"></td></tr>             <tr><th scope="row">TMS(Dial)</th><td>
        // <select class="form-select selectSwal"  id="swal-TMS" >
        // <option selected id="option-seleccionada" hidden>${modeloRele[nombreRele].TMS}</option>
        // <option value="0.05">0.05</option><option value="0.06">0.06</option><option value="0.07">0.07</option>
        // <option value="0.08">0.08</option><option value="0.09">0.09</option><option value="0.10">0.10</option>
        // <option value="0.11">0.11</option><option value="0.12">0.12</option><option value="0.13">0.13</option>
        // <option value="0.14">0.14</option><option value="0.15">0.15</option><option value="0.16">0.16</option>
        // <option value="0.17">0.17</option><option value="0.18">0.18</option><option value="0.19">0.19</option>
        // <option value="0.20">0.20</option><option value="0.21">0.21</option><option value="0.22">0.22</option>
        // <option value="0.23">0.23</option><option value="0.24">0.24</option><option value="0.25">0.25</option>
        // <option value="0.26">0.26</option><option value="0.27">0.27</option><option value="0.28">0.28</option>
        // <option value="0.29">0.29</option><option value="0.30">0.30</option><option value="0.31">0.31</option>
        // <option value="0.32">0.32</option><option value="0.33">0.33</option><option value="0.34">0.34</option>
        // <option value="0.35">0.35</option><option value="0.36">0.36</option><option value="0.37">0.37</option>
        // <option value="0.38">0.38</option><option value="0.39">0.39</option><option value="0.40">0.40</option>
        // <option value="0.41">0.41</option><option value="0.42">0.42</option><option value="0.43">0.43</option>
        // <option value="0.44">0.44</option><option value="0.45">0.45</option><option value="0.46">0.46</option>
        // <option value="0.47">0.47</option><option value="0.48">0.48</option><option value="0.49">0.49</option>
        // <option value="0.50">0.50</option><option value="0.51">0.51</option><option value="0.52">0.52</option>
        // <option value="0.53">0.53</option><option value="0.54">0.54</option><option value="0.55">0.55</option>
        // <option value="0.56">0.56</option><option value="0.57">0.57</option><option value="0.58">0.58</option>
        // <option value="0.59">0.59</option><option value="0.60">0.60</option><option value="0.61">0.61</option>
        // <option value="0.62">0.62</option><option value="0.63">0.63</option><option value="0.64">0.64</option>
        // <option value="0.65">0.65</option><option value="0.66">0.66</option><option value="0.67">0.67</option>
        // <option value="0.68">0.68</option><option value="0.69">0.69</option><option value="0.70">0.70</option>
        // <option value="0.71">0.71</option><option value="0.72">0.72</option><option value="0.73">0.73</option>
        // <option value="0.74">0.74</option><option value="0.75">0.75</option><option value="0.76">0.76</option>
        // <option value="0.77">0.77</option><option value="0.78">0.78</option><option value="0.79">0.79</option>
        // <option value="0.80">0.80</option><option value="0.81">0.81</option><option value="0.82">0.82</option>
        // <option value="0.83">0.83</option><option value="0.84">0.84</option><option value="0.85">0.85</option>
        // <option value="0.86">0.86</option><option value="0.87">0.87</option><option value="0.88">0.88</option>
        // <option value="0.89">0.89</option><option value="0.90">0.90</option><option value="0.91">0.91</option>
        // <option value="0.92">0.92</option><option value="0.93">0.93</option><option value="0.94">0.94</option>
        // <option value="0.95">0.95</option><option value="0.96">0.96</option><option value="0.99">0.99</option>
        // <option value="1">1</option>
        // </select>

        
        // </td> <th scope="row">Tiempo(instantaneo)</th><td><input  id="swal-tInstantaneo" type="number" value="${modeloRele[nombreRele].tiempoInstantaneo}" class="swal2-input" min="0"></td><td>[ms]</td></tr>   </table></div>
        

        // `,
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
                document.getElementById('swal-TMS').value,
                document.getElementById('swal-tInstantaneo').value
            ]
        },
        // footer: '<div style="display:grid; grid-template-columns: 1fr; grid-template-row:1fr;"><p style="color: #fe6d73">*Nota para colocar decimales utilizar coma.</p></div>',


    })


    if (formValues) {
        //Swal.fire(JSON.stringify(formValues))
        //guardarInformacion(nombreRele, formValues)
    }


}

async function guardarValoresReles(valores) {

}