
let YearOP = document.getElementById("displayYear");
let MonthsOP = document.getElementById("displayMonths");
let DaysOP = document.getElementById("displayDays");

let submit = document.querySelector(".submitBtn");


submit.addEventListener("click", () => {
    validateInputs();
});


const validateInputs = () => {

    const inpDay = document.querySelector(".inpday").value.trim();
    const inpMonths = document.querySelector(".inpmonth").value.trim();
    const inpuYears = document.querySelector(".inpyear").value.trim();


    if (inpDay === "") {
        errorCall(document.querySelector(".inpday"), "Day cannot be empty");
    } 
    else if (inpDay > 31 || inpDay <= 0) {
        errorCall(document.querySelector(".inpday"), "Day cannot be zero or negative");
    }
    else{
        displayOutput();
    }

    if (inpMonths === "") {
        errorCall(document.querySelector(".inpmonth"), "Month cannot be empty");
    }
     else if (inpMonths > 12 || inpMonths <= 0) {
        errorCall(document.querySelector(".inpmonth"), "Month cannot be zero or negative");
    }
    else{
        displayOutput();
    }


    if (inpuYears === "") {
        errorCall(document.querySelector(".inpyear"), "Year cannot be empty");
    } 
    else if (inpuYears <= 0) {
        errorCall(document.querySelector(".inpyear"), "Year cannot be zero or negative");
    }
    else{
        displayOutput();
    }

}

const errorCall = (input , errorMsg) => {
    const parent  = input.parentNode;
    const error  = parent.querySelector(".emptyError"); 
    error.innerText = errorMsg;
    parent.className = "inputs failure"
}

let displayOutput = () => {
    YearOP.style.backgroundColor = "red";
    MonthsOP.style.backgroundColor = "red";
    DaysOP.style.backgroundColor = "red";
}
