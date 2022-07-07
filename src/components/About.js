import React from 'react';
import Header from './Header';
import styles from './styles/About.module.css';

function About() {
  return (
    <>
      <Header />
      <article className={styles.about}>
        <p>
          Mathematics is not about numbers, equation, computations or alogithms:
          It is about understanding.-William Paul Thurston
        </p>
      </article>
    </>
  );
}

export default About;
