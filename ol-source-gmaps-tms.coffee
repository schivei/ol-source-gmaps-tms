resolutions = [28..1]
origin = [0,0]
class ol.source.GMapsTMS
  defaults:
    layer: 'map'
    resolutions: resolutions
    origin: origin
  options: null
  constructor: options ->
    defaults = @defaults
    if !options
      options = defaults

    if !options.layer
      options.layer = 'map'

    switch options.layer
      when 'map', 'terrain', 'terrain+' ,'satellite', 'hybrid' then
      else options.layer = 'map'

    @options = options

    new ol.source.XYZ
      crossOrigin     : null
      tileUrlFunction : (coord) ->
        return '' if !coord
        z = coord[0]
        x = coord[1]
        y = coord[2]
        return "http://mt.google.com/vt/lyrs=m&x=#{x}&y=#{y}&z=#{z}"
      tileGrid: new ol.tilegrid.TileGrid
        origin: options.origin || origin
        resolutions: otions.resolutions || resolutions
