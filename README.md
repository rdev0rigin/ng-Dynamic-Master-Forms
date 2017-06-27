# ng-Dynamic-Master-Forms
>by (R)Dev rdev1163@outlook.com

updated: 6/15/2017
expecting v1.0.0 to be out by July

This is an Angular 2+ module is for taking any object that is thrown at it. It reads the properties and builds another object with all the model data and initialized controls you would need for an Angular Form. It also has various components that are usefully reusable for building forms manually and some advanced features e.g. time travel and recursive listing. I made this to make my development process easier for big and repetitive form constructions.
  Still a -WIP-
 
//Todo Dependencies
    Bootstrap
    lodash
 
  To Install, 
  
  using NPM
  ```$xslt
    npm i --save ng-dynamic-master-forms
    
   ```
   Then just add the `DynamicMasterFormsModule` to your ngModule imports
   ```typescript
   imports: [
   	...
   	DynamicMasterFormsModule
   ]
    
```
//Todo Examples
> Reusable Componentes
```html
<single-line-text-input-component></single-line-text-input-component>

```

> Form Building Services
```typescript
constructor(
	private formsService: FormsService,
){};
const QUESTIONS_LIST = this.formService.listBuilder(MyObject);
```  
  
 
