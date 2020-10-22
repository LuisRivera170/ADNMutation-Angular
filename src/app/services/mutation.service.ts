import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config';
import { Human } from '../models/Human';

@Injectable({
  providedIn: 'root'
})
export class MutationService {

	constructor(private http: HttpClient) { }

	public getHumans(): Observable<Array<Human>> {
		return this.http.get<Array<Human>>(`${URL_BACKEND}/humans`);
	}

	public getStats(): Observable<any> {
		return this.http.get<any>(`${URL_BACKEND}/stats`);
	}

	public createHuman(human: Human): Observable<Human> {
		return this.http.post<Human>(`${URL_BACKEND}/humans`, human).pipe(
			map((response: any) => response.human as Human),
		);
	}

}
