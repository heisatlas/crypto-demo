const data = [
  { coin: "BTC", price: 43250, change: 2.4, volume: "28B" },
  { coin: "ETH", price: 2320, change: -1.1, volume: "14B" },
  { coin: "SOL", price: 98.4, change: 5.7, volume: "6B" },
  { coin: "BNB", price: 315.2, change: 1.3, volume: "3B" },
  { coin: "XRP", price: 0.64, change: -0.8, volume: "5B" },
];

const tbody = document.getElementById("market-data");

data.forEach(asset => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${asset.coin}</td>
    <td>$${asset.price}</td>
    <td class="${asset.change > 0 ? 'up' : 'down'}">
      ${asset.change > 0 ? '+' : ''}${asset.change}%
    </td>
    <td>${asset.volume}</td>
  `;

  tbody.appendChild(row);
});
