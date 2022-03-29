import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, finalize, map, shareReplay, take, tap } from 'rxjs/operators';
import { Broadcast, BroadcastType } from '../../shared/models/broadcast.models';

@Injectable({
  providedIn: 'root',
})
export class BroadcastService {
  private subject$ = new Subject<Broadcast>();
  private subjectObservable$ = this.subject$.asObservable();

  constructor() {}

  notify(message: Broadcast) {
    this.subject$.next(message);
  }

  listen(type: BroadcastType): Observable<Broadcast> {
    return this.subjectObservable$.pipe(
        filter((msg) => msg.type == type),
    );
  }

}
