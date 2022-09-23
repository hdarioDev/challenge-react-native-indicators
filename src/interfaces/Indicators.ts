export interface ResponseIndicator {
    version: string;
    autor: string;
    fecha: Date;
    uf: ValueType;
    ivp: ValueType;
    dolar: ValueType;
    dolar_intercambio: ValueType;
    euro: ValueType;
    ipc: ValueType;
    utm: ValueType;
    imacec: ValueType;
    tpm: ValueType;
    libra_cobre: ValueType;
    tasa_desempleo: ValueType;
    bitcoin: ValueType;
}

export interface ValueType {
    codigo: string;
    nombre: string;
    unidad_medida: UnidadMedida;
    fecha: Date;
    valor: number;
}

export enum UnidadMedida {
    Dólar = "Dólar",
    Pesos = "Pesos",
    Porcentaje = "Porcentaje",
}

export interface ResponseInfoIndicator {
    version: string;
    autor: string;
    codigo: string;
    nombre: string;
    unidad_medida: string;
    serie: Serie[];
}

export interface Serie {
    fecha: Date;
    valor: number;
}
