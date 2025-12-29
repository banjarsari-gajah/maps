var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_bidang_pbb_1 = new ol.format.GeoJSON();
var features_bidang_pbb_1 = format_bidang_pbb_1.readFeatures(json_bidang_pbb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bidang_pbb_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bidang_pbb_1.addFeatures(features_bidang_pbb_1);
var lyr_bidang_pbb_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bidang_pbb_1, 
                style: style_bidang_pbb_1,
                popuplayertitle: 'bidang_pbb',
                interactive: true,
                title: '<img src="styles/legend/bidang_pbb_1.png" /> bidang_pbb'
            });
var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_2.addFeatures(features_jalan_2);
var lyr_jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
                popuplayertitle: 'jalan',
                interactive: false,
                title: '<img src="styles/legend/jalan_2.png" /> jalan'
            });
var format_batas_3 = new ol.format.GeoJSON();
var features_batas_3 = format_batas_3.readFeatures(json_batas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_3.addFeatures(features_batas_3);
var lyr_batas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_3, 
                style: style_batas_3,
                popuplayertitle: 'batas',
                interactive: false,
                title: '<img src="styles/legend/batas_3.png" /> batas'
            });
var format_bangunan_4 = new ol.format.GeoJSON();
var features_bangunan_4 = format_bangunan_4.readFeatures(json_bangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_4.addFeatures(features_bangunan_4);
var lyr_bangunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_4, 
                style: style_bangunan_4,
                popuplayertitle: 'bangunan',
                interactive: false,
                title: '<img src="styles/legend/bangunan_4.png" /> bangunan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_bidang_pbb_1.setVisible(true);lyr_jalan_2.setVisible(true);lyr_batas_3.setVisible(true);lyr_bangunan_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_bidang_pbb_1,lyr_jalan_2,lyr_batas_3,lyr_bangunan_4];
lyr_bidang_pbb_1.set('fieldAliases', {'fid': 'fid', 'nop': 'nop', 'blok': 'blok', 'NOP_Field2': 'name', 'NOP_Field3': 'address', });
lyr_jalan_2.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', 'jenis': 'jenis', });
lyr_batas_3.set('fieldAliases', {'fid': 'fid', });
lyr_bangunan_4.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', });
lyr_bidang_pbb_1.set('fieldImages', {'fid': 'TextEdit', 'nop': 'TextEdit', 'blok': 'TextEdit', 'NOP_Field2': 'TextEdit', 'NOP_Field3': 'TextEdit', });
lyr_jalan_2.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'Range', });
lyr_batas_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_bangunan_4.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', });
lyr_bidang_pbb_1.set('fieldLabels', {'fid': 'hidden field', 'nop': 'no label', 'blok': 'hidden field', 'NOP_Field2': 'no label', 'NOP_Field3': 'hidden field', });
lyr_jalan_2.set('fieldLabels', {'fid': 'no label', 'nama': 'no label', 'jenis': 'no label', });
lyr_batas_3.set('fieldLabels', {'fid': 'no label', });
lyr_bangunan_4.set('fieldLabels', {'fid': 'hidden field', 'nama': 'no label', });
lyr_bangunan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});