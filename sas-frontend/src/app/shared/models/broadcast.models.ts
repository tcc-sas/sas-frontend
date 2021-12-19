export class Broadcast {
    constructor(
        public type?: BroadcastType,
        public payload?: any
    ){}
}

export enum BroadcastType {
    Reload = 'RELOAD',
    Filter = 'FILTER'
}