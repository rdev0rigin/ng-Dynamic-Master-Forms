import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'multi-line-text-input-component',
	template: `
		<div class="wrapper">
			<div *ngIf="!!label" class="label">
				<strong>{{label}}</strong>
			</div>
			<div class="textarea-wrapper">
				<textarea rows="5" class="form-control" [formControl]="control"
						  [(ngModel)]="model" (ngModelChange)="modelChange.emit($event)"
						  [placeholder]="placeholder" (change)="onChange.emit($event.target.value)"></textarea>
			</div>
				<span *ngIf="!!control.dirty" class="cancel" (click)="onCancel()">✖</span>
		</div>
	`,
	styles: [`
        .wrapper {
            display: flex;
            flex-direction: row;
        }
        .textarea-wrapper {
            width: 100%;
        }
        .label {
            font-size: 18px;
            color: black;
        }
        .cancel {
            cursor: pointer;
            font-size: 28px;
            font-weight: 500;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
	`]
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
