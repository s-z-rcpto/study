// Функції підказок та фокусування
function addFocusListeners(inputId, hintId) {
  const input = document.getElementById(inputId);
  const hint = document.getElementById(hintId);

  input.addEventListener("focus", () => {
    input.classList.add("focused");

    if (hint != null) {
      hint.style.display = "block";
    }
  });

  input.addEventListener("blur", () => {
    input.classList.remove("focused");

    if (hint != null) {
      hint.style.display = "none";
    }
  });
}

// Додаємо очікування подій для полів
addFocusListeners("name");
addFocusListeners("email");
addFocusListeners("login", "loginHint");
addFocusListeners("birthdate");
addFocusListeners("password", "passwordHint");

// Заборона кирилиці в логіні
const loginInput = document.getElementById("login");

loginInput.addEventListener("input", function (event) {
  // Перевірка на кириличні літери, включаючи і, є, ї
  const ukrainianLetters = /[а-яА-ЯіІєЄїЇ]/;

  if (ukrainianLetters.test(this.value)) {
    this.value = this.value.replace(ukrainianLetters, "");

    this.setCustomValidity("У логіні дозволені лише латинські літери!");
  } else {
    this.setCustomValidity("");
  }

  this.reportValidity();
});

// Перевірка дати народження
const birthdateInput = document.getElementById("birthdate");

birthdateInput.addEventListener("change", function () {
  const selectedDate = new Date(this.value);
  const today = new Date();

  if (selectedDate > today) {
    this.setCustomValidity("Дата народження не може бути в майбутньому!");
  } else {
    this.setCustomValidity("");
  }

  this.reportValidity();
});

// Перевірка паролю
const passwordInput = document.getElementById("password");
const lengthReq = document.getElementById("lengthReq");
const uppercaseReq = document.getElementById("uppercaseReq");
const numberReq = document.getElementById("numberReq");
const specialReq = document.getElementById("specialReq");

// Перевірка без регулярного виразу
function checkPasswordRequirements() {
  const password = passwordInput.value;

  const isLengthValid = password.length >= 8;

  let hasUppercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for (let char of password) {
    if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    }

    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }

    if ("!@#$%^&*()_+-=[]{}|;:,.<>?".includes(char)) {
      hasSpecialChar = true;
    }
  }

  // Оновлення класів та вигляду вимог
  lengthReq.textContent = isLengthValid
    ? "✓ Мінімум 8 символів"
    : "✗ Мінімум 8 символів";

  lengthReq.classList.toggle("valid", isLengthValid);
  lengthReq.classList.toggle("invalid", !isLengthValid);

  uppercaseReq.textContent = hasUppercase
    ? "✓ Мінімум 1 велика літера"
    : "✗ Мінімум 1 велика літера";

  uppercaseReq.classList.toggle("valid", hasUppercase);
  uppercaseReq.classList.toggle("invalid", !hasUppercase);

  numberReq.textContent = hasNumber ? "✓ Мінімум 1 цифра" : "✗ Мінімум 1 цифра";

  numberReq.classList.toggle("valid", hasNumber);
  numberReq.classList.toggle("invalid", !hasNumber);

  specialReq.textContent = hasSpecialChar
    ? "✓ Мінімум 1 спеціальний символ"
    : "✗ Мінімум 1 спеціальний символ";

  specialReq.classList.toggle("valid", hasSpecialChar);
  specialReq.classList.toggle("invalid", !hasSpecialChar);

  // Додаткова перевірка з регулярним виразом
  const regex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};:,.<>?])(?=.{8,})/;

  return regex.test(password);
}

passwordInput.addEventListener("input", function () {
  checkPasswordRequirements();
  validateSubmitButton();
});

// Функція валідації форми
function validateForm() {
  let isValid = true;

  const requiredFields = [
    { id: "name", errorId: "nameError", message: "Введіть ім'я" },
    { id: "email", errorId: "emailError", message: "Введіть email" },
    { id: "login", errorId: "loginError", message: "Введіть логін" },
    { id: "country", errorId: "countryError", message: "Оберіть країну" },
    {
      id: "birthdate",
      errorId: "birthdateError",
      message: "Введіть дату народження",
    },
    { id: "password", errorId: "passwordError", message: "Введіть пароль" },
  ];

  requiredFields.forEach((field) => {
    const element = document.getElementById(field.id);
    const errorElement = document.getElementById(field.errorId);

    if (element.value.trim() === "") {
      isValid = false;

      element.classList.add("error");

      errorElement.textContent = field.message;
    } else {
      element.classList.remove("error");

      errorElement.textContent = "";
    }
  });

  // Перевірка статі
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const genderErrorElement = document.getElementById("genderError");
  const genderSelected = Array.from(genderInputs).some(
    (radio) => radio.checked
  );

  if (!genderSelected) {
    isValid = false;

    genderErrorElement.textContent = "Оберіть стать";
  } else {
    genderErrorElement.textContent = "";
  }

  // Перевірка паролю
  const isPasswordValid = checkPasswordRequirements();

  if (!isPasswordValid) {
    isValid = false;

    document.getElementById("passwordError").textContent =
      "Пароль не відповідає вимогам безпеки";
  }

  return isValid;
}

// Функція активації/деактивації кнопки
function validateSubmitButton() {
  const submitButton = document.getElementById("submitButton");
  const requiredFields = document.querySelectorAll(
    "input[required], select[required]"
  );

  const genderInputs = document.querySelectorAll('input[name="gender"]');

  let allFieldsFilled = true;

  requiredFields.forEach((field) => {
    if (field.value.trim() === "") {
      allFieldsFilled = false;
    }
  });

  const genderSelected = Array.from(genderInputs).some(
    (radio) => radio.checked
  );

  const isPasswordValid = checkPasswordRequirements();

  submitButton.disabled = !(
    allFieldsFilled &&
    genderSelected &&
    isPasswordValid
  );
}

// Додаємо обробники для перевірки активності кнопки
const form = document.getElementById("registrationForm");
const inputs = form.querySelectorAll("input, select");
const radioInputs = document.querySelectorAll('input[name="gender"]');

inputs.forEach((input) => {
  input.addEventListener("input", validateSubmitButton);
});

radioInputs.forEach((radio) => {
  radio.addEventListener("change", validateSubmitButton);
});

// Обробка форми
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    alert("Форма успішно надіслана!");
    // Тут може бути логіка надсилання форми на сервер
  }
});

// Ініціалізація стану кнопки при завантаженні сторінки
validateSubmitButton();
