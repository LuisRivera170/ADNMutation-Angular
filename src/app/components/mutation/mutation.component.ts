import { Component, OnInit } from '@angular/core';
import { MutationService } from 'src/app/services/mutation.service';
import { Human } from '../../models/Human';
import {FormControl, Validators} from '@angular/forms';

export enum MutationOption {
	NONE,
	WITH_MUTATION,
	WITHOUT_MUTATION
}

@Component({
  selector: 'app-mutation',
  templateUrl: './mutation.component.html',
  styleUrls: ['./mutation.component.css']
})
export class MutationComponent implements OnInit {

	public humans: Array<Human>;
	public actualFilter: MutationOption = MutationOption.NONE;
	public humansBack: Array<Human>;
	public stats: any;
	public name = new FormControl('', [Validators.required]);

	getErrorMessage() {
		if (this.name.hasError('required')) {
			return 'El nombre es requerido';
		}
	}

	constructor(private mutationService: MutationService) {
		mutationService.getHumans().subscribe(humans => {
			this.humans = humans;
			this.humansBack = humans;
		});
	}

	ngOnInit(): void { }

	public get MutationOption() {
		return MutationOption; 
	}

	public filterMutation(filter: MutationOption) {
		if (filter !== this.actualFilter) {
			if (filter === MutationOption.WITH_MUTATION) {
				this.humans = this.humansBack.filter(human => human.isMutating);
			} else {
				this.humans = this.humansBack.filter(human => !human.isMutating);
			}
			this.actualFilter = filter;
		} else {
			this.humans = this.humansBack;
			this.actualFilter = MutationOption.NONE;
		}
	}

	public requestStats() {
		this.mutationService.getStats().subscribe(stats => {
			this.stats = stats;
		});
	}

	public createHuman() {
		if (this.name.hasError('required')) return;
		
		let newHuman = new Human();
		newHuman.name = this.name.value;

		this.mutationService.createHuman(newHuman).subscribe(newHuman => {
			this.humansBack.push(newHuman);
			this.humans = this.humansBack;
			this.actualFilter = MutationOption.NONE;
		});
	}

}
