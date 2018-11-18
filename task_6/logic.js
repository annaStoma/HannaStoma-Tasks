var Calendar = function() {

    this.month = date.getMonth();
    monthNameBlock.innerText = listOfMonth[month] + "/" + month;

    function numbersInMonth(month) {
        var emptyDays = 0;

        if (month == 0)
            emptyDays = day - 0;
        else if (month == 1)
            emptyDays = day - 3;
        else if (month == 2)
            emptyDays = day - 3;
        else if (month == 3)
            emptyDays = day + 1;
        else if (month == 4)
            emptyDays = day - 1;
        else if (month == 5)
            emptyDays = day - 4;
        else if (month == 6)
            emptyDays = day + 1;
        else if (month == 7)
            emptyDays = day - 2;
        else if (month == 8)
            emptyDays = day - 5;
        else if (month == 9)
            emptyDays = day - 0;
        else if (month == 10)
            emptyDays = day - 3;
        else if (month == 11)
            emptyDays = day - 5;

        var count = 0;
        var d = new Date(year, month, emptyDays);
        this.currDay = date.getDate();
        for (var j = 0; j < 5; j++) {
            var string = document.createElement('tr');
            for (var i = 0; i < 7; i++) {
                var element = document.createElement('button');
                element.style.width = '14.2%';
                element.style.border = '1px solid #FFF';
                element.style.display = 'flex-inline';
                element.style.outline = 'NONE';
                element.innerText = d.getDate();
                element.id = d.getDate();
                element.value = (element.id + '.' + month + '.' + year);
                days.appendChild(string);

                element.onclick = (function(i) {
                    return function() {
                        element.onclick = datePicker.innerText = this.value;
                    };
                })(i);

                if (element.innerText == currDay) {
                    element.style.color = 'rgb(51, 24, 204)';
                    element.style.backgroundColor = 'rgb(255, 255, 255)';
                }
                d.setDate(d.getDate() + 1);
                string.appendChild(element);
            }
        }
    }
    numbersInMonth(month);

    function rightBut() {
        if (month == 11) {
            month = 0;
            days.innerText = '';
            monthNameBlock.innerText = '';
            monthNameBlock.innerText = listOfMonth[month] + "/" + month;
            numbersInMonth(month);
            month--;
        } else {
            days.innerHTML = '';
            monthNameBlock.innerHTML = '';
            monthNameBlock.innerText = listOfMonth[month + 1] + "/" + (month + 1);
            numbersInMonth(month + 1);
        }
        month++;
    }

    function leftBut() {
        if (month == 0) {
            month = 11;
            days.innerText = '';
            monthNameBlock.innerText = '';
            monthNameBlock.innerText = listOfMonth[month] + "/" + month;
            numbersInMonth(month);
            month++
        } else {
            days.innerHTML = '';
            monthNameBlock.innerHTML = '';
            monthNameBlock.innerText = listOfMonth[month - 1] + "/" + (month - 1);
            numbersInMonth(month - 1);
        }
        month--;
    }
    right.addEventListener('click', rightBut);
    left.addEventListener('click', leftBut);
}
Calendar();