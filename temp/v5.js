class BeliefKnowledgeModel {
  constructor(initialKnowledge) {
    this.knowledge = initialKnowledge;
    this.belief = initialKnowledge === 0 ? Infinity : 1 / initialKnowledge;
  }

  updateKnowledge(knowledgeChange) {
    this.knowledge = this.calculateUpdatedKnowledge(knowledgeChange);
  }

  calculateUpdatedKnowledge(knowledgeChange) {
    // Ensure knowledge is non-negative
    return Math.max(0, this.knowledge + knowledgeChange);
  }

  updateBelief() {
    // Update belief inversely proportional to knowledge
    if (this.knowledge === 0) {
      this.belief = Infinity;  // Set belief to infinity if knowledge is zero
    } else {
      this.belief = 1 / this.knowledge;
    }
  }

  getBelief() {
    return this.belief;
  }

  getKnowledge() {
    return this.knowledge;
  }
}

// Simulation over time range from 22/02/2023 to 29/12/2023 with one day step
const startDate = new Date('2022-02-22');
const endDate = new Date('2023-12-29');
const initialKnowledge = 0; // Initial knowledge value

const model = new BeliefKnowledgeModel(initialKnowledge);

const beliefOverTime = [];

for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
  model.updateKnowledge(1); // Increment knowledge by 1 each day
  model.updateBelief();
  const formattedDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(currentDate);
  beliefOverTime.push({ date: formattedDate, knowledge: model.getKnowledge().toFixed(4), belief: model.getBelief().toFixed(4) });
}

console.log(beliefOverTime);
