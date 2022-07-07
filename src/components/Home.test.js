import { screen, render } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

}

test('Should render 2 headings', () => {
  render(
    <MockHome />
  )
  const homeElement = screen.getAllByRole("heading");
  expect(homeElement.length).toBe(2);
});

test('Should render 1 article', () => {
  render(
    <MockHome />
  )
  const homeElement = screen.getAllByRole("article");
  expect(homeElement.length).toBe(1);
});