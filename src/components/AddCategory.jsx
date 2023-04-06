import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const trimValue = inputValue.trim();
    if (!trimValue.length) return;

    onNewCategory(trimValue);
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
      <input
        type="text"
        placeholder="Buscar"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}