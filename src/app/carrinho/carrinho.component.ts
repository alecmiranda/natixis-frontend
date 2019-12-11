import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
	selector: 'app-carrinho',
	templateUrl: './carrinho.component.html',
	styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

	items: Item[] = [];
	produto: Produto;

	total: number = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private produtoService: ProdutoService
	) { }

	ngOnInit() {


		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];

			if (id) {

				this.produtoService.buscaProdutoPorId(id)
					.subscribe(produtos => this.produto = produtos);

				var item: Item = {
					produto: this.produto,
					quantidade: 1
				};
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.produto.id == id) {
							index = i;
							break;
						}
					}

					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantidade += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.carregarCarrinho();
			} else {
				this.carregarCarrinho();
			}
		});
	}

	carregarCarrinho(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				produto: item.produto,
				quantidade: item.quantidade
			});
			this.total += item.produto.valor * item.quantidade;
		}
	}

	remove(id: number): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.produto.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.carregarCarrinho();
	}

	
}
