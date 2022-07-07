import React from "react";
import renderer from "react-test-renderer"
import { BrowserRouter } from 'react-router-dom';
import About from "../components/About";

test('Should render About correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
