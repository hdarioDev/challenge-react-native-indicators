import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { ValueType } from '../../interfaces/Indicators'
import { ListItem } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native';

interface Props {
    item: ValueType
}

const index = ({ item }: Props) => {

    const navigator = useNavigation<any>();

    const handleInfoHistory = (code: string) => {
        navigator.navigate('History', {
            type: code,
        })
    }

    const handleToDetail = (code: string) => {
        navigator.navigate('Detail', {
            type: code,
            header: item,
        })
    }

    return (
        <View>
            <ListItem onPress={() => handleInfoHistory(item.codigo)}
                key={item.codigo}
                title={` 💲  ${item.nombre} `}
                secondaryText={`          ✔︎ ${item.unidad_medida} `}
                trailing={
                    () => (
                        <TouchableOpacity onPress={() => handleToDetail(item.codigo)} >
                            <Image style={styles.infoIcon} source={require('../../assets/info.png')} />
                        </TouchableOpacity>
                    )
                }
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    infoIcon: {
        height: 24,
        width: 24,
    }
})