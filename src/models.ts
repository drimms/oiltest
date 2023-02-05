export interface BackendResp {
    status: boolean,
    data: OilData[]     
}

export interface OilData {
    date: string,
    oil: string,
    water: string
}
