var constant = 703;

function clearWeightAndHeight() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
}

function clear() {
    document.getElementById("age").value = "";
    var selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
        selectedGender.checked = false;
    }
    clearWeightAndHeight();
}

function setMetric() {
    document.getElementById("weight").setAttribute("placeholder", "kilograms");
    document.getElementById("height").setAttribute("placeholder", "centimeters");
    document.getElementById("customary").disabled = false;
    document.getElementById("metric").disabled = true;
    constant = 1; // Constant for BMI calculation in metric units
}

function setCustomary() {
    document.getElementById("weight").setAttribute("placeholder", "pounds");
    document.getElementById("height").setAttribute("placeholder", "inches");
    document.getElementById("customary").disabled = true;
    document.getElementById("metric").disabled = false;
    constant = 703; // Constant for BMI calculation in customary units
}

setCustomary(); // Set customary units by default

document.getElementById("customary").addEventListener("click", function() {
    clearWeightAndHeight();
    setCustomary();
});

document.getElementById("metric").addEventListener("click", function() {
    clearWeightAndHeight();
    setMetric();
});

document.getElementById("calculate").addEventListener("click", function() {
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (!age || !gender || !weight || !height) {
        alert("Please fill in all fields.");
        return;
    }

    weight = parseFloat(weight);
    height = parseFloat(height);

    if (isNaN(age) || age < 2 || age > 120) {
        alert("Please enter a valid age between 2 and 120.");
        return;
    } else if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    var bmi;
    if (constant === 1) { // metric system
        var heightInMeters = height / 100; // convert cm to meters
        bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    } else { // customary system
        bmi = (weight / (height * height) * constant).toFixed(2);
    }

    if (age <= 20) {
        var link = (gender.value === "Male") ? "https://www.calculator.net/pdf/chart-2015.pdf" : "https://www.calculator.net/pdf/chart-2016.pdf";
        alert("Your BMI is " + bmi + ". Please refer to the CDC BMI-for-age growth charts for children and teens.");
        window.open(link, '_blank');
    } else {
        switch (true) {
            case (bmi < 18.5):
                alert("Your BMI is " + bmi + ". You are underweight.");
                break;
            case (bmi >= 18.5 && bmi < 24.9):
                alert("Your BMI is " + bmi + ". It is within healthy range.");
                break;
            case (bmi >= 25 && bmi < 29.9):
                alert("Your BMI is " + bmi + ". You are overweight.");
                break;
            default:
                alert("Your BMI is " + bmi + ". You are obese.");
        }
    }
});

document.getElementById("clear").addEventListener("click", function() {
    clear();
});