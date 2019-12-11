import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'buscar-produtos',
  templateUrl: './buscar-produtos.component.html',
  styleUrls: ['./buscar-produtos.component.css']
})
export class BuscarProdutosComponent implements OnInit {

  id: number;
  produtos: Produto;
 
  constructor(private dataService: ProdutoService) { }
 
  ngOnInit() {
    this.id = 0;
  }
 
  private buscarProduto() {
    this.dataService.buscaProdutoPorId(this.id)
      .subscribe(produtos => this.produtos = produtos);
  }
 
  onSubmit() {
    this.buscarProduto();
  }
}
