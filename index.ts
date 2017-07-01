import './polyfills.browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {DynamicMasterFormsDemoModule} from './ng-dynamic-master-forms-demo.module';
export const platformRef = platformBrowserDynamic();

export function main() {
	return platformRef.bootstrapModule(DynamicMasterFormsDemoModule)
		.catch(err => console.error(err));
}

// support async tag or hmr
switch (document.readyState) {
	case 'interactive':
	case 'complete':
		enableProdMode();
		main();
		break;
	case 'loading':
	default:
		document.addEventListener('DOMContentLoaded', () => main());
}
