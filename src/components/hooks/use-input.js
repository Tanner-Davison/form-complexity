import { useState } from "react";

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);
	const valueIsValid = validateValue(enteredValue);
	const hasError = !valueIsValid && isTouched;
    const uniqueFormControl = hasError ? "form-control invalid"
		: "form-control";
	
	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};
	const inputBlurHandler = (event) => {
		setIsTouched(true);
	};
	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	};
	
	return {
		value: enteredValue,
		hasError,
		valueIsValid,
		valueChangeHandler,
		inputBlurHandler,
		reset,
		uniqueFormControl,
	};
};
export default useInput;
