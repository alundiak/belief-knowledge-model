/**
 * Normalize a value to the range [0, 100].
 * 
 * @param {number} rawValue - The raw value to normalize.
 * @param {number} maxValue - The maximum achievable value.
 * 
 * @returns {number} The normalized value.
 */
function normalizeValue(rawValue, maxValue) {
  const normalizedValue = (rawValue / maxValue) * 100;
  return Math.min(Math.max(normalizedValue, 0), 100);
}

/**
 * Calculate knowledge based on the formula: K(t) = scale * ln(t - t0 + 1)
 * 
 * @param {number} currentTime - The current time (in milliseconds).
 * @param {number} initialTime - The initial time (in milliseconds).
 * @param {number} scalingFactor - The scaling factor.
 *   If scalingFactor = 1, consider a scale for 1 country or one science area or one knowledge direction based on one subject in school.
 *   If scalingFactor = 2, consider a scale of Ukraine and Russia countries and knowledge about the war among both (or Physics and Literature if the context is subjects in school).
 *   If scalingFactor = 5, consider scale among countries: Ukraine, Russia, Belarus, Poland, and Turkey, and as multiplied knowledge from all will influence in the final knowledge value.
 * 
 * @returns {number} The calculated knowledge normalized to the range [0, 100].
 */
function calculateKnowledge(currentTime, initialTime, scalingFactor) {
  // The maximum achievable knowledge value (in the same scale as knowledge).
  const maxKnowledge = 100;

  const timeDifference = currentTime - initialTime;
  if (timeDifference <= 0) {
    throw new Error('Invalid input: Time difference must be positive.');
  }

  const rawKnowledge = scalingFactor * Math.log1p(timeDifference);

  return normalizeValue(rawKnowledge, maxKnowledge);
}

/**
 * Calculate belief based on the formula: B(t) = 1 / K(t)
 * 
 * @param {number} knowledge - The knowledge value.
 * 
 * @returns {number} The calculated belief.
 */
function calculateBelief(knowledge) {
  const maxBelief = 100;
  const rawBelief = 1 / knowledge;
  return normalizeValue(rawBelief, maxBelief);
}

const scalingFactor = 1;

const initialTime = new Date('2022-02-22').getTime(); // number: 1645488000000
const currentTime = new Date('2023-12-29').getTime(); // number: 1703808000000

try {
  const knowledgeValue = calculateKnowledge(currentTime, initialTime, scalingFactor);
  console.log(`My current knowledge: ${knowledgeValue.toFixed(4)}%`);
  console.log(`My current belief: ${calculateBelief(knowledgeValue).toFixed(4)}%`);
  console.log('Note: 0% would mean I have no knowledge or no belief');
  console.log('Note: 100% would mean I know everything or I believe in everything');
} catch (error) {
  console.error('Error:', error.message);
}
