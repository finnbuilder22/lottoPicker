function playLotto() {
  let htmlLotto = "";
  let lottoNumbers = [];
  while (lottoNumbers.length < 7) {
    let pick = generateNumber();
    if (lottoNumbers.indexOf(pick) === -1) {
      lottoNumbers.push(pick);
    }
  }
  lottoNumbers.sort((a, b) => a - b); // Sort the array in ascending order

  lottoNumbers.forEach((value, i) => {
    htmlLotto += `<br><button class='js-number'>Pick ${i + 1}<br><div class="number">${value}</div></button>`;
  });
  return (document.querySelector("div").innerHTML = htmlLotto);
}
function generateNumber() {
  let pick = 0;
  while (pick === 0 || pick > 50) {
    pick = Math.round(Math.random().toFixed(2) * 100);
  }
  return pick;
}
