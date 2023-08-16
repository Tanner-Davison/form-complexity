import useInput from "./hooks/use-input";

const BasicForm = (props) => {
	const {
		value: enteredName,
		hasError: enteredNameHasError,
		valueIsValid: nameIsValid,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetName,
		uniqueFormControl: nameControl,
	} = useInput((value) => value.trim() !== "");

	const {
		value: lastName,
		hasError: lastNameHasError,
		valueIsValid: lastNameIsValid,
		valueChangeHandler: lastChangeHandler,
		inputBlurHandler: lastBlurHandler,
		reset: resetLastName,
		uniqueFormControl: lastNameControl,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		hasError: emailHasError,
		valueIsValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
		uniqueFormControl: emailControl,
	} = useInput((value) => value.includes("@"));

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		if (enteredNameHasError && lastNameHasError && emailHasError) {
			return;
		}
		console.log(enteredName);
		console.log(lastName);
		console.log(enteredEmail);

		resetName();
		resetLastName();
		resetEmail();
	};

	const formIsValid = nameIsValid && lastNameIsValid && emailIsValid;

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='control-group'>
				<div className={nameControl}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						onBlur={nameBlurHandler}
						onChange={nameChangeHandler}
						value={enteredName}
					/>
					{enteredNameHasError && (
						<p className={"error-text"}>Name cannot be blank</p>
					)}
				</div>

				<div className={lastNameControl}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						onChange={lastChangeHandler}
						onBlur={lastBlurHandler}
						value={lastName}
					/>
					{lastNameHasError && (
						<p className={"error-text"}>Last Name cannot be blank</p>
					)}
				</div>
			</div>
			<div className={emailControl}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='email'
					id='name'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailHasError && <p className={"error-text"}>Not a valid email</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
