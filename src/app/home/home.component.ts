import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../user';
import { UserService, AuthenticationService } from '../login';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.carregarTodosUsuarios();
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.carregarTodosUsuarios());

            this.carregarTodosUsuarios();

    }

    private carregarTodosUsuarios() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    logout(){
        this.authenticationService.logout();
    }
}