//Scenario5 : Combining Concepts 
//For a comprehensive analysis, you need to write a function that integrates all the concepts mentioned above

const analyzeElection = (threshold, ...candidates) => {
    // Arrow function to filter candidates based on the threshold
    const filteredCandidates = candidates.filter(candidate => candidate.votes > threshold);

    // Recursive function to calculate the total votes of the filtered candidates
    const calculateTotalVotes = (voteCounts, index = 0) => {
        if (index >= voteCounts.length) {
            return 0;
        }
        return voteCounts[index] + calculateTotalVotes(voteCounts, index + 1);
    };

    // Extract the names of the filtered candidates
    const filteredNames = filteredCandidates.map(candidate => candidate.name);

    // Extract the votes of the filtered candidates
    const filteredVotes = filteredCandidates.map(candidate => candidate.votes);

    // Calculate the total votes of the filtered candidates
    const totalFilteredVotes = calculateTotalVotes(filteredVotes);

    // Return an object with the filtered candidates' names and the total votes
    return {
        filteredNames,
        totalVotes: totalFilteredVotes
    };
};

const candidates1 = [
    { name: "Kodali Nani", votes: 250000 },
    { name: "Vamsi", votes: 200000 },
    { name: "Lavanya", votes: 210000 },
    { name: "YS Jagan Anna", votes: 680000 }
];

const threshold1 = 200000;
console.log(analyzeElection(threshold1, ...candidates1));
// Output: { filteredNames: ['Kodali Nani', 'Lavanya', 'YS Jagan Anna'], totalVotes: 16500 }