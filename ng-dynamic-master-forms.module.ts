import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ListComponent} from './components/list.component';
import {TextareaUndoComponent} from './components/textarea-undo.component';
import {SingleLineTextInputComponent} from './components/single-line-text-input.component';
import {InputComponent} from './components/input.component';
import {FormComponent} from './components/form.component';
import {FormsService} from './services/forms.service';
import {MultiLineTextInputComponent} from './components/multi-line-text-area.component';

const COMPONENTS = [
	ListComponent,
	InputComponent,
	FormComponent,
	TextareaUndoComponent,
	SingleLineTextInputComponent,
	MultiLineTextInputComponent
];

const MODULES = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
];

@NgModule({
	declarations: [
		COMPONENTS
	],
	imports: [
		MODULES,
	],
	exports: [
		COMPONENTS
	],
	providers: [
		FormsService,
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
	]

})

export class DynamicMasterFormsModule {

}