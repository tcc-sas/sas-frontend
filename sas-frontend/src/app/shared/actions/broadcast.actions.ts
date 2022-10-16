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

export const Delete = (query: any): Broadcast => {
  return {
    type: BroadcastType.Delete,
    payload: query
  }
}

export const Benefit = (query: any): Broadcast => {
  return {
    type: BroadcastType.Benefit,
    payload: query
  }
}
