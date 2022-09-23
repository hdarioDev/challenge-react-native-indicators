import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../navigation/StackNavigation'
import { useDetailIndicator } from '../hooks/useDetailIndicator'
import { useNavigation } from '@react-navigation/native'


interface Props extends NativeStackScreenProps<RootStackParams, 'Detail'> { };

const DetailScreen = ({ route }: Props) => {
    const { type, header } = route.params;
    const { data, loading } = useDetailIndicator(type)
    const navigator = useNavigation<any>();

    useEffect(() => {
        navigator.setOptions({ headerTitle: type.toLocaleUpperCase() })
    }, [])
    return (
        <View>

            <Text>
                <ItemDetail data={data} dataHeader={header} loading={loading} />
            </Text>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})