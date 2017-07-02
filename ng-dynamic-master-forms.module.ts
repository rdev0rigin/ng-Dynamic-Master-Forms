import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SingleLineTextInputComponent} from './components/single-line-text-input.component';
import {InputComponent} from './components/input.component';
import {FormComponent} from './components/form.component';
import {FormsService} from './services/forms.service';
import {MultiLineTextInputComponent} from './components/multi-line-text-area.component';
import {DemoComponent} from './components/demo.component';
import {DemoMainComponent} from './components/demo-main.component';
import {SingleLineTextInputUndoComponent} from './components/single-line-text-input-undo.component';
import {MultiLineTextInputUndoComponent} from './components/multi-line-text-input-undo.component';


const COMPONENTS = [
	DemoComponent,
	DemoMainComponent,
	InputComponent,
	FormComponent,
	SingleLineTextInputComponent,
	SingleLineTextInputUndoComponent,
	MultiLineTextInputComponent,
	MultiLineTextInputUndoComponent,
];

const MODULES = [
	FormsModule,
	ReactiveFormsModule,
	CommonModule,
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
	],

})

export class DynamicMasterFormsModule {

}