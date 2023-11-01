const fetch = require('node-fetch');

const url = 'https://www.googleapis.com/calendar/v3/calendars/ko.south_korea%23holiday%40group.v.calendar.google.com/events?key=AIzaSyAm6tsQkOFJ0_XKmMuo5jxW7HIunVVdwt8&orderBy=startTime&singleEvents=true&timeMin=2022-01-01T00:00:00Z&timeMax=2024-01-01T00:00:00Z'

// const holidays = fetch(url).then(response => response.json()).then(data => {
//     const holidays = data.items;
//     return holidays
//     })


async function logJSONData() {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
  }

logJSONData().then()