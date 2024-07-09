$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  function enviarCorreo() {
    alert('Su correo fue enviado correctamente.');
  }
  function aniadirAFavorito(){
    alert('Se añadió correctamente.');
  }
  
  function ingrediente(){
    console.log('Ingredientes----........');
    var elementoIngrediente = document.getElementById('hIngrediente');
    console.log(elementoIngrediente);
    elementoIngrediente.style.color = 'red';
    // console.log('Ingrediente');
    // elemnto.style.color = 'red';
  }


  function preparacion(){
    console.log('Preparacion----........');
    var elementoPreparacion = document.getElementById('hPreparacion');
    console.log(elementoPreparacion);
    elementoPreparacion.style.color = 'red';
    // console.log('Ingrediente');
    // elemnto.style.color = 'red';
  }