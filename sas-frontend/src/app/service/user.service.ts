import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


const USER_ENDPOINTS = environment.endpoints.userController;
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {

    }

    getAllUsers(query = ''): Observable<any>{
        const url = USER_ENDPOINTS.getAllUsers(query);
        return this.http.get(url);
    }

    getUsersByFilter(query = ''): Observable<any> {
        const url = USER_ENDPOINTS.getUsersByFilter(query);
        return this.http.get(url);
    }

    

    
}