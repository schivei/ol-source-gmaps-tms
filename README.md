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
var map = new ol.Map({
  target: 'map',
  layers: [new ol.layer.Tile({
    source: new ol.source.GMapsTMS()
  })],
  view: new ol.View({
    center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
    zoom: 4
  })
});
```

or

```javascript
var map = new ol.Map({
  target: 'map',
  layers: [new ol.layer.Tile({
    source: new ol.source.GMapsTMS({layer: 'satellite' /*map|terrain|hybrid|terrain+*/})
  })],
  view: new ol.View({
    center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
    zoom: 4
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

References
----------

* GDAL Google WMS/TMS (XML): http://www.gdal.org/frmt_wms_googlemaps_tms.xml
