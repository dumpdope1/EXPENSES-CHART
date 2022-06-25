const bar = document.getElementById("bar");
let gettingData = document.getElementById("bar").getAttribute("data-percentage");
let gettingSpendingAmount = document.getElementById("spendingAmount");

console.log(gettingData);
bar.style.height = gettingData + "%";

const bar1 = document.getElementById("bar1");
let gettingData1 = document.getElementById("bar1").getAttribute("data-percentage");

console.log(gettingData1);
bar1.style.height = gettingData1 + "%";

const bar2 = document.getElementById("bar2");
let gettingData2 = document.getElementById("bar2").getAttribute("data-percentage");

console.log(gettingData2);
bar2.style.height = gettingData2 + "%";

const bar3 = document.getElementById("bar3");
let gettingData3 = document.getElementById("bar3").getAttribute("data-percentage");

console.log(gettingData3);
bar3.style.height = gettingData3 + "%";

const bar4 = document.getElementById("bar4");
let gettingData4 = document.getElementById("bar4").getAttribute("data-percentage");

console.log(gettingData4);
bar4.style.height = gettingData4 + "%";

const bar5 = document.getElementById("bar5");
let gettingData5 = document.getElementById("bar5").getAttribute("data-percentage");

console.log(gettingData5);
bar5.style.height = gettingData5 + "%";

const bar6 = document.getElementById("bar6");
let gettingData6 = document.getElementById("bar6").getAttribute("data-percentage");

console.log(gettingData6);
bar6.style.height = gettingData6 + "%";

let weeklyTotalSpent = +gettingData + +gettingData1 + +gettingData2 + +gettingData3 + +gettingData4 + +gettingData5 + +gettingData6;

gettingSpendingAmount.innerText = "$  " + parseFloat(weeklyTotalSpent).toFixed(2);