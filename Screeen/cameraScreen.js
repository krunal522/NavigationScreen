import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const cameraScreen = () => {
    const [imageBackground, setImageBackground] = useState('https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-cloud-upload-icon-png-image_316794.jpg');

    const managePermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA);
        if (result.status !== 'granted') {
            // alert('Did not allowes for Camera permission!');
            return;
        }
        return true;
    }
    const manageCamera = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (result.status !== 'granted') {
            // alert('Did not allowes for Camera permission!');
            return;
        }
        return true;
    }

    const onPickerHandler = async () => {

        let hasPermission = managePermissions();
        if (!hasPermission) {
            return;
        }
        let image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [5, 5],
            quality: 0.5
        });
        setImageBackground(image.uri);
        alert('camera showing')
    }

    const onPickerCamera = async () => {

        let hasPermission = manageCamera();
        if (!hasPermission) {
            return;
        }
        let imageShow = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [5, 5],
            quality: 0.5
        });
        setImageBackground(imageShow.uri);
        alert('camera showing')
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.picked}
                source={{
                    uri: imageBackground,
                }}
            />
            <View style={{ margin: 20 }}>
                <Button color={'orange'} title="pick an image" onPress={onPickerHandler} />
            </View>

            <View style={{ margin: 20 }}>
                <Button color={'blue'} title="pick an camera" onPress={onPickerCamera} />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picked: {
        height: 300,
        width: '100%',
        color: 'white',
    },
});
export default cameraScreen;