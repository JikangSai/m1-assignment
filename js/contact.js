var select = document.getElementById("contactMethod");
var emailBox = document.getElementById("emailBox");
var phoneBox = document.getElementById("phoneBox");
var emailInput = document.getElementById("emailInput");
var phoneInput = document.getElementById("phoneInput");

function setRequired(which) {
  if (!emailInput || !phoneInput) return;
  emailInput.required = (which === "email");
  phoneInput.required = (which === "phone");
}

function toggleBoxes(value) {
  emailBox.style.display = "none";
  phoneBox.style.display = "none";

  if (value === "email") {
    emailBox.style.display = "block";
  } else if (value === "phone") {
    phoneBox.style.display = "block";
  }
  setRequired(value);
}

toggleBoxes(select.value);

select.addEventListener("change", function () {
  toggleBoxes(this.value);
});
