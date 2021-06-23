var map;
var markers;

var locations = [{
        coordinates: {
            lat: 54.914444,
            lng: -1.3883114
        },
        name: "Stadium of Light",
        description: "Sunderland",
        image: "./assets/images/stadiumimages/StadiumofLight.jpg",
        address: "Postcode: SR5 1SU",
        capacity: "Capacity: 49,000",
        history: "Opened: 1997"
    },
    {
        coordinates: {
            lat: 52.00955,
            lng: -0.7335083
        },
        name: "Stadium MK",
        description: "Milton Keynes Dons",
        image: "./assets/images/stadiumimages/Stadiummk.jpg",
        address: "Postcode: MK1 1ST",
        capacity: "Capacity: 30,500",
        history: "Opened: 2007"
    }, {
        coordinates: {
            lat: 51.7165,
            lng: -1.2077825
        },
        name: "Kassam Stadium",
        description: "Oxford United",
        image: "./assets/images/stadiumimages/Kassamstadium.jpg",
        address: "Postcode: OX4 4XP",
        capacity: "Capacity: 12,400",
        history: "Opened: 2001"
    }, {
        coordinates: {
            lat: 51.63039,
            lng: -0.7997563
        },
        name: "Adams Park",
        description: "Wycombe Wanderers",
        image: "./assets/images/stadiumimages/Adamspark.jpg",
        address: "Postcode: HP12 4HJ",
        capacity: "Capacity: 10,140",
        history: "Opened: 1990"
    }, {
        coordinates: {
            lat: 53.41141,
            lng: -1.5006635
        },
        name: "Hillsborough",
        description: "Sheffield Wednesday",
        image: "./assets/images/stadiumimages/Hillsboroughstadium.jpg",
        address: "Postcode: S6 1SW",
        capacity: "Capacity: 39,732",
        history: "Opened: 1899"
    }, {
        coordinates: {
            lat: 50.7963,
            lng: -1.0638
        },
        name: "Fratton Park",
        description: "Portsmouth",
        image: "./assets/images/stadiumimages/Frattonpark.jpg",
        address: "Postcode: PO4 8RA",
        capacity: "Capacity: 19,670",
        history: "Opened: 1898"
    }, {
        coordinates: {
            lat: 53.76527,
            lng: -2.37089
        },
        name: "The Crown Ground",
        description: "Accrington Stanley",
        image: "./assets/images/stadiumimages/Thecrownground.jpg",
        address: "Postcode: BB5 5BX",
        capacity: "Capacity: 5,450",
        history: "Opened: 1968"
    }, {
        coordinates: {
            lat: 53.580647,
            lng: -2.535723
        },
        name: "University of Bolton Stadium",
        description: "Bolton Wanderers",
        image: "./assets/images/stadiumimages/Theuniversityofboltonstadium.jpg",
        address: "Postcode: BL6 6JW",
        capacity: "Capacity: 28,720",
        history: "Opened: 1997"
    }, {
        coordinates: {
            lat: 52.821884,
            lng: -1.6267859
        },
        name: "The Pirelli Stadium",
        description: "Burton Albion",
        image: "./assets/images/stadiumimages/Thepirellistadium.jpg",
        address: "Postcode: DE13 0AR",
        capacity: "Capacity: 6,912",
        history: "Opened: 2005"
    }, {
        coordinates: {
            lat: 52.212246,
            lng: 0.15428282
        },
        name: "The Abbey Stadium",
        description: "Cambridge United",
        image: "./assets/images/stadiumimages/Theabbeystadium.jpg",
        address: "Postcode: CB5 8LN",
        capacity: "Capacity: 8,127",
        history: "Opened: 1932"
    }, {
        coordinates: {
            lat: 51.486275,
            lng: 0.036632497
        },
        name: "The Valley",
        description: "Charlton Athletic",
        image: "./assets/images/stadiumimages/Thevalley.jpg",
        address: "Postcode: SE7 8BL",
        capacity: "Capacity: 27,110",
        history: "Opened: 1919"
    }, {
        coordinates: {
            lat: 51.90616,
            lng: -2.0602112
        },
        name: "Whaddon Road",
        description: "Cheltenham Town",
        image: "./assets/images/stadiumimages/Whaddonroad.jpg",
        address: "Postcode: GL52 5NA",
        capacity: "Capacity: 7,066",
        history: "Opened: 1927"
    }, {
        coordinates: {
            lat: 53.50971,
            lng: -1.1137333
        },
        name: "The Keepmoat Stadium",
        description: "Doncaster Rovers",
        image: "./assets/images/stadiumimages/Thekeepmoatstadium.jpg",
        address: "Postcode: DN4 5JW",
        capacity: "Capacity: 15,231",
        history: "Opened: 2007"
    }, {
        coordinates: {
            lat: 53.916573,
            lng: -3.024775
        },
        name: "Highbury Stadium",
        description: "Fleetwood Town",
        image: "./assets/images/stadiumimages/Highburystadium.jpg",
        address: "Postcode: N51 FL",
        capacity: "Capacity: 5,327",
        history: "Opened: 1939"
    }, {
        coordinates: {
            lat: 51.384212,
            lng: 0.5609038
        },
        name: "Priestfield",
        description: "Gillingham",
        image: "./assets/images/stadiumimages/Priestfeildstadium.jpg",
        address: "Postcode: ME7 4DD",
        capacity: "Capacity: 11,582",
        history: "Opened: 1893"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Portman Road",
        description: "Ipswich Town",
        image: "./assets/images/stadiumimages/Portmanroad.jpg",
        address: "Postcode: IP1 2DA",
        capacity: "Capacity: 30,310",
        history: "Opened: 1884"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Sincil Bank",
        description: "Lincoln City",
        image: "./assets/images/stadiumimages/Sincilbankstadium.jpg",
        address: "Postcode: LN5 8LD",
        capacity: "Capacity: 10,120",
        history: "Opened: 1895"
    }, {
        coordinates: {
            lat: 54.060993,
            lng: -2.867147
        },
        name: "Globe Arena",
        description: "Morecombe",
        image: "./assets/images/stadiumimages/Theglobearena.jpg",
        address: "Postcode: LA4 4TB",
        capacity: "Capacity: 6,476",
        history: "Opened: 2010"
    }, {
        coordinates: {
            lat: 50.388203,
            lng: -4.150943
        },
        name: "Home Park",
        description: "Plymouth Argyle",
        image: "./assets/images/stadiumimages/Homeparkstadium.jpg",
        address: "Postcode: PL2 3DQ",
        capacity: "Capacity: 18,600",
        history: "Opened: 1893"
    }, {
        coordinates: {
            lat: 53.427044,
            lng: -1.3628808
        },
        name: "New York Stadium",
        description: "Rotherham United",
        image: "./assets/images/stadiumimages/Thenewyorkstadium.jpg",
        address: "Postcode: S60 1AH",
        capacity: "Capacity: 12,020",
        history: "Opened: 2012"
    }, {
        coordinates: {
            lat: 52.688564,
            lng: -2.7493804
        },
        name: "The New Meadow",
        description: "Shrewsbury Town",
        image: "./assets/images/stadiumimages/Thenewmeadow.jpg",
        address: "Postcode: SY2 6ST",
        capacity: "Capacity: 9,875",
        history: "Opened: 2007"
    }, {
        coordinates: {
            lat: 53.547756,
            lng: -2.6539698
        },
        name: "DW Stadium",
        description: "Wigan Athletic",
        image: "./assets/images/stadiumimages/Thedwstadium.jpg",
        address: "Postcode: WN5 0UZ",
        capacity: "Capacity: 25,130",
        history: "Opened: 1999"
    }, {
        coordinates: {
            lat: 53.088566,
            lng: -2.4366293
        },
        name: "Gresty Road",
        description: "Crewe Alexandra",
        image: "./assets/images/stadiumimages/Gretseyroadstadium.jpg",
        address: "Postcode: CW2 6EB",
        capacity: "Capacity: 10,150",
        history: "Opened: 1976"
    }, {
        coordinates: {
            lat: 51.431362,
            lng: -0.1866694
        },
        name: "Plough Lane",
        description: "AFC Wimbledon",
        image: "./assets/images/stadiumimages/Ploughlane.jpg",
        address: "Postcode: SW17 0NR",
        capacity: "Capacity: 9,215",
        history: "Opened: 2021"
    }
];

