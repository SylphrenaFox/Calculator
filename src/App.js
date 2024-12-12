import styles from './App.module.css';
import { useState } from 'react';
import { NUMS } from './data';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const clickOnNumber = (num) => {
		if (operator === '') {
			setOperand1((updatedOperand1) => updatedOperand1 + num);
		} else {
			setOperand2((updatedOperand2) => updatedOperand2 + num);
		}
	};

	const clickPlus = () => {
		setOperator('+');
		setIsResult(false);
	};

	const clickMinus = () => {
		setOperator('-');
		setIsResult(false);
	};

	const clickEquals = () => {
		if (isResult) {
			setOperand2('');
			setIsResult(false);
		} else if (operand1 === '' || operand2 === '') {
			return;
		} else {
			let result;
			if (operator === '+') {
				result = parseInt(operand1) + parseInt(operand2);
			} else if (operator === '-') {
				result = parseInt(operand1) - parseInt(operand2);
			}
			setOperand1(result.toString());
			setOperand2('');
			setOperator('');
			setIsResult(true);
		}
	};

	const clickClear = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setIsResult(false);
	};

	return (
		<>
			<div className={styles.container}>
				<input
					className={styles.input}
					type="text"
					value={operand1 + operator + operand2}
					readOnly
					style={{
						color: isResult ? 'blue' : 'black',
					}}
				></input>
				<ul>
					<button className={styles.button} onClick={clickPlus}>
						+
					</button>
					<button className={styles.button} onClick={clickMinus}>
						-
					</button>
					<button className={styles.button} onClick={clickEquals}>
						=
					</button>
					<button className={styles.button} onClick={clickClear}>
						C
					</button>
					{NUMS.map(({ id }) => (
						<button
							className={styles.button}
							key={id}
							onClick={() => clickOnNumber(id)}
						>
							{id}
						</button>
					))}
				</ul>
			</div>
		</>
	);
};
