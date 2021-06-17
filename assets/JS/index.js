var locations = [{
        coordinates: {
            lat: 54.914444,
            lng: -1.3883114
        },
        name: "Stadium of Light",
        description: "Sunderland",
        image: "./assets/images/stadiumimages/StadiumofLight.jpg"
    },
    {
        coordinates: {
            lat: 52.00955,
            lng: -0.7335083
        },
        name: "Stadium MK",
        description: "Milton Keynes Dons",
        image: "./assets/images/stadiumimages/Stadiummk.jpg"
    }, {
        coordinates: {
            lat: 51.7165,
            lng: -1.2077825
        },
        name: "Kassam Stadium",
        description: "Oxford United",
        image: "./assets/images/stadiumimages/Kassamstadium.jpg"
    }, {
        coordinates: {
            lat: 51.63039,
            lng: -0.7997563
        },
        name: "Adams Park",
        description: "Wycombe Wanderers",
        image: "./assets/images/stadiumimages/Adamspark.jpg"
    }, {
        coordinates: {
            lat: 53.41141,
            lng: -1.5006635
        },
        name: "Hillsborough",
        description: "Sheffield Wednesday",
        image: "./assets/images/stadiumimages/Hillsboroughstadium.jpg"
    }, {
        coordinates: {
            lat: 50.7963,
            lng: 1.0638
        },
        name: "Fratton Park",
        description: "Portsmouth",
        image: "./assets/images/stadiumimages/Frattonpark.jpg"
    }, {
        coordinates: {
            lat: 53.76527,
            lng: -2.37089
        },
        name: "The Crown Ground",
        description: "Accrington Stanley",
        image: "./assets/images/stadiumimages/Thecrownground.jpg"
    }, {
        coordinates: {
            lat: 53.580647,
            lng: -2.535723
        },
        name: "University of Bolton Stadium",
        description: "Bolton Wanderers",
        image: "./assets/images/stadiumimages/Theuniversityofboltonstadium.jpg"
    }, {
        coordinates: {
            lat: 52.821884,
            lng: -1.6267859
        },
        name: "The Pirelli Stadium",
        description: "Burton Albion",
        image: "./assets/images/stadiumimages/Thepirellistadium.jpg"
    }, {
        coordinates: {
            lat: 52.212246,
            lng: 0.15428282
        },
        name: "The Abbey Stadium",
        description: "Cambridge United",
        image: "./assets/images/stadiumimages/Theabbeystadium.jpg"
    }, {
        coordinates: {
            lat: 51.486275,
            lng: 0.036632497
        },
        name: "The Valley",
        description: "Charlton Athletic",
        image: "./assets/images/stadiumimages/Thevalley.jpg"
    }, {
        coordinates: {
            lat: 51.90616,
            lng: -2.0602112
        },
        name: "Whaddon Road",
        description: "Cheltenham Town",
        image: "./assets/images/stadiumimages/Whaddonroad.jpg"
    }, {
        coordinates: {
            lat: 53.50971,
            lng: -1.1137333
        },
        name: "The Keepmoat Stadium",
        description: "Doncaster Rovers",
        image: "./assets/images/stadiumimages/Thekeepmoatstadium.jpg"
    }, {
        coordinates: {
            lat: 53.916573,
            lng: -3.024775
        },
        name: "Highbury Stadium",
        description: "Fleetwood Town",
        image: "./assets/images/stadiumimages/Highburystadium.jpg"
    }, {
        coordinates: {
            lat: 51.384212,
            lng: 0.5609038
        },
        name: "Priestfield",
        description: "Gillingham",
        image: "./assets/images/stadiumimages/Priestfeildstadium.jpg"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Portman Road",
        description: "Ipswich Town",
        image: "./assets/images/stadiumimages/Portmanroad.jpg"
    }, {
        coordinates: {
            lat: 52.054935,
            lng: 1.1453184
        },
        name: "Sincil Bank",
        description: "Lincoln City",
        image: "./assets/images/stadiumimages/Sincilbankstadium.jpg"
    }, {
        coordinates: {
            lat: 54.060993,
            lng: -2.867147
        },
        name: "Globe Arena",
        description: "Morecombe",
        image: "./assets/images/stadiumimages/Theglobearena.jpg"
    }, {
        coordinates: {
            lat: 50.388203,
            lng: -4.150943
        },
        name: "Home Park",
        description: "Plymouth Argyle",
        image: "./assets/images/stadiumimages/Homeparkstadium.jpg"
    }, {
        coordinates: {
            lat: 53.427044,
            lng: -1.3628808
        },
        name: "New York Stadium",
        description: "Rotherham United",
        image: "./assets/images/stadiumimages/Thenewyorkstadium.jpg"
    }, {
        coordinates: {
            lat: 52.688564,
            lng: -2.7493804
        },
        name: "The New Meadow",
        description: "Shrewsbury Town",
        image: "./assets/images/stadiumimages/Thenewmeadow.jpg"
    }, {
        coordinates: {
            lat: 53.547756,
            lng: -2.6539698
        },
        name: "DW Stadium",
        description: "Wigan Athletic",
        image: "./assets/images/stadiumimages/Thedwstadium.jpg"
    }, {
        coordinates: {
            lat: 53.088566,
            lng: -2.4366293
        },
        name: "Gresty Road",
        description: "Crewe Alexandra",
        image: "./assets/images/stadiumimages/Gretseyroadstadium.jpg"
    }, {
        coordinates: {
            lat: 51.431362,
            lng: -0.1866694
        },
        name: "Plough Lane",
        description: "AFC Wimbledon",
        image: "./assets/images/stadiumimages/Ploughlane.jpg"
    }
];

var filteredLocations = locations;

function setUpCarousel() {
    console.log("ready");
    console.log($("#Stadium-carousel .carousel-item"));
    var featuredLocations = locations.slice(0, 3);
    for (i = 0; i < featuredLocations.length; i++) {
        console.log(featuredLocations[i]);
        var location = featuredLocations[i];
        var carouselItem = $("#Stadium-carousel .carousel-item").first().clone();
        carouselItem.find(".carousel-header").text(location.name);
        carouselItem.find(".carousel-content").text(location.description);
        carouselItem.find(".carousel-image").attr("src", location.image);
        $(".carousel-inner").append(carouselItem);
    }
    $("#Stadium-carousel .carousel-item").first().remove();
    $("#Stadium-carousel .carousel-item").first().addClass("active");
}

function setUpCards() {
    for (i = 0; i < filteredLocations.length; i++) {
        var location = filteredLocations[i];
        var stadiumCard = $("#stadium-cards .card").first().clone();
        stadiumCard.find(".card-title").text(location.name);
        stadiumCard.find(".card-text").text(location.description);
        stadiumCard.find(".card-img").attr("src", location.image);
        $("#stadium-cards").append(stadiumCard);
    }
    $("#stadium-cards .card").first().remove();
}


$(document).ready(function () {
    setUpCarousel();
    setUpCards();

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