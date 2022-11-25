import { useState } from "react";

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
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}
