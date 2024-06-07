//Scenario1 : Functions and Expressions
//You are developing a system to manage and analyze election data for the 2024 elections

// Difine The Function And Expression
const calculateVotes = function (candidateName, votes, region) {
    return `Candidate ${candidateName} received ${votes} votes in the ${region} region.`;
};


console.log(calculateVotes("YS Jagan Anna", 500000, "Pulivendula"));
console.log(calculateVotes("Nani", 400000, "Gudivada"));
console.log(calculateVotes("Lavanya", 300000, "Guntur"));