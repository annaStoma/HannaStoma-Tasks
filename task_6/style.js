var month = document.createElement('tr');
var now = new Date();
var currrentMonth = now.getMonth();
var week = document.createElement('tr');
var days = document.createElement('tr');
var weekList;
var weekListItem = document.createElement('td'); 
// month.innerText=["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"];
month.innerText=["January"];
week.innerText=['mon','tue','wed','thu','fru','sat','sun'];
days.style.background = "green";
for (var j = 1; j <= 4; j++)
{
	for ( var i = 1; i <= 7; i++)
	{
		var day = document.createElement('td');
		day.innerText += [ ' ' + i ];
		days.appendChild(day);
	}
var day = document.createElement('td');

}
var calendar = document.createElement("table");
document.body.appendChild(calendar);
calendar.appendChild(month);
calendar.appendChild(week);
calendar.appendChild(days);
// document.body.appendChild(month);
calendar.style.width = "150px";
calendar.style.height =  "150px";
calendar.style.background = "red";
// calendar.appendChild(weekList = document.createElement('tr'));
// for(var i=0; i<=11; i++){
//  weekListItem = document.createElement('td');
// }
