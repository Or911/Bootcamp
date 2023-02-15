const form = {};

const SubmitButton = function () {
  const Name = checkName();
  const Salary = greaterOfSalary();
  const inputBirthdy = document.getElementById("inputBirthdy").value;
  const inputTel = ifTelLength();
  AllFieldsAreCorrect(Name, Salary, inputBirthdy, inputTel);
};

const checkName = function () {
  let inputName = document.getElementById("inputName").value;
  if (inputName.length >= 2) {
    return inputName;
  }
  erorrMessage(`name is missing`);
};

const greaterOfSalary = function () {
  let inputSalary = document.getElementById("inputSalary").value;
  if (inputSalary > 10000 && inputSalary < 16000) {
    return inputSalary;
  }
  erorrMessage(`salary is Illegal`);
};
const ifTelLength = function () {
  let inputTel = document.getElementById("inputTel").value;
  if (inputTel.length == 10) {
    return inputTel;
  }
  erorrMessage(`Phone is Illegal`);
};

const erorrMessage = function (txt) {
  const message = document.createElement("p");
  message.setAttribute("id", "erorrMessage");
  message.innerHTML = txt;
  document.getElementById("form").appendChild(message);
};

const AllFieldsAreCorrect = function (in1, in2, in3, in4) {
  if (!!in1 && !!in2 && !!in3 && !!in4) {
    document.getElementById("form").style.display = "none";
  }
};
