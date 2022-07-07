import React from 'react';
import Header from './Header';
import Calculator from './calculator';
import styles from './styles/CalcuContainer.module.css';

function CalculatorContainer() {
  return (
    <>
      <Header />
      <main className={styles.calcu}>
        <h2>Let&apos;s do some Maths!</h2>
        <Calculator />
      </main>
    </>
  );
}

export default CalculatorContainer;
