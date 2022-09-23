import { useEffect } from "react"
import { ValueType, ResponseIndicator, ResponseInfoIndicator, Serie } from "../interfaces/Indicators"
import { indicatorsApi, API } from './api'

export const getAllIndicators = async () => {
    const response = await indicatorsApi.get<ResponseIndicator>(API)
    let data: ValueType[] = [];
    for (let [k, v] of Object.entries(response.data)) {
        if (typeof v === 'object') {
            data.push(v);
        }
    }
    return data
}

export const getByTypeIndicators = async (type: string) => {
    const response = await indicatorsApi.get<ResponseInfoIndicator>(`${API}/${type}`)
    return response.data.serie
}