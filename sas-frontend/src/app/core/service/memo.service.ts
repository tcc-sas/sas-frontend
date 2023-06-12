import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleProduct } from 'src/app/shared/models/beneficiary.models';
import { IMemo } from 'src/app/shared/models/memo.models';


import { environment } from 'src/environments/environment';
import { ErrorHandler } from './error-handler.service';

const MEMO_ENDPOINTS = environment.endpoints.memoController;
@Injectable({
  providedIn: 'root',
})
export class MemoService {
  constructor(
    private http: HttpClient,
    private eh: ErrorHandler
  ) {}

  getAllMemo(query = ''): Observable<IMemo[]> {
    const url = MEMO_ENDPOINTS.getAllMemo(query);
    return this.http.get<IMemo[]>(url);
  }

  getMemoByFilter(query = ''): Observable<any> {
    const url = MEMO_ENDPOINTS.getMemoByFilter(query);
    return this.http.get(url);
  }

  getMemoSelectOptions(): Observable<any> {
    const url = MEMO_ENDPOINTS.getMemoSelectOptions();
    return this.http.get(url);
  }

  getMemoById(memoId: string): Observable<IMemo | null> {
    const url = MEMO_ENDPOINTS.getMemoById(memoId);
    return this.http.get<IMemo | null>(url);
  }

  registerMemo(memo: IMemo): Observable<any> {
    const url = MEMO_ENDPOINTS.registerMemo();
    return this.http.post<IMemo>(url, memo);
  }

  updateMemo(memo: IMemo): Observable<any> {
    const url = MEMO_ENDPOINTS.updateMemo();
    return this.http.put<IMemo>(url, memo);
  }

  deleteProduct(id: string): Observable<any> {
    const url = MEMO_ENDPOINTS.deleteMemo(id);
    return this.http.delete<string>(url);
  }

  getRegisterSelectOptions(): Observable<SimpleProduct[]> {
    const url = MEMO_ENDPOINTS.getMemoRegisterSelectOptions();
    return this.http.get<SimpleProduct[]>(url);
  }

  
}
