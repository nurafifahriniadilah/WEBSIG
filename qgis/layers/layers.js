var wms_layers = [];


        var lyr_Gmaps_0 = new ol.layer.Tile({
            'title': 'Gmaps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: true,
                    title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
                });
var format_JALAN_LN_50K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_2 = format_JALAN_LN_50K_2.readFeatures(json_JALAN_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_2.addFeatures(features_JALAN_LN_50K_2);
var lyr_JALAN_LN_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_2, 
                style: style_JALAN_LN_50K_2,
                popuplayertitle: "JALAN_LN_50K",
                interactive: true,
                    title: '<img src="styles/legend/JALAN_LN_50K_2.png" /> JALAN_LN_50K'
                });
var format_Indonesia1_3 = new ol.format.GeoJSON();
var features_Indonesia1_3 = format_Indonesia1_3.readFeatures(json_Indonesia1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia1_3.addFeatures(features_Indonesia1_3);
var lyr_Indonesia1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indonesia1_3, 
                style: style_Indonesia1_3,
                popuplayertitle: "Indonesia1",
                interactive: true,
                    title: '<img src="styles/legend/Indonesia1_3.png" /> Indonesia1'
                });
var format_GARISRPANTAI_LN_50K_4 = new ol.format.GeoJSON();
var features_GARISRPANTAI_LN_50K_4 = format_GARISRPANTAI_LN_50K_4.readFeatures(json_GARISRPANTAI_LN_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISRPANTAI_LN_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISRPANTAI_LN_50K_4.addFeatures(features_GARISRPANTAI_LN_50K_4);
var lyr_GARISRPANTAI_LN_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARISRPANTAI_LN_50K_4, 
                style: style_GARISRPANTAI_LN_50K_4,
                popuplayertitle: "GARISRPANTAI_LN_50K",
                interactive: true,
                    title: '<img src="styles/legend/GARISRPANTAI_LN_50K_4.png" /> GARISRPANTAI_LN_50K'
                });
var format_Gampabumi_5 = new ol.format.GeoJSON();
var features_Gampabumi_5 = format_Gampabumi_5.readFeatures(json_Gampabumi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gampabumi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gampabumi_5.addFeatures(features_Gampabumi_5);
var lyr_Gampabumi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gampabumi_5, 
                style: style_Gampabumi_5,
                popuplayertitle: "Gampa bumi",
                interactive: true,
                    title: '<img src="styles/legend/Gampabumi_5.png" /> Gampa bumi'
                });

lyr_Gmaps_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_JALAN_LN_50K_2.setVisible(true);lyr_Indonesia1_3.setVisible(true);lyr_GARISRPANTAI_LN_50K_4.setVisible(true);lyr_Gampabumi_5.setVisible(true);
var layersList = [lyr_Gmaps_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_JALAN_LN_50K_2,lyr_Indonesia1_3,lyr_GARISRPANTAI_LN_50K_4,lyr_Gampabumi_5];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JALAN_LN_50K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Indonesia1_3.set('fieldAliases', {'field_1': 'field_1', 'Unnamed: 0': 'Unnamed: 0', 'ID': 'ID', 'YEAR': 'YEAR', 'MONTH': 'MONTH', 'DAY': 'DAY', 'HOUR': 'HOUR', 'MINUTE': 'MINUTE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'LOCATION_NAME': 'LOCATION_NAME', 'COUNTRY': 'COUNTRY', 'REGION': 'REGION', 'CAUSE': 'CAUSE', 'EVENT_VALIDITY': 'EVENT_VALIDITY', 'EQ_MAGNITUDE': 'EQ_MAGNITUDE', 'EQ_DEPTH': 'EQ_DEPTH', 'TS_INTENSITY': 'TS_INTENSITY', 'DAMAGE_TOTAL_DESCRIPTION': 'DAMAGE_TOTAL_DESCRIPTION', 'HOUSES_TOTAL_DESCRIPTION': 'HOUSES_TOTAL_DESCRIPTION', 'DEATHS_TOTAL_DESCRIPTION': 'DEATHS_TOTAL_DESCRIPTION', 'URL': 'URL', 'COMMENTS': 'COMMENTS', });
lyr_GARISRPANTAI_LN_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Gampabumi_5.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontalError': 'horizontalError', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSource': 'locationSource', 'magSource': 'magSource', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_JALAN_LN_50K_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Indonesia1_3.set('fieldImages', {'field_1': '', 'Unnamed: 0': '', 'ID': '', 'YEAR': '', 'MONTH': '', 'DAY': '', 'HOUR': '', 'MINUTE': '', 'LATITUDE': '', 'LONGITUDE': '', 'LOCATION_NAME': '', 'COUNTRY': '', 'REGION': '', 'CAUSE': '', 'EVENT_VALIDITY': '', 'EQ_MAGNITUDE': '', 'EQ_DEPTH': '', 'TS_INTENSITY': '', 'DAMAGE_TOTAL_DESCRIPTION': '', 'HOUSES_TOTAL_DESCRIPTION': '', 'DEATHS_TOTAL_DESCRIPTION': '', 'URL': '', 'COMMENTS': '', });
lyr_GARISRPANTAI_LN_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'DTMVER': 'TextEdit', 'KARGPN': 'TextEdit', 'FCODE': 'TextEdit', 'KODGPN': 'TextEdit', 'TIPGPN': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Gampabumi_5.set('fieldImages', {'time': '', 'latitude': '', 'longitude': '', 'depth': '', 'mag': '', 'magType': '', 'nst': '', 'gap': '', 'dmin': '', 'rms': '', 'net': '', 'id': '', 'updated': '', 'place': '', 'type': '', 'horizontalError': '', 'depthError': '', 'magError': '', 'magNst': '', 'status': '', 'locationSource': '', 'magSource': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_JALAN_LN_50K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Indonesia1_3.set('fieldLabels', {'field_1': 'no label', 'Unnamed: 0': 'no label', 'ID': 'no label', 'YEAR': 'no label', 'MONTH': 'no label', 'DAY': 'no label', 'HOUR': 'no label', 'MINUTE': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'LOCATION_NAME': 'no label', 'COUNTRY': 'no label', 'REGION': 'no label', 'CAUSE': 'no label', 'EVENT_VALIDITY': 'no label', 'EQ_MAGNITUDE': 'no label', 'EQ_DEPTH': 'no label', 'TS_INTENSITY': 'no label', 'DAMAGE_TOTAL_DESCRIPTION': 'no label', 'HOUSES_TOTAL_DESCRIPTION': 'no label', 'DEATHS_TOTAL_DESCRIPTION': 'no label', 'URL': 'no label', 'COMMENTS': 'no label', });
lyr_GARISRPANTAI_LN_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Gampabumi_5.set('fieldLabels', {'time': 'inline label - always visible', 'latitude': 'no label', 'longitude': 'no label', 'depth': 'no label', 'mag': 'inline label - always visible', 'magType': 'no label', 'nst': 'no label', 'gap': 'no label', 'dmin': 'no label', 'rms': 'no label', 'net': 'no label', 'id': 'no label', 'updated': 'no label', 'place': 'inline label - always visible', 'type': 'no label', 'horizontalError': 'no label', 'depthError': 'no label', 'magError': 'no label', 'magNst': 'no label', 'status': 'no label', 'locationSource': 'no label', 'magSource': 'no label', });
lyr_Gampabumi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});