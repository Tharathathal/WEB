import React from 'react';
import '../../App.css';

/* Page d'accueil avec présentation du jeu */
function Home() {
  return (
    <>
      <div class="home-page">
        <h1>Jeu de société en ligne</h1>
        <h2>Quarto</h2>
        <div class="presentation">
          <img src="/images/quarto_box.webp" alt="Boîte du jeu de société Quarto" class="game-box" width={300} height={300}/>
          <p>
            Jeu de société au tour par tour, combinatoire (réflexion, décision) et à information complète et parfaite <br />
            Se joue à 2 joueurs <br />
            À partir de 8 ans <br />
          </p>
          <img src="/images/quarto.webp" alt="Un exemple de partie en cours" class="game-example" width={300} height={266}/>
        </div>
      </div>
    </>
  );
}

export default Home;