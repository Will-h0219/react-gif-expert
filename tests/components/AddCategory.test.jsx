import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
  test('Debe cambiar el valor de la caja de texto', () => {
    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } });

    expect(input.value).toBe('Saitama');
    // screen.debug();
  });

  test('Debe llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    const onNewCategoryMock = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategoryMock } /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form'); // Es necesario un aria-label en el html

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    expect(onNewCategoryMock).toHaveBeenCalled();
    expect(onNewCategoryMock).toHaveBeenCalledTimes(1);
    expect(onNewCategoryMock).toHaveBeenCalledWith(inputValue);
  });

  test('No debe de llamar el onNewCategory si el input esta vacio', () => {
    const onNewCategoryMock = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategoryMock } /> );
    const form = screen.getByRole('form');
    
    fireEvent.submit(form);

    expect(onNewCategoryMock).not.toHaveBeenCalled();
  });
})