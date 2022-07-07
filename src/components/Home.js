import React from 'react';
import Header from './Header';
import styles from './styles/Home.module.css';

function Home() {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <h1>Welcome to our page!</h1>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore
            laboriosam, corporis ipsam, tenetur accusantium amet nemo architecto
            quas sed sint est cumque dicta itaque voluptatibus numquam mollitia
            vel assumenda.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium natus obcaecati rerum est error, incidunt dignissimos,
            quia ut perspiciatis animi eius delectus neque alias soluta quisquam
            aut culpa ratione.
          </p>
        </article>
      </main>
    </>
  );
}

export default Home;
