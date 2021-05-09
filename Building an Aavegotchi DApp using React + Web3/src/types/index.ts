export interface Gotchi {
    collateral: string;
    id: string;
    name: string;
    withSetsNumericTrauts: Array<Number>;
}

export interface QueryResponse {
    aavegotchis: Array<Gotchi>
}