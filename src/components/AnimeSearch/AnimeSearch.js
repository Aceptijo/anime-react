import React from 'react';
import Input from "../Input/Input";
import Filter from "../Filter/Filter";
import "./AnimeSearch.sass"


const AnimeSearch = () => {
	return (
		<div className='App_Search'>
			<Input/>
			<Filter/>
		</div>
	);
};

export default AnimeSearch;