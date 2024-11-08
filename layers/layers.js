var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_boundary_polygon_1 = new ol.format.GeoJSON();
var features_boundary_polygon_1 = format_boundary_polygon_1.readFeatures(json_boundary_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_polygon_1.addFeatures(features_boundary_polygon_1);
var lyr_boundary_polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_polygon_1, 
                style: style_boundary_polygon_1,
                popuplayertitle: "boundary_polygon",
                interactive: true,
                title: '<img src="styles/legend/boundary_polygon_1.png" /> boundary_polygon'
            });

lyr_OSMStandard_0.setVisible(true);lyr_boundary_polygon_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_boundary_polygon_1];
lyr_boundary_polygon_1.set('fieldAliases', {'qc_id': 'qc_id', 'osm_id': 'osm_id', 'name': 'name', 'admin_lvl': 'admin_lvl', 'average salary 2013 (1)_qc_id': 'average salary', 'average salary 2013 (1)_amount': 'average salary', });
lyr_boundary_polygon_1.set('fieldImages', {'qc_id': 'Hidden', 'osm_id': 'Hidden', 'name': 'TextEdit', 'admin_lvl': 'Hidden', 'average salary 2013 (1)_qc_id': 'TextEdit', 'average salary 2013 (1)_amount': 'TextEdit', });
lyr_boundary_polygon_1.set('fieldLabels', {'name': 'inline label - always visible', 'average salary 2013 (1)_qc_id': 'inline label - visible with data', 'average salary 2013 (1)_amount': 'inline label - visible with data', });
lyr_boundary_polygon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});