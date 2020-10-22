import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user = new FormControl('', [Validators.required]);
	public password = new FormControl('', [Validators.required]);

	constructor() { }

	ngOnInit(): void {
	}

}
