import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CalculatorContainer from '../components/CalcuContainer';

test('Should render Calculator Container', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <CalculatorContainer />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
