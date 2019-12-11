import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ListarProdutosComponent } from "./listar-produtos/listar-produtos.component";
import { BuscarProdutosComponent } from './buscar-produtos/buscar-produtos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutoComponent,
    DetalhesProdutoComponent,
    ListarProdutosComponent,
    BuscarProdutosComponent,
    LoginComponent,
    HomeComponent,
    RegistrarComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
