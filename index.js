//Fetch data from advices API
async function fetchAdvice() {
  const URL = "https://api.adviceslip.com/advice";
  const result = await fetch(URL);
  const data = await result.json();
  return data;
}

//Change innerText in UI
function showAdvice(data) {
  const title = document.querySelector(".id");
  const p = document.querySelector(".advice");
  p.innerText = `"${data.slip.advice}"`;
  title.innerText = data.slip.id;
}

//Start application
function initialice() {
  const dice = document.querySelector(".dice");

  //Fetch first advice on load
  window.addEventListener("load", async function (event) {
    const advice = await fetchAdvice();
    showAdvice(advice);
  });

  //Fetch advice when clicking the dice
  dice.addEventListener("click", async function () {
    const advice = await fetchAdvice();
    showAdvice(advice);
  });
}

initialice();
