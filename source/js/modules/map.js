// 59.93859, 30.32269

export const initMap = function() {
    var coordinates = {lat: 59.93859, lng: 30.32269},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        });

        image = '../../img/sprite/mark-form.svg',
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
        });

        google.maps.event.trigger(map, 'resize');
}