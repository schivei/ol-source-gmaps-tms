ol.source.GMapsTMS = (options) ->
  resolutions = [28..1]
  origin = [0,0]
  defaults =
    layer: 'map'
    resolutions: resolutions
    origin: origin

  if typeof options is 'undefined' or !options
    options = defaults

  if typeof options.layer is 'undefined' or !options.layer
    options.layer = 'map'

  if typeof options.resolutions is 'undefined' or !options.resolutions
    options.resolutions = resolutions

  if typeof options.origin is 'undefined' or !options.origin
    options.origin = origin

  type = 'm'

  switch options.layer
    when 'map' then type = 'm'
    when 'terrain' then type = 't'
    when 'terrain+' then type = 'p'
    when 'satellite' then type = 's'
    when 'hybrid' then type = 'y'
    else options.layer = 'map'

  return new ol.source.XYZ
    crossOrigin     : null
    tileUrlFunction : (coord) ->
      return '' if !coord
      z = coord[0]
      x = coord[1]
      y = coord[2]
      return "http://mt.google.com/vt/lyrs=#{type}&x=#{x}&y=#{y}&z=#{z}"
    tileGrid: new ol.tilegrid.TileGrid
      origin: options.origin
      resolutions: options.resolutions
