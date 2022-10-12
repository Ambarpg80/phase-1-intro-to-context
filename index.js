/*Establish employee object and employees array*/

/*=========== CREATE ONE RECORD ============*/
function createEmployeeRecord([first, family, title, pay]) {
  
 let employee = {
    firstName: first,
    familyName: family,
    title: title,
    payPerHour: pay,
    timeInEvents: [],
    timeOutEvents: [],
  }
  return employee
}
//createEmployeeRecord(['Amelia', 'Bedelia', 'Maid', 10])


/*======== CREATE MULTIPLE RECORDS =========*/
function createEmployeeRecords(arrays) {
    return arrays.map(array=> createEmployeeRecord(array))
}
//createEmployeeRecords([['Ash', 'Kechum', 'trainer', 15], ['Kim', 'Possible', 'agent', 25]])


/*=========== CREATE TIME IN EVENT ============*/
function createTimeInEvent(employee, date) {
  let [givenDate, time] = date.split(' ')
  let parsedTime = parseInt(time)
  let timeIn = {
    type: "TimeIn",
    hour: parsedTime,
    date: givenDate,
  };
  employee.timeInEvents.push(timeIn)
    return employee
}

// createTimeInEvent({
//   firstName: 'Ash',
//   familyName: 'Kechum',
//   title: 'trainer',
//   payPerHour: 15,
//   timeInEvents: [],
//   timeOutEvents: []
// }, "2022-9-28 1400")


/*=========== CREATE TIME OUT EVENT ============*/

function createTimeOutEvent(employee, date) {
  let [givenDate, time] = date.split(' ')
  let parsedTime = parseInt(time)
  let timeOut = {
    type: "TimeOut",
    hour: parsedTime,//.parseInt(time),
    date: givenDate,//.parseInt(givenDate),
  };
  employee.timeOutEvents.push(timeOut)
  //console.log(employee)
    return employee
}
// createTimeOutEvent({
//   firstName: 'Ash',
//   familyName: 'Kechum',
//   title: 'trainer',
//   payPerHour: 15,
//   timeInEvents: [],
//   timeOutEvents: []
// }, "2022-9-28 2200")

/*=========== HOURS WORKED ============*/
function hoursWorkedOnDate(employee, soughtDate) {
  //const hoursWorked
  
  let timeIn = employee.timeInEvents.find(date=> {
       return  date})
  let timeOut = employee.timeOutEvents.find(date=> { 
  return  date  })
 return (timeOut.hour - timeIn.hour)/100
  
}
/*
hoursWorkedOnDate({
  firstName: 'Ash',
  familyName: 'Kechum',
  title: 'trainer',
  payPerHour: 15,
  timeInEvents: [{ type: 'TimeIn', hour: 1400, date: '2022-9-28' },
  { type: 'TimeIn', hour: 1400, date: '2022-9-29' }
  ],
  timeOutEvents: [{ type: 'TimeOut', hour: 2200, date: '2022-9-28' },
  { type: 'TimeOut', hour: 2200, date: '2022-9-29' },
  ],
}, [ "2022-9-29"])
*/


/*==================WAGES EARNED ======================*/

function wagesEarnedOnDate(employee, date) {
  return hoursWorkedOnDate(employee, date) * employee.payPerHour
}
  
/* wagesEarnedOnDate({
  firstName: 'Ash',
  familyName: 'Kechum',
  title: 'trainer',
  payPerHour: 15,
  timeInEvents: [{ type: 'TimeIn', hour: 1400, date: '2022-9-28' }],
  timeOutEvents: [{ type: 'TimeOut', hour: 2200, date: '2022-9-28' }]
}, "2022-9-28")
*/
/*==================ALL WAGES EARNED ======================*/
let allWagesFor = function(employee){
  let eligibleDates = employee.timeInEvents.map(function(e){
      return e.date
  })

  let payable = eligibleDates.reduce(function(memo, d){
      return memo + wagesEarnedOnDate(employee, d)
  }, 0)

  return payable
}

// function allWagesFor(employee) {
//   let timeOut = employee.timeOutEvents.map(time => time.date)
//   let timeIn = employee.timeInEvents.map(time => time.date)
  
//    let wages = wagesEarnedOnDate(employee, timeOut) 
    
//    const total= timeOut.reduce(function(a,b){ 
//      return  a + wagesEarnedOnDate(employee, b) 
//       //console.log(wages)
//     },0)
//     return total
  
//}
// function allWagesFor(employee) {
//   let timeOut = employee.timeOutEvents.map(time => time.date)
//   let timeIn = employee.timeInEvents.map(time => time.date)
  
//    let wages = wagesEarnedOnDate(employee, timeIn) 
//     let total = 0;
//     for (let i = 0; i < timeIn.length; i++) {
//       total += wages
//     }
//     return total
//   }




/*================== CALCULATE PAYROLL ======================*/

function calculatePayroll(records){
  return records.reduce(function(a,b){
    return a + allWagesFor(b)
  },0)
 }




// function calculatePayroll(records){
//   let total = 0
//   records.find(person =>{ 
//     //console.log(person)
//  total += allWagesFor(person) })
//    console.log(total) 
//  }