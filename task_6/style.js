var date = new Date();
this.dayOfWeek = date.getDay();
this.day = date.getDay();
this.month = date.getMonth();
this.year = date.getFullYear();
var listOfMonth = ["January", "February", "March", "April",
"May", "June", "July", "August", "September",
"October", "November", "December"];
var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat '];
var calendarBlock = document.createElement("div");
calendarBlock.className = "clendarBlock";
document.body.appendChild(calendarBlock);
var monthNameBlock = document.createElement("div");
var datePickerButton = document.createElement("button");
document.body.appendChild(datePickerButton);
datePickerButton.innerHTML = 'Click here';
datePickerButton.onclick = function(){
    Calendar();
}
var Calendar = function() {

	var monthBlock = document.createElement("div");
	var days = document.createElement("table");
	var monthNameBlock = document.createElement("div");
	var weekBlock = document.createElement("div");
	var left = document.createElement("button");
	var right = document.createElement("button");
    var  todayYear = document.createElement("p");
    document.body.appendChild(datePickerButton);
    document.body.appendChild(calendarBlock);
    calendarBlock.appendChild(monthBlock);
    calendarBlock.appendChild(weekBlock);
    calendarBlock.appendChild(days);
    monthBlock.appendChild(left);
    left.id = "Left";
    left.innerText = "<";
    monthBlock.appendChild(monthNameBlock);
    monthBlock.appendChild(right);
    todayYear.innerText = year + ' year';
    calendarBlock.appendChild(todayYear); 
    var datePicker = document.createElement("p");
    calendarBlock.appendChild(datePicker);
    datePicker.style.border = "1px solid grey";
    datePicker.style.width = '200px';
    datePicker.style.height = '20px';
    right.id = "Right";
    right.innerText = ">";
	//weekBlock.innerText = (weekDays);
    for ( var i = 0; i < weekDays.length; i++){
        var dayOfTheWeek = document.createElement("div");
        dayOfTheWeek.style.width = '43px';
       // dayOfTheWeek.style.border = '1px solid red';
       weekBlock.style.color = "#FFF";
       weekBlock.style.background = 'black';
       weekBlock.style.textTransform = "uppercase";
       weekBlock.style.display = 'flex';
       weekBlock.style.fontSize = '11px';
       dayOfTheWeek.innerText = weekDays[i];
       weekBlock.appendChild(dayOfTheWeek);
   }
    //styles
    right.style.width = "40px";
    left.style.width = "40px";
    calendarBlock.style.width = "200px";
    calendarBlock.style.height = "200px";
    calendarBlock.style.background = "grey";
    days.style.display = "table";
    days.style.justifyContent = "space-around";
    days.style.justifyContent = "center";
    days.style.fontSize = '1.1rem';
    monthBlock.style.display = "flex";
    monthBlock.style.justifyContent = "center";
    todayYear.style.display = 'flex';
    todayYear.style.marginLeft = '34%';

    this.month = date.getMonth();
    monthNameBlock.innerText = [ month ];
    function numbersInMonth(month) {
//var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// month - текущий месяц (т.е. 10)
var emptyDays;
if (month == 10)
    emptyDays = day - 6;
else if (month == 11)
    emptyDays = day - 8;
else if (month == 0)
    emptyDays = day - 4;
else if (month == 1)
    emptyDays = day - 7;
else if (month == 2)
    emptyDays = day - 7;
else if (month == 3)
    emptyDays = day - 3;
else if (month == 4)
    emptyDays = day - 5;
else if (month == 5)
    emptyDays = day - 8;
else if (month == 6)
    emptyDays = day - 3;
else if (month == 7)
    emptyDays = day - 6;
else if (month == 8)
    emptyDays = day - 2;
else if (month == 9)
    emptyDays = day - 4;

var d = new Date(year,month,emptyDays);
this.currDay = date.getDate();
for (var j = 0; j < 5; j++) 
{
  var string = document.createElement('tr'); 
  for (var i = 0; i < 7; i++)
  {
   var element = document.createElement('td');
   element.style.width = '43px';
   element.style.border = '1px solid #FFF';
   element.style.display = 'flex-inline';
   element.innerText = d.getDate(); 

   if(element.innerText == currDay)
    element.style.color = '#FFF'; 
element.onclick = function(){
    datePicker.innerText =   element.innerText + '.' + month + '.' + year; 
}
d.setDate(d.getDate() + 1);
string.appendChild(element);

}
days.appendChild(string);
}

}
numbersInMonth(month);
function rightBut() {
 if (month == 11) {
   // alert("январь");
   month = 0;
   days.innerText = '';
   monthNameBlock.innerText = '';
   monthNameBlock.innerText = [ month ];
   numbersInMonth(month );
   month--;
} else {
  days.innerHTML = '';
  monthNameBlock.innerHTML = '';
  monthNameBlock.innerText = [ month + 1 ];
  numbersInMonth(month + 1);
}
month++;
}
function leftBut() {
 if (month == 0) {
   // alert("январь");
   month = 11;
   days.innerText = '';
   monthNameBlock.innerText = '';
   monthNameBlock.innerText = [ month ];
   numbersInMonth(month - 1);
   month--;
} else {
  days.innerHTML = '';
  monthNameBlock.innerHTML = '';
  monthNameBlock.innerText = [ month - 1 ];
  numbersInMonth(month - 1);
}
month--;
}
right.addEventListener('click', rightBut);
left.addEventListener('click', leftBut);
}
//Calendar();