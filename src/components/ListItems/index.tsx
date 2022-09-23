import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemIndicators from '../ItemIndicators'
import { useDataIndicators } from '../../hooks/useDataIndicators'
import { ActivityIndicator } from '@react-native-material/core'

const index = () => {

    const {
        loading,
        dataIndicators,
    } = useDataIndicators()

    const renderListHome = (): JSX.Element[] => {
        return (
            dataIndicators.map(item => {
                return (
                    <View key={item.codigo}>
                        <ItemIndicators item={item} />
                    </View>
                )
            })
        )
    }

    return (
        <ScrollView>
            {
                loading ? <ActivityIndicator size="large" style={{ marginTop: 40 }} /> : renderListHome()

            }
        </ScrollView>
    )
}

export default index