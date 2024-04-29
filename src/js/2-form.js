const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const emailForm = document.querySelector("input");
const textForm = document.querySelector("textarea");
let savedData;

try {
    savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
} catch (error) {
    console.error("Error parsing JSON:", error);
    savedData = { email: "", message: "" };
}

if (savedData !== null) {    
    emailForm.value = savedData.email;
    textForm.value = savedData.message;
}

form.addEventListener("input", handleInput);

form.addEventListener("submit", handleSubmit);

function handleInput(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    if (elements.email.value === "" || elements.message.value === "") {
        alert("Fill please all fields");
        return;
    }
    
    formData.email = elements.email.value.trim();
    formData.message = elements.message.value.trim();
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
}

