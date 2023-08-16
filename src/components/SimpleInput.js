
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {

	const {
		value: enteredName,
		valueIsValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameValue,
	} = useInput(value => value.trim() !== "");
	const {
		value: enteredEmail,
		valueIsValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value)=> value.includes('@'))

	const formIsValid = enteredEmailIsValid && enteredNameIsValid

	const submitFormHandler = (event) => {
		event.preventDefault();
		
		if (nameInputHasError && !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName);
		console.log(enteredEmail);

		resetEmailInput();
		resetNameValue();
	};

	const nameInputClasses = nameInputHasError
		? "form-control invalid"
		: "form-control";
	const emailInputClasses = emailInputHasError
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
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
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
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className={"error-text"}>Email Must not be empty</p>
				)}
			</div>
		</form>
	);
};

export default SimpleInput;
