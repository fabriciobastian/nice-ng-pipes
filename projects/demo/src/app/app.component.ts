import { Component } from '@angular/core';
import { of, Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
})
export class AppComponent {
	title$ = new Subject<string>();

	constructor() {
		(async () => {
			for (let i = 0; i < 10; ++i) {
				await AppComponent.delay(500);
				this.title$.next(i.toString());
			}
		})();
	}

	private static delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}
