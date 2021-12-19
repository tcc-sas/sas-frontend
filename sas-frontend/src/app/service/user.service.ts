import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {

    }

    getAllUsers(query = ''): Observable<any>{
        const url = environment.endpoints.userController.getAllUsers(query);
        return this.http.get(url);
    }

    

    
}