const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"},
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }
  pin(ProjectIdea) {
    this.ideas.push(ProjectIdea);
  }
  unpin(ProjectIdea) {
   const index = this.ideas.findIndex(item => item === ProjectIdea); 
   this.ideas.splice(index, 1);
  }
  count() {
    return this.ideas.length;
  }
  formatToString() {
    let returnStr = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      returnStr += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
    })

    return returnStr;
  }
}

/*
const testIdea = new ProjectIdea("Project 1", "First project");

testIdea.updateProjectStatus(projectStatus.FAILURE);

const testIdeaBoard = new ProjectIdeaBoard("Idea Board");

testIdeaBoard.pin(testIdea);
testIdeaBoard.pin(new ProjectIdea('New Project', 'A new project'))

console.log(testIdeaBoard.formatToString());
*/

const emptyBoard = new ProjectIdeaBoard("Empty Board");

console.log(emptyBoard.formatToString())