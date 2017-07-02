import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {FormsService} from '../services/forms.service';
import {Observable} from 'rxjs/Observable';

const DEMO_OBJ = {
	foo: 'foo',
	bar: 'bar',
	bas: 'bas'
};
const DEMO_OBJ_TWO = {
	name: 'Demo Obj Two',
	pizza: 'Cheese',
	sammich: 'Grilled Cheese',
	soda: 'Sprite',
	foo: 'foo',
	bar: 'bar',
	bas: 'bas'
};

@Component({
	selector: 'demo-component',
	template: `
	<h2>Reusable Inputs</h2>
	<div [formGroup]="form">
		<h3>Single Line Input Component</h3>
		<single-line-text-input-component label="Label" [(model)]="singleText" placeholder="placeholder" [control]="singleDemoControl" ></single-line-text-input-component>
		<h3>Multi-Line Input</h3>
		<multi-line-text-input-component label="Label" [(model)]="multiText" placeholder="placeholder" [control]="multiDemoControl" ></multi-line-text-input-component>
		<h3>Single With Undo</h3>
		<single-line-text-input-undo-component label="Label" [(model)]="singleUndoText" placeholder="placeholder" [control]="singleUndoDemoControl" ></single-line-text-input-undo-component>
		<h3>Multi Line with Undo</h3>
		<multi-line-text-input-undo-component label="Label" [(model)]="multiUndoText" placeholder="placeholder" [control]="multiDemoUndoControl"></multi-line-text-input-undo-component>
	</div>
	<h2>Dynamic Form Builder</h2>
	<form [formGroup]="dynamicForm">
		<single-line-text-input-component *ngFor="let item of list" [control]="item.control" [model]="item.value" [label]="item.label"></single-line-text-input-component>
	</form>
	<h2>Dynamic Master Details</h2>
	<!--<strong>Build an Object</strong>-->
	<!--<div class="object-builder" [formGroup]="buildForm">-->
		<!--<div class="object-builder-input" *ngFor="let prop of buildAnObject">-->
			<!--<single-line-text-input-component label="key" [(model)]="prop.key"></single-line-text-input-component> : <single-line-text-input-component label="value" [(model)]=""></single-line-text-input-component>-->
		<!--</div>-->
		<!--<single-line-text-input-component label="key"></single-line-text-input-component> : <single-line-text-input-component label="value"></single-line-text-input-component>-->
		<!--<div>Add Another Property</div>-->
		<!--<div>Update Form With Object</div>-->
	<!--</div>-->
	<master-details-list-component [items]="[demoObj, demoObjTwo]" [listsHeaderKey]="'name'" (onChanges)="onChange($event)"></master-details-list-component>
	`,
	styles: [`
		.object-builder .object-builder-input {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
	`]
})

export class DemoComponent implements OnInit, OnDestroy {
	public buildAnObject: {[key: string]: string}[] = [{}];
	public demoObj = DEMO_OBJ;
	public demoObjTwo= DEMO_OBJ_TWO;
	public list: Question;
	public singleText = 'This is the Demo Model';
	public singleUndoText = 'This is the Demo Model';
	public multiText = 'This is the Demo Model';
	public multiUndoText = 'This is the Demo Model';
	public singleDemoControl: FormControl = new FormControl('', []);
	public singleUndoDemoControl: FormControl = new FormControl('', []);
	public multiDemoControl: FormControl = new FormControl('', []);
	public multiDemoUndoControl: FormControl = new FormControl('', []);
	public form: FormGroup = new FormGroup({
		singleDemo: this.singleDemoControl,
		singleUndoDemo: this.singleUndoDemoControl,
		multiDemo: this.multiDemoControl,
		multiDemoUndo: this.multiDemoUndoControl
	});
	public dynamicForm: FormGroup = new FormGroup({});

	constructor(
		private forms: FormsService
	){}
	public ngOnInit(): void {
		this.list = this.forms.buildList(this.demoObj);
		console.log(this.list);
		// let controls = {};
		// Observable.from(this.list).forEach(question => Object.assign(controls, {[question.key]: question.control}));
		// this.dynamicForm = new FormGroup(controls);
	}
	public ngOnDestroy(): void {}

	public onChange(event): void {
			console.log(event)
	}
}

interface Question {
	[name: string]: any
}
interface Questions {
}