function setUpCarousel() {
    var featuredLocations = locations.slice(0, 3);
    for (i = 0; i < featuredLocations.length; i++) {
        var location = featuredLocations[i];
        var carouselItem = $("#Stadium-carousel .carousel-item").first().clone();
        carouselItem.data("index", i);
        carouselItem.find(".carousel-header").text(location.name);
        carouselItem.find(".carousel-content").text(location.description);
        carouselItem.find(".carousel-image").attr("src", location.image);
        $(".carousel-inner").append(carouselItem);
    }
    $("#Stadium-carousel .carousel-item").first().remove();
    $("#Stadium-carousel .carousel-item").first().addClass("active");
}

function setUpSearch() {
    $("#stadium-search").keyup(function (e) {
        var val = $(e.target).val();
        $(".card").hide();
        $(".card").each(function () {
            var card = $(this);
            if (card.text().indexOf(val) > -1) {
                card.show();
                card.find(".card-title").text().indexOf();
            }
        })
    })
}


function setUpCards() {
    for (i = 0; i < locations.length; i++) {
        var location = locations[i];
        var stadiumCard = $("#stadium-cards .card").first().clone();
        stadiumCard.data("index", i);
        stadiumCard.find(".card-title").text(location.name);
        stadiumCard.find(".card-text").text(location.description);
        stadiumCard.find(".card-img").attr("src", location.image);
        $("#stadium-cards").append(stadiumCard);
    }
    $("#stadium-cards .card").first().remove();
}



function initMap() {
    map = new google.maps.Map($(".stadium-map").get(0), {
        zoom: 5,
        center: {
            lat: 10,
            lng: 10
        }
    });
    markers = locations.map(function (location) {
        return new google.maps.Marker({
            position: location.coordinates,
            label: location.name
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}


function focusMarker(index) {
    map.setCenter(markers[index].getPosition());
    map.setZoom(11);
}

function openModalForLocation(index, stadiumModal) {
    var location = locations[index];
    var modal = $(".stadium-modal-box");
    modal.find(".modal-title").text(location.name);
    modal.find(".modal-body-text").text(location.description);
    modal.find(".modal-capacity").text(location.capacity);
    modal.find(".modal-address").text(location.address);
    modal.find(".modal-history").text(location.history);
    focusMarker(index);
    stadiumModal.show();
}

function setUpModal() {
    var stadiumModal = new bootstrap.Modal($('#stadium-modal-location'));
    $(".stadium-button").click(function (event) {
        var index = $(event.target).closest(".card").data("index");
        openModalForLocation(index, stadiumModal);

    });
    $(".carousel-button").click(function (event) {
        var index = $(event.target).closest(".carousel-item").data("index");
        openModalForLocation(index, stadiumModal);

    });

}


$(document).ready(function () {
    setUpCarousel();
    setUpCards();
    setUpModal();
    setUpSearch();

    $("#stadium-search").keydown(function () {
        var searchValue = $("#stadium-search").val();
        locations = locations.filter(function (location) {
            return location.name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
        });
    });

});