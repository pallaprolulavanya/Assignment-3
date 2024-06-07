//Scenario4 : Arrow Functions
//You need to quickly filter and analyze the election data using modern ES6 features.

const filterCandidates = (candidates, threshold) => {
    return candidates
        .filter(candidate => candidate.votes > threshold)
        .map(candidate => candidate.name); 
};

const candidates = [
    { name: "Kodali Nani", votes: 250000 },
    { name: "Lavanya", votes: 210000 },
    { name: "Narendra", votes: 200000 },
    { name: "YS Jagan Anna", votes: 680000 }
];

const threshold = 200000;
console.log(filterCandidates(candidates, threshold)); //['Kodali Nani', 'Lavanya', 'YS Jagan Anna']