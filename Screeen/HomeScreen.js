import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { HeaderButtons } from 'react-navigation-header-buttons';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 'bold', color: 'white', paddingTop: 10 }}>Home Screen</Text>
            <View style={{ marginVertical: 10 }}>
                <View style={{ margin: 20 }}>
                    <Button color="#E91E63"
                        title="Login"
                        onPress={() => props.navigation.navigate('Login')}
                    />
                </View>
                <View style={{ margin: 20 }}>
                    <Button
                        title="Register"
                        onPress={() => props.navigation.navigate('Register')}
                    />
                </View>

                <View style={{ margin: 20 }}>
                    <Button
                        title="Camera"
                        onPress={() => props.navigation.navigate('Camera')}
                    />
                </View>

                <View style={{ margin: 20 }}>
                    <Button
                        title="Dimensions"
                        onPress={() => props.navigation.navigate('Dimensions')}
                    />
                </View>

            </View>
        </View>
    );
}
HomeScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Fev Screen',

        headerStyle: {
            backgroundColor: 'skyblue',
            height: 60,
            alignItems: 'center',
            textAlign: 'center',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',

        headerLeft: <HeaderButtons>
            <FontAwesome name="bars" style={{ padding: 20, }} size={30} color="black"
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}></FontAwesome>
        </HeaderButtons>
    };
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b5998',
        flex: 1,
    },
    loginheader: {
        // padding: 20,
    },
});
export default HomeScreen;