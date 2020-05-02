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
