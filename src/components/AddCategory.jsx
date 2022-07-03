import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = (props) =>{
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (evento) =>{
        setInputValue(evento.target.value);
        // console.log(evento.target.value);
    };

    const onSubmit = (evento) =>{
        evento.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // console.log(inputValue);
        props.onNewCategory(inputValue.trim());
        setInputValue('');
    };
    return (
        <form onSubmit={ onSubmit }>
            <input
            
            value= { inputValue }
            onChange={ onInputChange }
            type="text"
            placeholder="Buscar gifs guays"

             />
        </form>
    );

};


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}