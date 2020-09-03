import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationFilledModule } from '@carbon/icons-angular';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { BreadcrumbModule, GridModule, ButtonModule, TabsModule, DialogModule, PlaceholderModule, Dialog, Tooltip } from 'carbon-components-angular';



@NgModule({
	declarations: [LandingPageComponent],
	imports: [
		GridModule,
		CommonModule,
		HomeRoutingModule,
		BreadcrumbModule,
		ButtonModule,
		TabsModule,
		InformationFilledModule,
		PlaceholderModule,
		DialogModule
	],
	exports: [Tooltip]
})
export class HomeModule {  }
