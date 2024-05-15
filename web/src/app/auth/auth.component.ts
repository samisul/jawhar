import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  template: ``,
  styles: ``,
  selector: 'app-auth',
  standalone: true,
  imports: [],
})
export class AuthComponent implements OnInit {
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.login();
  }
}
