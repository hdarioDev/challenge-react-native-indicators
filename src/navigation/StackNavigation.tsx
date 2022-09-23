import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PermissionsContext } from '../context/PermissionsContext';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import DetailScreen from '../screens/DetailScreen';
import { ValueType } from '../interfaces/Indicators';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator<RootStackParams>();
export type RootStackParams = {
    Home: undefined,
    History: { type: string },
    Detail: { type: string, header: ValueType },
    Settings: undefined,
}
function StackNavigation() {
    const navigator = useNavigation<any>();
    return (
        <Stack.Navigator
            screenOptions={{
                // headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    backgroundColor: 'white',
                },
            }}
        >

            <Stack.Screen options={{
                title: 'Indicadores',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigator.navigate('Settings')}>
                        <Image style={{ height: 26, width: 26 }} source={require('../assets/config.png')} />
                    </TouchableOpacity>
                ),
            }} name="Home" component={HomeScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigation;