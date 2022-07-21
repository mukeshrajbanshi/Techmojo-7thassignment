import React from 'react';
import {useState,useEffect} from "react";

function getFormValues() {
	const storedValues = localStorage.getItem('form');
	if (!storedValues)
		return {
			title: '',
			url: '',
			description: '',
		};
	return JSON.parse(storedValues);
}

function CompB() {
	const [values, setValues] = useState(getFormValues);

	// useEffect(() => {
	// 	localStorage.setItem('form', JSON.stringify(values));
	// }, [values]);

	function handleSubmit(event) {
		event.preventDefault();
        localStorage.setItem('form', JSON.stringify(values));
	}

	function handleChange(event) {
		setValues((previousValues) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	}

	return (       
        <form onSubmit={handleSubmit}>
            <input
                
                type="text"
                name="title"
                id="title"
                placeholder="enter title"
                onChange={handleChange}
                value={values.title}
            /><br />
            <input
                placeholder="enter image"
                type="url"
                name="url"
                id="url"
                onChange={handleChange}
                value={values.url}
            /><br />
        
            <input
                type="text"
                placeholder="enter description"
                name="description"
                id="description"
                onChange={handleChange}
                value={values.description}
            /><br />
            
            <button type="submit">Submit</button>
        </form>
	);
}

export default CompB;