import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SingleLineTextInputComponent} from './components/single-line-text-input.component';
import {InputComponent} from './components/input.component';
import {FormComponent} from './components/form.component';
import {FormsService} from './services/forms.service';
import {MultiLineTextInputComponent} from './components/multi-line-text-area.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from './components/demo.component';
import {DemoMainComponent} from './components/demo-main.component';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SingleLineTextInputUndoComponent} from './components/single-line-text-input-undo.component';
import {MultiLineTextInputUndoComponent} from './components/multi-line-text-input-undo.component';

const ROUTES: Routes = [
	{path: '', component: DemoComponent}
];

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
	NoopAnimationsModule,
	BrowserAnimationsModule,
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule,
	CommonModule,
	BrowserModule,
	RouterModule.forRoot(ROUTES),
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
	],
	bootstrap: [DemoMainComponent],
	entryComponents: [DemoMainComponent]


})

export class DynamicMasterFormsDemoModule {

}