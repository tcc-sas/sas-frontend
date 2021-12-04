import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";
import { MessageData } from "../models/message-data.models";

@Injectable({
    providedIn: "root"
})
export class MessageService {
    private subject$ = new Subject();

    constructor() { }

    notify(message: MessageData) {
        this.subject$.next(message);
    }

    listen(target: string, func: any): Subscription {
        return this.subject$.pipe(
            filter((msg: any) => msg['target'] === target),
            map(msg => msg)
        ).subscribe(func)
    }
}

