const myReq = new XMLHttpRequest();

myReq.onload = function() {
  console.log("All done!");
  const data = JSON.parse(this.responseText);
  console.log(data.ticker.price);
}

myReq.onerror = function() {
  console.log("Error!");
  console.log(this);
}

myReq.open("get", "https://api.cryptonator.com/api/ticker/btc-usd");
myReq.send();