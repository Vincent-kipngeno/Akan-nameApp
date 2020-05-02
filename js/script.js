function wawa() {
  var birthDate = document.getElementById('input_id').value;
  var gender = document.getElementById('gender').value;
  birthDate.toString();
  var centuryYear;
  var birthYear;
  var birthMonth;
  var birthDay;
  var year;
  centuryYear = parseInt(birthDate.slice(0, 2));
  birthYear = parseInt(birthDate.slice(2, 4));
  birthMonth = parseInt(birthDate.slice(5, 7));
  birthDay = parseInt(birthDate.slice(8, 10));
  year = parseInt(birthDate.slice(0, 4));
}
if ((birthDay <= 0 || birthDay > 31) || (birthMonth <= 0 || birthMonth > 12)){
  alert("You entered an invalid date");
}
var weekDays;
var femaleNames;
var maleNames;
weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var dayOfTheWeek;
var day;
dayOfTheWeek = ( ( (centuryYear/4) - 2*centuryYear-1) + ((5*birthYear/4) ) + ((26*(birthMonth+1)/10)) + birthDay ) % 7;
