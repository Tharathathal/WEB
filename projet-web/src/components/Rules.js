import React from 'react';
import './Rules.css';
import '../App.css';

function Rules() {
    return (
    <>
        <div class="rules">
            <h1>Règles du jeu</h1>
            <div class="rules-container">
                <div class="rules-item">
                    <div class="rules-text">
                        <h2>Présentation et préparation</h2>
                        <p> -Un plateau de 16 cases. <br />
                        -16 pièces différentes ayant chacune 4 caractères (fig. 1): claire ou foncée, ronde ou carrée, haute ou basse, pleine ou creuse. <br />
                        En début de partie, les pièces sont déposées à côté du plateau.</p>
                    </div>
                    <img src="/images/figure1-2.jpg" alt="Figure 1-2 : présentation des pièces" />
                </div>
                <div class="rules-item">                    
                    <div class="rules-text">
                        <h2>But du jeu</h2>
                        <p>Créer sur le plateau un alignement de 4 pièces ayant au moins un caractère commun (fig. 2). <br />
                        Cet alignement peut-être horizontal, vertical ou diagonal (fig. 3).</p>
                    </div>
                    <img src="/images/figure3.jpg" alt="Figure 3 : alignements gagnant sur le plateau" />
                </div>
                <div class="rules-item">                    
                    <div class="rules-text">
                        <h2>Déroulement d'une partie</h2>
                        <p>- Le premier joueur est tiré au sort.<br />
                        - Il choisit une des 16 pièces et la donne à son adversaire (fig. 4).<br />
                        - Celui-ci doit la placer sur une des cases du plateau et choisir ensuite une des 15 pièces restantes pour la donner à son adversaire.<br />
                        - A son tour, celui-ci la place sur une case libre et ainsi de suite...</p>
                    </div>
                    <img src="/images/figure4.jpg" alt="Figure 4 : pièce données à un joueur" style={{width: "180px", marginLeft: "110px", marginRight: "110px"}}/>
                </div>
                <div class="rules-item">
                    <div class="rules-text">
                        <h2>Gain de la partie</h2>
                        <p>La partie est gagnée par le premier joueur qui annonce "QUARTO !" (fig 5).<br />
                        <br />
                        1. Un joueur fait "QUARTO !" et gagne la  partie lorsque, en plaçant la pièce donnée:<br />
                        - Il crée une ligne de 4 claires ou 4 foncées ou 4 rondes ou 4 carrées ou 4 hautes ou 4 basses ou 4 pleines ou 4 creuses.<br />
                        Plusieurs caractères peuvent se cumuler.<br />
                        - Il n'est pas obligé d'avoir lui même déposé les trois autres pièces.<br />
                        - Il doit faire reconnaître sa victoire en annonçant "QUARTO !".<br />
                        <br />
                        2. Si ce joueur n'a pas vu l'alignement et donne une pièce à l'adversaire:<br />
                        - Ce dernier peut "à ce moment" annoncer "QUARTO !", et montrer l'alignement: c'est lui qui gagne la partie.<br />
                        <br />
                        3. Si aucun des joueurs ne voit l'alignement durant le tour de jeu où il se crée, cet alignement perd toute sa valeur et la partie suit son cours.</p>
                    </div>
                    <img src="/images/figure5.jpg" alt="Figure 5 : exemple de partie gagnante" />
                </div>
                <div class="rules-item">
                    <div class="rules-text">
                        <h2>Fin de la partie</h2>
                        <p> Victoire: un joueur annonce et montre un "QUARTO !".- Egalité: toutes les pièces ont été posées sans vainqueur.</p>
                    </div>
                </div>
                <div class="rules-item">
                    <div class="rules-text">    
                        <h2>Durée d'une partie</h2>
                        <p>- De 10 à 20 minutes.<br />
                        - Il est possible en tournoi d'allouer à chaque joueur un temps limité d'une minute par coup.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Rules;