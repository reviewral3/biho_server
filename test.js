const fetch = require('node-fetch');

const url = 'https://www.googleapis.com/calendar/v3/calendars/ko.south_korea.official%23holiday%40group.v.calendar.google.com/events?key=AIzaSyAm6tsQkOFJ0_XKmMuo5jxW7HIunVVdwt8&orderBy=startTime&singleEvents=true&timeMin=2022-10-17T00:00:00Z&timeMax=2024-4-16T00:00:00Z'

// const holidays = fetch(url).then(response => response.json()).then(data => {
//     const holidays = data.items;
//     return holidays
//     })


async function logJSONData() {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData.items.length);
  }

logJSONData().then()