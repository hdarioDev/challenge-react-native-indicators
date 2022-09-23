import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { BlackButton } from '../components/UI/BackButton';
import { PermissionsContext } from '../context/PermissionsContext';
import { useNavigation } from '@react-navigation/native';

type PermissionStatus = 'unavailable' | 'denied' | 'limited' | 'granted' | 'blocked';

const SettingsScreen = () => {
    const navigator = useNavigation<any>();


    const { permissions, askLocationPermission } = useContext(PermissionsContext);
    console.log("askLocationPermission", askLocationPermission);

    useEffect(() => {
        navigator.setOptions({ headerTitle: 'Permisos GPS', headerBackTitle: "" })
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estado del GPS para usar esta aplicación </Text>

            <BlackButton
                title="Permiso"
                onPress={askLocationPermission}
            />

            <Text style={styles.status}>
                <Text>Estado del permiso: {permissions.locationStatus} {
                    permissions.locationStatus === 'granted' ? <Text style={styles.statusSuccess}>(Otorgado)</Text> : null

                }</Text>
            </Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
    status: {
        fontSize: 18,
        marginTop: 20,
        color: 'gray',
    },
    statusSuccess: {
        fontSize: 18,
        color: 'green',
    }
});