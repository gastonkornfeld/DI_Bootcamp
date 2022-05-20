


// Instructions :
// Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

// The format should contain a 4 digit year, 2 digit month, 2 digit day,
//  2 digit hour(00-23), 2 digit minute and 2 digit second.
// If any of the value has only single digit, you must use zero prefix,
// so that the result string length is always the same.

// Examples

function formatDate(dateObject) {
    let year = String(dateObject.getFullYear());
    console.log(year);
    let month = String(dateObject.getMonth() + 1);
    month = month.length == 1?0+month:month;
    console.log(month);
    let day = String(dateObject.getDate());
    day = day.length == 1?0+day:day;
    let hour = String(dateObject.getHours());
    hour = hour.length == 1?0+hour:hour;
    let minutes = String(dateObject.getMinutes());
    minutes = minutes.length == 1?0+minutes:minutes;
    let seconds = String(dateObject.getSeconds());
    seconds = seconds.length == 1?0+seconds:seconds;

    return year + month + day + hour + minutes + seconds;
};




console.log(formatDate(new Date(2020, 11, 9, 9, 1, 1)));
