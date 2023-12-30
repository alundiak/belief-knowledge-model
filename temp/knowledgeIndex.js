// Sample knowledge indices for 10 sources (values between 0 and 100)
const knowledgeSources = [80, 75, 90, 85, 70, 95, 60, 88, 92, 78];

// Function to calculate the average knowledge index
function calculateKnowledgeIndex(knowledgeArray) {
  const sum = knowledgeArray.reduce((acc, knowledge) => acc + knowledge, 0);
  const average = sum / knowledgeArray.length;
  return average;
}

const knowledgeIndex = calculateKnowledgeIndex(knowledgeSources);
console.log("Knowledge Index (average value among indices):", knowledgeIndex);
// Interpretation: On average, the knowledge indices across the 10 sources are around 81.3. This provides a measure of the central tendency of the knowledge distribution.

// Function to calculate the cumulative knowledge
function calculateCumulativeKnowledge(knowledgeArray) {
  const cumulativeKnowledge = knowledgeArray.reduce((acc, knowledge) => acc + knowledge, 0);
  return cumulativeKnowledge;
}

const cumulativeKnowledge = calculateCumulativeKnowledge(knowledgeSources);
console.log("Cumulative Knowledge (regular sum of indices):", cumulativeKnowledge);
// Interpretation: The sum of all knowledge indices across the 10 sources is 813. This reflects the total knowledge when simply adding up the individual source values.

// Function to metaphorically integrate knowledge using the trapezoidal rule
function calculateMetaphoricalIntegral(knowledgeArray) {
  let cumulativeKnowledge = 0;

  const n = knowledgeArray.length;

  for (let i = 1; i < n; i++) {
    const deltaKnowledge = (knowledgeArray[i - 1] + knowledgeArray[i]) / 2;
    cumulativeKnowledge += deltaKnowledge;
  }

  return cumulativeKnowledge;
}

const metaphoricalIntegral = calculateMetaphoricalIntegral(knowledgeSources);
console.log("Metaphorical (trapezoidal) Integral of Knowledge:", metaphoricalIntegral);
// Interpretation: This value is derived using a metaphorical application of the trapezoidal rule, treating each pair of adjacent knowledge indices as the height of a trapezoid. 
// The resulting value (734) is a cumulative measure based on this metaphorical approach.
