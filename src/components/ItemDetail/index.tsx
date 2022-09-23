import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { Text as TextMat, ActivityIndicator } from "@react-native-material/core";
import { Serie, ValueType } from '../../interfaces/Indicators';
import { Divider } from '@react-native-material/core';
import Graph from '../Graph';

interface Props {
    data: Serie[],
    dataHeader: ValueType,
    loading: boolean
}

const index = ({ data, dataHeader, loading }: Props) => {

    const newData = data.map((item) => {
        return { date: new Date(item.fecha), fecha: item.fecha.toString().substring(0, 10), valor: item.valor.toLocaleString('en-US') };
    })
    newData.sort((a: any, b: any) => b.date - a.date)

    return (
        <View>
            {
                loading && <ActivityIndicator size="large" style={{ marginTop: 40 }} />
            }
            <Divider style={{ marginTop: 20 }} leadingInset={16} />
            {/* <Text>Fecha</Text> */}
            <View style={styles.valorContainer}>
                <Text style={styles.valor} > Valor Actual: ${dataHeader.valor}</Text>
            </View>
            <View style={styles.itemsContainer}>
                <TextMat variant="h6" style={{ margin: 8 }}> Nombre</TextMat>
                <Text> {dataHeader.nombre}</Text>
            </View>
            <View style={styles.itemsContainer}>
                <TextMat variant="h6" style={{ margin: 8 }}> Fecha</TextMat>
                <Text> {dataHeader.fecha.toString().substring(0, 10)}</Text>

            </View>
            <View style={styles.itemsContainer}>
                <TextMat variant="h6" style={{ margin: 8 }}> Unidad de medida</TextMat>
                <Text> {dataHeader.unidad_medida}</Text>
            </View>

            <Divider style={{ marginTop: 20 }} leadingInset={16} />

            <Graph data={newData} />

        </View>
    )
}

export default index

const styles = StyleSheet.create({
    valorContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20,

    },
    valor: {
        color: 'blue',
        fontSize: 26
    },
    itemsContainer: {

        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    }
})