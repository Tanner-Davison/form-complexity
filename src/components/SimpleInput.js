import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState("");
	const [emailTouched, setEmailTouched] = useState(false);

	let formIsValid = false;

	const enteredEmailIsValid = enteredEmail.includes("@");
	const emailInputIsInvalid = !enteredEmailIsValid && emailTouched;

	const enteredNameisValid = enteredName.trim() !== "";

	const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;

	if (enteredNameisValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);

		setEnteredNameTouched(false);
	};
	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
		setEmailTouched(true);
	};
	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);
	};
	const emailInputBlurHandler = (event) => {
		setEmailTouched(true);
	};

	const submitFormHandler = (event) => {
		event.preventDefault();
		setEnteredNameTouched(true);
		if (!enteredNameisValid && !enteredEmailIsValid) {
			return;
		}

		console.log(enteredName);
		console.log(enteredEmail);

		setEnteredName("");
		setEnteredEmail("");
		setEnteredNameTouched(false);
		setEmailTouched(false);
	};

	const nameInputClasses = nameInputisInvalid
		? "form-control invalid"
		: "form-control";
	const emailInputClasses = emailInputIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={submitFormHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputisInvalid && (
					<p className={"error-text"}>Name Must not be empty</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your Email</label>
				<input
					type='text'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputIsInvalid && (
					<p className={"error-text"}>Email Must not be empty</p>
				)}
			</div>
		</form>
	);
};

export default SimpleInput;
