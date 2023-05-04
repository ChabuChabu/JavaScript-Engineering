const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const showResult = document.querySelector(".result");
const result = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //show answer on page
  scrollTo(0, 0);
  showResult.classList.remove("d-none");

  //score animation
  let output = 0;
  const timer = setInterval(() => {
    result.innerText = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
