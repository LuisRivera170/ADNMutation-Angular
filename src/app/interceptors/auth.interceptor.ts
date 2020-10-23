import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private router: Router, private authService: AuthService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			catchError(e => {
				if(e.status == 401 || e.status == 403) {
					if (this.authService.isAuthenticated()) {
						this.authService.logout();
					}
				}
				this.router.navigate(['/login']);
				return throwError(e);
			})
		);
	}
}
