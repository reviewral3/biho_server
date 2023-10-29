

function DateDifference(date1, current_date) {
    const diffInMs = Math.abs(current_date - date1);
  
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    return diffInDays;
  }

// function AfterEnlist(my_enlist_date, current_date) {
//     this.DateDifference()
// }

// function UntilDischarge() {
//     this.DateDifference()
// }

function DischargeDate(my_enlist_date) {
    var futureDate = new Date(my_enlist_date.getFullYear(), my_enlist_date.getMonth() + 18, my_enlist_date.getDate());
    return futureDate;
}
  
const my_enlist_date = new Date('2022-10-17');
const my_discharge_date = DischargeDate(my_enlist_date) 
const current_date = new Date(); 

const after_enlist = DateDifference(my_enlist_date, current_date);
const until_discharge = DateDifference(my_discharge_date, current_date);
console.log('after', after_enlist);
console.log('rest_date', until_discharge);


console.log(DischargeDate(my_enlist_date));