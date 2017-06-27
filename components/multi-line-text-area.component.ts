import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'multi-line-text-input-component',
	template: `
		<div class="row">
			<div *ngIf="!!label" class="col-xs-3">
				<strong>{{label}}</strong>
			</div>
			<div class="textarea-wrapper" [ngClass]="{'col-xs-12':!label, 'col-xs-9':!!label}">
				<textarea rows="5" class="form-control" [formControl]="control"
						  [(ngModel)]="model" (ngModelChange)="modelChange.emit($event)"
						  [placeholder]="placeholder" (change)="onChange.emit($event.target.value)"></textarea>
				<span *ngIf="!!control.dirty" class="icon icon-cancel-circle pull-right" (click)="onCancel()"></span>
			</div>
		</div>
	`,
})

export class MultiLineTextInputComponent implements OnChanges {
	@Input()
	public model: string = '';
	@Input()
	public placeholder: string = '';
	@Input()
	public label: string;
	@Input()
	public control: FormControl = new FormControl;
	@Output()
	public modelChange: EventEmitter<string> = new EventEmitter<string>();
	@Output()
	public onChange: EventEmitter<any> = new EventEmitter<any>();
	public initialValue: string;

	public ngOnChanges(simpleChanges: SimpleChanges): void {
		if (simpleChanges['model'] && simpleChanges['model'].isFirstChange()){
			this.initialValue = simpleChanges['model'].currentValue;
		}
	}

	public onCancel(): void {
		this.model = this.initialValue;
		this.control.markAsPristine();
	}
}
