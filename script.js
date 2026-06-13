const toggleAnswer = (button) => {
  const answerEl = button.nextElementSibling;
  const plusIcon = button.querySelector(".plus-icon");
  const minusIcon = button.querySelector(".minus-icon");
  answerEl.classList.toggle("hidden");
  plusIcon.classList.toggle("hidden");
  minusIcon.classList.toggle("hidden");
};
