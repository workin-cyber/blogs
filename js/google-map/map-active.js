var map, latlng = new google.maps.LatLng(31.752457, 35.213878),
stylez = [
   
    {
     featureType: "all",
    elementType: "labels.text.fill",
       stylers: [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
            {
                "visibility": "off"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
            {
                "color": "#0f9324"
            },
            {
                "lightness": 20
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
            {
                "color": "#00700a"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "labels.text",
        stylers: [
            {
                "color": "#93c991"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        featureType: "landscape.natural.landcover",
        elementType: "geometry",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        featureType: "landscape.natural.landcover",
        elementType: "geometry.fill",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        featureType: "landscape.natural.landcover",
        elementType: "geometry.stroke",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        featureType: "landscape.natural.terrain",
        elementType: "geometry.fill",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        featureType: "landscape.natural.terrain",
        elementType: "geometry.stroke",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [
            {
                "visibility": "on"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }],
    mapOptions = {
        zoom: 17,
        center: latlng,
        scrollwheel: !1,
        scaleControl: !1,
        disableDefaultUI: !0,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "gMap"]
        }
    };


map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
var geocoder_map = new google.maps.Geocoder,
    address = "pierre koenig 30,jerusalem";
geocoder_map.geocode({
    address: address
}, function (e, a) {
    if (a == google.maps.GeocoderStatus.OK) {
        map.setCenter(e[0].geometry.location);
        new google.maps.Marker({
            map: map,
            icon: "img/core-img/map.png",
            position: map.getCenter()
        })
    } else alert("Geocode was not successful for the following reason: " + a)
});
var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
map.mapTypes.set("gMap", mapType), map.setMapTypeId("gMap");