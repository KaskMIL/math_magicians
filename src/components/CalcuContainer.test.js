import { screen, render } from '@testing-library/react';
import CalculatorContainer from './CalcuContainer';
import { BrowserRouter } from 'react-router-dom';

const MockCalcuContainer = () => {
  return (
    <BrowserRouter>
      <CalculatorContainer />
    </BrowserRouter>
  )
}

test('Should display 2 headings', () => {
  render(
    <MockCalcuContainer />
  )
  const headingElements = screen.getAllByRole('heading');
  expect(headingElements.length).toBe(2);
})

test('Should display 19 buttons', () => {
  render(
    <MockCalcuContainer />
  )
  const buttonsElements = screen.getAllByRole('button');
  expect(buttonsElements.length).toBe(19);
})

test('Should display 1 input', () => {
  render(
    <MockCalcuContainer />
  )
  const inputElement = screen.getAllByRole('textbox');
  expect(inputElement.length).toBe(1)
})