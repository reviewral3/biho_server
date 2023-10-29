

function DateDifference(enlist_date, current_date) {
    const diffInMs = Math.abs(current_date - enlist_date);
  
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    return diffInDays;
  }
  
  function calculateDate(my_enlist_day) {
    var futureDate = new Date(my_enlist_day.getFullYear(), my_enlist_day.getMonth() + 18, my_enlist_day.getDate());
    return futureDate;
  }
  

const my_enlist_day = new Date('2022-10-17');
const current_date = new Date(); // Current date

const differenceInDays = DateDifference(my_enlist_day, current_date);
console.log('Difference in days:', differenceInDays);

console.log(calculateDate(my_enlist_day));