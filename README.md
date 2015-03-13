Google Maps Tiles for OpenLayers 3
==================================

Enhance the experience with maps and provide the its users and customers the ability to have Google Maps in their projects without giving up [OpenLayers 3](https://github.com/openlayers/ol3).

Calling API
-----------

```html
...
<link rel="stylesheet" href="http://openlayers.org/en/v3.3.0/css/ol.css" type="text/css">
...
<script src="http://openlayers.org/en/v3.3.0/build/ol.js" type="text/javascript"></script>
<!-- You need call the google maps api to enable the TMS -->
<script type="text/javascript"
 src="http://maps.googleapis.com/maps/api/js?key=YOUR_KEY&sensor=TRUE"></script>
<script type="text/javascript" src="/your/assets/js/ol-source-gmaps-tms.min.js"></script>
...
```

How To?
-------

```javascript
var tms_origin = [
  -15.798889,
  -47.866667
];

// [28..1]
var tms_resolutions = (function(){is=[];for(i=28;i>0;i--)is.push(i);return is;})();

var tms_bounds = [
  -8235477.040058561,
  -3995814.9371818537,
  -3876498.621542629,
  585165.7013383668
];

// GMaps projection
proj = ol.proj.get 'EPSG:900913'
proj.setExtent tms_bounds

var map = new ol.Map({
  target: 'map',
  layers: [new ol.layer.Tile({
    source: ol.source.GMapsTMS(/*{layer: 'satellite'}*/) // Don't use the new key, its not a object
  })],
  view: new ol.View({
    center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
    zoom: 4,
    maxZoom: tms_resolutions[0],
    minZoom: 0.001,
    projection: proj.getCode()
  })
});
```

Options
-------

| Option        | Type   | Default   | Accepts                                                | Description                              |
|---------------|--------|-----------|--------------------------------------------------------|------------------------------------------|
| `layer`       | string | `map`     | `map`, `terrain`, `terrain+`, `hybrid` and `satellite` | Here you can choose the type of base map |
| `resolutions` | array  | `[28..1]` | n array positions                                      | Some image resolutions                   |
| `origin`      | array  | `[0,0]`   | `[x,y]`                                                | The center map origin                    |

###Returns `ol.source.XYZ`

References
----------

* GDAL Google WMS/TMS (XML): http://www.gdal.org/frmt_wms_googlemaps_tms.xml
