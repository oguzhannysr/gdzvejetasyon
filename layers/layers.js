var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TehlikeSnflar_1 = new ol.format.GeoJSON();
var features_TehlikeSnflar_1 = format_TehlikeSnflar_1.readFeatures(json_TehlikeSnflar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TehlikeSnflar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TehlikeSnflar_1.addFeatures(features_TehlikeSnflar_1);
var lyr_TehlikeSnflar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TehlikeSnflar_1, 
                style: style_TehlikeSnflar_1,
                popuplayertitle: "Tehlike Sınıfları",
                interactive: true,
    title: 'Tehlike Sınıfları<br />\
    <img src="styles/legend/TehlikeSnflar_1_0.png" /> Ağaç yok<br />\
    <img src="styles/legend/TehlikeSnflar_1_1.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)<br />\
    <img src="styles/legend/TehlikeSnflar_1_2.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)-Rüzgar<br />\
    <img src="styles/legend/TehlikeSnflar_1_3.png" /> Rüzgar<br />\
    <img src="styles/legend/TehlikeSnflar_1_4.png" /> Rüzgar-Yangın<br />\
    <img src="styles/legend/TehlikeSnflar_1_5.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)-Rüzgar-Yangın<br />'
        });
var format_DirekRiskSnflandrmas_2 = new ol.format.GeoJSON();
var features_DirekRiskSnflandrmas_2 = format_DirekRiskSnflandrmas_2.readFeatures(json_DirekRiskSnflandrmas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirekRiskSnflandrmas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirekRiskSnflandrmas_2.addFeatures(features_DirekRiskSnflandrmas_2);
var lyr_DirekRiskSnflandrmas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DirekRiskSnflandrmas_2, 
                style: style_DirekRiskSnflandrmas_2,
                popuplayertitle: "Direk Risk Sınıflandırması",
                interactive: true,
    title: 'Direk Risk Sınıflandırması<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_2_0.png" /> Düşük<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_2_1.png" /> Orta<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_2_2.png" /> Yüksek<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_2_3.png" /> Çok Yüksek<br />'
        });
var format_TehlikeSnflar_3 = new ol.format.GeoJSON();
var features_TehlikeSnflar_3 = format_TehlikeSnflar_3.readFeatures(json_TehlikeSnflar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TehlikeSnflar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TehlikeSnflar_3.addFeatures(features_TehlikeSnflar_3);
var lyr_TehlikeSnflar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TehlikeSnflar_3, 
                style: style_TehlikeSnflar_3,
                popuplayertitle: "Tehlike Sınıfları",
                interactive: true,
    title: 'Tehlike Sınıfları<br />\
    <img src="styles/legend/TehlikeSnflar_3_0.png" /> Ağaç yok<br />\
    <img src="styles/legend/TehlikeSnflar_3_1.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)<br />\
    <img src="styles/legend/TehlikeSnflar_3_2.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)-Rüzgar<br />\
    <img src="styles/legend/TehlikeSnflar_3_3.png" /> Rüzgar<br />\
    <img src="styles/legend/TehlikeSnflar_3_4.png" /> Rüzgar-Yangın<br />\
    <img src="styles/legend/TehlikeSnflar_3_5.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)-Rüzgar-Yangın<br />'
        });
var format_DirekRiskSnflandrmas_4 = new ol.format.GeoJSON();
var features_DirekRiskSnflandrmas_4 = format_DirekRiskSnflandrmas_4.readFeatures(json_DirekRiskSnflandrmas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirekRiskSnflandrmas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirekRiskSnflandrmas_4.addFeatures(features_DirekRiskSnflandrmas_4);
var lyr_DirekRiskSnflandrmas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DirekRiskSnflandrmas_4, 
                style: style_DirekRiskSnflandrmas_4,
                popuplayertitle: "Direk Risk Sınıflandırması",
                interactive: true,
    title: 'Direk Risk Sınıflandırması<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_4_0.png" /> Düşük<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_4_1.png" /> Orta<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_4_2.png" /> Yüksek<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_4_3.png" /> Çok Yüksek<br />'
        });
var group_1Blge = new ol.layer.Group({
                                layers: [lyr_TehlikeSnflar_3,lyr_DirekRiskSnflandrmas_4,],
                                fold: "open",
                                title: "1. Bölge"});
