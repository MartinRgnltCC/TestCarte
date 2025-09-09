var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Abris_tudis_faisabilit_1 = new ol.format.GeoJSON();
var features_Abris_tudis_faisabilit_1 = format_Abris_tudis_faisabilit_1.readFeatures(json_Abris_tudis_faisabilit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abris_tudis_faisabilit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abris_tudis_faisabilit_1.addFeatures(features_Abris_tudis_faisabilit_1);
var lyr_Abris_tudis_faisabilit_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abris_tudis_faisabilit_1, 
                style: style_Abris_tudis_faisabilit_1,
                popuplayertitle: 'Abris_étudiés_faisabilité',
                interactive: true,
    title: 'Abris_étudiés_faisabilité<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_0.png" /> 11<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_1.png" /> 12<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_2.png" /> 21<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_3.png" /> 13<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_4.png" /> 22<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_5.png" /> 31<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_6.png" /> 23<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_7.png" /> 32<br />\
    <img src="styles/legend/Abris_tudis_faisabilit_1_8.png" /> 33<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Abris_tudis_faisabilit_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Abris_tudis_faisabilit_1];
lyr_Abris_tudis_faisabilit_1.set('fieldAliases', {'NOM': 'NOM', 'ACCESSIBIL': 'ACCESSIBIL', 'ABRIS': 'ABRIS', 'ABRIS_TYPE': 'ABRIS_TYPE', 'ABRIS_ETAT': 'ABRIS_ETAT', 'GESTIONNAI': 'GESTIONNAI', 'POTEAU': 'POTEAU', 'POTEAU_TYP': 'POTEAU_TYP', 'POTEAU_ETA': 'POTEAU_ETA', 'BANC': 'BANC', 'BANC_TYPE': 'BANC_TYPE', 'BANC_ETAT': 'BANC_ETAT', 'POUBELLE': 'POUBELLE', 'ECLAIRAGE': 'ECLAIRAGE', 'HORAIRE': 'HORAIRE', 'CUBE': 'CUBE', 'BIV': 'BIV', 'RIVERAINS': 'RIVERAINS', 'COMMENTAIR': 'COMMENTAIR', 'SUIVI_CREA': 'SUIVI_CREA', 'SUIVI_DATE': 'SUIVI_DATE', 'SUIVI_EDIT': 'SUIVI_EDIT', 'SUIVI_DA_1': 'SUIVI_DA_1', 'GLOBALID': 'GLOBALID', 'DIRECTION': 'DIRECTION', 'VALIDATION': 'VALIDATION', 'LIGNE': 'LIGNE', 'CODE_NEW': 'CODE_NEW', 'FREQUENTAT': 'FREQUENTAT', 'MALVOYANT': 'MALVOYANT', 'CC_Nom arr': 'CC_Nom arr', 'CC_45': 'CC_45', 'CC_field_5': 'CC_field_5', 'CC_field_6': 'CC_field_6', 'CC_field_7': 'CC_field_7', 'CC_field_8': 'CC_field_8', 'CC_field_9': 'CC_field_9', 'CC_bhns': 'CC_bhns', 'CC_field_1': 'CC_field_1', 'CC_field_2': 'CC_field_2', 'CC_Montée': 'CC_Montée', 'CC_Mont�_1': 'CC_Mont�_1', 'CC_abris o': 'CC_abris o', });
lyr_Abris_tudis_faisabilit_1.set('fieldImages', {'NOM': 'TextEdit', 'ACCESSIBIL': 'TextEdit', 'ABRIS': 'TextEdit', 'ABRIS_TYPE': 'TextEdit', 'ABRIS_ETAT': 'TextEdit', 'GESTIONNAI': 'TextEdit', 'POTEAU': 'TextEdit', 'POTEAU_TYP': 'TextEdit', 'POTEAU_ETA': 'TextEdit', 'BANC': 'TextEdit', 'BANC_TYPE': 'TextEdit', 'BANC_ETAT': 'TextEdit', 'POUBELLE': 'TextEdit', 'ECLAIRAGE': 'TextEdit', 'HORAIRE': 'TextEdit', 'CUBE': 'TextEdit', 'BIV': 'TextEdit', 'RIVERAINS': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'SUIVI_CREA': 'TextEdit', 'SUIVI_DATE': 'DateTime', 'SUIVI_EDIT': 'TextEdit', 'SUIVI_DA_1': 'DateTime', 'GLOBALID': 'TextEdit', 'DIRECTION': 'TextEdit', 'VALIDATION': 'TextEdit', 'LIGNE': 'TextEdit', 'CODE_NEW': 'TextEdit', 'FREQUENTAT': 'Range', 'MALVOYANT': 'TextEdit', 'CC_Nom arr': 'TextEdit', 'CC_45': 'TextEdit', 'CC_field_5': 'TextEdit', 'CC_field_6': 'TextEdit', 'CC_field_7': 'TextEdit', 'CC_field_8': 'TextEdit', 'CC_field_9': 'TextEdit', 'CC_bhns': 'TextEdit', 'CC_field_1': 'TextEdit', 'CC_field_2': 'TextEdit', 'CC_Montée': 'TextEdit', 'CC_Mont�_1': 'TextEdit', 'CC_abris o': 'TextEdit', });
lyr_Abris_tudis_faisabilit_1.set('fieldLabels', {'NOM': 'no label', 'ACCESSIBIL': 'no label', 'ABRIS': 'no label', 'ABRIS_TYPE': 'no label', 'ABRIS_ETAT': 'no label', 'GESTIONNAI': 'no label', 'POTEAU': 'no label', 'POTEAU_TYP': 'no label', 'POTEAU_ETA': 'no label', 'BANC': 'no label', 'BANC_TYPE': 'no label', 'BANC_ETAT': 'no label', 'POUBELLE': 'no label', 'ECLAIRAGE': 'no label', 'HORAIRE': 'no label', 'CUBE': 'no label', 'BIV': 'no label', 'RIVERAINS': 'no label', 'COMMENTAIR': 'no label', 'SUIVI_CREA': 'no label', 'SUIVI_DATE': 'no label', 'SUIVI_EDIT': 'no label', 'SUIVI_DA_1': 'no label', 'GLOBALID': 'no label', 'DIRECTION': 'no label', 'VALIDATION': 'no label', 'LIGNE': 'no label', 'CODE_NEW': 'no label', 'FREQUENTAT': 'no label', 'MALVOYANT': 'no label', 'CC_Nom arr': 'no label', 'CC_45': 'no label', 'CC_field_5': 'no label', 'CC_field_6': 'no label', 'CC_field_7': 'no label', 'CC_field_8': 'inline label - visible with data', 'CC_field_9': 'no label', 'CC_bhns': 'no label', 'CC_field_1': 'no label', 'CC_field_2': 'no label', 'CC_Montée': 'no label', 'CC_Mont�_1': 'no label', 'CC_abris o': 'no label', });
lyr_Abris_tudis_faisabilit_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});