var locations = [{
        coordinates: {
            lat: 54.914444,
            lng: -1.3883114
        },
        name: "Stadium of Light",
        description: "Sunderland",
        image: "https://place-hold.it/300"
    },
    {
        coordinates: {
            lat: 52.00955,
            lng: -0.7335083
        },
        name: "Stadium MK",
        description: "Milton Keynes Dons",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 51.7165,
            lng: -1.2077825
        },
        name: "Kassam Stadium",
        description: "Oxford United",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 51.63039,
            lng: -0.7997563
        },
        name: "Adams Park",
        description: "Wycombe Wanderers",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 53.41141,
            lng: -1.5006635
        },
        name: "Hillsborough",
        description: "Sheffield Wednesday",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Portman Road",
        description: "Portsmouth",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 53.76527,
            lng: -2.37089
        },
        name: "The Crown Ground",
        description: "Accrington Stanley",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 53.580647,
            lng: -2.535723
        },
        name: "The University of Bolton Stadium",
        description: "Bolton Wanderers",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 52.821884,
            lng: -1.6267859
        },
        name: "The Pirelli Stadium",
        description: "Burton Albion",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 52.212246,
            lng: 0.15428282
        },
        name: "The Abbey Stadium",
        description: "Cambridge United",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 51.486275,
            lng: 0.036632497
        },
        name: "The Valley",
        description: "Charlton Athletic",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 51.90616,
            lng: -2.0602112
        },
        name: "Whaddon Road",
        description: "Cheltenham Town",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 53.50971,
            lng: -1.1137333
        },
        name: "The Keepmoat Stadium",
        description: "Doncaster Rovers",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 53.916573,
            lng: -3.024775
        },
        name: "Highbury Stadium",
        description: "Fleetwood Town",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 51.384212,
            lng: 0.5609038
        },
        name: "Priestfield",
        description: "Gillingham",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Portman Road",
        description: "Ipswich Town",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Sincil Bank",
        description: "Lincoln City",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 54.060993,
            lng: -2.867147
        },
        name: "Globe Arena",
        description: "Morecombe",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 50.388203,
            lng: -4.150943
        },
        name: "Home Park",
        description: "Plymouth Argyle",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 53.427044,
            lng: -1.3628808
        },
        name: "New York Stadium",
        description: "Rotherham United",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 52.688564,
            lng: -2.7493804
        },
        name: "The New Meadow",
        description: "Shrewsbury Town",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 53.547756,
            lng: -2.6539698
        },
        name: "DW Stadium",
        description: "Wigan Athletic",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 53.088566,
            lng: -2.4366293
        },
        name: "Gresty Road",
        description: "Crewe Alexandra",
        image: "https://place-hold.it/300"
    }, {
        coordinates: {
            lat: 51.431362,
            lng: -0.1866694
        },
        name: "Plough Lane",
        description: "AFC Wimbledon",
        image: "https://place-hold.it/300"
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
        carouselItem.find(".header").text(location.name);
        carouselItem.find(".content").text(location.description);
        $(".carousel-inner").append(carouselItem);
    }
    $("#Stadium-carousel .carousel-item").first().remove();
    $("#Stadium-carousel .carousel-item").first().addClass("active");
}

function setUpCard() {
    for (i = 0; i < locations.length; i++) {
        var location = locations[i];
        var stadiumCard = $("#stadium-cards .card").first().clone();
        stadiumCard.find(".card-title").text(location.name);
        stadiumCard.find(".card-text").text(location.description);
        $("#stadium-cards").append(stadiumCard);
    }
    $("#stadium-cards .card").first().remove();
}


$(document).ready(function () {
    setUpCarousel();
    setUpCard();


})