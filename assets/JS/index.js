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
        address: "Post Code: SR5 1SU",
        capacity: "Capacity: 49,000"
    },
    {
        coordinates: {
            lat: 52.00955,
            lng: -0.7335083
        },
        name: "Stadium MK",
        description: "Milton Keynes Dons",
        image: "./assets/images/stadiumimages/Stadiummk.jpg",
        address: "Post Code: MK1 1ST",
        capacity: "Capacity: 30,500"
    }, {
        coordinates: {
            lat: 51.7165,
            lng: -1.2077825
        },
        name: "Kassam Stadium",
        description: "Oxford United",
        image: "./assets/images/stadiumimages/Kassamstadium.jpg",
        address: "Post Code: OX4 4XP",
        capacity: "Capacity: 12,400"
    }, {
        coordinates: {
            lat: 51.63039,
            lng: -0.7997563
        },
        name: "Adams Park",
        description: "Wycombe Wanderers",
        image: "./assets/images/stadiumimages/Adamspark.jpg",
        address: "Post Code: HP12 4HJ",
        capacity: "Capacity: 10,140"
    }, {
        coordinates: {
            lat: 53.41141,
            lng: -1.5006635
        },
        name: "Hillsborough",
        description: "Sheffield Wednesday",
        image: "./assets/images/stadiumimages/Hillsboroughstadium.jpg",
        address: "Post Code: S6 1SW",
        capacity: "Capacity: 39,732"
    }, {
        coordinates: {
            lat: 50.7963,
            lng: -1.0638
        },
        name: "Fratton Park",
        description: "Portsmouth",
        image: "./assets/images/stadiumimages/Frattonpark.jpg",
        address: "Post Code: PO4 8RA",
        capacity: "Capacity: 19,670"
    }, {
        coordinates: {
            lat: 53.76527,
            lng: -2.37089
        },
        name: "The Crown Ground",
        description: "Accrington Stanley",
        image: "./assets/images/stadiumimages/Thecrownground.jpg",
        address: "Post Code: BB5 5BX",
        capacity: "Capacity: 5,450"
    }, {
        coordinates: {
            lat: 53.580647,
            lng: -2.535723
        },
        name: "University of Bolton Stadium",
        description: "Bolton Wanderers",
        image: "./assets/images/stadiumimages/Theuniversityofboltonstadium.jpg",
        address: "Post Code: BL6 6JW",
        capacity: "Capacity: 28,720"
    }, {
        coordinates: {
            lat: 52.821884,
            lng: -1.6267859
        },
        name: "The Pirelli Stadium",
        description: "Burton Albion",
        image: "./assets/images/stadiumimages/Thepirellistadium.jpg",
        address: "Post Code: DE13 0AR",
        capacity: "Capacity: 6,912"
    }, {
        coordinates: {
            lat: 52.212246,
            lng: 0.15428282
        },
        name: "The Abbey Stadium",
        description: "Cambridge United",
        image: "./assets/images/stadiumimages/Theabbeystadium.jpg",
        address: "Post Code: CB5 8LN",
        capacity: "Capacity: 8,127"
    }, {
        coordinates: {
            lat: 51.486275,
            lng: 0.036632497
        },
        name: "The Valley",
        description: "Charlton Athletic",
        image: "./assets/images/stadiumimages/Thevalley.jpg",
        address: "Post Code: SE7 8BL",
        capacity: "Capacity: 27,110"
    }, {
        coordinates: {
            lat: 51.90616,
            lng: -2.0602112
        },
        name: "Whaddon Road",
        description: "Cheltenham Town",
        image: "./assets/images/stadiumimages/Whaddonroad.jpg",
        address: "Post Code: GL52 5NA",
        capacity: "Capacity: 7,066"
    }, {
        coordinates: {
            lat: 53.50971,
            lng: -1.1137333
        },
        name: "The Keepmoat Stadium",
        description: "Doncaster Rovers",
        image: "./assets/images/stadiumimages/Thekeepmoatstadium.jpg",
        address: "Post Code: DN4 5JW",
        capacity: "Capacity: 15,231"
    }, {
        coordinates: {
            lat: 53.916573,
            lng: -3.024775
        },
        name: "Highbury Stadium",
        description: "Fleetwood Town",
        image: "./assets/images/stadiumimages/Highburystadium.jpg",
        address: "Post Code: N51 FL",
        capacity: "Capacity: 5,327"
    }, {
        coordinates: {
            lat: 51.384212,
            lng: 0.5609038
        },
        name: "Priestfield",
        description: "Gillingham",
        image: "./assets/images/stadiumimages/Priestfeildstadium.jpg",
        address: "Post Code: ME7 4DD",
        capacity: "Capacity: 11,582"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Portman Road",
        description: "Ipswich Town",
        image: "./assets/images/stadiumimages/Portmanroad.jpg",
        address: "Post Code: IP1 2DA",
        capacity: "Capacity: 30,310"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Sincil Bank",
        description: "Lincoln City",
        image: "./assets/images/stadiumimages/Sincilbankstadium.jpg",
        address: "Post Code: LN5 8LD",
        capacity: "Capacity: 10,120"
    }, {
        coordinates: {
            lat: 54.060993,
            lng: -2.867147
        },
        name: "Globe Arena",
        description: "Morecombe",
        image: "./assets/images/stadiumimages/Theglobearena.jpg",
        address: "Post Code: LA4 4TB",
        capacity: "Capacity: 6,476"
    }, {
        coordinates: {
            lat: 50.388203,
            lng: -4.150943
        },
        name: "Home Park",
        description: "Plymouth Argyle",
        image: "./assets/images/stadiumimages/Homeparkstadium.jpg",
        address: "Post Code: PL2 3DQ",
        capacity: "Capacity: 18,600"
    }, {
        coordinates: {
            lat: 53.427044,
            lng: -1.3628808
        },
        name: "New York Stadium",
        description: "Rotherham United",
        image: "./assets/images/stadiumimages/Thenewyorkstadium.jpg",
        address: "Post Code: S60 1AH",
        capacity: "Capacity: 12,020"
    }, {
        coordinates: {
            lat: 52.688564,
            lng: -2.7493804
        },
        name: "The New Meadow",
        description: "Shrewsbury Town",
        image: "./assets/images/stadiumimages/Thenewmeadow.jpg",
        address: "Post Code: SY2 6ST",
        capacity: "Capacity: 9,875"
    }, {
        coordinates: {
            lat: 53.547756,
            lng: -2.6539698
        },
        name: "DW Stadium",
        description: "Wigan Athletic",
        image: "./assets/images/stadiumimages/Thedwstadium.jpg",
        address: "Post Code: WN5 0UZ",
        capacity: "Capacity: 25,130"
    }, {
        coordinates: {
            lat: 53.088566,
            lng: -2.4366293
        },
        name: "Gresty Road",
        description: "Crewe Alexandra",
        image: "./assets/images/stadiumimages/Gretseyroadstadium.jpg",
        address: "Post Code: CW2 6EB",
        capacity: "Capacity: 10,150"
    }, {
        coordinates: {
            lat: 51.431362,
            lng: -0.1866694
        },
        name: "Plough Lane",
        description: "AFC Wimbledon",
        image: "./assets/images/stadiumimages/Ploughlane.jpg",
        address: "Post Code: SW17 0NR",
        capacity: "Capacity: 9,215"
    }
];

