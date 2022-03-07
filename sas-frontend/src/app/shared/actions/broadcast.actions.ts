import { Broadcast, BroadcastType } from '../models/broadcast.models';

export const Reload = (query?: any): Broadcast => {
  return {
    type: BroadcastType.Reload,
    payload: query,
  };
};

export const Filter = (query: any): Broadcast => {
  return {
    type: BroadcastType.Filter,
    payload: query,
  };
};
