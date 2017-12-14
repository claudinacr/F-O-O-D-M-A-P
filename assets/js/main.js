$(document).ready(function () {
  setTimeout(function () {
    $('#splash').fadeOut(500);
  }, 600);
});
var mapa;
var mapa2;
var opciones = {
  center: { lat: 11.9108084, lng: -70.0299834 },
  zoom: 9
};
var restaurantes = [];

function initMap() {
  mapa = new google.maps.Map(document.getElementById('map'), opciones);
  mapa2 = new google.maps.Map(document.getElementById('modalbody'), opciones);


  for (let i = 0; i < data.length; i++) {
    const restaurante = data[i];
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(restaurante.coords),
      title: restaurante.name,
      map: mapa,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: 'magenta',
        fillOpacity: 0.8,
      },
      description: restaurante.descripcion,
      address: restaurante.address,
      tlf: restaurante.tlf,
      precio: restaurante.Precio,
    });
    marker.setMap(mapa);
    restaurantes.push(marker);

    marker.addListener('click', function () {
      $('#myModal').find('.modal-title').text(this.title);
      $('#myModal').find('.modal-desc').text(this.description);
      $('#myModal').find('.modal-tlf').text(this.tlf);
      $('#myModal').find('.modal-tlf').prepend("Telf: ");
      $('#myModal').find('.modal-precio').text(this.precio);
      $('#myModal').find('.modal-precio').prepend("Rango de precio: ");
      $('#myModal').find('.modal-dir').text(this.address)
      $('#myModal').find('.modal-dir').prepend("Dirección: ");






      //google.maps.event.trigger(mapa2, 'resize');

      this.setMap(mapa2);
      mapa2.setZoom(15);
      mapa2.setCenter(this.position);

      //map.setMap($('#myModal').find('.modal-body'));









      $('#myModal').modal('show');

      $('#myModal').on('shown.bs.modal', function () {
        var lastCenter = mapa2.getCenter();
        google.maps.event.trigger(mapa2, 'resize');
        mapa2.setCenter(lastCenter);

      });


    });

  }

}


function setMarkers() {

  for (let index = 0; index < restaurantes.length; index++) {
    const restaurante = restaurantes[index];


  }

}


// function clearMarkers() {
//   for (var i = 0; i < markers.length; i++) {

//     markers[i].setMap(null);
//   }
//   //markers = [];//use this to clear out all the markers.
// }





$(document).ready(function () {
  $('.fa-search').click(function () {
    var categoria = $('#filtro-categoria').val();
    for (var j = 0; j < data.length; j++) {
      const restaurante = data[j];
      if (restaurante.categoria.includes(categoria)) {
        var position = j;
        mapa = new google.maps.Map(document.getElementById('map'), opciones);

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(data[j].coords),
          title: restaurante.categoria,
          map: mapa,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: 'magenta',
            fillOpacity: 0.8,
          }
        });
      }
    }

    var boxMenu = $('.menu');
    boxMenu.html('');
    for (var k = 0; k < data[position].platos.length; k++) {

      boxMenu.append('<img src ="' + data[position].platos[k].image + '" + title ="' + data[position].platos[k].name + '"/>');


    }
  });



  $('.modal-close').click(function () {
    initMap();

  });
});











