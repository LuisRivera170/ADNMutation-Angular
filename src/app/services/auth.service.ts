import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CLIENT_JWT_CREDENTIALS, URL_BACKEND } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + CLIENT_JWT_CREDENTIALS});
	private _token: string;

	constructor(private http: HttpClient, private router: Router) {}

	public get token(): string {
		if (this._token != null) {
			return this._token;
		} else if(sessionStorage.getItem('token') != null) {
			this._token = sessionStorage.getItem('token');
			return this._token;
		}
		return null; 
	}

	login(username: string, password: string): Observable<any> {
		let params = new URLSearchParams();
		params.set('grant_type', 'password');
		params.set('username', username);
		params.set('password', password);
		return this.http.post<any>(`${URL_BACKEND}/oauth/token`, params.toString(), {headers: this.httpHeaders});
	}

	logout() {
		this._token = null;
		sessionStorage.clear();
		this.router.navigate(['/login']);
	}

	saveToken(accessToken: string) {
		this._token = accessToken;
		sessionStorage.setItem('token', accessToken);
	}

	isAuthenticated(): boolean {
		return this.token != null;
	}
 
}