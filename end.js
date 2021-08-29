const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 3;

const error = document.getElementById("error");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
  if (username.value.length > 0) {
    document.getElementById("error").style.display = "none";
  } else {
    document.getElementById("error").style.display = "block";
  }
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  highScores.splice(3);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
