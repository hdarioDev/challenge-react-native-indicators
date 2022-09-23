import { View } from 'react-native'
import React from 'react'
import { ListItem } from '@react-native-material/core'
import { Serie } from '../../interfaces/Indicators'

interface Props {
    data: Serie
}

const index = ({ data }: Props) => {
    return (
        <View>
            <ListItem
                title={` ☑️  ${data.fecha.toString().substring(0, 10)} `}
                secondaryText={` 💲   ${data.valor} `}
            />
        </View>
    )
}

export default index