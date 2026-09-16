ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([104.808566, -7.094195, 107.478806, -6.117326]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Wilayah_Kab_Lebak_2 = new ol.format.GeoJSON();
var features_Batas_Wilayah_Kab_Lebak_2 = format_Batas_Wilayah_Kab_Lebak_2.readFeatures(json_Batas_Wilayah_Kab_Lebak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Batas_Wilayah_Kab_Lebak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Wilayah_Kab_Lebak_2.addFeatures(features_Batas_Wilayah_Kab_Lebak_2);
var lyr_Batas_Wilayah_Kab_Lebak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Wilayah_Kab_Lebak_2, 
                style: style_Batas_Wilayah_Kab_Lebak_2,
                popuplayertitle: 'Batas_Wilayah_Kab_Lebak',
                interactive: false,
                title: '<img src="styles/legend/Batas_Wilayah_Kab_Lebak_2.png" /> Batas_Wilayah_Kab_Lebak'
            });
var format_SebaranSMAdiKabupatenLebak_3 = new ol.format.GeoJSON();
var features_SebaranSMAdiKabupatenLebak_3 = format_SebaranSMAdiKabupatenLebak_3.readFeatures(json_SebaranSMAdiKabupatenLebak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SebaranSMAdiKabupatenLebak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranSMAdiKabupatenLebak_3.addFeatures(features_SebaranSMAdiKabupatenLebak_3);
var lyr_SebaranSMAdiKabupatenLebak_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranSMAdiKabupatenLebak_3, 
                style: style_SebaranSMAdiKabupatenLebak_3,
                popuplayertitle: 'Sebaran SMA di Kabupaten Lebak',
                interactive: true,
                title: '<img src="styles/legend/SebaranSMAdiKabupatenLebak_3.png" /> Sebaran SMA di Kabupaten Lebak'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_Batas_Wilayah_Kab_Lebak_2.setVisible(true);lyr_SebaranSMAdiKabupatenLebak_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_Batas_Wilayah_Kab_Lebak_2,lyr_SebaranSMAdiKabupatenLebak_3];
lyr_Batas_Wilayah_Kab_Lebak_2.set('fieldAliases', {'fid': 'fid', 'Kecamatan': 'Kecamatan', 'keterangan': 'keterangan', });
lyr_SebaranSMAdiKabupatenLebak_3.set('fieldAliases', {'fid': 'fid', 'no': 'no', 'nama_sekolah': 'nama_sekolah', 'npsn': 'npsn', 'status': 'status', 'Kecamatan': 'Kecamatan', 'keterangan': 'keterangan', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Batas_Wilayah_Kab_Lebak_2.set('fieldImages', {'fid': 'TextEdit', 'Kecamatan': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_SebaranSMAdiKabupatenLebak_3.set('fieldImages', {'fid': 'TextEdit', 'no': 'TextEdit', 'nama_sekolah': 'TextEdit', 'npsn': 'TextEdit', 'status': 'TextEdit', 'Kecamatan': 'TextEdit', 'keterangan': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_Batas_Wilayah_Kab_Lebak_2.set('fieldLabels', {'fid': 'hidden field', 'Kecamatan': 'hidden field', 'keterangan': 'hidden field', });
lyr_SebaranSMAdiKabupatenLebak_3.set('fieldLabels', {'fid': 'hidden field', 'no': 'hidden field', 'nama_sekolah': 'inline label - visible with data', 'npsn': 'inline label - visible with data', 'status': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'keterangan': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_SebaranSMAdiKabupatenLebak_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});