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
// =========================