var DayError = document.querySelector(".day-error");
var MonthError = document.querySelector(".month-error");
var YearError = document.querySelector(".year-error");
var YearResult = document.querySelector(".year-result");
var MonthResult = document.querySelector(".month-result");
var DayResult = document.querySelector(".day-result");
var SubmitBtn = document.querySelector(".btn");
var InputDay = document.getElementById("day");
var InputMonth = document.getElementById("month");
var InputYear = document.getElementById("year");
var InputRequiredError = "This field is required";
var InputDayError = "Must be a valid day";
var InputMonthError = "Must be a valid month";
var InputYearError = "Must be in the past";
var Canvas = document.querySelector(".can");


// InputDay
function CheckDayInput() {
  console.log('checking day input')

  let value = InputDay.value;
  if(value == '')
  {
    DayError.innerHTML = InputRequiredError;
    return false; //This would validate that there's no  input
  }
  else if(value < 1 || value > 31)
  {
    DayError.innerHTML = InputDayError;
    return false;
  }
  else
  {
    DayError.innerHTML = '';
    return true;
  }
}


// InputMonth
function CheckMonthInput() {

  let value = InputMonth.value;
  if(value == '')
  {
    MonthError.innerHTML = InputRequiredError;
    return false; //This would validate that there's no  input
  }
  else if(value < 1 || value > 12)
  {
    MonthError.innerHTML = InputMonthError;
    return false;
  }
  else
  {
    MonthError.innerHTML = '';
    return true;
  }
}


// Function for checking the year
function CheckYearInput() {
  let value = InputYear.value;
  let currentYear = new Date().getFullYear();
  console.log(currentYear);
  if (value == '') {
    YearError.innerHTML = InputRequiredError;
    return false;
  }
  else if (value > currentYear) {
    YearError.innerHTML = InputYearError;
    return false;
  }
  else {
    YearError.innerHTML = '';
    return true;
  }
}


// Calculating the Date of Birth
function calcAge(birthday) {
  var birthdate = new Date(birthday);
  var today = new Date();

  var years = today.getFullYear() - birthdate.getFullYear();
  var months = today.getMonth() - birthdate.getMonth();
  var days = today.getDate() - birthdate.getDate();
  // if the birthdate month and day are after the current month and day, subtract one year from the age


  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months === 0) {
      months = 11;
    } else {
      months = 12 + months;
    }
    days = 30 + days;
  }

  YearResult.innerHTML = years;
  MonthResult.innerHTML = months;
  DayResult.innerHTML = days;
}


SubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let day = CheckDayInput();
  let month = CheckMonthInput();
  let year = CheckYearInput();
  if(!day || !month || !year) return
  let birthday = `${InputMonth.value}/${InputDay.value}/${InputYear.value}`;
  calcAge(birthday);
  Canvas.style.display = "block";
  setTimeout(function () {
    Canvas.style.display = "none";
  }, 8000);
})