import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
	selector: 'app-user-input',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './user-input.component.html',
	styleUrl: './user-input.component.css',
})
export class UserInputComponent {
	// @Output() calculate = new EventEmitter<InvestmentInput>();

	private investmentService: InvestmentService = inject(InvestmentService);

	enteredInitialInvestment = '0';
	enteredAnnualInvestment = '0';
	enteredExpectedReturn = '5';
	enteredDuration = '10';

	onSubmit() {
		// this.calculate.emit({
		// 	initialInvestment: +this.enteredInitialInvestment,
		// 	duration: +this.enteredDuration,
		// 	annualInvestment: +this.enteredAnnualInvestment,
		// 	expectedReturn: +this.enteredExpectedReturn,
		// });
		this.investmentService.calculateInvestmentResults({
			initialInvestment: +this.enteredInitialInvestment,
			duration: +this.enteredDuration,
			annualInvestment: +this.enteredAnnualInvestment,
			expectedReturn: +this.enteredExpectedReturn,
		});
		this.setDefaultValues();
	}

	setDefaultValues() {
		this.enteredInitialInvestment = '0';
		this.enteredAnnualInvestment = '0';
		this.enteredExpectedReturn = '5';
		this.enteredDuration = '10';
	}
}
