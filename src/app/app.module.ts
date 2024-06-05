import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent, InvestmentsResultsComponent],
	imports: [BrowserModule, UserInputModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
