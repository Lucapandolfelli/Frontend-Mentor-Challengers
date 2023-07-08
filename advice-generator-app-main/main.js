const advice_text = document.getElementById("advice-text");
const advice_id = document.getElementById("advice-id");
const advice_btn = document.getElementById("advice-btn");

const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  displayAdvice(data.slip);
};

const displayAdvice = (data) => {
  advice_id.innerText = data.id;
  advice_text.innerHTML = '"' + data.advice + '"';
};

document.addEventListener("DOMContentLoaded", getAdvice);
advice_btn.addEventListener("click", getAdvice);
