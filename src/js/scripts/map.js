//яндекс карты
function init() {
    let coordsAttr = $(".js-contacts-map").attr("coords");
    if (coordsAttr) {
        let coords = coordsAttr.split(",");
        let map1 = new ymaps.Map('map1', {
            center: [parseFloat(coords[0]), parseFloat(coords[1])],
            zoom: 15
        });
        let placemark1 = new ymaps.Placemark([parseFloat(coords[0]), parseFloat(coords[1])], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/pin.svg',
            iconImageSize: [72, 90],
            iconImageOffset: [-69, -84]
        });
        const maps = [map1];
        maps.forEach(map => map.controls.remove('geolocationControl'));
        maps.forEach(map => map.controls.remove('searchControl'));
        maps.forEach(map => map.controls.remove('trafficControl'));
        maps.forEach(map => map.controls.remove('typeSelector'));
        maps.forEach(map => map.controls.remove('fullscreenControl'));
        maps.forEach(map => map.controls.remove('zoomControl'));
        maps.forEach(map => map.controls.remove('rulerControl'));
        map1.geoObjects.add(placemark1);
    }
}
ymaps.ready(init);