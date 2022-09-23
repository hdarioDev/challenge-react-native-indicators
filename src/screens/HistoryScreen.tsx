import { View } from 'react-native'
import React, { useEffect } from 'react'
import ListDetail from '../components/ListDetail'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../navigation/StackNavigation'
import { useDetailIndicator } from '../hooks/useDetailIndicator'
import { useNavigation } from '@react-navigation/native'


interface Props extends NativeStackScreenProps<RootStackParams, 'History'> { };

const HistoryScreen = ({ route }: Props) => {
    const { type } = route.params
    const { data, loading } = useDetailIndicator(type)
    const navigator = useNavigation<any>();

    useEffect(() => {
        navigator.setOptions({ headerTitle: type.toLocaleUpperCase() })
    }, [])
    return (
        <View>
            <ListDetail data={data} loading={loading} />
        </View>
    )
}

export default HistoryScreen