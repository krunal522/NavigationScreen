import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const dimensions = (props) => {

    return (
        <View style={styles.container}>
            <MapView style={styles.mapdesign}/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mapdesign:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },

});

export default dimensions;