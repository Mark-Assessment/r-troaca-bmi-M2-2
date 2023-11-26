// Choose BMI Measuring System
function measureBMI() {
    
    const unit = document.getElementById("bmi-metric").checked,
        weight = document.getElementById("bmi-weight"),
        weightu = document.getElementById("bmi-weight-unit"),
        height = document.getElementById("bmi-height"),
        heightu = document.getElementById("bmi-height-unit");

    // TRUE = Metric System, FALSE = Imperial System
    if (unit) {
        weightu.innerHTML = "KG";
        weight.min = 1; weight.max = 300;
        heightu.innerHTML = "CM";
        height.min = 50; height.max = 300;
    } else {
        weightu.innerHTML = "LBS";
        weight.min = 1; weight.max = 1000;
        heightu.innerHTML = "IN";
        height.min = 20; height.max = 118;
    }
}

/** 
 * Calculates the BMI based off user input
 * @returns {boolean} - If BMI calc fails returns false */ 
function calcBMI() {
    let bmi = null,
        unit = document.getElementById("bmi-metric").checked,
        weight = parseInt(document.getElementById("bmi-weight").value),
        height = parseInt(document.getElementById("bmi-height").value),
        results = document.getElementById("bmi-results");

    // Calculating the BMI
    // Metric BMI = Mass (KG) / Height (M)^2
    if (unit) {
        height = height / 100;
        bmi = weight / (height * height);
    }
    // Imperial BMI = 703 X Mass (LBS) / Height (IN)^2
    else {
        bmi = 703 * (weight / (height * height));
    }
    // Rounding off to 2 decimal places
    bmi = Math.round(bmi * 100) / 100;

    // Show the results of the calculation
    if (bmi < 18.5) {
        results.innerHTML = bmi + " - Underweight";
    } else if (bmi < 25) {
        results.innerHTML = bmi + " - Normal weight";
    } else if (bmi < 30) {
        results.innerHTML = bmi + " - Overweight";
    } else if (bmi < 40) {
        results.innerHTML = bmi + " - Obese";
    } else {
        results.innerHTML = bmi + " - Extremely Obese";
    }
    return false;
}

// Accordion toggle function
let items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
    let itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));

// Function to update and display the current year
function updateYear() {
    const now = new Date();
    const year = now.getFullYear();
    document.getElementById('year').innerText = year;
}
updateYear();

// Box Shadow Motion function
const bmiForm = document.getElementById('bmi-form');

function smoothShadowMotion() {
    const offsetX = Math.sin(new Date().getTime() * 0.002) * 8; // Adjust the shadow motion intensity
    bmiForm.style.boxShadow = `${offsetX}px 5px 15px rgba(0, 0, 0, 0.3)`;
    requestAnimationFrame(smoothShadowMotion);
}
smoothShadowMotion();