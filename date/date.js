class Date {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay(day) {
        return this.day;
    }

    getMonth(month) {
        return this.month;
    }

    getYear(year) {
        return this.year;
    }

    set(newDay) {
        this.day = newDay;
    }

    set(newMonth) {
        this.month = newMonth ;
    }

    set(newYear) {
        this.year = newYear;
    }
}

let date = new Date(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + '/' + month + '/' + year);