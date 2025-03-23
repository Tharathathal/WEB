/* Définition des 16 pièces */
export const initialPieces = {
    "1": { color: "noire", shape: "carrée", height: "grande", hollow: "pleine" },
    "2": { color: "noire", shape: "carrée", height: "grande", hollow: "creuse" },
    "3": { color: "noire", shape: "carrée", height: "petite", hollow: "pleine" },
    "4": { color: "noire", shape: "carrée", height: "petite", hollow: "creuse" },
    "5": { color: "noire", shape: "ronde", height: "grande", hollow: "pleine" },
    "6": { color: "noire", shape: "ronde", height: "grande", hollow: "creuse" },
    "7": { color: "noire", shape: "ronde", height: "petite", hollow: "pleine" },
    "8": { color: "noire", shape: "ronde", height: "petite", hollow: "creuse" },
    "9": { color: "blanche", shape: "carrée", height: "grande", hollow: "pleine" },
    "10": { color: "blanche", shape: "carrée", height: "grande", hollow: "creuse" },
    "11": { color: "blanche", shape: "carrée", height: "petite", hollow: "pleine" },
    "12": { color: "blanche", shape: "carrée", height: "petite", hollow: "creuse" },
    "13": { color: "blanche", shape: "ronde", height: "grande", hollow: "pleine" },
    "14": { color: "blanche", shape: "ronde", height: "grande", hollow: "creuse" },
    "15": { color: "blanche", shape: "ronde", height: "petite", hollow: "pleine" },
    "16": { color: "blanche", shape: "ronde", height: "petite", hollow: "creuse" }
};

/* Définition du plateau vide */
export const initialBoard = Array(4).fill(null).map(() => Array(4).fill(null));