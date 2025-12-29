var size = 0;
var placement = 'point';

var style_Bangunan_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "18.2px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 9.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("nama") !== null) {
        labelText = String(feature.get("nama"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.2727200000000005 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(250,176,124,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(250,176,124,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
