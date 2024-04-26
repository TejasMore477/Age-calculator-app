
let YearOP = document.getElementById("displayYear");
let MonthsOP = document.getElementById("displayMonths");
let DaysOP = document.getElementById("displayDays");

let submit = document.querySelector(".submitBtn");


submit.addEventListener("click", () => {
    validateInputs();
});


const validateInputs = () => {
    let hasError = false;

    const inpDay = document.querySelector(".inpday").value.trim();
    const inpMonths = document.querySelector(".inpmonth").value.trim();
    const inpuYears = document.querySelector(".inpyear").value.trim();


    if (inpDay === "") {
        errorCall(document.querySelector(".inpday"), "Day cannot be empty");
        hasError = true;
    } 
    else if (inpDay > 32 || inpDay <= 0) {
        errorCall(document.querySelector(".inpday"), "Invalid Day");
        hasError = true;
    }
    else{
        clearError(document.querySelector(".inpday"));
    }

    if (inpMonths === "") {
        errorCall(document.querySelector(".inpmonth"), "Month cannot be empty");
        hasError = true;
        hasError = true;
    }
     else if (inpMonths > 12 || inpMonths <= 0) {
        errorCall(document.querySelector(".inpmonth"), "Invalid Month");
        hasError = true;
    }
    else{
        clearError(document.querySelector(".inpmonth"));
    }


    if (inpuYears === "") {
        errorCall(document.querySelector(".inpyear"), "Year cannot be empty");
        hasError = true;
    } 
    else if (inpuYears <= 0) {
        errorCall(document.querySelector(".inpyear"), "Year cann't be negative");
    }
    else if(inpuYears.length < 4 ) {
        errorCall(document.querySelector(".inpyear"), "Invalid Year");
    }
    else{
        clearError(document.querySelector(".inpyear"));
    }

    // Call displayOutput function only if no validation errors occurred
    if (!hasError) {
        displayOutput();
    }

}

const errorCall = (input , errorMsg) => {
    const parent  = input.parentNode;
    const error  = parent.querySelector(".emptyError"); 
    error.innerText = errorMsg;
    parent.className = "inputs failure"
}

const clearError = (input) => {
    const parent = input.parentNode;
    const error = parent.querySelector(".emptyError")
    if(error) {
        error.innerText = " ";
        parent.className = "inputs";
    }
}

let displayOutput = () => {
        YearOP.style.backgroundColor = "green";~
        MonthsOP.style.backgroundColor = "green";
        DaysOP.style.backgroundColor = "green";
}
