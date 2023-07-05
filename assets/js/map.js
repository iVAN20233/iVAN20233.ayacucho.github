var map = L.map('map', {
    center: [-13.940556, -74.719794], // Coordenadas del centro de Ayacucho
    zoom: 8, // Zoom inicial
    minZoom: 5, // Zoom mínimo permitido
    maxZoom: 20 // Zoom máximo permitido
  });
  
  var basemapGoogleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  });
  
  var basemapOpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors'
  });
  
  // Definir una función para crear las capas WMS de manera más eficiente
  function createWMSLayer(layerName, displayName) {
    return L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
      layers: 'departamento_ayacucho:' + layerName,
      format: 'image/png',
      transparent: true,
      attribution: displayName
    }).addTo(map);
  }
  
  var wmsLayer = createWMSLayer('zona arqueologica', 'Zona Arqueológica');
  var colegiosLayer = createWMSLayer('colegios_ayacucho', 'Colegios en Ayacucho');
  var estadioLayer = createWMSLayer('estadio_ayacucho', 'Estadio Ayacucho');
  var departamentoLayer = createWMSLayer('departamento_ayacucho', 'Departamento Ayacucho');
  var farmaciasLayer = createWMSLayer('farmacias_ayacucho', 'Farmacias Ayacucho');
  var grifoLayer = createWMSLayer('grifo_ayacucho', 'Grifo Ayacucho');
  var hotelesLayer = createWMSLayer('hoteles_ayacucho', 'Hoteles Ayacucho');
  
  basemapGoogleSatellite.addTo(map);
  
  var baseMaps = {
    "Google Satellite": basemapGoogleSatellite,
    "Google Maps": basemapOpenStreetMap
  };
  
  var overlayMaps = {
    "Zona Arqueológica": wmsLayer,
    "Colegios en Ayacucho": colegiosLayer,
    "Estadio Ayacucho": estadioLayer,
    "Departamento Ayacucho": departamentoLayer,
    "Farmacias Ayacucho": farmaciasLayer,
    "Grifo Ayacucho": grifoLayer,
    "Hoteles Ayacucho": hotelesLayer
  };
  
  L.control.layers(baseMaps, overlayMaps, {
    position: 'topright',
    collapsed: false
  }).addTo(map);
  var map = L.map('map', {
    center: [-13.940556, -74.719794], // Coordenadas del centro de Ayacucho
    zoom: 8, // Zoom inicial
    minZoom: 5, // Zoom mínimo permitido
    maxZoom: 20 // Zoom máximo permitido
  });
  
  var basemapGoogleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  });
  
  var basemapOpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors'
  });
  
  // Definir una función para crear las capas WMS de manera más eficiente
  function createWMSLayer(layerName, displayName) {
    return L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
      layers: 'departamento_ayacucho:' + layerName,
      format: 'image/png',
      transparent: true,
      attribution: displayName
    }).addTo(map);
  }
  
  var wmsLayer = createWMSLayer('zona arqueologica', 'Zona Arqueológica');
  var colegiosLayer = createWMSLayer('colegios_ayacucho', 'Colegios en Ayacucho');
  var estadioLayer = createWMSLayer('estadio_ayacucho', 'Estadio Ayacucho');
  var departamentoLayer = createWMSLayer('departamento_ayacucho', 'Departamento Ayacucho');
  var farmaciasLayer = createWMSLayer('farmacias_ayacucho', 'Farmacias Ayacucho');
  var grifoLayer = createWMSLayer('grifo_ayacucho', 'Grifo Ayacucho');
  var hotelesLayer = createWMSLayer('hoteles_ayacucho', 'Hoteles Ayacucho');
  
  basemapGoogleSatellite.addTo(map);
  
  var baseMaps = {
    "Google Satellite": basemapGoogleSatellite,
    "Google Maps": basemapOpenStreetMap
  };
  
  var overlayMaps = {
    "Zona Arqueológica": wmsLayer,
    "Colegios en Ayacucho": colegiosLayer,
    "Estadio Ayacucho": estadioLayer,
    "Departamento Ayacucho": departamentoLayer,
    "Farmacias Ayacucho": farmaciasLayer,
    "Grifo Ayacucho": grifoLayer,
    "Hoteles Ayacucho": hotelesLayer
  };
  
  L.control.layers(baseMaps, overlayMaps, {
    position: 'topright',
    collapsed: false
  }).addTo(map);
    