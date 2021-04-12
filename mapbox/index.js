const initMap = () => {
  // REPLACE WITH YOUR ACCESS TOKEN
  mapboxgl.accessToken = "";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-9.285338, 53.853447],
    zoom: 12.5,
  });

  const popup = new mapboxgl.Popup().setHTML(
    `<h2>MAYO 4 SAM!</h2><p>McHale Park, Castlebar.</p>`
  );

  const marker = new mapboxgl.Marker()
  .setLngLat([-9.285338, 53.853447]) 
    .setPopup(popup)
    .addTo(map);
};

initMap();
