import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {InputState} from '../models/input.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs'

@Component({
	selector: 'multi-line-text-input-undo-component',
	template: `
		<div class="wrapper">
			<div *ngIf="!!label" class="label">
				<strong>{{label}}</strong>
			</div>
			<div class="textarea-wrapper">
				<textarea rows="5"  type="text" class="form-control" [formControl]="control"
						  [value]="(input$ | async).present" (ngModelChange)="modelChange.emit($event)"
						  [placeholder]="placeholder" (change)="onChange.emit($event.target.value)"></textarea>
			</div>
			<div *ngIf="!!control.dirty" class="undo-buttons-container">
				<span (click)="undo()" class="undo-button">↩</span>
				<span (click)="redo()" class="redo-button">↪</span>
			</div>
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
		.undo-buttons-container {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
		.undo-button, .redo-button {
			font-size: 28px;
			font-weight: 500;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	`]
})

export class MultiLineTextInputUndoComponent implements OnChanges {
	private inputSource: BehaviorSubject<InputState>;
	public input$: Observable<InputState>;
	@Input()
	public model: string;
	@Input()
	public placeholder: string = '';
	@Input()
	public label: string;
	@Input()
	public control: FormControl;
	@Output()
	public modelChange: EventEmitter<string> = new EventEmitter<string>();
	@Output()
	public onChange: EventEmitter<any> = new EventEmitter<any>();
	public initialValue: string;

	public ngOnChanges(simpleChanges: SimpleChanges): void {
		if (simpleChanges['model'] && simpleChanges['model'].isFirstChange()){
			this.initialValue = simpleChanges['model'].currentValue;
			this.inputSource = new BehaviorSubject({
				future: [],
				present:simpleChanges['model'].currentValue,
				past: []});
			this.input$ = this.inputSource.asObservable();
		}
		if (simpleChanges['model'] && !simpleChanges['model'].isFirstChange()){
			const state = this.inputSource.value;
			this.inputSource.next({
				future: [],
				present: this.model,
				past: [...state.past, state.present]
			});
		}
	}
	public undo(): void {
		const state = this.inputSource.value;
		const newState = this.undoableInputReducer(state, {type: 'UNDO'});
		this.inputSource.next(newState);
	}

	public redo(): void {
		const state = this.inputSource.value;
		const newState = this.undoableInputReducer(state, {type: 'REDO'});
		this.inputSource.next(newState);
	}

	public undoableInputReducer(state: InputState, action) {
		return this.undoable(this.inputReducer)(state, action);
	}

	public inputReducer(state: InputState, action): InputState {
		const {past, present, future} = state;
		switch(action.type){
			default:
				return {
					past: [...past, present],
					present: action.payload.value || '',
					future: []
				}
		}
	}

	public undoable(reducer): (state: InputState, action) => InputState {
		return function (state: InputState, action) {
			console.log('State', state);
			const {past, present, future}: InputState = <InputState>state;
			switch(action.type){
				case'UNDO':
					if(past.length < 1) {
						return state;
					}
					const previous = past[past.length - 1];
					const newPast: string[] = past.slice(0, -1);
					return {
						past: newPast,
						present: previous,
						future: [present, ...future]
					};
				case'REDO':
					if(future.length < 1){
						return state;
					}
					const next = future[0];
					const newFuture = future.slice(1);
					return {
						past: [...past, present],
						present: next,
						future: newFuture
					};
				default:
					const newPresent = reducer(state, action).present;
					if (present === newPresent){
						return state;
					}
					return {
						past: [...past, present],
						present: newPresent,
						future: []
					}
			}
		}
	}
}
