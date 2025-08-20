/* const theContainersForTime = document.querySelectorAll('.text__description-2')
function formatTime(date){
    const hours12 = date.getHours() % 12 || 12 
    const minutes = date.getMinutes();
    // console.log(hours12);
    const isAm = date.getHours() < 12;
    // 9 => 09
   return `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${isAm ? 'AM' : 'PM' }`    
}
for (let timeContainer of theContainersForTime){
    // el.innertext = formatDate(new Date())
    const p = document.createElement('p');
    p.innerText = formatTime(new Date())
    timeContainer.appendChild(p)   
} */


/* const theContainersForDate = document.querySelectorAll('.text__description-2')
function formatDate(date){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December']
    // return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
   const theDate =  `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
    // console.log(formatDate(new Date)); i need to write formatDate(new Date())/formatTime(new Date()) this in the inspect to find the result 
    return theDate
}
for (let dateContainer of theContainersForDate){
    const p = document.createElement('p');
    p.innerText = formatDate(new Date())
    p.style.color = 'red'
    dateContainer.appendChild(p)   
} */

const containerOfDateAndTimeForNoakhali = document.querySelector('.empty-container-noakhali')
const containerOfDateAndTimeForFeni = document.querySelector('.empty-container-feni')
const containerOfDateAndTimeForQuota = document.querySelector('.empty-container-quota')


function formatDateTimeWithTimezone(date) {
    // Step 1 – Days and Months Arrays
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December']

    // Step 2 – Hours in 12-hour format
    const hours12 = date.getHours() % 12 || 12; /* date.getHours() → gives hours in 24-hour format (0–23). for example -  14:00 → 14 % 12 = 2 (2 PM) */

    // Step 3 – Minutes with Leading Zero
    // const minutes = date.getMinutes(); 
    const minutes = date.getMinutes().toString().padStart(2, '0')

    // Step 4 – AM or PM
    // const isAm = date.getHours() < 12;
    const isAm = date.getHours() < 12 ? 'AM' : 'PM'

    // Step 5 – Extract Timezone Info 
    const timeZoneInfo = date.toString().match(/\(.*\)/)[0];

    // Step 6 – Extract GMT Offset
    const gmtOffset = date.toTimeString().match(/GMT[^\s]+/)[0];

    // return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`;
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${hours12}:${minutes} ${isAm} ${gmtOffset} ${timeZoneInfo}`

    /* ${days[date.getDay()]} → Finds the day name (e.g., Sunday).
    ${months[date.getMonth()]} → Finds the month name (e.g., August).
    ${date.getDate()} → Day of the month (10).
    ${date.getFullYear()} → Full year (2025).
    ${hours12}:${minutes} ${isAm} → Formatted time.
    ${gmtOffset} ${timezoneInfo} → Timezone details. */
}


/* for (let container of containerOfDateAndTime) {
    // console.log(container);
    const p = document.createElement('p')
    p.innerText = formatDateTimeWithTimezone(new Date());
    // p.style.color = 'red'
    // p.style.backgroundColor = 'yellow'
    // p.style.width = 'fit-content'
    p.style.cssText = 'color: red; background-color: yellow; width: fit-content; margin-bottom: 1rem'
    containerOfDateAndTime.appendChild(p)
} */
// const p = document.createElement('p')
//     p.innerText = formatDateTimeWithTimezone(new Date());
//     // p.style.color = 'red'
//     // p.style.backgroundColor = 'yellow'
//     // p.style.width = 'fit-content'
//     p.style.cssText = 'color: red; background-color: yellow; width: fit-content; margin-bottom: 1rem'
//     containerOfDateAndTimeForNoakhali.appendChild(p)
//     containerOfDateAndTimeForFeni.appendChild(p)
//     containerOfDateAndTimeForQuota.appendChild(p)






/* what each part does
const hours12 = date.getHours() % 12 || 12;
date.getHours()
returns the hour in 24-hour time (0–23).
examples: midnight → 0, 9am → 9, noon → 12, 3pm → 15.
% 12 (modulo 12)
converts 24-hour to 12-hour except midnight/noon edge cases.
result is 0–11.
|| 12 (logical OR as a fallback)
returns the left side if it’s truthy, otherwise returns 12.
we use it so that a modulo result of 0 becomes 12. 
|| treats 0, '', null, undefined, NaN, false as falsy. That’s perfect here because we want 0 to become 12.
*/

/* const minutes = date.getMinutes().toString().padStart(2, '0') 
date.getMinutes() → gets minutes (0–59).
.toString() → converts it to a string so we can add padding.
.padStart(2, '0') → ensures 5 becomes "05". */