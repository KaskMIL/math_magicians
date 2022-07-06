import React from 'react';
import Header from './Header';
import Calculator from './calculator';

function CalculatorContainer() {
  return (
    <>
      <Header />
      <main>
        <h2>let&apos;s do some Maths!</h2>
        <Calculator />
      </main>
    </>
  );
}

export default CalculatorContainer;
