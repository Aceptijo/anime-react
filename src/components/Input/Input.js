import React, {useState} from 'react';
import "./Input.sass"


const Input = () => {
	const [inputValue, setInputValue] = useState('')
	
	
	return (
		<input
			className='MyInput'
			type='text'
			value={inputValue}
			placeholder={'НАЙТИ АНИМЕ ПО НАЗВАНИЮ'}
			onChange={event => setInputValue(event.target.value)}>
		
		</input>
	);
};

export default Input;