import {Component} from '@angular/core';

@Component({
	selector: 'demo-main-component',
	template: `
	<router-outlet></router-outlet>
		<strong>By <a href="mailto:rdev1163@outlook.com">(R)Dev</a></strong>
	`
})
export class DemoMainComponent {}