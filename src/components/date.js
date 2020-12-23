// =========================
// Today's Date
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();

// Weekday
var weekday = weekdays[today.getDay()];

// Date
var date = today.getDate()

// Month
var monthName = monthNames[today.getMonth()];

export const fullDate = `${weekday}, ${date} ${monthName}`

// Time
export function time() {
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let amOrPm = '';

    if (hours > 11) {
        if (hours > 12) {
            hours -= 12;
        }
        amOrPm = 'PM'
    } else if (hours < 12) {
        amOrPm = 'AM'
    }

    let zero = ''
    if (minutes < 10) {
        zero = 0
    }
    
    return `${hours}:${zero}${minutes} ${amOrPm}`
}
// =========================