var group_2Blge = new ol.layer.Group({
                                layers: [lyr_TehlikeSnflar_1,lyr_DirekRiskSnflandrmas_2,],
                                fold: "open",
                                title: "2. Bölge"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_TehlikeSnflar_1.setVisible(false);lyr_DirekRiskSnflandrmas_2.setVisible(true);lyr_TehlikeSnflar_3.setVisible(false);lyr_DirekRiskSnflandrmas_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_2Blge,group_1Blge];
lyr_TehlikeSnflar_1.set('fieldAliases', {'ID': 'ID', 'Direk_Boyu': 'Direk_Boyu', 'fid': 'fid', 'Yeni_Sonuç': 'Yeni_Sonuç', 'Tehlike Seviyesi': 'Tehlike Seviyesi', 'Yoğunluk': 'Yoğunluk', });
lyr_DirekRiskSnflandrmas_2.set('fieldAliases', {'ID': 'ID', 'Direk_Boyu': 'Direk_Boyu', 'fid': 'fid', 'Yeni_Sonuç': 'Yeni_Sonuç', 'Tehlike Seviyesi': 'Tehlike Seviyesi', 'Yoğunluk': 'Yoğunluk', });
lyr_TehlikeSnflar_3.set('fieldAliases', {'ID': 'ID', 'Direk_Boyu': 'Direk_Boyu', 'fid': 'fid', 'Yeni_Sonuç': 'Yeni_Sonuç', 'Tehlike Seviyesi': 'Tehlike Seviyesi', 'Yoğunluk': 'Yoğunluk', });
lyr_DirekRiskSnflandrmas_4.set('fieldAliases', {'ID': 'ID', 'Direk_Boyu': 'Direk_Boyu', 'fid': 'fid', 'Yeni_Sonuç': 'Yeni_Sonuç', 'Tehlike Seviyesi': 'Tehlike Seviyesi', 'Yoğunluk': 'Yoğunluk', });
lyr_TehlikeSnflar_1.set('fieldImages', {'ID': '', 'Direk_Boyu': 'Range', 'fid': '', 'Yeni_Sonuç': 'TextEdit', 'Tehlike Seviyesi': 'TextEdit', 'Yoğunluk': 'Range', });
lyr_DirekRiskSnflandrmas_2.set('fieldImages', {'ID': '', 'Direk_Boyu': 'Range', 'fid': '', 'Yeni_Sonuç': 'TextEdit', 'Tehlike Seviyesi': 'TextEdit', 'Yoğunluk': 'Range', });
lyr_TehlikeSnflar_3.set('fieldImages', {'ID': '', 'Direk_Boyu': 'Range', 'fid': '', 'Yeni_Sonuç': 'TextEdit', 'Tehlike Seviyesi': 'TextEdit', 'Yoğunluk': 'Range', });
lyr_DirekRiskSnflandrmas_4.set('fieldImages', {'ID': '', 'Direk_Boyu': 'Range', 'fid': '', 'Yeni_Sonuç': 'TextEdit', 'Tehlike Seviyesi': 'TextEdit', 'Yoğunluk': 'Range', });
lyr_TehlikeSnflar_1.set('fieldLabels', {'ID': 'hidden field', 'Direk_Boyu': 'inline label - visible with data', 'fid': 'hidden field', 'Yeni_Sonuç': 'inline label - visible with data', 'Tehlike Seviyesi': 'inline label - visible with data', 'Yoğunluk': 'hidden field', });
lyr_DirekRiskSnflandrmas_2.set('fieldLabels', {'ID': 'hidden field', 'Direk_Boyu': 'inline label - visible with data', 'fid': 'hidden field', 'Yeni_Sonuç': 'inline label - visible with data', 'Tehlike Seviyesi': 'inline label - visible with data', 'Yoğunluk': 'hidden field', });
lyr_TehlikeSnflar_3.set('fieldLabels', {'ID': 'hidden field', 'Direk_Boyu': 'inline label - visible with data', 'fid': 'hidden field', 'Yeni_Sonuç': 'inline label - visible with data', 'Tehlike Seviyesi': 'inline label - visible with data', 'Yoğunluk': 'hidden field', });
lyr_DirekRiskSnflandrmas_4.set('fieldLabels', {'ID': 'hidden field', 'Direk_Boyu': 'inline label - visible with data', 'fid': 'hidden field', 'Yeni_Sonuç': 'inline label - visible with data', 'Tehlike Seviyesi': 'inline label - visible with data', 'Yoğunluk': 'hidden field', });
lyr_DirekRiskSnflandrmas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});