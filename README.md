# ng-Dynamic-Master-Forms
>by (R)Dev rdev1163@outlook.com

updated: 6/15/2017
v1.0.0

>This is an Angular 2+ module for making forms from any object given to it. It reads the properties and builds another object with all the model data and initialized controls you would need for an Angular Form. It also has various components that are usefully reusable for building forms manually and some advanced features e.g. time travel and recursive listing. I made this to make my development process easier for big and repetitive form constructions.
 
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
//Todo - Dynamic Editable Master Details List
  
 
