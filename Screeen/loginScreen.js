import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const loginScreen = (props) => {

    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 30, justifyContent: 'center', paddingTop: 40, textAlign: 'center', fontWeight: 'bold' }}>Login to continue!</Text>
                <View style={{ margin: 30 }}>
                    <View style={{ borderWidth: 1, padding: 10, borderRadius: 18, flexDirection: 'row', flex: 1 }}>
                        <AntDesign name="contacts" size={24} color="red" />
                        <TextInput style={styles.txtinputname} placeholder="Username"></TextInput>
                    </View>

                    <View style={{ borderWidth: 1, marginTop: 25, padding: 10, borderRadius: 18, flexDirection: 'row', flex: 1, paddingLeft: 10 }}>
                        <MaterialIcons name="lock-outline" size={24} color="red" />
                        <TextInput style={styles.txtinputname} secureTextEntry={true} placeholder="Passworld"></TextInput>
                    </View>
                </View>
                <View style={{ marginHorizontal: 30 }}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Remember Me</Text>
                    </View>
                </View>

                <View style={{ margin: 30, marginTop: 5, marginBottom: 15 }}>
                    <TouchableOpacity style={{ borderWidth: 1, padding: 10, borderRadius: 18, marginBottom: 25, backgroundColor: '#fe976e', fontWeight: 'bold', color: 'white' }}>
                        <TouchableOpacity style={{ textAlign: 'center' }}>LOGIN</TouchableOpacity>
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 40 }}>
                        <Text style={{ fontSize: 18, textAlign: 'center', fontSize: 14, }}>Forgot your Passworld ?</Text>
                    </View>
                </View>

                <View style={{ marginTop: 150 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', fontSize: 14, justifyContent: 'flex-end' }}>Now Here? sign up</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtinputname: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
        fontStyle: 'italic',
        width: '100%',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        marginRight: 10,
    },

});
export default loginScreen;