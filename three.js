//Scenario3 : Rest Parameters
// Sometimes, you receive votes from an unknown number of regions

function totalVotes(...votes) {
    return votes.reduce((total, currentVote) => total + currentVote, 0);
}

console.log(totalVotes(1200, 3400, 5600, 2300)); // Output: 12500
console.log(totalVotes(1500, 2200));            // Output: 3700