//birtday cake candles problem hackerrank
const myCandles = [4, 4, 1, 3];

function birthdayCakeCandles(candles) {
  // Write your code here
  console.log(candles);
  let x = 0;
  for (let i = 0; i < candles.length; i++) {
    // x = x + candles[i];
    x += candles[i];
  }
  console.log(x);
}


birthdayCakeCandles(myCandles);


