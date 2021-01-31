import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LengthPipeModule, LogPipeModule, NotPipeModule, SkipPipeModule } from 'nice-ng-pipes';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		LengthPipeModule,
		NotPipeModule,
		SkipPipeModule,
		LogPipeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
