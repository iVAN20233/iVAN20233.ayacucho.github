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
  
  var wmsLayer = L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
    layers: 'departamento_ayacucho:zona arqueologica',
    format: 'image/png',
    transparent: true,
    attribution: 'Zona Arqueológica'
  }).addTo(map);
  
  var colegiosLayer = L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
    layers: 'departamento_ayacucho:colegios_ayacucho',
    format: 'image/png',
    transparent: true,
    attribution: 'Colegios en Ayacucho'
  }).addTo(map);
  
  var estadioLayer = L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
    layers: 'departamento_ayacucho:estadio_ayacucho',
    format: 'image/png',
    transparent: true,
    attribution: 'Estadio Ayacucho'
  }).addTo(map);
  
  var departamentoLayer = L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
    layers: 'departamento_ayacucho:departamento_ayacucho',
    format: 'image/png',
    transparent: true,
    attribution: 'Departamento Ayacucho'
  }).addTo(map);
  
  var farmaciasLayer = L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
    layers: 'departamento_ayacucho:farmacias_ayacucho',
    format: 'image/png',
    transparent: true,
    attribution: 'Farmacias Ayacucho'
  }).addTo(map);
  
  var grifoLayer = L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
    layers: 'departamento_ayacucho:grifo_ayacucho',
    format: 'image/png',
    transparent: true,
    attribution:'Grifo Ayacucho'
  }).addTo(map);
  
  var hotelesLayer = L.tileLayer.wms('http://localhost:8080/geoserver/departamento_ayacucho/wms', {
    layers: 'departamento_ayacucho:hoteles_ayacucho',
    format: 'image/png',
    transparent: true,
    attribution: 'Hoteles Ayacucho'
  }).addTo(map);
  
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
  