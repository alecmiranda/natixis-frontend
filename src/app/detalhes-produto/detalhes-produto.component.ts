import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ListarProdutosComponent } from "../listar-produtos/listar-produtos.component";

@Component({
  selector: 'detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  
  @Input() produto: Produto;
 
  constructor(private produtoService: ProdutoService, 
    private listComponent: ListarProdutosComponent) { }
 
  ngOnInit() {
  }

  
  deletarProduto() {
    this.produtoService.deletarProduto(this.produto.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.recarregarProdutos();
        },
        error => console.log(error));
  }

}
