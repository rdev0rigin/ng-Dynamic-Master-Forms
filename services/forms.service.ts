import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {REPLACMENT_LABELS, REQUIRED, RESTRICTED_KEYS} from '../settings/dynamic-forms.config';


@Injectable()
export class FormsService {

	private labelMaker(key, replacmentLabels): string {
		for (let item of replacmentLabels){
			if (item.key === key){
				return item.replace;
			}
		}
		return key;
	}

	public buildList(model: any): any[] {
		let list = [];
			// todo refactor select condition
		for (let key of Object.keys(model)) {
			let question: any = {};
			// todo catch
			let label = this.labelMaker(key, REPLACMENT_LABELS);
			if (RESTRICTED_KEYS.indexOf(key) === -1) {
				Object.assign(question, {
					key: key,
					label: model.label ? model.label : label[0].toUpperCase() + label.slice(1),
					// todo control insert system
					control: REQUIRED.indexOf(key) !== -1 ? new FormControl(model[key], []) : new FormControl(model[key], [Validators.required]),
					value: model[key],
				});
				list = [...list, question];
			}
		}
		return list;
	}
	//
	// public ControlsFactory(questions: any ): {[name: string]: FormControl} {
	// 	let group: { [name: string]: FormControl} = {};
	// 	for(let item of questions) {
	// 		//todo Controls Assignments
	// 			Object.assign(group, {[item.key]: item.required
	// 				? new FormControl(item.key || '', Validators.required)
	// 				: new FormControl(item.key || '')
	// 			})
	// 	}
	// 	return group;
	// }
}
