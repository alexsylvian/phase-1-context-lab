// Function to create an employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
      createTimeInEvent,
      createTimeOutEvent,
      hoursWorkedOnDate,
      wagesEarnedOnDate,
      allWagesFor,
    };
  }
  
  // Function to create employee records from an array of arrays
  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
  }
  
  // Function to add a timeIn event to an employee's record
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour, 10),
      date,
    });
  
    return this;
  }
  
  // Function to add a timeOut event to an employee's record
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(hour, 10),
      date,
    });
  
    return this;
  }
  
  // Function to calculate the hours worked on a specific date
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((event) => event.date === date);
    const timeOut = this.timeOutEvents.find((event) => event.date === date);
  
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  // Function to calculate the wages earned on a specific date
  function wagesEarnedOnDate(date) {
    const hoursWorked = this.hoursWorkedOnDate(date);
    return hoursWorked * this.payPerHour;
  }
  
  // Function to calculate the total wages earned for all dates
  function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find((employee) => employee.firstName === firstNameString);
  }
  // Function to calculate the total payroll for all employees
  function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((acc, employee) => acc + employee.allWagesFor(), 0);
    return totalPayroll;
  }