import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { endpoints } from "src/environments/endpoints";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService {
    constructor(private http: HttpClient) {

    }

    getAllFuncionarios(): Observable<any>{
        const url = environment.endpoints.funcionarioController.getAllFuncionarios;
        return this.http.get(url);
    }

    
}