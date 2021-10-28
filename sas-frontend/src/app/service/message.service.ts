import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { filter, map} from "rxjs/operators";
import { MessageData } from "../models/message-data.models";

@Injectable({
    providedIn: "root"
})

export class MessageService {
    private subject$ = new Subject();
    
    constructor(){}

    emit(message: MessageData){
        this.subject$.next(message);
    }

    on(messageName: string, action: any): Subscription {
        return this.subject$.pipe(
            filter((msg: any) => msg['name'] === messageName),
            map(msg => msg['data'])
        ).subscribe(action)
    }

    
}

