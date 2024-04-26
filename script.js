document.addEventListener("DOMContentLoaded", function() {
    let YearOP = document.getElementById("displayYear");
    let MonthsOP = document.getElementById("displayMonths");
    let DaysOP = document.getElementById("displayDays");

    let submit = document.querySelector(".submitBtn");

    submit.addEventListener("click", () => {
        validateInputs();
    });

    const validateInputs = () => {
        let hasError = false;

        let inpDay = parseInt(document.querySelector(".inpday").value.trim());
        let inpMonths = parseInt(document.querySelector(".inpmonth").value.trim());
        let inpuYears = parseInt(document.querySelector(".inpyear").value.trim());

        if (isNaN(inpDay) || inpDay === "") {
            errorCall(document.querySelector(".inpday"), "Day cannot be empty");
            hasError = true;
        } 
        else if (inpDay > 31 || inpDay <= 0) {
            errorCall(document.querySelector(".inpday"), "Invalid Day");
            hasError = true;
        }
        else{
            clearError(document.querySelector(".inpday"));
        }

        if (isNaN(inpMonths) || inpMonths === "") {
            errorCall(document.querySelector(".inpmonth"), "Month cannot be empty");
            hasError = true;
        }
         else if (inpMonths > 12 || inpMonths <= 0) {
            errorCall(document.querySelector(".inpmonth"), "Invalid Month");
            hasError = true;
        }
        else{
            clearError(document.querySelector(".inpmonth"));
        }


        if (isNaN(inpuYears) || inpuYears === "") {
            errorCall(document.querySelector(".inpyear"), "Year cannot be empty");
            hasError = true;
        } 
        else if (inpuYears <= 0) {
            errorCall(document.querySelector(".inpyear"), "Year can't be negative");
        }
        else if(inpuYears.toString().length < 4 ) {
            errorCall(document.querySelector(".inpyear"), "Invalid Year");
        }
        else{
            clearError(document.querySelector(".inpyear"));
        }

        // Call displayOutput function only if no validation errors occurred
        if (!hasError) {
            displayOutput(inpDay, inpMonths, inpuYears);
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
            error.innerText = "";
            parent.className = "inputs";
        }
    }

    const displayOutput = (inpDay, inpMonths, inpuYears) => {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
        let currentDay = currentDate.getDate();

        let ageYears = currentYear - inpuYears;
        let ageMonths = currentMonth - inpMonths;
        let ageDays = currentDay - inpDay;

        if (currentMonth < inpMonths || (currentMonth === inpMonths && currentDay < inpDay)) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageDays < 0) {
            ageMonths--;
            let previousMonthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
            ageDays += previousMonthDays;
        }

        YearOP.innerText = ageYears;
        MonthsOP.innerText =  ageMonths;
        DaysOP.innerText = ageDays;
    }
});
