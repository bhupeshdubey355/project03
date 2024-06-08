


let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let inp1 = parseFloat(document.getElementById("a1").value);
  let inp2 = parseFloat(document.getElementById("a2").value);
  let inp3 = parseFloat(document.getElementById("a3").value) / 100;
  let inp4 = parseFloat(document.getElementById("a4").value);

  if (isNaN(inp1) || isNaN(inp2) || isNaN(inp3) || isNaN(inp4)) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  const months = inp4 * 12;
  const monthlyRate = inp3 / 12;
  let futureValue = inp1 * Math.pow(1 + monthlyRate, months);

  let totalInvested = inp1;
  for (let i = 1; i <= months; i++) {
    futureValue += inp2 * Math.pow(1 + monthlyRate, months - i);
    totalInvested += inp2;
  }
  const interest = futureValue - totalInvested;

  document.querySelector(
    ".output"
  ).innerHTML = ` Total Amount: ₹${futureValue.toFixed(2)}<br>
              Total Invested: ₹${totalInvested.toFixed(2)}<br>
              Compound Interest Earned: ₹${interest.toFixed(2)}`;
});






// const obj1 = {
//     b:2,
//     c:3,
//     d:10,
//     e:12,
// }

// const obj2= {
//     a:2,
//     e:12,
//     f:6,
//     d:10,
// }
// obj3 = {}
// for(const i in obj1){
//     for(const j in obj2){
//         if(obj2[i] == obj1[j]){
//             obj3[i] = obj1[i]
//         }
//     }
// }
// console.log(obj3)

// let num = [1,2,44,3,15,4];
//   num.sort(function(a,b){
//     return a - b ;
//  });

// function secondLargest(num){
//     return num[num.length-2]
// }
//  console.log(secondLargest(num))

// let input = [2,3,8,1,82];
// let f1 = []
// let f2 = []

// let str = Math.floor(input.length/2);

// for(let i= str ;i<input.length;i++){
//     f1.push(input[i]);
// }

// for(let i= 0;i<str;i++){
//     f2.push(input[i]);
// }

// let finalans = [...f1,...f2]

// console.log(finalans)


