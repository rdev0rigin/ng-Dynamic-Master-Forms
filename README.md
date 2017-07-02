# ng-Dynamic-Master-Forms
>by (R)Dev rdev1163@outlook.com
updated 7/1/2017
<br>
v 1*

##### This is an Angular 2+ module for making forms from any object given to it. It reads the properties and builds another array of questions with object properties and respective values and initialized controls you would need for an Angular Form. It also has various input components that are reusable for building forms manually and implement undo state management (Redux Patterns).
 
 To Install, 
  
  using NPM

```shell
npm i --save ng-dynamic-master-forms
    
```
Then just add the `DynamicMasterFormsModule` to your ngModule imports

```typescript
imports: [
    DynamicMasterFormsModule
]    
```
> Reusable Componentes

Each component is autonomous, controls are not needed but can be overwritten.
```html
<single-line-text-input-component label="Label" [(model)]="singleText" placeholder="placeholder" [control]="singleDemoControl" ></single-line-text-input-component>
<multi-line-text-input-component label="Label" [(model)]="multiText" placeholder="placeholder" [control]="multiDemoControl" ></multi-line-text-input-component>
<single-line-text-input-undo-component label="Label" [(model)]="singleUndoText" placeholder="placeholder" [control]="singleDemoControl" ></single-line-text-input-undo-component>
<multi-line-text-input-undo-component label="Label" [(model)]="multiUndoText" placeholder="placeholder" [control]="multiDemoUndoControl"></multi-line-text-input-undo-component>

```

> Form Building Services

The list builder will return an array of each key in the object with initialized controls and properties to help build the input like key and label.
```typescript
const MyObject = {
	foo: 'foo',
	bar: 'bar',
	bas: 'bas'
}
constructor(
	private formsService: FormsService,
){};
const QUESTIONS_LIST = this.formService.buildList(MyObject);
```  
> Dynamic Editable Master Details List

This component can be inserted into templates and takes an array of object(s) and will turn it into a master-details list, it will emit an object `(onChanges)` that contains `{objectIndex: number, key: string, value: any}` 
 
 ```html
<master-details-list-component [items]="[demoObj, demoObjTwo]" (onChanges)="onChange($event)"></master-details-list-component>

```
 
