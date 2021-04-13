import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
//  import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab = createMaterialTopTabNavigator();

const registerScreen = (props) => {
    return (
        <View style={styles.container}>
            {/* <NavigationContainer>
                <Tab.Navigator>
                   <Tab.Screen name="Register" component={registerScreen } />
                         
                </Tab.Navigator>
            </NavigationContainer> */}
            <Text style={{ fontSize: 20, color: 'white', margin: 18 }}>Register your account</Text>
            <ScrollView>
                <View style={{ borderWidth: 1, backgroundColor: 'white', padding: 10 }}>
                    <View style={{ margin: 8 }}>
                        <Text style={{ marginTop: 10, paddingBottom: 10 }}>Name</Text>
                        <TextInput style={styles.inputfiled} placeholder="Enter your full name"></TextInput>
                        <Text style={{ marginTop: 10, paddingBottom: 10 }}>Username</Text>
                        <TextInput style={styles.inputfiled} placeholder="Enter a username"></TextInput>

                        <Text style={{ marginTop: 10, paddingBottom: 10 }}>Email address</Text>
                        <TextInput style={styles.inputfiled} placeholder="Enter your email address"></TextInput>

                        <Text style={{ marginTop: 10, paddingBottom: 10 }}>Password</Text>
                        <TextInput style={styles.inputfiled} placeholder="Enter a Password"></TextInput>

                        <Text style={{ marginTop: 10, paddingBottom: 10 }}>Confirm password</Text>
                        <TextInput style={styles.inputfiled} placeholder="Enter your password again.."></TextInput>

                        <TouchableOpacity style={styles.loginbtn}>
                            <Text style={{ color: 'white' }}>Sign up</Text>
                        </TouchableOpacity>

                        <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>Already have an account?
                           <Text style={{ color: 'blue', margin: 2, textDecorationLine: 'underline', }}>
                                    SIgn in
                           </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004c91',
        alignItems: 'center',
    },
    // loginheader: {

    // },
    inputfiled: {
        borderWidth: 1,
        borderRadius: 3,
        padding: 8,
        width: 280,
        backgroundColor: '#f0f0f0',
        // fontWeight:'bold',
    },
    loginbtn: {
        marginVertical: 18,
        padding: 10,
        backgroundColor: '#2d9216',
        alignItems: 'center',
    }
});
export default registerScreen;