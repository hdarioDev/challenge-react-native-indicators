
import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from "@react-navigation/native"
import { VictoryLine, VictoryChart, VictoryScatter } from 'victory-native';

interface Props {
    data: {
        date: Date;
        fecha: string;
        valor: string;
    }[]
}

const index = ({ data }: Props) => {
    const [items, setItems] = useState([])
    const isFocused = useIsFocused();
    console.log("data ", data.slice(0, 3));

    useEffect(() => {
        let arr: any = []
        data.forEach((item: any) => {
            arr.push(
                {
                    x: item.fecha,
                    y: item.valor,
                }
            )
        })
        setItems(arr.slice(0, 5).reverse())

    }, [data, isFocused])

    return (
        <View>
            {
                items.length > 0 &&
                <VictoryChart polar={false} height={390}>
                    <VictoryLine
                        interpolation={'cardinal'} data={items}
                        style={{ data: { stroke: "#c43a31" } }}
                    />
                    <VictoryScatter data={items}
                        size={5}
                        style={{ data: { fill: "#c43a31" } }}
                    />
                </VictoryChart>
            }

        </View>
    )
}

export default index