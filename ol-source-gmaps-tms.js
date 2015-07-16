(function() {
  ol.source.GMapsTMS = function(options) {
    var defaults, origin, resolutions, type, _i, _results,ol_version;
    resolutions = (function() {
      _results = [];
      for (_i = 28; _i >= 1; _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
    origin = [0, 0];
    defaults = {
      layer: 'map',
      resolutions: resolutions,
      origin: origin
    };
    ol_version =  'v3.7.0+';
    if (typeof options === 'undefined' || !options) {
      options = defaults;
    }
    if (typeof options.layer === 'undefined' || !options.layer) {
      options.layer = 'map';
    }
    if (typeof options.resolutions === 'undefined' || !options.resolutions) {
      options.resolutions = resolutions;
    }
    if (typeof options.origin === 'undefined' || !options.origin) {
      options.origin = origin;
    }
    if (typeof options.ol_version === 'undefined' || !options.ol_version) {
      options.ol_version = ol_version;
    }
    type = 'm';
    switch (options.layer) {
      case 'map':
        type = 'm';
        break;
      case 'terrain':
        type = 't';
        break;
      case 'terrain+':
        type = 'p';
        break;
      case 'satellite':
        type = 's';
        break;
      case 'hybrid':
        type = 'y';
        break;
      default:
        options.layer = 'map';
    }
    if (options.ol_version === 'v3.7.0+') {
	return new ol.source.XYZ({
		url: 'http://mt.google.com/vt/lyrs=' + type + '&x={x}&y={y}&z={z}'
	});
    } else {
	return new ol.source.XYZ({
	      crossOrigin: null,
	      tileUrlFunction: function(coord) {
	        var x, y, z;
	        if (!coord) {
	          return '';
	        }
	        z = coord[0];
	        x = coord[1];
	        y = coord[2];
	        return "http://mt.google.com/vt/lyrs=" + type + "&x=" + x + "&y=" + y + "&z=" + z;
	      },
	      tileGrid: new ol.tilegrid.TileGrid({
	        origin: options.origin,
	        resolutions: options.resolutions
	      })
	    });
    }
  };

}).call(this);
