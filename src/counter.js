

function DateDifference(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
  
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    return diffInDays;
  }
  
const date1 = new Date('2022-10-16');
const date2 = new Date(); // Current date

const differenceInDays = DateDifference(date1, date2);
console.log('Difference in days:', differenceInDays);

