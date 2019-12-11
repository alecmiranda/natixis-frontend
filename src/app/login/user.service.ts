import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    private baseUrl = 'http://localhost:8080/api/usuarios';


    getAll() {
        return this.http.get<User[]>(`${this.baseUrl}`);
    }

    registrar(user: User) {
        return this.http.put(`${this.baseUrl}/inserir`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/deletar/${id}`);
    }
}