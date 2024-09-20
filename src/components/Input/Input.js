import React, {useState} from 'react';
import "./Input.sass"


const Input = () => {
	const [inputValue, setInputValue] = useState('НАЙТИ АНИМЕ ПО НАЗВАНИЮ')
	
	
	return (
		<input
			className='MyInput'
			type='text'
			value={inputValue}
			onChange={event => setInputValue(event.target.value)}>
		
		</input>
	);
};

export default Input;