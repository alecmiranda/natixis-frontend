import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Observable } from 'rxjs';
import { ProdutoService } from '../produto.service';
import { User } from '../user';
import { AuthenticationService } from '../login';
@Component({
  selector: 'listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  produtos: Observable<Produto>;
  currentUser: User;
  users = [];

  constructor(private produtoService: ProdutoService,
    private authenticationService: AuthenticationService) { 
    this.currentUser = this.authenticationService.currentUserValue;

  }
 
  ngOnInit() {
    this.recarregarProdutos();
  }
 
  deletarProdutos() {
    this.produtoService.deletarTodos()
      .subscribe(
        data => {
          console.log(data);
          this.recarregarProdutos();
        },
        error => console.log('ERROR: ' + error));
  }
 
  recarregarProdutos() {
    this.produtos = this.produtoService.listarProdutos();
  }

}


