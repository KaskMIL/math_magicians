import React from "react";
import renderer from "react-test-renderer"
import CalculatorContainer from "../components/CalcuContainer";
import { BrowserRouter } from 'react-router-dom';

test('Should render Calculator Container',()=>{
    const tree = renderer.create(
        <BrowserRouter>
        <CalculatorContainer />
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})