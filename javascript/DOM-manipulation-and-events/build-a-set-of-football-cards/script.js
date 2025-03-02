const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const options = document.getElementById("players");

const footballTeam = {
  team: "The Stars and Stripes",
  year: 2025,
  headCoach: "Mauricio Pochettino",
  players: [
    new Player("Patrick Agyemang", "forward", false),
    new Player("Brian White", "forward", false),
    new Player("Matko Miljevic", "forward", false),
    new Player("Brian Gutiérrez", "forward", false),
    new Player("Indiana Vassilev", "forward", false),
    new Player("Caden Clark", "forward", false),
    new Player("Benjamin Cremaschi", "midfielder", false),
    new Player("Diego Luna", "midfielder", false),
    new Player("Emeka Eneli", "midfielder", false),
    new Player("Jack McGlynn", "midfielder", false),
    new Player("Walker Zimmerman", "defender", false),
    new Player("DeJuan Jones", "defender", false),
    new Player("Miles Robinson", "defender", false),
    new Player("Tim Ream", "defender", true),
    new Player("Maximilian Arfsten", "defender", false),
    new Player("Shaq Moore", "defender", false),
    new Player("George Campbell", "defender", false),
    new Player("Patrick Schulte", "goalkeeper", false),
    new Player("Matt Freese", "goalkeeper", false),
    new Player("Zack Steffen", "goalkeeper", false),
    new Player("Drake Callender", "goalkeeper", false),
  ],
};

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

function Player(name, position, isCaptain) {
  this.name = name;
  this.position = position;
  this.isCaptain = isCaptain;
}

function renderCards(array = footballTeam.players) {
  playerCards.replaceChildren();
  array.forEach((player) => {
    const card = document.createElement('div');
    card.classList.add("player-card");
    const h2 = card.appendChild(document.createElement('h2'));
    const p = card.appendChild(document.createElement('p'));
    h2.textContent = player.isCaptain ?
    `(Captain) ${player.name}` : player.name;
    p.textContent = `Position: ${player.position}`;
    playerCards.appendChild(card);
  });
};

options.addEventListener('change', (event) => {
  let option = event.target.value;
  if (option === "all") {
    renderCards();
  } else {
    let filteredPlayers = footballTeam.players.filter(player => player.position === option);
    renderCards(filteredPlayers);
  }
});

renderCards();
