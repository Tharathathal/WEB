export const initialPieces = {
    "1": { color: "black", shape: "square", height: "tall", hollow: "filled" },
    "2": { color: "black", shape: "square", height: "tall", hollow: "hollow" },
    "3": { color: "black", shape: "square", height: "short", hollow: "filled" },
    "4": { color: "black", shape: "square", height: "short", hollow: "hollow" },
    "5": { color: "black", shape: "circle", height: "tall", hollow: "filled" },
    "6": { color: "black", shape: "circle", height: "tall", hollow: "hollow" },
    "7": { color: "black", shape: "circle", height: "short", hollow: "filled" },
    "8": { color: "black", shape: "circle", height: "short", hollow: "hollow" },
    "9": { color: "white", shape: "square", height: "tall", hollow: "filled" },
    "10": { color: "white", shape: "square", height: "tall", hollow: "hollow" },
    "11": { color: "white", shape: "square", height: "short", hollow: "filled" },
    "12": { color: "white", shape: "square", height: "short", hollow: "hollow" },
    "13": { color: "white", shape: "circle", height: "tall", hollow: "filled" },
    "14": { color: "white", shape: "circle", height: "tall", hollow: "hollow" },
    "15": { color: "white", shape: "circle", height: "short", hollow: "filled" },
    "16": { color: "white", shape: "circle", height: "short", hollow: "hollow" }
};

export const initialBoard = Array(4).fill(null).map(() => Array(4).fill(null));
  