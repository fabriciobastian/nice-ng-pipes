import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
})
export class AppComponent {
	title$ = of(['demo', 'demo1', 'demo2', 'demo3']);
}
