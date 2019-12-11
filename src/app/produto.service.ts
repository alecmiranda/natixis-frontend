import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/produtos';

  buscaProdutoPorId(id: number) {
    return this.http.get<Produto>(`${this.baseUrl}`+ `/buscar` + `/${id}`);
  }
 
  inserirProduto(produto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/inserir`, produto);
  }
 
  atualizarProduto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/alterar` + `/${id}`, value);
  }
 
  deletarProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/deletar` + `/${id}`, { responseType: 'text' });
  }
 
  listarProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

 
  deletarTodos(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/deletarTodos`, { responseType: 'text' });
  }

}
