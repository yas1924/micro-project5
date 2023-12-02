const CHOICES=[
    {
        name:"paper",
        beats:"stone"
    },
    {
        name:"scissors",
        beats:"paper"
    },
    {
        name:"stone",
        beats:"scissors"
    },
];
const choiceButtons = document.querySelectorAll(".choice_btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results_result");
const resultWinner = document.querySelector(".results_winner");
const resultText = document.querySelector(".results_text");
const playAgainBtn = document.querySelector(".play_again");
const userScore = document.querySelector(".score_number1");
const pcScore = document.querySelector(".score_number2");
const resultText1=document.querySelector(".results_text1");
const nextBtn = document.querySelector(".nextbtn");
const ruleBtn = document.querySelector(".rulesbtn");
const rulesCard = document.querySelector(".rulescard");
const cross = document.querySelector(".cross");
const scoreContainer = document.querySelector(".container");
const congratsPage = document.querySelector(".congratspage");
const playagainBtn2 = document.querySelector(".playbtn2");
const gameContainer = document.querySelector(".game");
let score=0;
let pc=0;
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choiceName = button.dataset.choice;
      const choice = CHOICES.find((choice) => choice.name === choiceName);
      choose(choice);
    });
  });
  function choose(choice) {
    const aichoice = aiChoose();
    displayResults([choice, aichoice]);
    displayWinner([choice, aichoice]);
  }
  function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
  }
  function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
      setTimeout(() => {
        resultDiv.innerHTML = `
      <div class="choice ${results[idx].name}">
      <img src="./utilities/${results[idx].name}.png" alt=" ${results[idx].name}" />
      </div>
      `;
      }, idx * 1000);
    });
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  }
  function displayWinner(results) {
    setTimeout(() => {
      const userWins = isWinner(results);
      const aiWins = isWinner(results.reverse());
      if (userWins) {
        resultText.innerText = "you win";
        nextBtn.classList.remove("hidden");
        resultText1.innerText="against pc";
        resultDivs[0].classList.add("green-background");
        pcKeepScore(1);
      } else if (aiWins) {
        resultText.innerText = "you lose";
        resultText1.innerText="against pc";
        resultDivs[1].classList.add("green-background");
        keepScore(1);
      } else {
        resultText.innerText = "Tie Up";
        resultText1.innerText="";
      }
      resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
    }, 1000);
  }
  function isWinner(results) {
    return results[0].beats === results[1].name;
  }
  function keepScore(point) {
    score += point;
     userScore.innerText = score;
   }
   function pcKeepScore(point) {
     pc += point;
     pcScore.innerText = pc;
   }
  playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
    resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
    resultDivs[0].classList.remove("green-background");
    resultDivs[1].classList.remove("green-background");
    resultDivs.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
    nextBtn.classList.add("hidden");
  });
  resultText.innerText = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
  resultText1.innerText="";
 });
 nextBtn.addEventListener("click", () => {
  scoreContainer.classList.add("hidden");
  resultsDiv.classList.add("hidden");
  congratsPage.classList.remove("hidden");
  nextBtn.classList.add("hidden");
});
//adding rules wrong functionalty
cross.addEventListener("click", () => {
  rulesCard.classList.add("hidden");
  cross.classList.add("hidden");
});
//rules button shower
ruleBtn.addEventListener("click", () => {
  rulesCard.classList.remove("hidden");
  cross.classList.remove("hidden");
});
playagainBtn2.addEventListener("click", () => {
  scoreContainer.classList.remove("hidden");
  gameContainer.classList.remove("hidden");
  congratsPage.classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultsDiv.classList.add("hidden");
  resultWinner.classList.remove("hidden");
});