var date = new Date();
this.dayOfWeek = date.getDay();
this.day = date.getDay();
this.month = date.getMonth();
this.year = date.getFullYear();
var listOfMonth = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
];
var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat '];
var monthNameBlock = document.createElement("div");
this.today = date.getDay(this.year, this.month, this.date);

var Calendar = function(name) {
    var calendarBlock = document.createElement("div");
    var monthBlock = document.createElement("div");
    var days = document.createElement("table");
    var monthNameBlock = document.createElement("div");
    var weekBlock = document.createElement("div");
    var left = document.createElement("button");
    var right = document.createElement("button");
    document.body.appendChild(calendarBlock);
    calendarBlock.appendChild(monthBlock);
    calendarBlock.appendChild(weekBlock);
    calendarBlock.appendChild(days);
    monthBlock.appendChild(left);
    left.id = "Left";
    left.innerText = "<";
    monthBlock.appendChild(monthNameBlock);
    monthBlock.appendChild(right);
    right.id = "Right";
    right.innerText = ">";

    weekBlock.innerText = (weekDays);
    //styles
    right.style.width = "40px";
    left.style.width = "40px";
    calendarBlock.style.width = "200px";
    calendarBlock.style.height = "200px";
    calendarBlock.style.background = "grey";
    weekBlock.style.justifyContent = "center";
    weekBlock.style.color = "#FFF";
    weekBlock.style.textTransform = "uppercase";
    weekBlock.style.display = 'table';
    weekBlock.style.fontSize = '80%';
    days.style.display = "table";
    days.style.justifyContent = "space-around";
    days.style.justifyContent = "center";
    days.style.fontSize = '1.1rem';
    monthBlock.style.display = "flex";
    monthBlock.style.justifyContent = "center";

    this.month = date.getMonth();
    monthNameBlock.innerText = [listOfMonth[month]];

    var today = date.getDate();

    function numbersInMonth(month) {
        for (var j = 0; j < 4; j++) {
            var string = document.createElement('tr');
            for (var i = 0; i < 7; i++) {
                var element = document.createElement('td');
                element.style.width = '30px';
                element.innerText = [date.getDate()];
                date.setDate(date.getDate() + 1);

                if (element.innerText != today) {} else {
                    element.style.color = '#FFFF';
                }
                string.appendChild(element);
            }
            days.appendChild(string);
        }
    }
    numbersInMonth(month);

    function rightBut() {
        if (month == 11) {
            month = 0;
            days.innerHTML = '';
            monthNameBlock.innerHTML = '';
            monthNameBlock.innerText = [listOfMonth[month]];
            numbersInMonth(month);
            month--;
        } else {
            days.innerHTML = '';
            monthNameBlock.innerHTML = '';
            monthNameBlock.innerText = [listOfMonth[month + 1]];
            numbersInMonth(month);
        }
        month++;
    }

    function leftBut() {
        if (month == 0) {
            month = 11;
            days.innerHTML = '';
            monthNameBlock.innerHTML = '';
            monthNameBlock.innerText = [listOfMonth[month]];
            numbersInMonth(month - 1);
            month--;
        } else {
            days.innerHTML = '';
            monthNameBlock.innerHTML = '';
            monthNameBlock.innerText = [listOfMonth[month - 1]];
            numbersInMonth(month - 1);
        }
        month--;
    }
    right.addEventListener('click', rightBut);
    left.addEventListener('click', leftBut);
}
Calendar();