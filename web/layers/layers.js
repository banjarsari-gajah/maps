var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BidangTanah_2 = new ol.format.GeoJSON();
var features_BidangTanah_2 = format_BidangTanah_2.readFeatures(json_BidangTanah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BidangTanah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BidangTanah_2.addFeatures(features_BidangTanah_2);
var lyr_BidangTanah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BidangTanah_2, 
                style: style_BidangTanah_2,
                popuplayertitle: 'Bidang Tanah',
                interactive: true,
                title: '<img src="styles/legend/BidangTanah_2.png" /> Bidang Tanah'
            });
var format_Unit_3 = new ol.format.GeoJSON();
var features_Unit_3 = format_Unit_3.readFeatures(json_Unit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unit_3.addFeatures(features_Unit_3);
var lyr_Unit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unit_3, 
                style: style_Unit_3,
                popuplayertitle: 'Unit',
                interactive: true,
                title: '<img src="styles/legend/Unit_3.png" /> Unit'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_BidangTanah_2.setVisible(true);lyr_Unit_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_BidangTanah_2,lyr_Unit_3];
lyr_BidangTanah_2.set('fieldAliases', {'fid': 'fid', 'nop': 'nop', 'blok': 'blok', 'NOP_Field2': 'name', 'NOP_Field3': 'address', });
lyr_Unit_3.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', });
lyr_BidangTanah_2.set('fieldImages', {'fid': 'TextEdit', 'nop': 'TextEdit', 'blok': 'TextEdit', 'NOP_Field2': 'TextEdit', 'NOP_Field3': 'TextEdit', });
lyr_Unit_3.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', });
lyr_BidangTanah_2.set('fieldLabels', {'fid': 'hidden field', 'nop': 'no label', 'blok': 'hidden field', 'NOP_Field2': 'no label', 'NOP_Field3': 'hidden field', });
lyr_Unit_3.set('fieldLabels', {'fid': 'hidden field', 'nama': 'no label', });
lyr_Unit_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});