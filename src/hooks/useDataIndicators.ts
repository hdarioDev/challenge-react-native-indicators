import { useEffect, useState } from "react"
import { ValueType } from "../interfaces/Indicators"
import { getAllIndicators } from '../services/indicatorsService'

export const useDataIndicators = () => {
    // const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

    const [dataIndicators, setDataIndicators] = useState<ValueType[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const loadIndicators = async () => {
        setLoading(true)
        const data: ValueType[] = await getAllIndicators()
        setDataIndicators(data)
        setLoading(false)
    }

    useEffect(() => {
        loadIndicators()
    }, [])

    return {
        loading,
        dataIndicators,
    }

}
