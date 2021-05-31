function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 54.560886,
            lng: -2.2125118
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
            lat: 52.00955,
            lng: -0.7335083
        }, {
            lat: 51.486275,
            lng: 0.036632497
        }, {
            lat: 50.79639,
            lng: -1.06389
        }, {
            lat: 52.054935,
            lng: 1.1453184
        }, {
            lat: 54.914444,
            lng: -1.3883114
        }, {
            lat: 51.384212,
            lng: 0.5609038
        }, {
            lat: 53.547756,
            lng: -2.6539698
        }, {
            lat: 53.509865,
            lng: -1.115351
        }, {
            lat: 53.088566,
            lng: -2.4366293
        }, {
            lat: 52.821884,
            lng: -1.6267859
        }, {
            lat: 53.76527,
            lng: -2.37089
        }, {
            lat: 52.688564,
            lng: -2.7493804
        }, {
            lat: 53.916573,
            lng: -3.024775
        }, {
            lat: 50.388203,
            lng: -4.150943
        }, {
            lat: 51.405136,
            lng: -0.28194362
        }, {
            lat: 53.218254,
            lng: -0.54084957
        }, {
            lat: 51.7165,
            lng: -1.2077825
        }, {
            lat: 53.41141,
            lng: -1.5006635
        }, {
            lat: 51.6306,
            lng: -0.800299
        }, {
            lat: 53.427044,
            lng: -1.3628808
        }, {
            lat: 52.2128,
            lng: 0.154298
        }, {
            lat: 53.580647,
            lng: -2.535723
        }, {
            lat: 54.060993,
            lng: -2.867147
        }, {
            lat: 51.90616,
            lng: -2.0602112
        }

    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}