import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Broadcast, BroadcastType } from "../../shared/models/broadcast.models";

@Injectable({
    providedIn: "root"
})
export class BroadcastService {
    private subject$ = new Subject<Broadcast>();
    private broadcastMessages$ = this.subject$.asObservable();

    constructor() { }

    notify(message: Broadcast) {
        this.subject$.next(message);
    }

    listen(type: BroadcastType): Observable<Broadcast> {
        return this.broadcastMessages$.pipe(
            filter((msg) => msg.type == type)
        )
    }
}

