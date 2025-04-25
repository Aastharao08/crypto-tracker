function getRandomChange(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function updatePrices() {
  const rows = document.querySelectorAll("#crypto-body tr");

  rows.forEach(row => {
    const priceCell = row.querySelector(".price");
    const percentCell = row.querySelector(".percent");

    let oldPrice = parseFloat(priceCell.textContent);
    let newPrice = parseFloat(oldPrice) + parseFloat(getRandomChange(-100, 100));
    priceCell.textContent = newPrice.toFixed(2);

    const change = ((newPrice - oldPrice) / oldPrice * 100).toFixed(2);
    percentCell.textContent = change;

    // Animation and color
    const isPositive = parseFloat(change) >= 0;
    percentCell.classList.remove("green", "red");
    percentCell.classList.add(isPositive ? "green" : "red");
    percentCell.classList.add(isPositive ? "flash-green" : "flash-red");

    // Remove animation class after animation ends
    setTimeout(() => {
      percentCell.classList.remove("flash-green", "flash-red");
    }, 1000);
  });
}

setInterval(updatePrices, 2000);