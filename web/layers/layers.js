var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BidangTanah_1 = new ol.format.GeoJSON();
var features_BidangTanah_1 = format_BidangTanah_1.readFeatures(json_BidangTanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BidangTanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BidangTanah_1.addFeatures(features_BidangTanah_1);
var lyr_BidangTanah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BidangTanah_1, 
                style: style_BidangTanah_1,
                popuplayertitle: 'Bidang Tanah',
                interactive: true,
                title: '<img src="styles/legend/BidangTanah_1.png" /> Bidang Tanah'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Batas_3 = new ol.format.GeoJSON();
var features_Batas_3 = format_Batas_3.readFeatures(json_Batas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_3.addFeatures(features_Batas_3);
var lyr_Batas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_3, 
                style: style_Batas_3,
                popuplayertitle: 'Batas',
                interactive: false,
                title: '<img src="styles/legend/Batas_3.png" /> Batas'
            });
var format_Bangunan_4 = new ol.format.GeoJSON();
var features_Bangunan_4 = format_Bangunan_4.readFeatures(json_Bangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_4.addFeatures(features_Bangunan_4);
var lyr_Bangunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_4, 
                style: style_Bangunan_4,
                popuplayertitle: 'Bangunan',
                interactive: false,
                title: '<img src="styles/legend/Bangunan_4.png" /> Bangunan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BidangTanah_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Batas_3.setVisible(true);lyr_Bangunan_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BidangTanah_1,lyr_Jalan_2,lyr_Batas_3,lyr_Bangunan_4];
lyr_BidangTanah_1.set('fieldAliases', {'fid': 'fid', 'nop': 'nop', 'blok': 'blok', 'NOP_Field2': 'name', 'NOP_Field3': 'address', });
lyr_Jalan_2.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', 'jenis': 'jenis', });
lyr_Batas_3.set('fieldAliases', {'fid': 'fid', });
lyr_Bangunan_4.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', });
lyr_BidangTanah_1.set('fieldImages', {'fid': 'TextEdit', 'nop': 'TextEdit', 'blok': 'TextEdit', 'NOP_Field2': 'TextEdit', 'NOP_Field3': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'Range', });
lyr_Batas_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Bangunan_4.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', });
lyr_BidangTanah_1.set('fieldLabels', {'fid': 'hidden field', 'nop': 'no label', 'blok': 'hidden field', 'NOP_Field2': 'no label', 'NOP_Field3': 'hidden field', });
lyr_Jalan_2.set('fieldLabels', {'fid': 'no label', 'nama': 'no label', 'jenis': 'no label', });
lyr_Batas_3.set('fieldLabels', {'fid': 'no label', });
lyr_Bangunan_4.set('fieldLabels', {'fid': 'hidden field', 'nama': 'no label', });
lyr_Bangunan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});