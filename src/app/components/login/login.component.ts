import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public username = new FormControl('', [Validators.required]);
	public password = new FormControl('', [Validators.required]);

	constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

	ngOnInit(): void {
		if (this.authService.isAuthenticated()) {
			this.router.navigate(['/mutation']);
		}
	}

	public login() {
		if (this.username.hasError('required') || this.password.hasError('required')) return;
		
		this.authService.login(this.username.value, this.password.value).subscribe(response => {
			this.authService.saveToken(response.access_token); 
			this.router.navigate(['/mutation']);
		}, err => {
			if (err.status == 400) {
				this.snackBar.open("Credenciales incorrectas!", null, {
					duration: 2000,
				});
			}
		});
	}

	getUsernameErrorMessage() {
		if (this.username.hasError('required')) {
			return 'El usuario es requerido';
		}
	}

	getPasswordErrorMessage() {
		if (this.username.hasError('required')) {
			return 'La contraseña es requerida';
		}
	}

}
