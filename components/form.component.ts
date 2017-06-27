import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'form-component',
	template: `
		<div *ngIf="dataReady === true" [formGroup]="form">
			<h1>
				<small>CREATE</small>
				{{this.tc.viewContext.toUpperCase()}}
			</h1>
			<div *ngFor="let question of models[0].questions" class="form-row">
				<input-component [label]="question.label" [control]="controls[question.key]"
								 [(model)]="question.value"></input-component>
			</div>
			<div class="form-row">
				<button (click)="onSubmit(form.value)" class="btn btn-lg" role="button" type="submit"
						[disabled]="form.invalid" [class.disabled]="form.invalid">Create
				</button>
			</div>
		</div>
	`,
})

export class FormComponent implements OnInit {
	public models: any[] = [];
	public get endpoint(): string {
		return `${this.parentContext}.create`
	};

	// @Input()
	// public controls: {} = {};
	@Input()
	public questions: any[] = [];
	@Input()
	public parentContext;
	public form: FormGroup;
	public dataReady: boolean = false;
	constructor(
		){}

	public ngOnInit(): void {
			// this.form = new FormGroup(this.controls);
			this.dataReady = true;
	}

	public onSubmit(form: any): void {
			let payload = {props: form};
			console.log('payload', payload);
	}
}