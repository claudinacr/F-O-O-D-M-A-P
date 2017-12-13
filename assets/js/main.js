$(document).ready(function () {

});
var mapa;
var opciones = {
  center: { lat: 11.9108084, lng: -70.0299834 },
  zoom: 10
};



function initMap() {
  mapa = new google.maps.Map(document.getElementById('map'), opciones);

  var restaurantes = [];
  for (let i = 0; i < data.length; i++) {
    const restaurante = data[i];
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(restaurante.coords),
      title: restaurante.name,
      map: mapa,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: 'magenta',
        fillOpacity: 0.8,
      }
    });
    marker.setMap(mapa);
    restaurantes.push(marker);

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

});
var mapa;
var opciones = {
  center: { lat: 11.9108084, lng: -70.0299834 },
  zoom: 10
};


$(document).ready(function () {
  $('.fa-search').click(function () {
    var categoria = $('#filtro-categoria').val();
    for (var j = 0; j < data.length; j++) {
      if (categoria === data[j].categoria) {
        var position = j;
        mapa = new google.maps.Map(document.getElementById('map'), opciones);
        const restaurante = data[j];
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
    for (var k = 0; k < data[position].platos.length; k++) {
      var boxMenu = $('.menu');
      boxMenu.append('<img src ="' + data[position].platos[k].image + '"/>');
    }
  });
});





