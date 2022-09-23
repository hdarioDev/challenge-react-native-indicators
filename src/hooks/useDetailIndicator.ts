import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Serie } from '../interfaces/Indicators';
import { getByTypeIndicators } from '../services/indicatorsService';

export const useDetailIndicator = (type: string) => {

    const [dataHistory, setdataHistory] = useState<Serie[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const navigator = useNavigation<any>();

    const loadDataDetail = async () => {
        setLoading(true)
        const res = await getByTypeIndicators(type)
        setdataHistory(res)
        setLoading(false)
    }

    useEffect(() => {
        loadDataDetail()
        navigator.setOptions({
            headerBackTitle: ""
        })
    }, [])

    return (
        {
            loading,
            data: dataHistory
        }
    )
}
