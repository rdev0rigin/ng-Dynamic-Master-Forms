import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import 'rxjs';
import {FormsService} from '../services/forms.service';

@Component({
	selector: 'master-details-list-component',
	template: `		
		<div class="list" *ngFor="let listFormGroup of lists">
			<div class="list-header" (click)="listFormGroup.isActive = !listFormGroup.isActive">{{listFormGroup.list[0].value}}</div>
			<form [formGroup]="listFormGroup.formGroup">
				<ul [class.active]="listFormGroup.isActive">
					<li *ngFor="let item of listFormGroup.list">
						<div class="input-label" *ngIf="!item.isActive" (click)="item.isActive = true">{{item.label}}: {{item.value}}</div>
						<div class="input-container" *ngIf="item.isActive">
							<single-line-text-input-component [label]="item.label" [control]="item.control" [(model)]="item.value" ></single-line-text-input-component>
							<div class="check-mark" (click)="item.isActive = false">✔</div>
						</div>
					</li>
				</ul>
			</form>
		</div>
	`,
	styles: [`
		.list {
			margin: 20px;
		}
		.list-header {
			cursor: pointer;
			font-size: 18px;
			font-weight: 500;
		}
		ul {
			list-style: none;
			max-height: 0px;
			overflow: hidden;
		}
		ul.active {
			max-height: 20000px;
		}
		li {
			width: 100%;
			padding: 10px;
			margin-bottom: 1px;
			background: aliceblue;
		}
		li:hover {
			background: lightgrey;
		}
		li .input-container {
			display: flex;
			flex-direction: row;
		}
		li .input-label, li .input-container {
			cursor: pointer;
		}
		.check-mark {
			cursor: pointer;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 28px;
		}
	`]
})
export class MasterDetailsListComponent implements OnChanges{
	@Input()
	public items = [];
	public lists = [];
	public questions = [];
	public form: FormGroup = new FormGroup({});

	constructor(private forms: FormsService){}

	public ngOnChanges(simpleChanges: SimpleChanges){
		if(simpleChanges.items && simpleChanges.items.firstChange){
			this.items.forEach(item => {
				const list = this.forms.buildList(item);
				let controls = {};
				this.forms.buildList(list).map(listItem => {
					Object.assign(controls, {[listItem.key]: listItem.control});
				});
				const listFormGroup: ListFormGroup = {list: list, formGroup: new FormGroup(controls), isActive: false};
				this.lists = [...this.lists, listFormGroup];
			})

		}
	}

	public onClick(itemState) {
		console.log(itemState);
	}
}

interface ListFormGroup {
	list: any[],
	formGroup: FormGroup
	isActive: boolean
}