document.body.style.fontFamily = " 'Nanum Gothic', sans-serif";
var monthBlock = document.createElement("div");
var days = document.createElement("table");
var monthNameBlock = document.createElement("div");
var weekBlock = document.createElement("div");
var left = document.createElement("button");
var right = document.createElement("button");
var todayYear = document.createElement("p");
var datePicker = document.createElement("p");
document.body.appendChild(calendarBlock);
calendarBlock.appendChild(monthBlock);
calendarBlock.appendChild(weekBlock);
calendarBlock.appendChild(days);
monthBlock.appendChild(left);
left.innerText = "<";
monthBlock.appendChild(monthNameBlock);
monthBlock.appendChild(right);
todayYear.innerText = year + ' year';
calendarBlock.appendChild(todayYear);

calendarBlock.appendChild(datePicker);
datePicker.style.border = "1px solid grey";
datePicker.style.width = '198px';
datePicker.style.height = '20px';
datePicker.style.marginTop = '20px';
right.innerText = ">";

for (var i = 0; i < weekDays.length; i++) {
    var dayOfTheWeek = document.createElement("div");
    weekBlock.style.color = "#FFF";
    weekBlock.style.background = 'rgb(141, 107, 237)';
    weekBlock.style.textTransform = "uppercase";
    weekBlock.style.display = 'flex';
    weekBlock.style.justifyContent = 'center';
    weekBlock.style.marginTop = '3px';
    weekBlock.style.fontSize = '0.6rem';
    monthNameBlock.style.width = "100%";
    monthNameBlock.style.display = 'flex';
    monthNameBlock.style.justifyContent = 'center';
    dayOfTheWeek.innerText = weekDays[i];
    weekBlock.appendChild(dayOfTheWeek);
    dayOfTheWeek.style.display = 'flex';
    dayOfTheWeek.style.justifyContent = 'center';
    dayOfTheWeek.style.width = '14%';

}
right.style.width = "20%";
left.style.width = "20%";
right.style.backgroundColor = 'rgb(216, 206, 245)';
left.style.backgroundColor = 'rgb(216, 206, 245)';
right.style.border = "1px solid transparent";
left.style.border = "1px solid transparent";
calendarBlock.style.width = "200px";
calendarBlock.style.height = "200px";
calendarBlock.style.background = "rgb(181, 170, 240)";
calendarBlock.style.margin = '20px';
days.style.display = "table";
days.style.justifyContent = "space-around";
days.style.justifyContent = "center";
days.style.fontSize = '1.1rem';
monthBlock.style.display = "flex";
monthBlock.style.justifyContent = "center";
todayYear.style.display = 'flex';
todayYear.style.justifyContent = "center";

datePicker.style.display = 'flex';
datePicker.style.justifyContent = "center";