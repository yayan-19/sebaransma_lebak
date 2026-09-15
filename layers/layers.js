var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Wilayah_Kab_Lebak_1 = new ol.format.GeoJSON();
var features_Batas_Wilayah_Kab_Lebak_1 = format_Batas_Wilayah_Kab_Lebak_1.readFeatures(json_Batas_Wilayah_Kab_Lebak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Wilayah_Kab_Lebak_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Wilayah_Kab_Lebak_1.addFeatures(features_Batas_Wilayah_Kab_Lebak_1);
var lyr_Batas_Wilayah_Kab_Lebak_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Wilayah_Kab_Lebak_1, 
                style: style_Batas_Wilayah_Kab_Lebak_1,
                popuplayertitle: 'Batas_Wilayah_Kab_Lebak',
                interactive: false,
                title: '<img src="styles/legend/Batas_Wilayah_Kab_Lebak_1.png" /> Batas_Wilayah_Kab_Lebak'
            });
var format_SebaranSMAdiKabupatenLebak_2 = new ol.format.GeoJSON();
var features_SebaranSMAdiKabupatenLebak_2 = format_SebaranSMAdiKabupatenLebak_2.readFeatures(json_SebaranSMAdiKabupatenLebak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranSMAdiKabupatenLebak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranSMAdiKabupatenLebak_2.addFeatures(features_SebaranSMAdiKabupatenLebak_2);
var lyr_SebaranSMAdiKabupatenLebak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranSMAdiKabupatenLebak_2, 
                style: style_SebaranSMAdiKabupatenLebak_2,
                popuplayertitle: 'Sebaran SMA di Kabupaten Lebak',
                interactive: true,
                title: '<img src="styles/legend/SebaranSMAdiKabupatenLebak_2.png" /> Sebaran SMA di Kabupaten Lebak'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Batas_Wilayah_Kab_Lebak_1.setVisible(true);lyr_SebaranSMAdiKabupatenLebak_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Batas_Wilayah_Kab_Lebak_1,lyr_SebaranSMAdiKabupatenLebak_2];
lyr_Batas_Wilayah_Kab_Lebak_1.set('fieldAliases', {'fid': 'fid', 'Kecamatan': 'Kecamatan', 'keterangan': 'keterangan', });
lyr_SebaranSMAdiKabupatenLebak_2.set('fieldAliases', {'fid': 'fid', 'no': 'no', 'nama_sekolah': 'nama_sekolah', 'npsn': 'npsn', 'status': 'status', 'Kecamatan': 'Kecamatan', 'keterangan': 'keterangan', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Batas_Wilayah_Kab_Lebak_1.set('fieldImages', {'fid': 'TextEdit', 'Kecamatan': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_SebaranSMAdiKabupatenLebak_2.set('fieldImages', {'fid': 'TextEdit', 'no': 'TextEdit', 'nama_sekolah': 'TextEdit', 'npsn': 'TextEdit', 'status': 'TextEdit', 'Kecamatan': 'TextEdit', 'keterangan': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_Batas_Wilayah_Kab_Lebak_1.set('fieldLabels', {'fid': 'hidden field', 'Kecamatan': 'hidden field', 'keterangan': 'hidden field', });
lyr_SebaranSMAdiKabupatenLebak_2.set('fieldLabels', {'fid': 'hidden field', 'no': 'hidden field', 'nama_sekolah': 'inline label - visible with data', 'npsn': 'inline label - visible with data', 'status': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'keterangan': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_SebaranSMAdiKabupatenLebak_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});