function setUpCarousel() {
    console.log("ready");
    console.log($("#Stadium-carousel .carousel-item"));
    var featuredLocations = locations.slice(0, 3);
    for (i = 0; i < featuredLocations.length; i++) {
        console.log(featuredLocations[i]);
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
        console.log(location.coordinates);
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
    console.log(index);
    var location = locations[index];
    console.log(location);
    var modal = $(".stadium-modal-box");
    modal.find(".modal-title").text(location.name);
    modal.find(".modal-body-text").text(location.description);
    modal.find(".modal-capacity").text(location.capacity);
    modal.find(".modal-address").text(location.address);
    focusMarker(index);
    stadiumModal.show();
}

function setUpModal() {
    var stadiumModal = new bootstrap.Modal($('#stadium-modal-location'));
    $(".stadium-button").click(function (event) {
        console.log(event);
        var index = $(event.target).closest(".card").data("index");
        openModalForLocation(index, stadiumModal);

    });
    $(".carousel-button").click(function (event) {
        console.log(event);
        var index = $(event.target).closest(".carousel-item").data("index");
        openModalForLocation(index, stadiumModal);

    });

}

function sendMail(contactForm) {
    emailjs.send("outlook", "oliver", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "your_message": contactForm.feedback.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}




$(document).ready(function () {
    setUpCarousel();
    setUpCards();
    setUpModal();
    sendMail();

    $("#stadium-search").keydown(function () {
        console.log("hello");
        var searchValue = $("#stadium-search").val();
        console.log(searchValue);
        filteredLocations = locations.filter(function (location) {
            return location.name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
        })
        console.log(filteredLocations);
    })

})