function mostrarCreditos() {

  Swal.fire({
    allowOutsideClick: false,
    text: 'Créditos',
    html: `<div style="display:grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr; height:170px; width:100%; text-align: center"> <div style="background-image:url('./assets/images/logo.png'); background-size: 150px 170px; background-position:center"></div> <div style="background-image:url('./assets/images/ie.png'); background-size: 150px 150px; background-position:center"></div>   </div> <br><p style='font-size:14px; font-weight: bold'>Profesor:  ING. WILLIAM ALFONSO RIAÑO MALDONADO</p>  <p style="font-size:14px; font-weight: bold">Por: JOHN JAIRO GUERRERO MORENO</p>`,
    confirmButtonText: 'Cerrar'
  })
}

document.oncontextmenu = function(){return false}