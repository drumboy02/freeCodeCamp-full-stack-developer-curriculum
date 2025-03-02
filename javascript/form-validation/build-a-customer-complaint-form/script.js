const fullName = document.getElementById("full-name");
const email = document.getElementById("email");

const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");

const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");

const submitBtn = document.getElementById("submit-btn")
const messageBox = document.getElementById("message-box");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValid(validateForm());
});

submitBtn.addEventListener("click", () => {
  // messageBox.textContent = "Button clicked";
});
/*
document.getElementById("complaint-description-container").style.display = "none";
document.getElementById("solution-description-container").style.display = "none";
*/
fullName.addEventListener("change", () => {
  validateForm()["full-name"] ?
  fullName.style.borderColor = "green" : 
  fullName.style.borderColor = "red";
});

email.addEventListener("change", () => {
  validateForm()["email"] ?
  email.style.borderColor = "green" :
  email.style.borderColor = "red";
});

orderNo.addEventListener("change", () => {
  validateForm()["order-no"] ?
  orderNo.style.borderColor = "green" :
  orderNo.style.borderColor = "red";
});

productCode.addEventListener("change", () => {
  validateForm()["product-code"] ?
  productCode.style.borderColor = "green" :
  productCode.style.borderColor = "red";
});

quantity.addEventListener("change", () => {
  validateForm()["quantity"] ?
  quantity.style.borderColor = "green" :
  quantity.style.borderColor = "red";
});

complaintsGroup.addEventListener("change", () => {
  validateForm()["complaints-group"] ?
  complaintsGroup.style.borderColor = "green" :
  complaintsGroup.style.borderColor = "red";
});

complaintDescription.addEventListener("change", () => {
  validateForm()["complaint-description"] ?
  complaintDescription.style.borderColor = "green" :
  complaintDescription.style.borderColor = "red";
});

solutionsGroup.addEventListener("change", () => {
  validateForm()["solutions-group"] ?
  solutionsGroup.style.borderColor = "green" :
  solutionsGroup.style.borderColor = "red";
});

solutionDescription.addEventListener("change", () => {
  validateForm()["solution-description"] ?
  solutionDescription.style.borderColor = "green" :
  solutionDescription.style.borderColor = "red";
});

function validateForm() {
  const obj = new Object();
  obj["full-name"] = fullName.value !== '';
  obj["email"] = /^.+@.+(.com|.net)$/.test(email.value);
  obj["order-no"] = /^2024\d{6}$/.test(orderNo.value);
  obj["product-code"] = /^[a-zA-Z]{2}\d{2}-[a-zA-z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value);
  obj["quantity"] = quantity.value > 0;
  obj["complaints-group"] = (() => {
    const fieldset = Object.values(complaintsGroup.children);
    for (let el of fieldset) {
      if (Object.values(el.children).length) {
        const checkbox = Object.values(el.children)[0];
        if (checkbox.checked) return true;
      }
    }    
    return false
  })();
  obj["complaint-description"] = (() => {
    return document.getElementById("other-complaint").checked ?
    complaintDescription.value.length >= 20 :
    false;
  })();
  obj["solutions-group"] = (() => {
    const fieldset = Object.values(solutionsGroup.children);
    for (let el of fieldset) {
      if (el.type === "radio") {
        if (el.checked) return true;
      }
    }
    return false;
  })();
  obj["solution-description"] = (() => {
    return document.getElementById("other-solution").checked ?
    solutionDescription.value.length >= 20 :
    false;
  })();

  return obj;
}

function isValid(validateFormObj) {
  let entries = Object.entries(validateFormObj);
  let valCheck = true;
  for (let i = 0; i < entries.length; i++) {
    let id = entries[i][0];
    if (id === "complaint-description" || id === "solution-description") {
      let checkbox = document.getElementById(`other-${id.split("-")[0]}`);
      let el = document.getElementById(id);
      if (!validateForm()[id] && checkbox.checked) {
        el.style.borderColor = "red";
        valCheck = false;
        continue;
      } else {
        el.style.borderColor = "initial";
        continue;
      }
    }
    if (entries[i].includes(false)) {
      let el = document.getElementById(id);
      el.style.borderColor = "red";
      valCheck = false;
    };
  }

  for (let k in validateFormObj) {
    console.log(k, validateFormObj[k]);
  }

  return valCheck;
}
