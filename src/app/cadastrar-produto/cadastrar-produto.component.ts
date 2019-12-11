import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  submitted = false;
 
  constructor(private produtoService: ProdutoService) { }
 
  ngOnInit() {
  }
 
  novoProduto(): void {
    this.submitted = false;
    this.produto = new Produto();
  }
 
  save() {
    this.produtoService.inserirProduto(this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
