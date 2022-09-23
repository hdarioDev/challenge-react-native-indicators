import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Serie } from '../../interfaces/Indicators'
import ItemHistory from '../ItemHistory'
import { ActivityIndicator } from '@react-native-material/core'

interface Props {
    data: Serie[],
    loading: boolean
}
const index = ({ data, loading }: Props) => {
    const renderListHistory = (): JSX.Element[] => {
        return (
            data.map(item => {
                return (
                    <View key={item.fecha.toString()}>
                        <ItemHistory data={item} />
                    </View>
                )
            })
        )
    }
    return (
        <ScrollView>
            {
                loading ? <ActivityIndicator size="large" style={{ marginTop: 40 }} /> : renderListHistory()
            }
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})