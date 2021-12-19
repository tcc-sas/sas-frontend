import { Broadcast, BroadcastType } from "../models/broadcast.models";

export const Reload = (query?: any) => {
    return <Broadcast>{ type: BroadcastType.Reload, payload: query };
}

export const Filter = (query: any) => {
    return <Broadcast>{ type: BroadcastType.Filter, payload: query };
}