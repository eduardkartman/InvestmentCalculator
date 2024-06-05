import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
	selector: 'app-investments-results',
	templateUrl: './investments-results.component.html',
	styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
	private investmentService = inject(InvestmentService);

	results = this.investmentService.resultData.asReadonly();
}
