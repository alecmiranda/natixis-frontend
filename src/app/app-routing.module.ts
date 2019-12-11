import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarProdutosComponent } from './buscar-produtos/buscar-produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar';
import { AuthGuard } from './_helpers';
import { CarrinhoComponent } from './carrinho/carrinho.component';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrarComponent },

  { path: 'carrinho', component: CarrinhoComponent },

  { path: '', redirectTo: 'produto', pathMatch: 'full' },
  { path: 'produto', component: ListarProdutosComponent },
  { path: 'add', component: CadastrarProdutoComponent },
  { path: 'buscarPorId', component: BuscarProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
