import React from 'react';
import '../../App.css';

function Home() {
  return (
    <>
      <div class="home-page">
        <h1>Quarto</h1>
        <h2>Jeu de société</h2>
        <div class="presentation">
          <img src="/images/quarto_box.webp" alt="Boîte du jeu de société Quarto" class="game-box" />
          <p>
            Jeu de société combinatoire abstrait au tour par tour <br />
            2 joueurs <br />
            À partir de 8 ans <br />
          </p>
          <img src="/images/quarto.webp" alt="Un exemple de partie en cours" class="game-example" />
        </div>
      </div>
    </>
  );
}

export default Home;