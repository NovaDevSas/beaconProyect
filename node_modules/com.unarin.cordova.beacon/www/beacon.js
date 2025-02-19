document.addEventListener("deviceready", function() {
    var delegate = cordova.plugins.locationManager.delegate;
    
    delegate.didRangeBeaconsInRegion = function(pluginResult) {
        var beacons = pluginResult.beacons;
        for (var i = 0; i < beacons.length; i++) {
            var beacon = beacons[i];
            if (beacon.uuid === "8C3889DC-3338-FF37-0E19-28BB83B37217") {
                if (beacon.major === 11 && beacon.minor === 1) {
                    redirectToUrl("https://miportal.entel.cl/personas/catalogo/accesorios/audio");
                } else if (beacon.major === 12 && beacon.minor === 1) {
                    redirectToUrl("https://miportal.entel.cl/personas/catalogo/accesorios/_/N-1z140lnZ1z140faZ1z0of6i");
                } else if (beacon.major === 13 && beacon.minor === 1) {
                    redirectToUrl("https://miportal.entel.cl/personas/catalogo/celulares/_/N-1z141c1");
                } else if (beacon.major === 14 && beacon.minor === 1) {
                    redirectToUrl("https://miportal.entel.cl/personas/catalogo/celulares/_/N-1z1416i");
                }
            }
        }
    };

    cordova.plugins.locationManager.requestWhenInUseAuthorization();
    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion("estimote", "8C3889DC-3338-FF37-0E19-28BB83B37217");
    cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion);
});

function redirectToUrl(url) {
    window.location.href = url; // Redirige a la URL especificada
}
