import { useState } from 'react';
import { ExpenseType } from '../../types';

const today = new Date();

export const useExpenseForm = (
	onSubmit: (param: ExpenseType) => void,
	defaultValues?: ExpenseType
) => {
	const [inputs, setInputs] = useState({
		amount: {
			value: defaultValues?.amount?.toString() ?? '',
			isValid: true,
		},
		date: {
			value:
				defaultValues?.date ??
				`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
			isValid: true,
		},
		description: {
			value: defaultValues?.description ?? '',
			isValid: true,
		},
	});

	const inputChangedHandler = (
		inputIdentifier: 'amount' | 'date' | 'description',
		enteredValue: string
	) => {
		setInputs((currInputs) => {
			return {
				...currInputs,
				[inputIdentifier]: { value: enteredValue, isValid: true },
			};
		});
	};

	const submitHandler = () => {
		const expenseData = {
			amount: +inputs.amount.value,
			date: inputs.date.value,
			description: inputs.description.value,
		};

		const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
		const dateIsValid =
			/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/.test(
				expenseData.date
			) && new Date(expenseData.date) <= new Date();
		const descriptionIsValid = expenseData.description.trim().length > 0;

		if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
			setInputs((currInputs) => {
				return {
					amount: { value: currInputs.amount.value, isValid: amountIsValid },
					date: { value: currInputs.date.value, isValid: dateIsValid },
					description: {
						value: currInputs.description.value,
						isValid: descriptionIsValid,
					},
				};
			});
			return;
		}

		onSubmit(expenseData);
	};

	const formIsInvalid =
		!inputs.amount.isValid ||
		!inputs.date.isValid ||
		!inputs.description.isValid;

	return {
		inputs,
		inputChangedHandler,
		submitHandler,
		formIsInvalid,
	};
};
